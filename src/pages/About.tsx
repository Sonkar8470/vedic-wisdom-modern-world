import { Book, Award, Users, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import vrajaImage from "@/assets/vraja-bihari-das.jpg";

const About = () => {
  const achievements = [
    {
      icon: Book,
      title: "15+ Books Published",
      description: "Authored numerous spiritual texts and guides"
    },
    {
      icon: Users,
      title: "25+ Years Teaching",
      description: "Decades of spiritual guidance and mentorship"
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Teaching students across 40+ countries"
    },
    {
      icon: Award,
      title: "Academic Excellence",
      description: "Masters in Monetary Policy & International Finance"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground">
            About <span className="bg-gradient-primary bg-clip-text text-transparent">YFMA</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Yoga for Modern Age is dedicated to bringing ancient Vedic wisdom into contemporary life, 
            making timeless spiritual teachings accessible to modern seekers worldwide.
          </p>
        </div>

        {/* Mission Statement */}
        <div className="bg-gradient-earth rounded-2xl p-8 mb-16 shadow-warm">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-3xl font-serif font-semibold text-foreground">
              Our Mission
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              To make the profound wisdom of Bhakti Yoga accessible to contemporary seekers, 
              helping individuals discover their true spiritual nature and find lasting peace, 
              purpose, and joy in their daily lives through authentic Vedic teachings.
            </p>
          </div>
        </div>

        {/* Vraja Bihari Das Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="order-2 lg:order-1 space-y-6">
            <div>
              <h2 className="text-3xl font-serif font-semibold text-foreground mb-4">
                Vraja Bihari Das
              </h2>
              <p className="text-lg text-primary font-medium mb-2">
                Spiritual Teacher, Author & Full-time Monk
              </p>
              <p className="text-sm text-muted-foreground">
                Also known by his legal name Venugopal Acharya
              </p>
            </div>
            
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Vraja Bihari Das is a highly respected spiritual teacher, author, and full-time monk 
                at the Shri Shri Radha Gopinath Mandir, ISKCON Chowpatty, where he has been serving 
                for the past two and a half decades.
              </p>
              
              <p>
                With a Masters degree in Monetary Policy and International Finance, as well as a 
                Majors degree in Economics, he uniquely bridges the worlds of spiritual wisdom and 
                practical life application.
              </p>
              
              <p>
                His teachings emphasize the practical application of ancient Vedic principles in 
                modern life, helping thousands of students worldwide find meaning, purpose, and 
                spiritual fulfillment in their daily activities.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="sacred" size="lg">
                <Book className="h-5 w-5" />
                View Books
              </Button>
              <Button variant="wisdom" size="lg">
                <Users className="h-5 w-5" />
                Join Community
              </Button>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-primary rounded-2xl blur-lg opacity-20"></div>
              <img
                src={vrajaImage}
                alt="Vraja Bihari Das"
                className="relative w-full rounded-2xl shadow-sacred"
              />
            </div>
          </div>
        </div>

        {/* Achievements Grid */}
        <div className="mb-16">
          <h2 className="text-3xl font-serif font-semibold text-center text-foreground mb-12">
            Teaching Excellence
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <Card key={index} className="border-border hover:shadow-warm transition-all duration-300 hover:scale-105">
                  <CardContent className="p-6 text-center space-y-4">
                    <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto shadow-sacred">
                      <Icon className="h-8 w-8 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">{achievement.title}</h3>
                      <p className="text-sm text-muted-foreground">{achievement.description}</p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* ISKCON Chowpatty */}
        <div className="bg-card rounded-2xl p-8 border border-border shadow-warm">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-3xl font-serif font-semibold text-foreground">
              ISKCON Chowpatty
            </h2>
            
            <Separator className="max-w-xs mx-auto" />
            
            <div className="space-y-4 text-muted-foreground">
              <p className="text-lg">
                Located at the prestigious Hare Krishna Land in Juhu, Mumbai, ISKCON Chowpatty 
                serves as a spiritual beacon for thousands of devotees and seekers.
              </p>
              
              <p>
                This sacred space has been the foundation for Vraja Bihari Das's spiritual service, 
                providing a nurturing environment for teaching, learning, and practicing the 
                timeless principles of Bhakti Yoga.
              </p>
              
              <div className="pt-4">
                <p className="font-medium text-foreground mb-2">Address:</p>
                <p>ISKCON Chowpatty, Hare Krishna Land</p>
                <p>Juhu, Mumbai - 400049, Maharashtra, India</p>
              </div>
            </div>
            
            <Button variant="outline" size="lg">
              Visit Our Temple
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;