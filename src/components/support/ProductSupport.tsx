import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { 
  Search, 
  FileText, 
  Users, 
  Mail, 
  Phone,
  Download,
  Wrench,
  BookOpen,
  Video,
  MessageCircle,
  AlertTriangle,
  CheckCircle
} from "lucide-react";

const ProductSupport = () => {
  const supportCategories = [
    {
      icon: Wrench,
      title: "Technical Support",
      description: "Troubleshooting hardware and software issues",
      articles: 24,
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: BookOpen,
      title: "User Manuals",
      description: "Complete documentation for all products",
      articles: 18,
      color: "bg-green-100 text-green-600"
    },
    {
      icon: Video,
      title: "Video Tutorials",
      description: "Step-by-step visual guides",
      articles: 15,
      color: "bg-purple-100 text-purple-600"
    },
    {
      icon: MessageCircle,
      title: "Community Forum",
      description: "Connect with other users and experts",
      articles: 42,
      color: "bg-amber-100 text-amber-600"
    }
  ];

  const popularTopics = [
    {
      title: "Device Setup and Installation",
      category: "Technical Support",
      views: "2.1K"
    },
    {
      title: "Software Update Process",
      category: "Technical Support",
      views: "1.8K"
    },
    {
      title: "Calibration Procedures",
      category: "Technical Support",
      views: "1.5K"
    },
    {
      title: "Troubleshooting Connectivity Issues",
      category: "Technical Support",
      views: "1.3K"
    }
  ];

  const downloads = [
    {
      title: "Product Manual - Model X100",
      type: "PDF",
      size: "3.2 MB",
      version: "v2.4"
    },
    {
      title: "Software Installer - Windows",
      type: "EXE",
      size: "45.7 MB",
      version: "v3.1.2"
    },
    {
      title: "Mobile App - iOS",
      type: "APP",
      size: "28.4 MB",
      version: "v1.8.3"
    },
    {
      title: "Firmware Update",
      type: "BIN",
      size: "12.1 MB",
      version: "v1.2.5"
    }
  ];

  const faqs = [
    {
      question: "How do I update my device firmware?",
      answer: "Visit the Downloads section and locate the latest firmware for your device model. Follow the step-by-step instructions in the update guide, ensuring your device remains connected to power throughout the process."
    },
    {
      question: "My device won't connect to Wi-Fi, what should I do?",
      answer: "First, check that your Wi-Fi network is functioning properly. Restart your device and router, then try reconnecting. If issues persist, consult the troubleshooting guide or contact technical support."
    },
    {
      question: "Where can I find the serial number on my device?",
      answer: "The serial number is typically located on a label on the bottom or back of your device. It begins with two letters followed by eight digits. You'll need this for warranty claims and support requests."
    },
    {
      question: "How do I reset my device to factory settings?",
      answer: "Factory resets vary by model. Refer to your user manual or visit our online documentation. Note that this will erase all data, so backup important information first."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-white/20 text-white border-white/30 mb-6">
              Product Support
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Product Support & Resources
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Comprehensive support for all our healthcare products and devices
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input 
                type="text" 
                placeholder="Search product support..." 
                className="pl-12 pr-32 py-4 text-base rounded-full border-0 shadow-lg"
              />
              <Button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-600 hover:bg-blue-700 text-white rounded-full px-6">
                Search
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Support Categories */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Support Resources
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Find the help you need with our comprehensive support resources
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {supportCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <Card key={index} className="border border-gray-200 hover:shadow-lg transition-all group">
                  <CardHeader>
                    <div className={`w-12 h-12 rounded-lg ${category.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <CardTitle className="text-xl font-bold text-gray-900">
                      {category.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-3">
                      {category.description}
                    </p>
                    <Badge variant="secondary" className="text-xs">
                      {category.articles} resources
                    </Badge>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Popular Topics */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                Popular Support Topics
              </h2>
              <p className="text-gray-600">
                Most searched topics in our support center
              </p>
            </div>
            <Button variant="outline" className="mt-4 md:mt-0">
              View All Topics
            </Button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {popularTopics.map((topic, index) => (
              <Card key={index} className="border border-gray-200 hover:shadow-md transition-all">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">
                        {topic.title}
                      </h3>
                      <Badge variant="secondary" className="mb-3">
                        {topic.category}
                      </Badge>
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <Users className="w-4 h-4 mr-1" />
                      <span>{topic.views} views</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center mt-4">
                    <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-800">
                      Read Guide
                      <MessageCircle className="w-4 h-4 ml-1" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Downloads */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                Software & Documentation
              </h2>
              <p className="text-gray-600">
                Download the latest software, manuals, and updates
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {downloads.map((download, index) => (
              <Card key={index} className="border border-gray-200 hover:shadow-md transition-all">
                <CardContent className="p-6">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">
                        {download.title}
                      </h3>
                      <div className="flex items-center text-sm text-gray-500">
                        <FileText className="w-4 h-4 mr-2" />
                        <span>{download.type}</span>
                        <span className="mx-2">•</span>
                        <span>{download.size}</span>
                        <span className="mx-2">•</span>
                        <span>{download.version}</span>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      <Download className="w-4 h-4 mr-2" />
                      Download
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Product Support FAQs
              </h2>
              <p className="text-lg text-gray-600">
                Answers to common product questions and issues
              </p>
            </div>

            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <Card key={index} className="border border-gray-200">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-lg font-bold text-gray-900">
                      {faq.question}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      {faq.answer}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg">
                View All Product FAQs
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Support */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Need Further Assistance?
            </h2>
            <p className="text-lg text-gray-600 mb-12">
              Our technical support team is available to help with any product-related issues
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="border border-gray-200">
                <CardContent className="pt-8">
                  <Phone className="w-10 h-10 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">Phone Support</h3>
                  <p className="text-gray-600 mb-4">
                    Speak directly with a technical specialist
                  </p>
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                    Call Now
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="border border-gray-200">
                <CardContent className="pt-8">
                  <Mail className="w-10 h-10 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">Email Support</h3>
                  <p className="text-gray-600 mb-4">
                    Submit a detailed support request
                  </p>
                  <Button variant="outline">
                    Send Request
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="border border-gray-200">
                <CardContent className="pt-8">
                  <AlertTriangle className="w-10 h-10 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">Urgent Support</h3>
                  <p className="text-gray-600 mb-4">
                    For critical issues affecting patient care
                  </p>
                  <Button variant="destructive">
                    Emergency Line
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductSupport;