import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  MessageCircle, 
  Users, 
  Headphones 
} from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Office Locations",
      details: [
        "123 Healthcare Blvd, San Francisco, CA 94107",
        "456 Medical Drive, New York, NY 10001",
        "789 Wellness Street, Boston, MA 02108"
      ]
    },
    {
      icon: Phone,
      title: "Phone Numbers",
      details: [
        "General Inquiries: +1 (800) 555-1234",
        "Support: +1 (800) 555-5678",
        "Sales: +1 (800) 555-9012"
      ]
    },
    {
      icon: Mail,
      title: "Email Addresses",
      details: [
        "General: info@prescribrcloud.com",
        "Support: support@prescribrcloud.com",
        "Sales: sales@prescribrcloud.com"
      ]
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: [
        "Monday - Friday: 9:00 AM - 6:00 PM PST",
        "Saturday: 10:00 AM - 4:00 PM PST",
        "Sunday: Closed"
      ]
    }
  ];

  const supportOptions = [
    {
      icon: MessageCircle,
      title: "Live Chat Support",
      description: "Get instant help from our support team during business hours.",
      availability: "Mon-Fri, 9AM-6PM PST"
    },
    {
      icon: Mail,
      title: "Email Support",
      description: "Send us a detailed message and we'll respond within 24 hours.",
      availability: "24/7"
    },
    {
      icon: Users,
      title: "Community Forum",
      description: "Connect with other users and find answers to common questions.",
      availability: "24/7"
    },
    {
      icon: Headphones,
      title: "Phone Support",
      description: "Speak directly with a support specialist for complex issues.",
      availability: "Mon-Fri, 9AM-6PM PST"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <Badge className="bg-white/20 text-white border-white/30 mb-6">
            Get In Touch
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            We're Here to Help
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-blue-100">
            Have questions about our platform? Need support? Want to learn more about our solutions? 
            Reach out to us through any of the channels below.
          </p>
        </div>
      </div>

      {/* Contact Information */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Contact Information
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Reach us through any of our office locations or communication channels
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((contact, index) => {
              const Icon = contact.icon;
              return (
                <Card key={index} className="border border-gray-200">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <CardTitle className="text-xl font-bold text-gray-900">
                      {contact.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {contact.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="text-gray-600">
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <div className="mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    Send Us a Message
                  </h2>
                  <p className="text-gray-600">
                    Fill out the form below and our team will get back to you as soon as possible.
                  </p>
                </div>

                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                        First Name
                      </label>
                      <Input id="firstName" placeholder="Enter your first name" />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                        Last Name
                      </label>
                      <Input id="lastName" placeholder="Enter your last name" />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <Input id="email" type="email" placeholder="Enter your email address" />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Subject
                    </label>
                    <Input id="subject" placeholder="What is this regarding?" />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                    </label>
                    <Textarea id="message" placeholder="How can we help you?" rows={5} />
                  </div>

                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3">
                    Send Message
                  </Button>
                </form>
              </div>

              {/* Map and Office Info */}
              <div>
                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    Visit Our Office
                  </h2>
                  <p className="text-gray-600 mb-6">
                    Our headquarters in the heart of San Francisco's healthcare district
                  </p>
                  
                  <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-80 mb-6" />
                  
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <MapPin className="w-5 h-5 text-blue-600 mt-1 mr-3 flex-shrink-0" />
                      <p className="text-gray-600">
                        123 Healthcare Blvd, Suite 100<br />
                        San Francisco, CA 94107
                      </p>
                    </div>
                    
                    <div className="flex items-start">
                      <Phone className="w-5 h-5 text-blue-600 mt-1 mr-3 flex-shrink-0" />
                      <p className="text-gray-600">
                        +1 (800) 555-1234<br />
                        +1 (415) 555-5678
                      </p>
                    </div>
                    
                    <div className="flex items-start">
                      <Clock className="w-5 h-5 text-blue-600 mt-1 mr-3 flex-shrink-0" />
                      <p className="text-gray-600">
                        Monday - Friday: 9:00 AM - 6:00 PM PST<br />
                        Saturday: 10:00 AM - 4:00 PM PST
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Support Options */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How Can We Help You?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Multiple ways to get the support you need
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {supportOptions.map((option, index) => {
              const Icon = option.icon;
              return (
                <Card key={index} className="border border-gray-200 text-center hover:shadow-lg transition-all">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <CardTitle className="text-xl font-bold text-gray-900">
                      {option.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">
                      {option.description}
                    </p>
                    <Badge className="bg-gray-100 text-gray-700">
                      {option.availability}
                    </Badge>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-blue-100">
                Quick answers to common questions
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-white/10 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3">
                  How do I get started with Prescribr Cloud?
                </h3>
                <p className="text-blue-100">
                  Getting started is easy! Simply visit our signup page, create an account, and follow 
                  the onboarding process. Our team will reach out to help you configure the platform 
                  for your specific needs.
                </p>
              </div>

              <div className="bg-white/10 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3">
                  Is my patient data secure on your platform?
                </h3>
                <p className="text-blue-100">
                  Absolutely. We are fully HIPAA compliant and use industry-leading encryption to protect 
                  all patient data. We undergo regular security audits and maintain the highest standards 
                  for data privacy and protection.
                </p>
              </div>

              <div className="bg-white/10 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3">
                  Do you offer training for new users?
                </h3>
                <p className="text-blue-100">
                  Yes! We provide comprehensive training resources including video tutorials, 
                  documentation, and live training sessions. Our customer success team is also 
                  available to provide personalized onboarding and ongoing support.
                </p>
              </div>

              <div className="bg-white/10 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3">
                  What integrations do you support?
                </h3>
                <p className="text-blue-100">
                  Our platform integrates with major Electronic Health Record (EHR) systems, 
                  pharmacy management software, and telehealth platforms. We're constantly 
                  expanding our integration capabilities - contact us to discuss specific needs.
                </p>
              </div>
            </div>

            <div className="text-center mt-12">
              <Button variant="outline" className="bg-white text-blue-600 hover:bg-gray-100 border-white font-semibold py-3 px-8">
                View All FAQs
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;