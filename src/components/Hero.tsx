import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Shield, Award, Users, Star, TrendingUp, CheckCircle, Play, Sparkles, Clock, Globe } from "lucide-react";
// import { Links } from "react-links"
const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const slides = [
    {
      title: "Healthcare Solutions You Can Trust",
      subtitle: "Leading pharmaceutical innovation with cutting-edge research and unwavering commitment to patient safety.",
      badge: "ISO Certified",
      highlight: "Trusted Worldwide"
    },
    {
      title: "Quality Medicine Delivered Fast",
      subtitle: "Experience reliable pharmaceutical services with 24/7 support and trusted brands nationwide.",
      badge: "FDA Approved",
      highlight: "Fast & Secure"
    },
    {
      title: "Your Health, Our Priority",
      subtitle: "Comprehensive healthcare solutions backed by 6 months of excellence in pharmaceutical care.",
      badge: "HIPAA Compliant",
      highlight: "Excellence Since 2025"
    }
  ];

  const features = [
    { icon: CheckCircle, text: "FDA Approved", color: "text-green-600" },
    { icon: Clock, text: "24/7 Support", color: "text-blue-600" },
    { icon: Shield, text: "100% Secure", color: "text-purple-600" },
    { icon: Globe, text: "India Shipping", color: "text-orange-600" },
  ];

  const stats = [
    { icon: Users, value: "500+", label: "Patients Served", color: "from-blue-500 to-cyan-500" },
    { icon: Shield, value: "100%", label: "Quality Assured", color: "from-green-500 to-emerald-500" },
    { icon: Award, value: "6+ ", label: "Months Experience", color: "from-purple-500 to-pink-500" },
    { icon: Star, value: "4.9/5", label: "Customer Rating", color: "from-yellow-500 to-orange-500" },
  ];

  const trustItems = [
    { icon: Shield, title: "100% Secure", desc: "SSL Encrypted & HIPAA Compliant" },
    { icon: Award, title: "Award-Winning", desc: "Recognized by Healthcare Leaders" },
    { icon: TrendingUp, title: "Fastest Growing", desc: "Pharma Platform in 2025" },
  ];

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  const slide = slides[currentSlide];

  return (
    <section id="home" className="relative flex items-center pt-8 pb-8 md:pt-8 md:pb-8 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-10 right-10 w-72 h-72 md:w-96 md:h-96 bg-blue-300/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-72 h-72 md:w-96 md:h-96 bg-purple-300/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-6 md:gap-8 lg:gap-12 items-center">
          {/* Left Content - Main Hero */}
          <div className="lg:col-span-7 space-y-6 md:space-y-8">
            {/* Badges */}
            <div className="flex flex-wrap items-center gap-2 md:gap-3">
              <Badge className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-3 py-1.5 md:px-5 md:py-2 text-xs md:text-sm font-semibold border-0 shadow-md">
                <Sparkles className="w-3 h-3 md:w-4 md:h-4 mr-1.5" />
                {slide.badge}
              </Badge>
              <Badge variant="outline" className="border border-blue-200 text-blue-600 px-3 py-1.5 md:px-4 md:py-2 text-xs md:text-sm font-medium">
                {slide.highlight}
              </Badge>
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight transition-all duration-500">
              {slide.title.split(' ').slice(0, -3).join(' ')}{" "}
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                {slide.title.split(' ').slice(-3).join(' ')}
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-sm md:text-base lg:text-lg text-gray-600 max-w-2xl leading-relaxed transition-all duration-500">
              {slide.subtitle}
            </p>

            {/* Feature Pills */}
            <div className="flex flex-wrap gap-2 md:gap-3">
              {features.map((feature, idx) => {
                const Icon = feature.icon;
                return (
                  <div key={idx} className="flex items-center gap-1.5 md:gap-2 bg-white/80 backdrop-blur border border-gray-200 rounded-full px-2.5 py-1.5 md:px-4 md:py-2 shadow-sm hover:shadow-md transition-all duration-300 hover:border-blue-300">
                    <Icon className={`w-3.5 h-3.5 md:w-4 md:h-4 ${feature.color}`} />
                    <span className="text-xs md:text-sm font-medium text-gray-700 whitespace-nowrap">{feature.text}</span>
                  </div>
                );
              })}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 pt-2">
              <a href="/products">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 px-6 md:px-8 h-11 md:h-12 text-sm md:text-base font-semibold rounded-lg group"
              >
                Explore Products
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
              <a href ="video.mp4">
              <Button 
                size="lg" 
                variant="outline"
                className="border border-gray-300 hover:bg-slate-950 transition-all duration-300 px-6 md:px-8 h-11 md:h-12 text-sm md:text-base font-semibold rounded-lg"
              >
                <Play className="mr-2 w-4 h-4" />
                Watch Demo
                </Button>
                </a>
            </div>

            {/* Carousel Indicators */}
            <div className="flex items-center gap-2 pt-4">
              <button onClick={prevSlide} aria-label="Previous slide" className="p-2 md:p-2.5 bg-white border border-gray-300 hover:bg-gray-50 rounded-lg transition-all duration-300">
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5 rotate-180" />
              </button>
              <div className="flex gap-1.5">
                {slides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentSlide(i)}
                    aria-label={`Go to slide ${i + 1}`}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      i === currentSlide ? 'bg-blue-600 w-6 md:w-8' : 'bg-gray-300 w-1.5'
                    }`}
                  />
                ))}
              </div>
              <button onClick={nextSlide} aria-label="Next slide" className="p-2 md:p-2.5 bg-white border border-gray-300 hover:bg-gray-50 rounded-lg transition-all duration-300">
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
              </button>
            </div>
          </div>

          {/* Right Content - Stats & Info Cards */}
          <div className="lg:col-span-5 space-y-4 md:space-y-6 mt-8 lg:mt-0">
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-3 md:gap-4">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <Card 
                    key={index} 
                    className="bg-white/80 backdrop-blur border border-gray-200 hover:border-blue-300 transition-all duration-300 hover:shadow-lg group cursor-pointer"
                  >
                    <CardContent className="p-4 md:p-6">
                      <div className={`w-10 h-10 md:w-12 md:h-12 rounded-lg bg-gradient-to-br ${stat.color} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300 shadow-md`}>
                        <Icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
                      </div>
                      <div className="text-2xl md:text-3xl font-bold text-gray-900">{stat.value}</div>
                      <p className="text-xs md:text-sm text-gray-600 font-medium mt-1">{stat.label}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Trust Card */}
            {/* <Card className="bg-white/90 backdrop-blur border border-gray-200 shadow-lg">
              <CardContent className="p-4 md:p-6">
                <div className="flex items-start gap-3 md:gap-4 mb-4">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-br from-blue-400 to-purple-400 border-2 border-white flex items-center justify-center text-white font-bold text-xs">
                        {i}
                      </div>
                    ))}
                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center text-gray-600 font-bold text-xs">
                      +
                    </div>
                  </div>
                  <div>
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 md:w-4 md:h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-xs md:text-sm text-gray-600 font-medium mt-1.5">
                      Trusted by <span className="font-bold text-gray-900">100+</span> professionals
                    </p>
                  </div>
                </div>
                <div className="pt-3 md:pt-4 border-t border-gray-200">
                  <p className="text-xs md:text-sm text-gray-600 italic leading-relaxed">
                    "Best pharmaceutical service I've experienced. Fast delivery and excellent quality!"
                  </p>
                  <p className="text-xs md:text-sm text-gray-700 font-semibold mt-2">— Dr. Raja,Cardiologist</p>
                </div>
              </CardContent>
            </Card> */}
          </div>
        </div>

        {/* Bottom Trust Bar */}
        <div className="mt-12 md:mt-16 pt-6 md:pt-8 border-t border-gray-200">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
            {trustItems.map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="flex items-start gap-3 md:gap-4 p-3 md:p-4 rounded-lg hover:bg-gray-50 transition-colors duration-300">
                  <Icon className="w-6 h-6 md:w-8 md:h-8 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div className="min-w-0">
                    <p className="font-bold text-gray-900 text-sm md:text-base">{item.title}</p>
                    <p className="text-xs md:text-sm text-gray-600 truncate">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;