import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";
import { Badge } from "@/components/ui/badge";
import { Pill, Droplets, Zap } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";

const tnaarProducts = [
  {
    id: 1,
    name: "TNAAR-Q10 Tablets",
    description: "A combination supplement containing antioxidants, vitamins, amino acids, and minerals. It is formulated with Tocotrienol (a form of Vitamin E), Magnesium, L-Carnitine, Co-enzyme Q10 (CoQ10), DHA (Docosahexaenoic Acid from a vegetarian source), L-Arginine, Lycopene, Zinc, and Astaxanthin. These components are often used for general vitality, heart health, and antioxidant support.",
    ingredients: "Co-enzyme Q10 (Ubidecarenone), Docosahexaenoic Acid (DHA), L-Arginine, Tocotrienol, Lycopene, Astaxanthin.",
    icon: Zap,
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-50",
    badgeColor: "bg-blue-100 text-blue-700 border-blue-200",
    badge: "Antioxidant Support",
    image: "/images/products/10Q.png"
  },
  {
    id: 2,
    name: "TNAAR Plus Softgel Capsules",
    description: "A neuro-nutritional supplement primarily focused on nerve health and B-vitamin support. It contains Benfotiamine (a lipid-soluble form of Vitamin B1), Methylcobalamin (a form of Vitamin B12), Alpha Lipoic Acid, Inositol, Chromium Polynicotinate, Folic Acid (Vitamin B9), and Selenium Dioxide. This formulation is commonly prescribed for conditions like diabetic neuropathy.",
    ingredients: "Benfotiamine, Methylcobalamin, Alpha Lipoic Acid, Folic Acid, Inositol.",
    icon: Pill,
    color: "from-purple-500 to-indigo-500",
    bgColor: "bg-purple-50",
    badgeColor: "bg-purple-100 text-purple-700 border-purple-200",
    badge: "Neuro Support",
    image: "/images/products/plus.png"
  },
  {
    id: 3,
    name: "TNAAR-D₃ 60K Nano Shot (Oral Solution)",
    description: "A high-dose liquid oral solution of Vitamin D3 (Cholecalciferol) at a concentration of 60,000 International Units (IU) per unit. It is presented as a \"Nano Shot\" utilizing nano-technology for potentially improved absorption. It is sugar-free and has a butterscotch flavor. This is typically used for the treatment or prevention of Vitamin D deficiency.",
    ingredients: "Cholecalciferol (Vitamin D3).",
    icon: Droplets,
    color: "from-amber-500 to-orange-500",
    bgColor: "bg-amber-50",
    badgeColor: "bg-amber-100 text-amber-700 border-amber-200",
    badge: "Bone Health",
    image: "/images/products/Nano.png"
  },
  {
    id: 4,
    name: "TNAAR-D₃ 60K Softgel Capsules",
    description: "A high-dose softgel capsule form of Vitamin D3 (Cholecalciferol) at a concentration of 60,000 International Units (IU) per capsule. This formulation is commonly used to replenish severely low levels of Vitamin D.",
    ingredients: "Cholecalciferol (Vitamin D3).",
    icon: Droplets,
    color: "from-emerald-500 to-teal-500",
    bgColor: "bg-emerald-50",
    badgeColor: "bg-emerald-100 text-emerald-700 border-emerald-200",
    badge: "Bone Health",
    image: "/images/products/soft.png"
  }
];

