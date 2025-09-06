import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

interface Book {
  id: string;
  title: string;
  description: string;
  author: string;
  cover_image_url: string;
  purchase_link: string;
  price: number;
  is_featured: boolean;
}

const Books = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const { data, error } = await supabase
        .from('books')
        .select('*')
        .order('is_featured', { ascending: false })
        .order('created_at', { ascending: false });

      if (error) throw error;
      setBooks(data || []);
    } catch (error) {
      console.error('Error fetching books:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-hero py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
            <p className="mt-4 text-muted-foreground">Loading books...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-hero">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
              Sacred Books
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover timeless wisdom through our collection of spiritual books that bridge ancient knowledge with modern understanding.
            </p>
          </div>

          {books.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-lg text-muted-foreground">
                No books available at the moment. Please check back soon.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {books.map((book) => (
                <Card key={book.id} className="bg-card/80 backdrop-blur-sm border-border/50 hover:shadow-orange transition-all duration-300 hover:scale-105">
                  <CardHeader className="p-0">
                    {book.cover_image_url && (
                      <div className="aspect-[3/4] overflow-hidden rounded-t-lg">
                        <img
                          src={book.cover_image_url}
                          alt={`${book.title} cover`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div>
                        <CardTitle className="text-xl font-serif text-foreground mb-2">
                          {book.title}
                        </CardTitle>
                        <p className="text-sm text-primary font-medium mb-2">
                          by {book.author}
                        </p>
                        <CardDescription className="text-muted-foreground">
                          {book.description}
                        </CardDescription>
                      </div>
                      
                      <div className="flex items-center justify-between pt-4 border-t border-border/50">
                        {book.price && (
                          <span className="text-lg font-semibold text-primary">
                            ${book.price}
                          </span>
                        )}
                        {book.purchase_link && (
                          <Button 
                            asChild
                            className="bg-gradient-orange hover:shadow-orange"
                          >
                            <a href={book.purchase_link} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="w-4 h-4 mr-2" />
                              Purchase
                            </a>
                          </Button>
                        )}
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

export default Books;