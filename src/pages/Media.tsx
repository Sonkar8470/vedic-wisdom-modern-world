import { useState } from "react";
import { Play, Download, Heart, Search, Filter, Clock, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Media = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [activeTab, setActiveTab] = useState("all");

  // Sample media data
  const mediaContent = [
    {
      id: 1,
      title: "The Art of Spiritual Surrender",
      type: "video",
      category: "lectures",
      description: "A comprehensive lecture on letting go and surrendering to divine will in daily spiritual practice.",
      duration: 45,
      publishDate: "2024-01-10",
      thumbnail: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=225&fit=crop",
      url: "#",
      views: 12500,
      featured: true
    },
    {
      id: 2,
      title: "Morning Meditation: Finding Inner Peace",
      type: "audio",
      category: "meditation",
      description: "A guided 20-minute meditation session to start your day with spiritual awareness and tranquility.",
      duration: 20,
      publishDate: "2024-01-08",
      thumbnail: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=225&fit=crop",
      url: "#",
      downloads: 8900
    },
    {
      id: 3,
      title: "Bhagavad Gita Chapter 2: The Eternal Soul",
      type: "video",
      category: "scripture",
      description: "Deep dive into the second chapter of the Bhagavad Gita exploring the nature of the eternal soul.",
      duration: 60,
      publishDate: "2024-01-05",
      thumbnail: "https://images.unsplash.com/photo-1544967882-f3927602b5f5?w=400&h=225&fit=crop",
      url: "#",
      views: 18200
    },
    {
      id: 4,
      title: "Kirtan: Sacred Sound Meditation",
      type: "audio",
      category: "kirtan",
      description: "Experience the transformative power of sacred sound through traditional kirtan chanting.",
      duration: 35,
      publishDate: "2024-01-03",
      thumbnail: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=225&fit=crop",
      url: "#",
      downloads: 15600
    },
    {
      id: 5,
      title: "Practical Spirituality in Modern Life",
      type: "video",
      category: "practical",
      description: "How to integrate spiritual principles into your career, relationships, and daily decisions.",
      duration: 38,
      publishDate: "2023-12-28",
      thumbnail: "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?w=400&h=225&fit=crop",
      url: "#",
      views: 9800
    },
    {
      id: 6,
      title: "Evening Prayers and Reflection",
      type: "audio",
      category: "prayers",
      description: "End your day with gratitude through traditional evening prayers and spiritual reflection.",
      duration: 15,
      publishDate: "2023-12-25",
      thumbnail: "https://images.unsplash.com/photo-1447958272669-9c562446851",
      url: "#",
      downloads: 7200
    }
  ];

  const categories = [
    { value: "all", label: "All Categories" },
    { value: "lectures", label: "Lectures" },
    { value: "meditation", label: "Meditation" },
    { value: "scripture", label: "Scripture Study" },
    { value: "kirtan", label: "Kirtan" },
    { value: "practical", label: "Practical Wisdom" },
    { value: "prayers", label: "Prayers" }
  ];

  const filterContent = (content: typeof mediaContent) => {
    return content.filter(item => {
      const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           item.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === "all" || item.category === selectedCategory;
      const matchesTab = activeTab === "all" || item.type === activeTab;
      return matchesSearch && matchesCategory && matchesTab;
    });
  };

  const filteredContent = filterContent(mediaContent);
  const featuredContent = mediaContent.find(item => item.featured);

  const formatDuration = (minutes: number) => {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return hours > 0 ? `${hours}h ${mins}m` : `${mins}m`;
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const formatNumber = (num: number) => {
    return num >= 1000 ? `${(num / 1000).toFixed(1)}k` : num.toString();
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center space-y-4 mb-12">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground">
            Spiritual <span className="bg-gradient-primary bg-clip-text text-transparent">Media</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Access our collection of spiritual teachings through video lectures, guided meditations, 
            kirtan sessions, and audio content designed to support your spiritual journey.
          </p>
        </div>

        {/* Media Type Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-8">
          <TabsList className="grid w-full grid-cols-3 max-w-md mx-auto">
            <TabsTrigger value="all">All Media</TabsTrigger>
            <TabsTrigger value="video">Videos</TabsTrigger>
            <TabsTrigger value="audio">Audio</TabsTrigger>
          </TabsList>
        </Tabs>

        {/* Search and Filter */}
        <div className="mb-8 flex flex-col md:flex-row gap-4 max-w-2xl mx-auto">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search media content..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger className="md:w-48">
              <Filter className="h-4 w-4 mr-2" />
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {categories.map((category) => (
                <SelectItem key={category.value} value={category.value}>
                  {category.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Featured Content */}
        {featuredContent && searchTerm === "" && selectedCategory === "all" && activeTab === "all" && (
          <div className="mb-12">
            <h2 className="text-2xl font-serif font-semibold text-foreground mb-6">
              Featured Content
            </h2>
            <Card className="border-border shadow-warm hover:shadow-sacred transition-all duration-300">
              <CardContent className="p-0">
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="relative group">
                    <img
                      src={featuredContent.thumbnail}
                      alt={featuredContent.title}
                      className="w-full h-64 lg:h-full object-cover rounded-l-lg"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors rounded-l-lg" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Button size="lg" variant="sacred" className="group">
                        <Play className="h-6 w-6" />
                        Play Now
                      </Button>
                    </div>
                    <div className="absolute top-4 left-4 flex gap-2">
                      <Badge variant="default" className="bg-primary text-primary-foreground">
                        Featured
                      </Badge>
                      <Badge variant="outline" className="bg-background/80">
                        {featuredContent.type === "video" ? "Video" : "Audio"}
                      </Badge>
                    </div>
                    <div className="absolute bottom-4 right-4">
                      <Badge variant="outline" className="bg-background/80">
                        {formatDuration(featuredContent.duration)}
                      </Badge>
                    </div>
                  </div>
                  
                  <div className="p-8 space-y-6">
                    <div>
                      <h3 className="text-2xl font-serif font-bold text-foreground mb-4 leading-tight">
                        {featuredContent.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {featuredContent.description}
                      </p>
                    </div>
                    
                    <div className="flex items-center gap-6 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        <span>{formatDate(featuredContent.publishDate)}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4" />
                        <span>{formatDuration(featuredContent.duration)}</span>
                      </div>
                      {featuredContent.views && (
                        <div className="flex items-center gap-2">
                          <Play className="h-4 w-4" />
                          <span>{formatNumber(featuredContent.views)} views</span>
                        </div>
                      )}
                    </div>
                    
                    <div className="flex gap-4">
                      <Button variant="sacred" size="lg" className="group">
                        <Play className="h-5 w-5" />
                        Watch Now
                      </Button>
                      <Button variant="outline" size="lg">
                        <Heart className="h-5 w-5" />
                        Save
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Media Grid */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-serif font-semibold text-foreground">
              {searchTerm || selectedCategory !== "all" || activeTab !== "all" ? "Search Results" : "All Content"}
            </h2>
            <p className="text-sm text-muted-foreground">
              {filteredContent.length} item{filteredContent.length !== 1 ? 's' : ''} found
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredContent.filter(item => !item.featured).map((item) => (
              <Card key={item.id} className="group hover:shadow-warm transition-all duration-300 hover:scale-[1.02] border-border overflow-hidden">
                <div className="relative">
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Button variant="sacred" className="group">
                      <Play className="h-5 w-5" />
                      Play
                    </Button>
                  </div>
                  <div className="absolute top-4 left-4">
                    <Badge variant="outline" className="bg-background/80">
                      {item.type === "video" ? "Video" : "Audio"}
                    </Badge>
                  </div>
                  <div className="absolute bottom-4 right-4">
                    <Badge variant="outline" className="bg-background/80">
                      {formatDuration(item.duration)}
                    </Badge>
                  </div>
                </div>

                <CardHeader className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Badge variant="outline" className="text-xs">
                      {categories.find(cat => cat.value === item.category)?.label}
                    </Badge>
                    <span className="text-xs text-muted-foreground">
                      {formatDate(item.publishDate)}
                    </span>
                  </div>
                  
                  <h3 className="text-lg font-serif font-semibold text-foreground group-hover:text-primary transition-colors leading-tight">
                    {item.title}
                  </h3>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>

                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        <span>{formatDuration(item.duration)}</span>
                      </div>
                      {item.views && (
                        <div className="flex items-center gap-1">
                          <Play className="h-3 w-3" />
                          <span>{formatNumber(item.views)}</span>
                        </div>
                      )}
                      {item.downloads && (
                        <div className="flex items-center gap-1">
                          <Download className="h-3 w-3" />
                          <span>{formatNumber(item.downloads)}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="flex-1">
                      <Play className="h-4 w-4" />
                      Play
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Heart className="h-4 w-4" />
                    </Button>
                    {item.type === "audio" && (
                      <Button variant="ghost" size="sm">
                        <Download className="h-4 w-4" />
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* No Results */}
        {filteredContent.length === 0 && (
          <div className="text-center py-12">
            <div className="space-y-4">
              <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto">
                <Play className="h-8 w-8 text-muted-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">No media found</h3>
              <p className="text-muted-foreground">
                Try adjusting your search terms or filters.
              </p>
              <Button 
                variant="outline" 
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("all");
                  setActiveTab("all");
                }}
              >
                Clear Filters
              </Button>
            </div>
          </div>
        )}

        {/* Call to Action */}
        <div className="bg-gradient-earth rounded-2xl p-8">
          <div className="text-center space-y-6 max-w-2xl mx-auto">
            <h2 className="text-3xl font-serif font-semibold text-foreground">
              Support Our Mission
            </h2>
            <p className="text-muted-foreground">
              Help us continue creating and sharing spiritual content that transforms lives. 
              Your support enables us to reach more seekers worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="donate" size="lg">
                <Heart className="h-5 w-5" />
                Make a Donation
              </Button>
              <Button variant="outline" size="lg">
                Become a Member
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Media;