const TNAARCarousel = () => {
  const plugin = useRef(Autoplay({ delay: 5000, stopOnInteraction: true }));
  
  return (
    <section className="bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center ">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 bg-clip-text text-transparent">
            TNAAR Product Range
          </h2>
          <p className="text-base md:text-lg text-slate-600 max-w-2xl mx-auto px-4 leading-relaxed">
            Discover our specialized range of nutritional supplements designed for specific health needs
          </p>
        </div>

        {/* Carousel Section */}
        <div className="max-w-6xl mx-auto">
          <Carousel
            opts={{
              align: "center",
              loop: true,
              slidesToScroll: 1,
            }}
            plugins={[plugin.current]}
            className="w-full"
            onMouseEnter={() => plugin.current.stop()}
            onMouseLeave={() => plugin.current.play()}
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {tnaarProducts.map((product) => {
                const Icon = product.icon;
                return (
                  <CarouselItem key={product.id} className="pl-2 md:pl-4 basis-full">
                    <div className="p-1">
                      <Card className="h-full border border-slate-200 hover:border-slate-300 transition-all duration-300 bg-white overflow-hidden">
                        {/* Mobile Layout (Stacked) */}
                        <div className="flex flex-col md:hidden">
                          {/* Image Section - Mobile */}
                          <div className={`w-full ${product.bgColor} p-8 flex items-center justify-center border-b border-slate-100`}>
                            <img 
                              src={product.image} 
                              alt={product.name}
                              className="rounded-lg object-contain h-48 w-auto max-w-full"
                            />
                          </div>
                          
                          {/* Content Section - Mobile */}
                          <div className="w-full">
                            <CardHeader className="pb-3 px-5 pt-5">
                              <div className="flex justify-between items-start mb-3">
                                <div className={`w-11 h-11 rounded-2xl bg-gradient-to-br ${product.color} flex items-center justify-center`}>
                                  <Icon className="w-5 h-5 text-white" />
                                </div>
                                <Badge className={`${product.badgeColor} border text-xs font-medium px-3 py-1`}>
                                  {product.badge}
                                </Badge>
                              </div>
                              <CardTitle className="text-xl font-bold text-slate-900 leading-tight">
                                {product.name}
                              </CardTitle>
                            </CardHeader>
                            <CardContent className="px-5 pb-5">
                              <div className="space-y-4">
                                <p className="text-slate-600 text-sm leading-relaxed line-clamp-4">
                                  {product.description}
                                </p>
                                <div className="pt-2">
                                  <h4 className="text-xs font-semibold text-slate-900 mb-2 uppercase tracking-wider">Key Ingredients:</h4>
                                  <p className="text-xs text-slate-600 bg-slate-50 p-3 rounded-xl border border-slate-100 leading-relaxed">
                                    {product.ingredients}
                                  </p>
                                </div>
                              </div>
                            </CardContent>
                          </div>
                        </div>

                        {/* Desktop/Tablet Layout (Side by Side) */}
                        <div className="hidden md:flex">
                          {/* Image Section - Desktop */}
                          <div className={`md:w-2/5 lg:w-1/3 ${product.bgColor} flex items-center justify-center p-8 lg:p-10 border-r border-slate-100`}>
                            <img 
                              src={product.image} 
                              alt={product.name}
                              className="rounded-lg object-contain h-60 lg:h-72 w-full hover:scale-105 transition-transform duration-500"
                            />
                          </div>
                          
                          {/* Content Section - Desktop */}
                          <div className="md:w-3/5 lg:w-2/3">
                            <CardHeader className="pb-4 px-7 pt-7">
                              <div className="flex justify-between items-start mb-4">
                                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${product.color} flex items-center justify-center`}>
                                  <Icon className="w-7 h-7 text-white" />
                                </div>
                                <Badge className={`${product.badgeColor} border text-sm font-medium px-4 py-1.5`}>
                                  {product.badge}
                                </Badge>
                              </div>
                              <CardTitle className="text-2xl lg:text-3xl font-bold text-slate-900 leading-tight">
                                {product.name}
                              </CardTitle>
                            </CardHeader>
                            <CardContent className="">
                              <div className="space-y-5">
                                <p className="text-slate-600 text-sm lg:text-base leading-relaxed">
                                  {product.description}
                                </p>
                                <div className="pt-2">
                                  <h4 className="text-sm font-semibold text-slate-900 mb-3 uppercase tracking-wider">Key Ingredients:</h4>
                                  <p className="text-sm lg:text-base text-slate-600 bg-slate-50 p-4 lg:p-5 rounded-xl border border-slate-100 leading-relaxed">
                                    {product.ingredients}
                                  </p>
                                </div>
                              </div>
                            </CardContent>
                          </div>
                        </div>
                      </Card>
                    </div>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            
            {/* Navigation Buttons */}
            <CarouselPrevious className="hidden sm:flex -left-4 lg:-left-12 bg-white border-slate-200 hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all duration-300" />
            <CarouselNext className="hidden sm:flex -right-4 lg:-right-12 bg-white border-slate-200 hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all duration-300" />
          </Carousel>
        </div>

        {/* Mobile Swipe Indicator */}
        <div className="text-center mt-8 md:hidden">
          <p className="text-xs text-slate-500 flex items-center justify-center gap-2">
            <span className="inline-block w-8 h-0.5 bg-slate-300 rounded-full"></span>
            Swipe to explore more products
            <span className="inline-block w-8 h-0.5 bg-slate-300 rounded-full"></span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default TNAARCarousel;