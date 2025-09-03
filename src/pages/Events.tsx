import { useState } from "react";
import { 
  Calendar, 
  Clock, 
  MapPin, 
  Users, 
  ExternalLink, 
  Filter,
  Video,
  User,
  Heart
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const Events = () => {
  const [selectedType, setSelectedType] = useState("all");
  const [selectedMonth, setSelectedMonth] = useState("all");

  // Sample events data
  const events = [
    {
      id: 1,
      title: "Monthly Bhagavad Gita Study Circle",
      type: "study-circle",
      format: "in-person",
      date: "2024-02-15",
      time: "19:00",
      duration: 120,
      location: "ISKCON Chowpatty, Mumbai",
      description: "Join our monthly deep dive into the Bhagavad Gita with verse-by-verse analysis and practical applications for modern life.",
      instructor: "Vraja Bihari Das",
      capacity: 50,
      registered: 38,
      price: 0,
      featured: true,
      registrationUrl: "#"
    },
    {
      id: 2,
      title: "Inner Peace Meditation Workshop",
      type: "workshop",
      format: "online",
      date: "2024-02-20",
      time: "10:00",
      duration: 180,
      location: "Online via Zoom",
      description: "Learn practical meditation techniques to find inner peace amidst life's challenges. Includes guided sessions and Q&A.",
      instructor: "Vraja Bihari Das",
      capacity: 100,
      registered: 67,
      price: 25,
      registrationUrl: "#"
    },
    {
      id: 3,
      title: "Spiritual Leadership Retreat",
      type: "retreat",
      format: "in-person",
      date: "2024-03-05",
      time: "09:00",
      duration: 480,
      location: "Spiritual Retreat Center, Nashik",
      description: "A transformative day-long retreat focusing on developing spiritual leadership qualities and community building skills.",
      instructor: "Vraja Bihari Das",
      capacity: 30,
      registered: 22,
      price: 150,
      registrationUrl: "#"
    },
    {
      id: 4,
      title: "Kirtan and Sacred Sound Evening",
      type: "kirtan",
      format: "in-person",
      date: "2024-02-28",
      time: "18:30",
      duration: 90,
      location: "ISKCON Chowpatty, Mumbai",
      description: "Experience the transformative power of sacred sound through traditional kirtan and mantra meditation.",
      instructor: "Vraja Bihari Das & Community",
      capacity: 80,
      registered: 56,
      price: 0,
      registrationUrl: "#"
    },
    {
      id: 5,
      title: "Practical Spirituality for Professionals",
      type: "webinar",
      format: "online",
      date: "2024-03-12",
      time: "20:00",
      duration: 90,
      location: "Online Webinar",
      description: "Learn how to integrate spiritual principles into your professional life for greater fulfillment and success.",
      instructor: "Vraja Bihari Das",
      capacity: 200,
      registered: 145,
      price: 15,
      registrationUrl: "#"
    },
    {
      id: 6,
      title: "Youth Spiritual Guidance Session",
      type: "guidance",
      format: "hybrid",
      date: "2024-03-18",
      time: "16:00",
      duration: 120,
      location: "ISKCON Chowpatty & Online",
      description: "Special session for young adults seeking spiritual guidance for life decisions and personal growth.",
      instructor: "Vraja Bihari Das",
      capacity: 40,
      registered: 28,
      price: 0,
      registrationUrl: "#"
    }
  ];

  const eventTypes = [
    { value: "all", label: "All Events" },
    { value: "study-circle", label: "Study Circles" },
    { value: "workshop", label: "Workshops" },
    { value: "retreat", label: "Retreats" },
    { value: "kirtan", label: "Kirtan" },
    { value: "webinar", label: "Webinars" },
    { value: "guidance", label: "Guidance Sessions" }
  ];

  const months = [
    { value: "all", label: "All Months" },
    { value: "2024-02", label: "February 2024" },
    { value: "2024-03", label: "March 2024" },
    { value: "2024-04", label: "April 2024" }
  ];

  const filteredEvents = events.filter(event => {
    const matchesType = selectedType === "all" || event.type === selectedType;
    const matchesMonth = selectedMonth === "all" || event.date.startsWith(selectedMonth);
    return matchesType && matchesMonth;
  });

  const featuredEvent = events.find(event => event.featured);
  const upcomingEvents = filteredEvents.filter(event => !event.featured);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const formatTime = (timeString: string) => {
    return new Date(`2024-01-01T${timeString}`).toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    });
  };

  const formatDuration = (minutes: number) => {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    if (hours === 0) return `${mins} mins`;
    if (mins === 0) return `${hours}h`;
    return `${hours}h ${mins}m`;
  };

  const getEventTypeColor = (type: string) => {
    const colors = {
      "study-circle": "bg-blue-100 text-blue-800",
      "workshop": "bg-green-100 text-green-800",
      "retreat": "bg-purple-100 text-purple-800",
      "kirtan": "bg-orange-100 text-orange-800",
      "webinar": "bg-indigo-100 text-indigo-800",
      "guidance": "bg-pink-100 text-pink-800"
    };
    return colors[type as keyof typeof colors] || "bg-gray-100 text-gray-800";
  };

  const getFormatIcon = (format: string) => {
    switch (format) {
      case "online": return <Video className="h-4 w-4" />;
      case "in-person": return <MapPin className="h-4 w-4" />;
      case "hybrid": return <Users className="h-4 w-4" />;
      default: return <Calendar className="h-4 w-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center space-y-4 mb-12">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground">
            Spiritual <span className="bg-gradient-primary bg-clip-text text-transparent">Events</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Join our community for transformative spiritual events, workshops, study circles, 
            and retreats designed to deepen your practice and connection with divine wisdom.
          </p>
        </div>

        {/* Filters */}
        <div className="mb-8 flex flex-col md:flex-row gap-4 justify-center max-w-2xl mx-auto">
          <Select value={selectedType} onValueChange={setSelectedType}>
            <SelectTrigger className="md:w-48">
              <Filter className="h-4 w-4 mr-2" />
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {eventTypes.map((type) => (
                <SelectItem key={type.value} value={type.value}>
                  {type.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select value={selectedMonth} onValueChange={setSelectedMonth}>
            <SelectTrigger className="md:w-40">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {months.map((month) => (
                <SelectItem key={month.value} value={month.value}>
                  {month.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Featured Event */}
        {featuredEvent && selectedType === "all" && selectedMonth === "all" && (
          <div className="mb-12">
            <h2 className="text-2xl font-serif font-semibold text-foreground mb-6">
              Featured Event
            </h2>
            <Card className="border-border shadow-warm hover:shadow-sacred transition-all duration-300">
              <CardContent className="p-8">
                <div className="grid lg:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div className="flex items-center gap-2 flex-wrap">
                      <Badge variant="default" className="bg-primary text-primary-foreground">
                        Featured
                      </Badge>
                      <Badge variant="outline" className={getEventTypeColor(featuredEvent.type)}>
                        {eventTypes.find(t => t.value === featuredEvent.type)?.label}
                      </Badge>
                      <Badge variant="outline" className="flex items-center gap-1">
                        {getFormatIcon(featuredEvent.format)}
                        {featuredEvent.format}
                      </Badge>
                    </div>
                    
                    <div>
                      <h3 className="text-3xl font-serif font-bold text-foreground mb-4">
                        {featuredEvent.title}
                      </h3>
                      <p className="text-lg text-muted-foreground leading-relaxed">
                        {featuredEvent.description}
                      </p>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex items-center gap-3 text-foreground">
                        <Calendar className="h-5 w-5 text-primary" />
                        <span className="font-medium">{formatDate(featuredEvent.date)}</span>
                      </div>
                      <div className="flex items-center gap-3 text-foreground">
                        <Clock className="h-5 w-5 text-primary" />
                        <span>{formatTime(featuredEvent.time)} ({formatDuration(featuredEvent.duration)})</span>
                      </div>
                      <div className="flex items-center gap-3 text-foreground">
                        <MapPin className="h-5 w-5 text-primary" />
                        <span>{featuredEvent.location}</span>
                      </div>
                      <div className="flex items-center gap-3 text-foreground">
                        <User className="h-5 w-5 text-primary" />
                        <span>Led by {featuredEvent.instructor}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="bg-muted rounded-lg p-6 space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">Registration</span>
                        <span className="text-sm font-medium text-foreground">
                          {featuredEvent.registered}/{featuredEvent.capacity} attendees
                        </span>
                      </div>
                      <div className="bg-background rounded-full h-2">
                        <div 
                          className="bg-primary h-2 rounded-full transition-all duration-300"
                          style={{ width: `${(featuredEvent.registered / featuredEvent.capacity) * 100}%` }}
                        />
                      </div>
                      <div className="text-center">
                        {featuredEvent.price === 0 ? (
                          <span className="text-2xl font-bold text-green-600">Free Event</span>
                        ) : (
                          <div className="flex items-center justify-center gap-2">
                            <span className="text-2xl font-bold text-primary">${featuredEvent.price}</span>
                            <span className="text-sm text-muted-foreground">per person</span>
                          </div>
                        )}
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <Button variant="sacred" size="xl" className="w-full">
                        <Calendar className="h-5 w-5" />
                        Register Now
                      </Button>
                      <Button variant="outline" size="lg" className="w-full">
                        <Heart className="h-5 w-5" />
                        Add to Calendar
                      </Button>
                    </div>
                    
                    <div className="text-center text-sm text-muted-foreground">
                      <p>Registration closes 24 hours before the event</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Upcoming Events */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-serif font-semibold text-foreground">
              {selectedType !== "all" || selectedMonth !== "all" ? "Filtered Events" : "Upcoming Events"}
            </h2>
            <p className="text-sm text-muted-foreground">
              {filteredEvents.length} event{filteredEvents.length !== 1 ? 's' : ''} found
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {upcomingEvents.map((event) => (
              <Card key={event.id} className="group hover:shadow-warm transition-all duration-300 hover:scale-[1.02] border-border">
                <CardHeader className="space-y-4">
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <Badge variant="outline" className={getEventTypeColor(event.type)}>
                      {eventTypes.find(t => t.value === event.type)?.label}
                    </Badge>
                    <div className="flex items-center gap-2">
                      <Badge variant="outline" className="flex items-center gap-1 text-xs">
                        {getFormatIcon(event.format)}
                        {event.format}
                      </Badge>
                      {event.price === 0 && (
                        <Badge variant="secondary" className="bg-green-100 text-green-800 text-xs">
                          Free
                        </Badge>
                      )}
                    </div>
                  </div>
                  
                  <CardTitle className="text-xl font-serif group-hover:text-primary transition-colors">
                    {event.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {event.description}
                  </p>

                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2 text-foreground">
                      <Calendar className="h-4 w-4 text-primary" />
                      <span>{formatDate(event.date)}</span>
                    </div>
                    <div className="flex items-center gap-2 text-foreground">
                      <Clock className="h-4 w-4 text-primary" />
                      <span>{formatTime(event.time)} ({formatDuration(event.duration)})</span>
                    </div>
                    <div className="flex items-center gap-2 text-foreground">
                      <MapPin className="h-4 w-4 text-primary" />
                      <span>{event.location}</span>
                    </div>
                  </div>

                  <Separator />

                  <div className="flex items-center justify-between">
                    <div className="text-sm">
                      <p className="text-muted-foreground">
                        {event.registered}/{event.capacity} registered
                      </p>
                      {event.price > 0 && (
                        <p className="font-semibold text-primary">${event.price}</p>
                      )}
                    </div>
                    <Button variant="sacred" size="sm">
                      <Calendar className="h-4 w-4" />
                      Register
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* No Results */}
        {filteredEvents.length === 0 && (
          <div className="text-center py-12">
            <div className="space-y-4">
              <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto">
                <Calendar className="h-8 w-8 text-muted-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">No events found</h3>
              <p className="text-muted-foreground">
                Try adjusting your filters.
              </p>
              <Button 
                variant="outline" 
                onClick={() => {
                  setSelectedType("all");
                  setSelectedMonth("all");
                }}
              >
                Clear Filters
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Events;