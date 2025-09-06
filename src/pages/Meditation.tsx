import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, User, Play } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface MeditationSession {
  id: string;
  title: string;
  description: string;
  duration: number;
  price: number;
  instructor: string;
  thumbnail_url: string;
  audio_url: string;
  video_url: string;
  is_featured: boolean;
}

const Meditation = () => {
  const [sessions, setSessions] = useState<MeditationSession[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    fetchSessions();
  }, []);

  const fetchSessions = async () => {
    try {
      const { data, error } = await supabase
        .from('meditation_sessions')
        .select('*')
        .order('is_featured', { ascending: false })
        .order('created_at', { ascending: false });

      if (error) throw error;
      setSessions(data || []);
    } catch (error) {
      console.error('Error fetching meditation sessions:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleEnroll = async (sessionId: string) => {
    const { data: { user } } = await supabase.auth.getUser();
    
    if (!user) {
      toast({
        title: "Authentication Required",
        description: "Please log in to enroll in meditation sessions.",
        variant: "destructive",
      });
      return;
    }

    try {
      const { error } = await supabase
        .from('meditation_enrollments')
        .insert({
          user_id: user.id,
          meditation_session_id: sessionId,
        });

      if (error) throw error;

      toast({
        title: "Enrollment Successful",
        description: "You have been enrolled in the meditation session.",
      });
    } catch (error: any) {
      if (error.code === '23505') {
        toast({
          title: "Already Enrolled",
          description: "You are already enrolled in this session.",
          variant: "destructive",
        });
      } else {
        toast({
          title: "Enrollment Failed",
          description: "There was an error enrolling you in the session.",
          variant: "destructive",
        });
      }
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-hero py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
            <p className="mt-4 text-muted-foreground">Loading meditation sessions...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-hero">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
              Guided Meditation Sessions
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Embark on a transformative journey through our carefully crafted meditation sessions, 
              designed to bring peace, clarity, and spiritual awakening to your daily life.
            </p>
          </div>

          {sessions.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-lg text-muted-foreground">
                No meditation sessions available at the moment. Please check back soon.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sessions.map((session) => (
                <Card key={session.id} className="bg-card/80 backdrop-blur-sm border-border/50 hover:shadow-orange transition-all duration-300 hover:scale-105">
                  <CardHeader className="p-0">
                    {session.thumbnail_url && (
                      <div className="aspect-video overflow-hidden rounded-t-lg relative">
                        <img
                          src={session.thumbnail_url}
                          alt={`${session.title} thumbnail`}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                          <Play className="w-12 h-12 text-white opacity-80" />
                        </div>
                      </div>
                    )}
                    {session.is_featured && (
                      <Badge className="absolute top-4 left-4 bg-gradient-orange text-white">
                        Featured
                      </Badge>
                    )}
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div>
                        <CardTitle className="text-xl font-serif text-foreground mb-2">
                          {session.title}
                        </CardTitle>
                        <CardDescription className="text-muted-foreground mb-4">
                          {session.description}
                        </CardDescription>
                      </div>
                      
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          <span>{session.duration} min</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <User className="w-4 h-4" />
                          <span>{session.instructor}</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between pt-4 border-t border-border/50">
                        <span className="text-lg font-semibold text-primary">
                          {session.price > 0 ? `$${session.price}` : 'Free'}
                        </span>
                        <Button 
                          onClick={() => handleEnroll(session.id)}
                          className="bg-gradient-orange hover:shadow-orange"
                        >
                          Enroll Now
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Meditation;