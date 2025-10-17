import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Heart, Brain, Pill, Activity, Wind, Shield, Sparkles, Moon } from "lucide-react";
import TNAARCarousel from "@/components/TNAARCarousel";

const products = [

];

const Products = () => {
  return (
    <section id="products" className="py-2 bg-gray-50">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.05),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(168,85,247,0.05),transparent_50%)]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}

        {/* Products Grid - Equalized Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-6">
          {products.map((product, index) => {
            const Icon = product.icon;
            return (
              <Card 
                key={index} 
                className={`group bg-white border border-gray-200 transition-all duration-300 ${product.gradient}`}
              >
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-5">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${product.color} flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <Badge className="bg-gray-50 text-gray-600 border border-gray-200 text-xs px-3 py-1">
                      {product.badge}
                    </Badge>
                  </div>
                  
                  <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                    {product.category}
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                    {product.name}
                  </h3>
                  
                  <p className="text-gray-600 text-sm mb-6 leading-relaxed line-clamp-2">
                    {product.description}
                  </p>
                  
                  <Button 
                    variant="outline" 
                    className="w-full border border-gray-300 text-gray-700 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:text-white hover:border-transparent transition-all duration-300"
                  >
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* TNAAR Product Carousel */}
        <div className="mt-16 mb-12">
          <TNAARCarousel />
        </div>
      </div>
    </section>
  );
};

export default Products;