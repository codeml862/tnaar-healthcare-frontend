import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, MapPin, Send, Clock, MessageSquare, Users, Sparkles } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you within 24 hours.",
      });
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  const contactMethods = [
    {
      icon: Phone,
      title: "Call Us",
      description: "Mon-Fri from 8am to 6pm",
      detail: "+91 1234567890",
      link: "tel:+911234567890",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Mail,
      title: "Email Us",
      description: "Our team will respond soon",
      detail: "tnaarhealthcare@gmail.com",
      link: "mailto:tnaarhealthcare@gmail.com",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      description: "Come say hello",
      detail: "H.NO.5-141-36/A/1, CHENGICHERLA,MEDCHAL-MALKAJGIRI, HYDERABAD-500039, TELANGANA, INDIA",
      link: "",
      color: "from-orange-500 to-red-500",
    },
  ];

  return (
    <section id="contact" className="py-2 sm:py-4 md:py-6 lg:py-8 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-blue-100 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-purple-100 rounded-full blur-3xl opacity-30"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-2 sm:mb-4 md:mb-6">
          <Badge className="bg-blue-50 text-blue-600 border border-blue-200 px-4 sm:px-6 py-1.5 sm:py-2 text-xs sm:text-sm font-medium mb-4 sm:mb-6">
            💬 Get In Touch
          </Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
            Let's Connect
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto px-4">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        {/* Main Content - Responsive Layout */}
        <div className="grid lg:grid-cols-5 gap-6 sm:gap-8">
          {/* Left Side - Contact Methods */}
          <div className="lg:col-span-2 space-y-4 sm:space-y-6">
            <div className="bg-white border border-gray-200 rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 shadow-sm hover:shadow-md transition-all duration-300">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Contact Information</h3>
              <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8">
                Fill out the form and our team will get back to you within 24 hours.
              </p>
              
              <div className="space-y-4 sm:space-y-6">
                {contactMethods.map((method, index) => {
                  const Icon = method.icon;
                  return (
                    <div key={index} className="flex items-start space-x-3 sm:space-x-4 group">
                      <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br ${method.color} flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110`}>
                        <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-sm sm:text-base text-gray-900 mb-1">{method.title}</h4>
                        <p className="text-xs sm:text-sm text-gray-600 mb-1">{method.description}</p>
                        {method.link ? (
                          <a 
                            href={method.link}
                            className="text-xs sm:text-sm font-medium text-blue-600 hover:underline break-words"
                          >
                            {method.detail}
                          </a>
                        ) : (
                          <p className="text-xs sm:text-sm font-medium text-gray-800 break-words">
                            {method.detail}
                          </p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Business Hours */}
              <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-gray-200">
                <div className="flex items-center space-x-2 sm:space-x-3 mb-3 sm:mb-4">
                  <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700" />
                  <h4 className="font-semibold text-sm sm:text-base text-gray-900">Business Hours</h4>
                </div>
                <div className="space-y-2 text-xs sm:text-sm text-gray-600">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span className="font-medium text-gray-900">8:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span className="font-medium text-gray-900">9:00 AM - 2:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span className="font-medium text-gray-900">Closed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="lg:col-span-3">
            <Card className="border border-gray-200 rounded-xl sm:rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
              <CardContent className="p-5 sm:p-6 md:p-8 lg:p-10">
                <div className="mb-6 sm:mb-8">
                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Send us a message</h3>
                  <p className="text-sm sm:text-base text-gray-600">We'll respond within 24 hours</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label htmlFor="name" className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5 sm:mb-2">
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className="h-10 sm:h-12 text-sm sm:text-base border border-gray-200 focus:border-blue-500 rounded-lg sm:rounded-xl transition-all duration-300"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5 sm:mb-2">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@example.com"
                        className="h-10 sm:h-12 text-sm sm:text-base border border-gray-200 focus:border-blue-500 rounded-lg sm:rounded-xl transition-all duration-300"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5 sm:mb-2">
                        Phone Number
                      </label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 1234567890"
                        className="h-10 sm:h-12 text-sm sm:text-base border border-gray-200 focus:border-blue-500 rounded-lg sm:rounded-xl transition-all duration-300"
                      />
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5 sm:mb-2">
                        Subject *
                      </label>
                      <Input
                        id="subject"
                        type="text"
                        required
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        placeholder="How can we help?"
                        className="h-10 sm:h-12 text-sm sm:text-base border border-gray-200 focus:border-blue-500 rounded-lg sm:rounded-xl transition-all duration-300"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5 sm:mb-2">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us more about your inquiry..."
                      rows={5}
                      className="text-sm sm:text-base border border-gray-200 focus:border-blue-500 rounded-lg sm:rounded-xl resize-none transition-all duration-300"
                    />
                  </div>

                  <div className="flex items-start space-x-2 sm:space-x-3">
                    <input 
                      type="checkbox" 
                      id="terms" 
                      required
                      className="mt-0.5 sm:mt-1 w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <label htmlFor="terms" className="text-xs sm:text-sm text-gray-600">
                      I agree to the <a href="#" className="text-blue-600 hover:underline font-medium">privacy policy</a> and <a href="#" className="text-blue-600 hover:underline font-medium">terms of service</a>
                    </label>
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full h-12 sm:h-14 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-lg sm:rounded-xl transition-all duration-300 text-sm sm:text-base font-semibold group shadow-lg hover:shadow-xl"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center">
                        <svg className="animate-spin -ml-1 mr-3 h-4 w-4 sm:h-5 sm:w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" />
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-10 sm:mt-12 md:mt-16">
          <Card className="bg-gradient-to-br from-gray-900 to-gray-800 border-0 rounded-xl sm:rounded-2xl overflow-hidden shadow-xl transition-all duration-300">
            <CardContent className="p-6 sm:p-8 md:p-10 lg:p-12">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3 sm:mb-4">
                Need immediate assistance?
              </h3>
              <p className="text-sm sm:text-base text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto">
                Our customer support team is available 24/7 to help you with any urgent inquiries or concerns.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <Button 
                  size="lg"
                  className="bg-white text-gray-900 hover:bg-gray-100 transition-all duration-300 px-6 sm:px-8 py-5 sm:py-6 text-sm sm:text-base font-semibold rounded-lg sm:rounded-xl shadow-lg hover:shadow-xl"
                >
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  Call: +91 1234567890
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  className="bg-transparent border-2 border-gray-600 text-white hover:bg-gray-800 transition-all duration-300 px-6 sm:px-8 py-5 sm:py-6 text-sm sm:text-base font-semibold rounded-lg sm:rounded-xl"
                >
                  <MessageSquare className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  Start Live Chat
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;