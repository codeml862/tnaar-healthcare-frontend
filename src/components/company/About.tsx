import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Target, Eye, Heart } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description: "To revolutionize healthcare accessibility through innovative technology solutions that connect patients, doctors, and pharmacies seamlessly."
    },
    {
      icon: Eye,
      title: "Our Vision",
      description: "Creating a world where quality healthcare is just a click away, empowering individuals to take control of their health journey."
    },
    {
      icon: Heart,
      title: "Our Values",
      description: "Integrity, innovation, and compassion drive everything we do. We prioritize patient safety and data security above all else."
    }
  ];

  const team = [
    {
      name: "Dr. Sarah Johnson",
      role: "Chief Medical Officer",
      bio: "20+ years in healthcare technology and digital health innovation."
    },
    {
      name: "Michael Chen",
      role: "Chief Technology Officer",
      bio: "Expert in scalable cloud solutions and healthcare data security."
    },
    {
      name: "Emma Rodriguez",
      role: "Head of Product",
      bio: "Passionate about user-centered design in healthcare applications."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <Badge className="bg-white/20 text-white border-white/30 mb-6">
            About Prescribr Cloud
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Transforming Healthcare Through Technology
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-blue-100">
            We're on a mission to bridge the gap between patients, healthcare providers, and pharmacies through innovative digital solutions.
          </p>
        </div>
      </div>

      {/* Mission, Vision, Values */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Principles
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The foundation of everything we build and every decision we make
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="border border-gray-200 hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <CardTitle className="text-xl font-bold text-gray-900">
                      {value.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Story
              </h2>
              <p className="text-lg text-gray-600">
                How we became a leader in healthcare technology
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/2">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">The Beginning (2018)</h3>
                  <p className="text-gray-600 mb-4">
                    Founded by a team of healthcare professionals and technology experts who identified 
                    critical gaps in patient-doctor-pharmacy communication. Our founders recognized 
                    the need for a secure, efficient platform to streamline prescription management.
                  </p>
                  <p className="text-gray-600">
                    Starting with a simple idea in a garage, we've grown into a comprehensive healthcare 
                    technology platform serving thousands of patients and healthcare providers.
                  </p>
                </div>
                <div className="md:w-1/2 bg-gray-200 border-2 border-dashed rounded-xl w-full h-64" />
              </div>

              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/2 bg-gray-200 border-2 border-dashed rounded-xl w-full h-64 md:order-2" />
                <div className="md:w-1/2 md:order-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Growth & Innovation (2020-2022)</h3>
                  <p className="text-gray-600 mb-4">
                    Expanded our platform with advanced features including AI-powered drug interaction 
                    checking, real-time inventory management for pharmacies, and telehealth integration.
                  </p>
                  <p className="text-gray-600">
                    Secured partnerships with major healthcare providers and achieved HIPAA compliance 
                    for maximum data security.
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/2">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Today & Tomorrow (2023-Present)</h3>
                  <p className="text-gray-600 mb-4">
                    Serving over 100,000 active users across 500+ healthcare facilities. Our platform 
                    continues to evolve with cutting-edge features like blockchain-based prescription 
                    tracking and personalized health insights.
                  </p>
                  <p className="text-gray-600">
                    Looking ahead, we're investing in AI diagnostics, IoT health monitoring, and 
                    expanding our global reach to make quality healthcare accessible worldwide.
                  </p>
                </div>
                <div className="md:w-1/2 bg-gray-200 border-2 border-dashed rounded-xl w-full h-64" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Leadership Team
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The visionary leaders driving our mission forward
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="border border-gray-200 text-center">
                <CardContent className="pt-8">
                  <div className="w-24 h-24 rounded-full bg-gray-200 border-2 border-dashed mx-auto mb-6" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 font-medium mb-3">
                    {member.role}
                  </p>
                  <p className="text-gray-600 text-sm">
                    {member.bio}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Join Our Journey
          </h2>
          <p className="text-xl max-w-2xl mx-auto text-blue-100 mb-8">
            Interested in being part of our mission to transform healthcare?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors">
              View Career Opportunities
            </button>
            <button className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-semibold py-3 px-8 rounded-lg transition-colors">
              Contact Our Team
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;