import { useState, useEffect, useCallback } from "react";
import {
  Users,
  Globe,
  Package,
  Truck,
  Target,
  Sparkles,
  Star,
  Heart,
  Microscope,
  Shield,
  Zap,
  TrendingUp,
  ChevronLeft,
  ChevronRight,
  Award,
  Clock,
  CheckCircle,
} from "lucide-react";

const AboutPage = () => {
  const stats = [
    { icon: Users, value: "100+", label: "Healthcare Professionals", color: "from-blue-500 to-blue-600" },
    { icon: Globe, value: "100+", label: "Partner Clinics", color: "from-emerald-500 to-emerald-600" },
    { icon: Package, value: "100+", label: "Medicine SKUs", color: "from-purple-500 to-purple-600" },
    { icon: Truck, value: "99.3%", label: "On-Time Delivery", color: "from-orange-500 to-orange-600" },
  ];

  const corePillars = [
    { 
      icon: Target, 
      title: "Our Mission", 
      content: "To make healthcare services and medicines digitally accessible, secure, and reliable for every patient through innovation and care.",
      gradient: "from-blue-500 to-indigo-600"
    },
    { 
      icon: Sparkles, 
      title: "Our Vision", 
      content: "To be the most trusted and technology-driven pharmaceutical ecosystem across the globe, setting new standards in healthcare.",
      gradient: "from-purple-500 to-pink-600"
    },
    { 
      icon: Star, 
      title: "Core Values", 
      gradient: "from-emerald-500 to-teal-600",
      values: [
        { icon: Heart, text: "Integrity in healthcare delivery" },
        { icon: Microscope, text: "Innovation through technology" },
        { icon: Shield, text: "Data privacy and security first" },
        { icon: Users, text: "Collaboration with professionals" },
      ]
    },
  ];

  const milestones = [
    { year: "2025", event: "Company Founded", desc: "Started with a vision to digitize healthcare.", icon: Sparkles },
    // { year: "2023", event: "100+ Clinics", desc: "Expanded network across major cities.", icon: Globe },
    // { year: "2024", event: "AI Integration", desc: "Launched intelligent prescription system.", icon: Zap },
    // { year: "2025", event: "Global Expansion", desc: "Operating in 3 countries with 1k+ medicines.", icon: TrendingUp },
  ];

  const journeySlides = [
    {
      imageSrc: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&auto=format&fit=crop",
      altText: "Doctor analyzing data on a tablet.",
      title: "The Idea: Closing the Gap",
      content: [
        "Founded in 2025, TNAAR HEALTHCARE was born from a simple observation: a disconnected gap between patients, doctors, and pharmacies.",
        "We envisioned a unified platform powered by modern cloud infrastructure to create a secure, seamless digital health experience for everyone.",
      ],
    },
    {
      imageSrc: "https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?w=800&auto=format&fit=crop",
      altText: "Pharmacist organizing medication in a modern pharmacy.",
      title: "Built on a Foundation of Trust",
      content: [
        "Security and reliability are non-negotiable in healthcare. That's why we built our entire system on robust infrastructure, ensuring compliance from day one.",
        "Our platform is designed to be scalable and reliable, providing 24/7 support and peace of mind to our partners.",
      ],
    },
    {
      imageSrc: "https://images.unsplash.com/photo-1584982751601-97dcc096659c?w=800&auto=format&fit=crop",
      altText: "Scientist looking into a microscope in a bright lab.",
      title: "Innovation at Our Core",
      content: [
        "We are more than just a platform; we are an innovation hub. By integrating AI into our systems, we've developed intelligent prescription analysis and inventory management.",
        "This commitment to technology empowers healthcare professionals and leads to better patient outcomes.",
      ],
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(true);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % journeySlides.length);
  }, [journeySlides.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + journeySlides.length) % journeySlides.length);
  }, [journeySlides.length]);

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
    setIsAutoPlaying(false);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 75) {
      nextSlide();
    }
    if (touchStart - touchEnd < -75) {
      prevSlide();
    }
  };

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide]);

  return (
    <section id="about" className="bg-gradient-to-b from-gray-50 to-white py-2 sm:py-16 md:py-2 lg:py-4">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-6 sm:mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 mb-4 sm:mb-6 px-3 sm:px-4 py-2 bg-blue-50 border border-blue-200 rounded-full">
            <Sparkles className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600" />
            <span className="text-xs sm:text-sm font-bold text-blue-600">About TNAAR HEALTHCARE</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 px-4">
            Redefining Healthcare with 
            <span className="block sm:inline"> </span>
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">Digital Innovation</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Connecting patients, doctors, and pharmacies through secure, intelligent technology that transforms healthcare delivery.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 mb-12 sm:mb-16 lg:mb-20">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="relative bg-white border border-gray-100 rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 flex items-center justify-center rounded-xl sm:rounded-2xl bg-gradient-to-br ${stat.color} mb-3 sm:mb-4`}>
                <stat.icon className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-white"/>
              </div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-1">{stat.value}</h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-tight">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Journey Carousel */}
        <div 
          className="relative mb-12 sm:mb-16 lg:mb-24"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-center">
            {/* Image */}
            <div className="relative h-56 sm:h-64 md:h-72 lg:h-96 w-full overflow-hidden rounded-2xl sm:rounded-3xl shadow-2xl">
              {!imageLoaded && (
                <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
                  <div className="text-gray-500">Loading image...</div>
                </div>
              )}
              <img
                src={journeySlides[currentSlide].imageSrc}
                alt={journeySlides[currentSlide].altText}
                className={`w-full h-full object-cover transition-transform duration-700 ${!imageLoaded ? 'opacity-0' : 'opacity-100'}`}
                onLoad={() => setImageLoaded(true)}
                onError={(e) => {
                  setImageLoaded(true);
                  // Fallback image in case the image fails to load
                  e.currentTarget.src = "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&auto=format&fit=crop";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              {/* Swipe indicator for mobile */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 sm:hidden">
                <div className="flex items-center gap-1 text-white/80 text-xs">
                  <ChevronLeft className="h-4 w-4" />
                  <span>Swipe</span>
                  <ChevronRight className="h-4 w-4" />
                </div>
              </div>
            </div>
            
            {/* Content */}
            <div className="flex flex-col justify-center px-2 sm:px-4 lg:px-8">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
                {journeySlides[currentSlide].title}
              </h3>
              <div className="space-y-2 sm:space-y-3 text-sm sm:text-base text-gray-600">
                {journeySlides[currentSlide].content.map((p, i) => <p key={i}>{p}</p>)}
              </div>
            </div>
          </div>

          {/* Carousel Controls */}
          <button 
            onClick={() => { prevSlide(); setIsAutoPlaying(false); }} 
            className="absolute top-1/2 left-1 sm:left-2 transform -translate-y-1/2 p-2 sm:p-3 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-blue-600 hover:text-white transition z-10 hidden sm:block"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6"/>
          </button>
          <button 
            onClick={() => { nextSlide(); setIsAutoPlaying(false); }} 
            className="absolute top-1/2 right-1 sm:right-2 transform -translate-y-1/2 p-2 sm:p-3 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-blue-600 hover:text-white transition z-10 hidden sm:block"
            aria-label="Next slide"
          >
            <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6"/>
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-4 sm:mt-6">
            {journeySlides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => { setCurrentSlide(idx); setIsAutoPlaying(false); }}
                className={`h-2 sm:h-3 rounded-full transition-all duration-300 ${
                  idx === currentSlide ? 'w-8 sm:w-10 bg-blue-600' : 'w-2 sm:w-3 bg-gray-300'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Core Pillars */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-12 sm:mb-16 lg:mb-24">
          {corePillars.map((pillar, idx) => (
            <div 
              key={idx} 
              className="relative bg-white border border-gray-100 rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className={`w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center rounded-xl sm:rounded-2xl bg-gradient-to-br ${pillar.gradient} mb-3 sm:mb-4`}>
                <pillar.icon className="h-6 w-6 sm:h-7 sm:w-7 text-white"/>
              </div>
              <h4 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">{pillar.title}</h4>
              {pillar.content && <p className="text-sm sm:text-base text-gray-600">{pillar.content}</p>}
              {pillar.values && (
                <div className="space-y-2 mt-3 sm:mt-4">
                  {pillar.values.map((v, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <div className="w-6 h-6 flex items-center justify-center rounded bg-blue-100 flex-shrink-0">
                        <v.icon className="h-4 w-4 text-blue-600"/>
                      </div>
                      <p className="text-gray-700 text-xs sm:text-sm">{v.text}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Milestones Timeline */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-900 mb-8 sm:mb-12 lg:mb-16">
            Our Journey
          </h3>
          
          {/* Mobile Timeline (Vertical) */}
          <div className="block lg:hidden space-y-6 sm:space-y-8">
            {milestones.map((m, i) => (
              <div key={i} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 border-4 border-white shadow-lg flex-shrink-0">
                    <m.icon className="h-4 w-4 sm:h-5 sm:w-5 text-white"/>
                  </div>
                  {i < milestones.length - 1 && (
                    <div className="w-0.5 h-full bg-gradient-to-b from-blue-500 to-purple-500 mt-2"></div>
                  )}
                </div>
                <div className="bg-white border border-gray-100 rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-sm flex-1">
                  <div className="text-xs sm:text-sm font-bold text-blue-600 mb-1">{m.year}</div>
                  <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-1">{m.event}</h4>
                  <p className="text-sm sm:text-base text-gray-600">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop Timeline (Horizontal) */}
          <div className="hidden lg:block relative">
            <div className="absolute left-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-500 -translate-x-1/2"></div>
            {milestones.map((m, i) => {
              const isLeft = i % 2 === 0;
              return (
                <div key={i} className={`flex ${isLeft ? 'justify-start pr-[50%]' : 'justify-end pl-[50%]'} mb-16 relative`}>
                  <div className="absolute left-1/2 -translate-x-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 border-4 border-white shadow-lg">
                    <m.icon className="h-5 w-5 text-white"/>
                  </div>
                  <div className={`bg-white border border-gray-100 rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 ${isLeft ? 'ml-6' : 'mr-6'}`}>
                    <div className="mb-1 text-sm font-bold text-blue-600">{m.year}</div>
                    <h4 className="text-xl font-bold text-gray-900">{m.event}</h4>
                    <p className="text-gray-600">{m.desc}</p>
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

export default AboutPage;