import { useState } from "react";
import { Search, Filter, Calendar, Clock, User, ArrowRight, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const Articles = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Sample articles data
  const articles = [
    {
      id: 1,
      title: "Finding Inner Peace in Turbulent Times",
      excerpt: "Discover practical techniques from ancient Vedic wisdom to maintain equilibrium and spiritual balance amidst life's challenges and uncertainties.",
      category: "spiritual-practice",
      author: "Vraja Bihari Das",
      publishDate: "2024-01-15",
      readTime: "8 min read",
      tags: ["inner peace", "meditation", "spiritual balance"],
      featured: true
    },
    {
      id: 2,
      title: "The Power of Gratitude in Bhakti Yoga",
      excerpt: "Learn how cultivating genuine gratitude can transform your spiritual practice and deepen your connection with the divine through practical exercises.",
      category: "bhakti-yoga",
      author: "Vraja Bihari Das",
      publishDate: "2024-01-08",
      readTime: "6 min read",
      tags: ["gratitude", "bhakti", "devotion"]
    },
    {
      id: 3,
      title: "Mindful Living: Integrating Spirituality into Daily Routine",
      excerpt: "Practical strategies for bringing spiritual awareness into everyday activities, from morning prayers to evening reflection.",
      category: "daily-practice",
      author: "Vraja Bihari Das",
      publishDate: "2024-01-01",
      readTime: "10 min read",
      tags: ["mindfulness", "daily practice", "spirituality"]
    },
    {
      id: 4,
      title: "Understanding the Bhagavad Gita's Relevance Today",
      excerpt: "Explore how the timeless teachings of the Bhagavad Gita provide guidance for modern life challenges and decision-making.",
      category: "vedic-wisdom",
      author: "Vraja Bihari Das",
      publishDate: "2023-12-25",
      readTime: "12 min read",
      tags: ["bhagavad gita", "ancient wisdom", "guidance"]
    },
    {
      id: 5,
      title: "Building Spiritual Community in the Digital Age",
      excerpt: "How to create meaningful spiritual connections and maintain devotional practices through online communities and digital tools.",
      category: "community",
      author: "Vraja Bihari Das",
      publishDate: "2023-12-18",
      readTime: "7 min read",
      tags: ["community", "digital age", "connection"]
    },
    {
      id: 6,
      title: "The Science of Chanting: Ancient Practice, Modern Benefits",
      excerpt: "Discover the neurological and psychological benefits of mantra meditation and chanting practices backed by contemporary research.",
      category: "meditation",
      author: "Vraja Bihari Das",
      publishDate: "2023-12-11",
      readTime: "9 min read",
      tags: ["chanting", "mantra", "meditation", "science"]
    }
  ];

  const categories = [
    { value: "all", label: "All Categories" },
    { value: "spiritual-practice", label: "Spiritual Practice" },
    { value: "bhakti-yoga", label: "Bhakti Yoga" },
    { value: "daily-practice", label: "Daily Practice" },
    { value: "vedic-wisdom", label: "Vedic Wisdom" },
    { value: "community", label: "Community" },
    { value: "meditation", label: "Meditation" }
  ];

  const filteredArticles = articles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === "all" || article.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredArticle = articles.find(article => article.featured);
  const recentArticles = filteredArticles.filter(article => !article.featured);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center space-y-4 mb-12">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground">
            Spiritual <span className="bg-gradient-primary bg-clip-text text-transparent">Articles</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Weekly insights and teachings on Bhakti Yoga, spiritual practice, and applying 
            ancient Vedic wisdom to modern life challenges.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-8 flex flex-col md:flex-row gap-4 max-w-2xl mx-auto">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search articles and topics..."
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

        {/* Featured Article */}
        {featuredArticle && searchTerm === "" && selectedCategory === "all" && (
          <div className="mb-12">
            <h2 className="text-2xl font-serif font-semibold text-foreground mb-6">
              Featured Article
            </h2>
            <Card className="border-border shadow-warm hover:shadow-sacred transition-all duration-300">
              <CardHeader>
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-4 flex-1">
                    <div className="flex items-center gap-2">
                      <Badge variant="default" className="bg-primary text-primary-foreground">
                        Featured
                      </Badge>
                      <Badge variant="outline">
                        {categories.find(cat => cat.value === featuredArticle.category)?.label}
                      </Badge>
                    </div>
                    
                    <h3 className="text-2xl md:text-3xl font-serif font-bold text-foreground leading-tight">
                      {featuredArticle.title}
                    </h3>
                    
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {featuredArticle.excerpt}
                    </p>
                    
                    <div className="flex items-center gap-6 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <User className="h-4 w-4" />
                        <span>{featuredArticle.author}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        <span>{formatDate(featuredArticle.publishDate)}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4" />
                        <span>{featuredArticle.readTime}</span>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {featuredArticle.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          <Tag className="h-3 w-3 mr-1" />
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    
                    <Button variant="sacred" size="lg" className="group">
                      Read Full Article
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
            </Card>
          </div>
        )}

        {/* Recent Articles */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-serif font-semibold text-foreground">
              {searchTerm || selectedCategory !== "all" ? "Search Results" : "Recent Articles"}
            </h2>
            <p className="text-sm text-muted-foreground">
              {filteredArticles.length} article{filteredArticles.length !== 1 ? 's' : ''} found
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentArticles.map((article) => (
              <Card key={article.id} className="group hover:shadow-warm transition-all duration-300 hover:scale-[1.02] border-border">
                <CardHeader className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Badge variant="outline" className="text-xs">
                      {categories.find(cat => cat.value === article.category)?.label}
                    </Badge>
                    <span className="text-xs text-muted-foreground">
                      {formatDate(article.publishDate)}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-serif font-semibold text-foreground group-hover:text-primary transition-colors leading-tight">
                    {article.title}
                  </h3>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {article.excerpt}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {article.tags.slice(0, 3).map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <Separator />

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <User className="h-3 w-3" />
                        <span>{article.author}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        <span>{article.readTime}</span>
                      </div>
                    </div>
                    
                    <Button variant="ghost" size="sm" className="group">
                      Read More
                      <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* No Results */}
        {filteredArticles.length === 0 && (
          <div className="text-center py-12">
            <div className="space-y-4">
              <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto">
                <Search className="h-8 w-8 text-muted-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">No articles found</h3>
              <p className="text-muted-foreground">
                Try adjusting your search terms or category filter.
              </p>
              <Button 
                variant="outline" 
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("all");
                }}
              >
                Clear Filters
              </Button>
            </div>
          </div>
        )}

        {/* Newsletter Signup */}
        <div className="bg-gradient-earth rounded-2xl p-8">
          <div className="text-center space-y-6 max-w-2xl mx-auto">
            <h2 className="text-3xl font-serif font-semibold text-foreground">
              Stay Updated with Weekly Wisdom
            </h2>
            <p className="text-muted-foreground">
              Subscribe to receive our latest articles, teachings, and spiritual insights 
              delivered directly to your inbox every week.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input 
                type="email" 
                placeholder="Your email address" 
                className="flex-1 bg-background/50"
              />
              <Button variant="sacred">
                Subscribe Now
              </Button>
            </div>
            <p className="text-xs text-muted-foreground">
              Join 5,000+ spiritual seekers. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Articles;