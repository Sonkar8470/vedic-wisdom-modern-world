import { useState } from "react";
import { ExternalLink, Star, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";

const Books = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Sample books data - would typically come from an API
  const books = [
    {
      id: 1,
      title: "The Inner Journey: Finding a Safe Space amidst Chaos",
      author: "Vraja Bihari Das",
      category: "spiritual-growth",
      description: "A profound exploration of finding inner peace and spiritual grounding in today's turbulent world. This book offers practical guidance for navigating life's challenges through Vedic wisdom.",
      amazonUrl: "https://amazon.com/inner-journey-safe-space-chaos",
      rating: 4.8,
      reviews: 245,
      price: "$14.99",
      publishYear: 2023,
      pages: 280,
      tags: ["meditation", "inner peace", "self-discovery"]
    },
    {
      id: 2,
      title: "Bhakti in Daily Life: Practical Spirituality",
      author: "Vraja Bihari Das",
      category: "practical-wisdom",
      description: "Transform your everyday activities into spiritual practice. Learn how to infuse devotion and mindfulness into work, relationships, and daily routines.",
      amazonUrl: "https://amazon.com/bhakti-daily-life-practical",
      rating: 4.9,
      reviews: 189,
      price: "$16.99",
      publishYear: 2022,
      pages: 320,
      tags: ["bhakti", "daily practice", "spirituality"]
    },
    {
      id: 3,
      title: "The Modern Seeker's Guide to Ancient Wisdom",
      author: "Vraja Bihari Das",
      category: "ancient-wisdom",
      description: "Bridge the gap between timeless Vedic teachings and contemporary life. Discover how ancient principles can solve modern problems.",
      amazonUrl: "https://amazon.com/modern-seekers-guide-ancient",
      rating: 4.7,
      reviews: 156,
      price: "$18.99",
      publishYear: 2021,
      pages: 350,
      tags: ["vedic wisdom", "modern life", "philosophy"]
    },
    {
      id: 4,
      title: "Love and Relationships: A Spiritual Perspective",
      author: "Vraja Bihari Das",
      category: "relationships",
      description: "Explore the deeper dimensions of love and relationships through spiritual understanding. Learn to create meaningful connections based on divine principles.",
      amazonUrl: "https://amazon.com/love-relationships-spiritual",
      rating: 4.6,
      reviews: 203,
      price: "$15.99",
      publishYear: 2020,
      pages: 260,
      tags: ["relationships", "love", "spiritual connection"]
    },
    {
      id: 5,
      title: "Meditation and Mindfulness for Beginners",
      author: "Vraja Bihari Das",
      category: "meditation",
      description: "A comprehensive guide to establishing a meditation practice. Perfect for beginners seeking to develop mindfulness and inner awareness.",
      amazonUrl: "https://amazon.com/meditation-mindfulness-beginners",
      rating: 4.8,
      reviews: 312,
      price: "$12.99",
      publishYear: 2019,
      pages: 200,
      tags: ["meditation", "mindfulness", "beginners"]
    },
    {
      id: 6,
      title: "The Art of Conscious Living",
      author: "Vraja Bihari Das",
      category: "consciousness",
      description: "Develop heightened awareness and live with purpose. This book explores consciousness from both philosophical and practical perspectives.",
      amazonUrl: "https://amazon.com/art-conscious-living",
      rating: 4.9,
      reviews: 178,
      price: "$17.99",
      publishYear: 2018,
      pages: 290,
      tags: ["consciousness", "awareness", "purposeful living"]
    }
  ];

  const categories = [
    { value: "all", label: "All Categories" },
    { value: "spiritual-growth", label: "Spiritual Growth" },
    { value: "practical-wisdom", label: "Practical Wisdom" },
    { value: "ancient-wisdom", label: "Ancient Wisdom" },
    { value: "relationships", label: "Relationships" },
    { value: "meditation", label: "Meditation" },
    { value: "consciousness", label: "Consciousness" }
  ];

  const filteredBooks = books.filter(book => {
    const matchesCategory = selectedCategory === "all" || book.category === selectedCategory;
    return matchesCategory;
  });

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center space-y-4 mb-12">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground">
            Spiritual <span className="bg-gradient-primary bg-clip-text text-transparent">Books</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Discover transformative books by Vraja Bihari Das that bridge ancient Vedic wisdom 
            with modern living. Each book offers practical guidance for spiritual growth and inner peace.
          </p>
        </div>

        {/* Category Filter */}
        <div className="mb-8 flex justify-center">
          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger className="w-48">
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

        {/* Books Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredBooks.map((book) => (
            <Card key={book.id} className="group hover:shadow-warm transition-all duration-300 hover:scale-[1.02] border-border">
              <CardHeader className="space-y-4">
                <div className="aspect-[3/4] bg-gradient-earth rounded-lg flex items-center justify-center relative overflow-hidden">
                  {/* Book Cover Placeholder */}
                  <div className="text-center p-6">
                    <h3 className="font-serif font-bold text-lg text-foreground mb-2 leading-tight">
                      {book.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">by {book.author}</p>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge variant="secondary" className="bg-primary text-primary-foreground">
                      {book.publishYear}
                    </Badge>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <CardTitle className="text-xl font-serif group-hover:text-primary transition-colors">
                    {book.title}
                  </CardTitle>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-primary text-primary" />
                      <span className="text-sm font-medium">{book.rating}</span>
                    </div>
                    <span className="text-sm text-muted-foreground">
                      ({book.reviews} reviews)
                    </span>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {book.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {book.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <span>{book.pages} pages</span>
                  <span className="font-semibold text-primary text-lg">{book.price}</span>
                </div>

                <Button 
                  variant="sacred" 
                  className="w-full group"
                  asChild
                >
                  <a href={book.amazonUrl} target="_blank" rel="noopener noreferrer">
                    Buy on Amazon
                    <ExternalLink className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* No Results */}
        {filteredBooks.length === 0 && (
          <div className="text-center py-12">
            <div className="space-y-4">
              <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto">
                <Filter className="h-8 w-8 text-muted-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">No books found</h3>
              <p className="text-muted-foreground">
                Try selecting a different category.
              </p>
              <Button 
                variant="outline" 
                onClick={() => {
                  setSelectedCategory("all");
                }}
              >
                Show All Books
              </Button>
            </div>
          </div>
        )}

        {/* About the Teachings */}
        <div className="mt-16 bg-gradient-earth rounded-2xl p-8">
          <div className="text-center space-y-6">
            <h2 className="text-3xl font-serif font-semibold text-foreground">
              About Our Teachings
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Vraja Bihari Das brings together academic excellence and spiritual depth in his writings. 
              With over 25 years of teaching experience and a unique background in both economics and 
              spiritual studies, his books offer practical wisdom for modern seekers navigating the 
              complexities of contemporary life.
            </p>
            <Button variant="wisdom" size="lg">
              Learn More About Our Philosophy
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Books;