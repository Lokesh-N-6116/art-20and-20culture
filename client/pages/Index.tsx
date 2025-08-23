import { useState, useEffect } from "react";
import { SAMPLE_PRODUCTS, Product } from "@shared/products";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Verified, ShoppingCart, Heart, Search, User, Menu } from "lucide-react";

function VerifiedBadge({ seller }: { seller: any }) {
  if (seller.totalSales >= 3) {
    return (
      <Badge className="bg-luxury-gold-500 text-luxury-purple-900 hover:bg-luxury-gold-600">
        <Verified className="w-3 h-3 mr-1" />
        Verified Seller
      </Badge>
    );
  }
  return null;
}

function ProductCard({ product }: { product: Product }) {
  return (
    <Card className="group overflow-hidden border-luxury-silver-300 hover:border-luxury-gold-400 transition-all duration-300 hover:shadow-xl bg-card/80 backdrop-blur-sm">
      <div className="relative overflow-hidden">
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-3 right-3">
          <Button variant="secondary" size="icon" className="bg-white/90 hover:bg-white">
            <Heart className="h-4 w-4" />
          </Button>
        </div>
        {product.exportReady && (
          <Badge className="absolute top-3 left-3 bg-luxury-purple-600 text-white">
            Export Ready
          </Badge>
        )}
      </div>
      <CardContent className="p-4">
        <div className="flex items-start justify-between mb-2">
          <div className="flex-1">
            <h3 className="font-semibold text-lg text-foreground mb-1 line-clamp-1">
              {product.name}
            </h3>
            <p className="text-sm text-luxury-silver-600 mb-2">{product.artform} • {product.state}</p>
          </div>
        </div>
        
        <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
          {product.description}
        </p>
        
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-2">
            <img
              src={product.seller.avatar}
              alt={product.seller.name}
              className="w-6 h-6 rounded-full"
            />
            <span className="text-sm text-muted-foreground">{product.seller.name}</span>
            <VerifiedBadge seller={product.seller} />
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-2xl font-bold text-luxury-gold-600">
              ₹{product.price.toLocaleString()}
            </span>
            <span className="text-xs text-muted-foreground">Export Price Available</span>
          </div>
          <Button className="bg-luxury-purple-600 hover:bg-luxury-purple-700 text-white">
            <ShoppingCart className="h-4 w-4 mr-2" />
            Add to Cart
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

export default function Index() {
  const [featuredProducts, setFeaturedProducts] = useState<Product[]>([]);

  useEffect(() => {
    // Show first 6 products as featured
    setFeaturedProducts(SAMPLE_PRODUCTS.slice(0, 6));
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-luxury-silver-300 bg-card/50 backdrop-blur-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <h1 className="font-samarkan text-depth text-3xl text-luxury-gold-500">
                SP Collections
              </h1>
              <p className="hidden md:block text-sm text-muted-foreground">
                Traditional Indian Artforms
              </p>
            </div>
            
            <div className="hidden md:flex items-center space-x-6">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <input
                  type="text"
                  placeholder="Search artforms, states..."
                  className="pl-10 pr-4 py-2 border border-luxury-silver-300 rounded-md bg-background/80 backdrop-blur-sm"
                />
              </div>
              <Button variant="ghost">Categories</Button>
              <Button variant="ghost">States</Button>
              <Button variant="ghost">Artists</Button>
            </div>
            
            <div className="flex items-center space-x-3">
              <Button variant="ghost" size="icon">
                <Heart className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <ShoppingCart className="h-5 w-5" />
              </Button>
              <Button variant="outline" className="hidden md:flex">
                <User className="h-4 w-4 mr-2" />
                Sign In
              </Button>
              <Button className="md:hidden" variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-luxury-purple-900 via-luxury-purple-800 to-luxury-purple-700">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="font-samarkan text-depth text-5xl md:text-7xl text-luxury-gold-400 mb-6">
            Discover India's
            <br />
            Hidden Treasures
          </h1>
          <p className="text-xl md:text-2xl text-luxury-gold-100 mb-8 max-w-3xl mx-auto">
            Authentic traditional artforms from every corner of India. Support local artisans 
            and preserve centuries-old cultural heritage.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-luxury-gold-500 hover:bg-luxury-gold-600 text-luxury-purple-900 font-semibold px-8">
              Explore Collections
            </Button>
            <Button size="lg" variant="outline" className="border-luxury-gold-400 text-luxury-gold-400 hover:bg-luxury-gold-400 hover:text-luxury-purple-900">
              Become a Seller
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Artforms */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-samarkan text-depth text-4xl text-luxury-gold-600 mb-4">
              Featured Artforms
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover authentic pieces from master artisans across India. Each piece tells a story 
              of tradition, culture, and artistic excellence.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button size="lg" variant="outline" className="border-luxury-purple-600 text-luxury-purple-600 hover:bg-luxury-purple-600 hover:text-white">
              View All Products
            </Button>
          </div>
        </div>
      </section>

      {/* Heritage at Risk */}
      <section className="py-16 bg-luxury-purple-950/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-samarkan text-depth text-4xl text-luxury-gold-600 mb-4">
              Preserving Heritage
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Many traditional Indian folk artforms like Warli, Pithora, and Madhubani are at risk 
              of being forgotten. By purchasing these authentic pieces, you're helping preserve 
              cultural heritage for future generations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-luxury-silver-300 bg-card/80 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-luxury-gold-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Verified className="w-8 h-8 text-luxury-purple-900" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Authentic Artforms</h3>
                <p className="text-muted-foreground">
                  Every piece is verified authentic and created by traditional artisans using 
                  age-old techniques passed down through generations.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-luxury-silver-300 bg-card/80 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-luxury-silver-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Export Quality</h3>
                <p className="text-muted-foreground">
                  All products are prepared for international shipping with proper packaging 
                  and documentation for global art collectors.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-luxury-silver-300 bg-card/80 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-luxury-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Support Artisans</h3>
                <p className="text-muted-foreground">
                  Your purchase directly supports traditional artisans and their families, 
                  helping preserve these beautiful art forms.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-luxury-purple-950 text-luxury-gold-100 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-samarkan text-depth text-2xl text-luxury-gold-400 mb-4">
                SP Collections
              </h3>
              <p className="text-sm text-luxury-silver-300">
                Connecting the world with India's rich cultural heritage through authentic 
                traditional artforms.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold text-luxury-gold-400 mb-4">Categories</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-luxury-gold-400 transition-colors">Paintings</a></li>
                <li><a href="#" className="hover:text-luxury-gold-400 transition-colors">Textiles</a></li>
                <li><a href="#" className="hover:text-luxury-gold-400 transition-colors">Sculptures</a></li>
                <li><a href="#" className="hover:text-luxury-gold-400 transition-colors">Jewelry</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-luxury-gold-400 mb-4">Support</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-luxury-gold-400 transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-luxury-gold-400 transition-colors">Shipping Info</a></li>
                <li><a href="#" className="hover:text-luxury-gold-400 transition-colors">Returns</a></li>
                <li><a href="#" className="hover:text-luxury-gold-400 transition-colors">Contact Us</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-luxury-gold-400 mb-4">Connect</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-luxury-gold-400 transition-colors">Facebook</a></li>
                <li><a href="#" className="hover:text-luxury-gold-400 transition-colors">Instagram</a></li>
                <li><a href="#" className="hover:text-luxury-gold-400 transition-colors">Twitter</a></li>
                <li><a href="#" className="hover:text-luxury-gold-400 transition-colors">Pinterest</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-luxury-silver-700 mt-8 pt-8 text-center text-sm text-luxury-silver-400">
            <p>&copy; 2024 SP Collections. All rights reserved. Preserving India's cultural heritage.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
