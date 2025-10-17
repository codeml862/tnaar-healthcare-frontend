import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { 
  Search, 
  BookOpen, 
  MessageCircle, 
  Video, 
  FileText, 
  Users, 
  Mail, 
  Phone,
  ChevronRight,
  Star,
  Clock,
  Sparkles,
  TrendingUp,
  Zap
} from "lucide-react";

const HelpCenter = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [searchFocused, setSearchFocused] = useState(false);

  const categories = [
    {
      icon: BookOpen,
      title: "Getting Started",
      description: "Learn the basics of using our platform",
      articles: 12,
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: MessageCircle,
      title: "Account Management",
      description: "Manage your profile and account settings",
      articles: 8,
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: Video,
      title: "Video Tutorials",
      description: "Step-by-step video guides",
      articles: 15,
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: FileText,
      title: "Documentation",
      description: "Comprehensive guides and manuals",
      articles: 24,
      gradient: "from-amber-500 to-orange-500"
    },
    {
      icon: Users,
      title: "For Healthcare Providers",
      description: "Specialized resources for doctors and pharmacists",
      articles: 18,
      gradient: "from-cyan-500 to-blue-500"
    },
    {
      icon: Zap,
      title: "Quick Solutions",
      description: "Fast answers to common issues",
      articles: 6,
      gradient: "from-rose-500 to-red-500"
    }
  ];

  const popularArticles = [
    {
      title: "How to create your first prescription",
      category: "Getting Started",
      views: "1.2K",
      rating: 4.8,
      trending: true
    },
    {
      title: "Managing patient records securely",
      category: "Account Management",
      views: "850",
      rating: 4.7,
      trending: false
    },
    {
      title: "Understanding drug interaction warnings",
      category: "For Healthcare Providers",
      views: "1.5K",
      rating: 4.9,
      trending: true
    },
    {
      title: "Setting up notifications and alerts",
      category: "Account Management",
      views: "620",
      rating: 4.6,
      trending: false
    }
  ];

  const faqs = [
    {
      question: "How do I reset my password?",
      answer: "You can reset your password by clicking the 'Forgot Password' link on the login page and following the instructions sent to your email."
    },
    {
      question: "Is my patient data secure?",
      answer: "Yes, we use industry-standard encryption and are fully HIPAA compliant to ensure your patient data is always secure."
    },
    {
      question: "How can I export prescription data?",
      answer: "Navigate to the Reports section in your dashboard and select the export option for the data format you need."
    },
    {
      question: "What browsers are supported?",
      answer: "Our platform works best on the latest versions of Chrome, Firefox, Safari, and Edge."
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-x-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/2 -left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/3 -right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute -bottom-1/4 left-1/3 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Hero Section */}
      <div className="relative pt-20 pb-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-8 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span className="text-sm font-medium text-cyan-400">24/7 Support Available</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
              <span className="block bg-gradient-to-r from-white via-cyan-200 to-blue-300 bg-clip-text text-transparent">
                How Can We
              </span>
              <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent mt-2">
                Help You Today?
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto">
              Discover instant answers, explore tutorials, and connect with our support team
            </p>
            
            {/* Enhanced Search Bar */}
            <div className="max-w-3xl mx-auto mt-12">
              <div className={`relative transition-all duration-300 ${searchFocused ? 'scale-105' : ''}`}>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl blur-xl opacity-50"></div>
                <div className="relative bg-slate-900/90 backdrop-blur-xl border border-white/10 rounded-2xl p-2 shadow-2xl">
                  <div className="flex items-center gap-3">
                    <Search className="ml-4 w-5 h-5 text-slate-400" />
                    <Input 
                      type="text" 
                      placeholder="Search for help articles, guides, tutorials..." 
                      className="flex-1 bg-transparent border-0 text-white placeholder:text-slate-500 focus:ring-0 text-base"
                      onFocus={() => setSearchFocused(true)}
                      onBlur={() => setSearchFocused(false)}
                    />
                    <Button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold px-8 py-6 rounded-xl shadow-lg">
                      Search
                    </Button>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-wrap justify-center gap-2 mt-6">
                {["Account Setup", "Prescriptions", "Security", "Mobile App"].map((tag) => (
                  <button key={tag} className="px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-sm text-slate-300 transition-all hover:scale-105">
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Categories Grid */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl sm:text-5xl font-bold">
              <span className="bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
                Explore Topics
              </span>
            </h2>
            <p className="text-slate-400 text-lg">
              Everything you need, organized and easy to find
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, index) => {
              const Icon = category.icon;
              return (
                <div
                  key={index}
                  className="group relative"
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div className={`absolute inset-0 bg-gradient-to-r ${category.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-all duration-500`}></div>
                  <Card className="relative h-full bg-slate-900/50 backdrop-blur-xl border-white/10 hover:border-white/20 transition-all duration-300 overflow-hidden group-hover:transform group-hover:scale-105">
                    <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                    <CardHeader className="relative">
                      <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${category.gradient} flex items-center justify-center mb-4 group-hover:rotate-12 transition-transform duration-300`}>
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                      <CardTitle className="text-xl font-bold text-white flex items-center justify-between">
                        {category.title}
                        <ChevronRight className="w-5 h-5 text-slate-400 group-hover:translate-x-2 group-hover:text-white transition-all" />
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="relative space-y-4">
                      <p className="text-slate-400 leading-relaxed">
                        {category.description}
                      </p>
                      <div className="flex items-center gap-2">
                        <div className="h-1 flex-1 bg-slate-800 rounded-full overflow-hidden">
                          <div className={`h-full bg-gradient-to-r ${category.gradient} transition-all duration-500 ${hoveredCard === index ? 'w-full' : 'w-0'}`}></div>
                        </div>
                        <Badge className="bg-white/5 text-slate-300 border-white/10">
                          {category.articles} articles
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Popular Articles */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 mb-12">
            <div className="space-y-2">
              <h2 className="text-4xl font-bold text-white flex items-center gap-3">
                <TrendingUp className="w-8 h-8 text-cyan-400" />
                Trending Now
              </h2>
              <p className="text-slate-400">Most helpful articles this week</p>
            </div>
            <Button variant="outline" className="bg-white/5 border-white/10 text-white hover:bg-white/10 hover:scale-105 transition-all">
              View All
            </Button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {popularArticles.map((article, index) => (
              <Card key={index} className="bg-slate-900/50 backdrop-blur-xl border-white/10 hover:border-cyan-500/50 transition-all duration-300 group hover:transform hover:scale-105">
                <CardContent className="p-6 space-y-4">
                  <div className="flex justify-between items-start gap-4">
                    <div className="flex-1 space-y-3">
                      <h3 className="font-bold text-lg text-white group-hover:text-cyan-400 transition-colors">
                        {article.title}
                      </h3>
                      <div className="flex items-center gap-2">
                        <Badge className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-400 border-cyan-500/30">
                          {article.category}
                        </Badge>
                        {article.trending && (
                          <Badge className="bg-gradient-to-r from-rose-500/20 to-orange-500/20 text-rose-400 border-rose-500/30">
                            <TrendingUp className="w-3 h-3 mr-1" />
                            Trending
                          </Badge>
                        )}
                      </div>
                    </div>
                    <div className="flex items-center gap-1 px-3 py-1 bg-amber-500/10 border border-amber-500/20 rounded-lg">
                      <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                      <span className="text-sm font-semibold text-amber-400">{article.rating}</span>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center pt-4 border-t border-white/5">
                    <div className="flex items-center gap-2 text-sm text-slate-400">
                      <Clock className="w-4 h-4" />
                      <span>{article.views} views</span>
                    </div>
                    <Button size="sm" className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white">
                      Read More
                      <ChevronRight className="w-4 h-4 ml-1" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl sm:text-5xl font-bold">
              <span className="bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
                Quick Answers
              </span>
            </h2>
            <p className="text-slate-400 text-lg">
              Common questions, instant solutions
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index} className="bg-slate-900/50 backdrop-blur-xl border-white/10 hover:border-cyan-500/50 transition-all duration-300 group">
                <CardHeader>
                  <CardTitle className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </span>
                    {faq.question}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pl-16">
                  <p className="text-slate-400 leading-relaxed">
                    {faq.answer}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold py-6 px-10 rounded-xl shadow-xl hover:scale-105 transition-all">
              Browse All FAQs
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Support */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10"></div>
        <div className="max-w-6xl mx-auto relative">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl sm:text-5xl font-bold">
              <span className="bg-gradient-to-r from-white via-cyan-200 to-blue-300 bg-clip-text text-transparent">
                We're Here to Help
              </span>
            </h2>
            <p className="text-slate-400 text-lg">
              Choose your preferred way to connect with our support team
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: MessageCircle, title: "Live Chat", desc: "Get instant responses", gradient: "from-green-500 to-emerald-500", action: "Start Chat" },
              { icon: Mail, title: "Email Support", desc: "Detailed assistance", gradient: "from-blue-500 to-cyan-500", action: "Send Email" },
              { icon: Phone, title: "Phone Support", desc: "Talk to a specialist", gradient: "from-purple-500 to-pink-500", action: "Call Now" }
            ].map((support, index) => {
              const Icon = support.icon;
              return (
                <Card key={index} className="bg-slate-900/50 backdrop-blur-xl border-white/10 hover:border-white/20 transition-all duration-300 group hover:transform hover:scale-105">
                  <CardContent className="pt-8 pb-8 text-center space-y-6">
                    <div className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br ${support.gradient} flex items-center justify-center group-hover:rotate-12 transition-transform duration-300`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold text-white">{support.title}</h3>
                      <p className="text-slate-400">{support.desc}</p>
                    </div>
                    <Button className={`w-full bg-gradient-to-r ${support.gradient} hover:opacity-90 text-white font-semibold py-6 rounded-xl transition-all`}>
                      {support.action}
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Footer Spacer */}
      <div className="h-20"></div>
    </div>
  );
};

export default HelpCenter;