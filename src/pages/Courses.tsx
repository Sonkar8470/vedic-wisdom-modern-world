import { useState } from "react";
import { 
  Clock, 
  Users, 
  Star, 
  BookOpen, 
  Video, 
  Award,
  Filter,
  Heart
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const Courses = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedLevel, setSelectedLevel] = useState("all");

  // Sample courses data
  const courses = [
    {
      id: 1,
      title: "Fundamentals of Bhakti Yoga",
      instructor: "Vraja Bihari Das",
      category: "bhakti-yoga",
      level: "beginner",
      price: 99,
      duration: "8 weeks",
      lessons: 24,
      students: 1250,
      rating: 4.9,
      reviews: 156,
      description: "A comprehensive introduction to the principles and practices of Bhakti Yoga, perfect for beginners seeking spiritual transformation.",
      highlights: ["Daily meditation practices", "Scripture study", "Community support", "Live Q&A sessions"],
      featured: true
    },
    {
      id: 2,
      title: "Advanced Meditation Techniques",
      instructor: "Vraja Bihari Das",
      category: "meditation",
      level: "advanced",
      price: 149,
      duration: "12 weeks",
      lessons: 36,
      students: 890,
      rating: 4.8,
      reviews: 98,
      description: "Deepen your meditation practice with advanced techniques from Vedic tradition and modern mindfulness approaches.",
      highlights: ["Advanced breathing techniques", "Chakra meditation", "Silent retreats", "Personal guidance"]
    },
    {
      id: 3,
      title: "Bhagavad Gita Deep Dive",
      instructor: "Vraja Bihari Das",
      category: "scripture",
      level: "intermediate",
      price: 129,
      duration: "16 weeks",
      lessons: 48,
      students: 2100,
      rating: 4.9,
      reviews: 234,
      description: "Explore the timeless wisdom of the Bhagavad Gita with verse-by-verse analysis and practical life applications.",
      highlights: ["18 chapters covered", "Sanskrit pronunciation", "Practical applications", "Study materials included"]
    },
    {
      id: 4,
      title: "Mindful Living Masterclass",
      instructor: "Vraja Bihari Das",
      category: "lifestyle",
      level: "beginner",
      price: 79,
      duration: "6 weeks",
      lessons: 18,
      students: 1560,
      rating: 4.7,
      reviews: 189,
      description: "Transform your daily routine into spiritual practice with mindfulness techniques rooted in Vedic wisdom.",
      highlights: ["Daily life integration", "Stress management", "Relationship harmony", "Work-life balance"]
    },
    {
      id: 5,
      title: "Sacred Sound and Mantra Meditation",
      instructor: "Vraja Bihari Das",
      category: "meditation",
      level: "intermediate",
      price: 109,
      duration: "10 weeks",
      lessons: 30,
      students: 745,
      rating: 4.8,
      reviews: 87,
      description: "Discover the transformative power of sacred sound through traditional mantras and kirtan practice.",
      highlights: ["Traditional mantras", "Kirtan practice", "Sound healing", "Voice training"]
    },
    {
      id: 6,
      title: "Spiritual Leadership Program",
      instructor: "Vraja Bihari Das",
      category: "leadership",
      level: "advanced",
      price: 299,
      duration: "20 weeks",
      lessons: 60,
      students: 320,
      rating: 4.9,
      reviews: 45,
      description: "Develop conscious leadership skills through spiritual principles for creating positive change in your community.",
      highlights: ["Leadership principles", "Community building", "Mentorship training", "Certificate program"]
    }
  ];

  const categories = [
    { value: "all", label: "All Categories" },
    { value: "bhakti-yoga", label: "Bhakti Yoga" },
    { value: "meditation", label: "Meditation" },
    { value: "scripture", label: "Scripture Study" },
    { value: "lifestyle", label: "Mindful Living" },
    { value: "leadership", label: "Spiritual Leadership" }
  ];

  const levels = [
    { value: "all", label: "All Levels" },
    { value: "beginner", label: "Beginner" },
    { value: "intermediate", label: "Intermediate" },
    { value: "advanced", label: "Advanced" }
  ];

  const filteredCourses = courses.filter(course => {
    const matchesCategory = selectedCategory === "all" || course.category === selectedCategory;
    const matchesLevel = selectedLevel === "all" || course.level === selectedLevel;
    return matchesCategory && matchesLevel;
  });

  const featuredCourse = courses.find(course => course.featured);

  const getLevelColor = (level: string) => {
    switch (level) {
      case "beginner": return "bg-green-100 text-green-800";
      case "intermediate": return "bg-blue-100 text-blue-800";
      case "advanced": return "bg-purple-100 text-purple-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center space-y-4 mb-12">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground">
            Spiritual <span className="bg-gradient-primary bg-clip-text text-transparent">Courses</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Transform your spiritual journey with comprehensive online courses guided by Vraja Bihari Das. 
            Learn at your own pace with practical wisdom and community support.
          </p>
        </div>

        {/* Filters */}
        <div className="mb-8 flex flex-col md:flex-row gap-4 justify-center max-w-2xl mx-auto">
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
          <Select value={selectedLevel} onValueChange={setSelectedLevel}>
            <SelectTrigger className="md:w-36">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {levels.map((level) => (
                <SelectItem key={level.value} value={level.value}>
                  {level.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Featured Course */}
        {featuredCourse && selectedCategory === "all" && selectedLevel === "all" && (
          <div className="mb-12">
            <h2 className="text-2xl font-serif font-semibold text-foreground mb-6">
              Featured Course
            </h2>
            <Card className="border-border shadow-warm hover:shadow-sacred transition-all duration-300">
              <CardContent className="p-8">
                <div className="grid lg:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div className="flex items-center gap-2">
                      <Badge variant="default" className="bg-primary text-primary-foreground">
                        Featured
                      </Badge>
                      <Badge variant="outline" className={getLevelColor(featuredCourse.level)}>
                        {featuredCourse.level}
                      </Badge>
                      <Badge variant="outline">
                        {categories.find(cat => cat.value === featuredCourse.category)?.label}
                      </Badge>
                    </div>
                    
                    <div>
                      <h3 className="text-3xl font-serif font-bold text-foreground mb-4">
                        {featuredCourse.title}
                      </h3>
                      <p className="text-lg text-muted-foreground leading-relaxed">
                        {featuredCourse.description}
                      </p>
                    </div>
                    
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                      <div className="text-center p-3 bg-muted rounded-lg">
                        <Clock className="h-5 w-5 mx-auto mb-2 text-primary" />
                        <p className="font-medium text-foreground">{featuredCourse.duration}</p>
                        <p className="text-muted-foreground">Duration</p>
                      </div>
                      <div className="text-center p-3 bg-muted rounded-lg">
                        <BookOpen className="h-5 w-5 mx-auto mb-2 text-primary" />
                        <p className="font-medium text-foreground">{featuredCourse.lessons}</p>
                        <p className="text-muted-foreground">Lessons</p>
                      </div>
                      <div className="text-center p-3 bg-muted rounded-lg">
                        <Users className="h-5 w-5 mx-auto mb-2 text-primary" />
                        <p className="font-medium text-foreground">{featuredCourse.students.toLocaleString()}</p>
                        <p className="text-muted-foreground">Students</p>
                      </div>
                      <div className="text-center p-3 bg-muted rounded-lg">
                        <Star className="h-5 w-5 mx-auto mb-2 text-primary" />
                        <p className="font-medium text-foreground">{featuredCourse.rating}</p>
                        <p className="text-muted-foreground">Rating</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-6">
                      <div className="text-center">
                        <span className="text-3xl font-bold text-primary">${featuredCourse.price}</span>
                        <p className="text-sm text-muted-foreground">Course fee</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-foreground mb-4">What You'll Learn:</h4>
                      <ul className="space-y-2">
                        {featuredCourse.highlights.map((highlight, index) => (
                          <li key={index} className="flex items-start gap-3 text-sm text-muted-foreground">
                            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="flex flex-col gap-4">
                      <Button variant="sacred" size="xl" className="group">
                        <BookOpen className="h-5 w-5" />
                        Learn More - ${featuredCourse.price}
                      </Button>
                      <Button variant="outline" size="lg">
                        <Heart className="h-5 w-5" />
                        Add to Wishlist
                      </Button>
                    </div>
                    
                    <div className="text-center text-sm text-muted-foreground">
                      <p>Comprehensive course materials included</p>
                      <p>Lifetime access to content</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Courses Grid */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-serif font-semibold text-foreground">
              {selectedCategory !== "all" || selectedLevel !== "all" ? "Filtered Courses" : "All Courses"}
            </h2>
            <p className="text-sm text-muted-foreground">
              {filteredCourses.length} course{filteredCourses.length !== 1 ? 's' : ''} found
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCourses.filter(course => !course.featured).map((course) => (
              <Card key={course.id} className="group hover:shadow-warm transition-all duration-300 hover:scale-[1.02] border-border">
                <CardHeader className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Badge variant="outline" className={getLevelColor(course.level)}>
                      {course.level}
                    </Badge>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-primary text-primary" />
                      <span className="text-sm font-medium">{course.rating}</span>
                      <span className="text-sm text-muted-foreground">({course.reviews})</span>
                    </div>
                  </div>
                  
                  <CardTitle className="text-xl font-serif group-hover:text-primary transition-colors">
                    {course.title}
                  </CardTitle>
                  
                  <p className="text-sm text-muted-foreground">
                    by {course.instructor}
                  </p>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {course.description}
                  </p>

                  <div className="grid grid-cols-3 gap-4 text-xs text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Video className="h-3 w-3" />
                      <span>{course.lessons} lessons</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="h-3 w-3" />
                      <span>{course.students.toLocaleString()}</span>
                    </div>
                  </div>

                  <Separator />

                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-xl font-bold text-primary">${course.price}</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Button variant="sacred" className="w-full group">
                      <BookOpen className="h-4 w-4" />
                      Learn More
                    </Button>
                    <Button variant="outline" size="sm" className="w-full">
                      View Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* No Results */}
        {filteredCourses.length === 0 && (
          <div className="text-center py-12">
            <div className="space-y-4">
              <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto">
                <BookOpen className="h-8 w-8 text-muted-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">No courses found</h3>
              <p className="text-muted-foreground">
                Try adjusting your filters.
              </p>
              <Button 
                variant="outline" 
                onClick={() => {
                  setSelectedCategory("all");
                  setSelectedLevel("all");
                }}
              >
                Clear Filters
              </Button>
            </div>
          </div>
        )}

        {/* Why Choose Our Courses */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="text-center p-6 border-border">
            <Award className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="font-semibold text-foreground mb-2">Expert Instruction</h3>
            <p className="text-sm text-muted-foreground">Learn from Vraja Bihari Das with 25+ years of teaching experience</p>
          </Card>
          <Card className="text-center p-6 border-border">
            <Users className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="font-semibold text-foreground mb-2">Community Support</h3>
            <p className="text-sm text-muted-foreground">Join a global community of spiritual seekers and practitioners</p>
          </Card>
          <Card className="text-center p-6 border-border">
            <Clock className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="font-semibold text-foreground mb-2">Lifetime Access</h3>
            <p className="text-sm text-muted-foreground">Learn at your own pace with permanent access to all materials</p>
          </Card>
        </div>

        {/* Learning Experience Section */}
        <div className="bg-gradient-earth rounded-2xl p-8">
          <div className="text-center space-y-6 max-w-2xl mx-auto">
            <h2 className="text-3xl font-serif font-semibold text-foreground">
              Transform Your Life Through Learning
            </h2>
            <p className="text-muted-foreground">
              Join thousands of students worldwide who have transformed their lives through these 
              comprehensive spiritual courses. Start your journey today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="sacred" size="lg">
                <BookOpen className="h-5 w-5" />
                Browse All Courses
              </Button>
              <Button variant="outline" size="lg">
                Learn About Our Teaching
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;