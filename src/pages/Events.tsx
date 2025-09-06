import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Clock, Users } from "lucide-react";
import { format } from "date-fns";

interface Event {
  id: string;
  title: string;
  description: string;
  location: string;
  start_time: string;
  end_time: string;
  banner_url: string;
  price: number;
  max_attendees: number;
  is_featured: boolean;
}

const Events = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const { data, error } = await supabase
        .from('events')
        .select('*')
        .gte('start_time', new Date().toISOString())
        .order('is_featured', { ascending: false })
        .order('start_time', { ascending: true });

      if (error) throw error;
      setEvents(data || []);
    } catch (error) {
      console.error('Error fetching events:', error);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString: string) => {
    return format(new Date(dateString), 'MMM dd, yyyy');
  };

  const formatTime = (dateString: string) => {
    return format(new Date(dateString), 'h:mm a');
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-hero py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
            <p className="mt-4 text-muted-foreground">Loading events...</p>
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
              Upcoming Events
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Join us for transformative workshops, retreats, and spiritual gatherings that deepen 
              your connection to ancient wisdom and modern practice.
            </p>
          </div>

          {events.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-lg text-muted-foreground">
                No upcoming events at the moment. Please check back soon for new workshops and retreats.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {events.map((event) => (
                <Card key={event.id} className="bg-card/80 backdrop-blur-sm border-border/50 hover:shadow-orange transition-all duration-300">
                  <CardHeader className="p-0">
                    {event.banner_url && (
                      <div className="aspect-video overflow-hidden rounded-t-lg relative">
                        <img
                          src={event.banner_url}
                          alt={`${event.title} banner`}
                          className="w-full h-full object-cover"
                        />
                        {event.is_featured && (
                          <Badge className="absolute top-4 left-4 bg-gradient-orange text-white">
                            Featured Event
                          </Badge>
                        )}
                      </div>
                    )}
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div>
                        <CardTitle className="text-xl font-serif text-foreground mb-2">
                          {event.title}
                        </CardTitle>
                        <CardDescription className="text-muted-foreground">
                          {event.description}
                        </CardDescription>
                      </div>
                      
                      <div className="space-y-3">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Calendar className="w-4 h-4 text-primary" />
                          <span>{formatDate(event.start_time)}</span>
                        </div>
                        
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Clock className="w-4 h-4 text-primary" />
                          <span>{formatTime(event.start_time)} - {formatTime(event.end_time)}</span>
                        </div>
                        
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <MapPin className="w-4 h-4 text-primary" />
                          <span>{event.location}</span>
                        </div>
                        
                        {event.max_attendees && (
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Users className="w-4 h-4 text-primary" />
                            <span>Max {event.max_attendees} attendees</span>
                          </div>
                        )}
                      </div>
                      
                      <div className="flex items-center justify-between pt-4 border-t border-border/50">
                        <span className="text-lg font-semibold text-primary">
                          {event.price > 0 ? `$${event.price}` : 'Free'}
                        </span>
                        <Button className="bg-gradient-orange hover:shadow-orange">
                          Register Now
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

export default Events;