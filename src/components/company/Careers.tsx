import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Users, 
  Briefcase, 
  MapPin, 
  Clock, 
  DollarSign, 
  Heart, 
  Zap, 
  Globe, 
  Coffee 
} from "lucide-react";

const Careers = () => {
  const benefits = [
    {
      icon: DollarSign,
      title: "Competitive Compensation",
      description: "Above-market salaries with performance bonuses and equity options"
    },
    {
      icon: Heart,
      title: "Health & Wellness",
      description: "Comprehensive medical, dental, and vision insurance for you and your family"
    },
    {
      icon: Zap,
      title: "Professional Growth",
      description: "Learning stipend, conference attendance, and mentorship programs"
    },
    {
      icon: Globe,
      title: "Work-Life Balance",
      description: "Flexible schedules, remote work options, and unlimited PTO"
    },
    {
      icon: Coffee,
      title: "Office Perks",
      description: "Snacks, catered lunches, and wellness programs"
    },
    {
      icon: Users,
      title: "Inclusive Culture",
      description: "Diversity initiatives and employee resource groups"
    }
  ];

  const positions = [
    {
      title: "Senior Frontend Engineer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      experience: "5+ years",
      salary: "$120k - $160k",
      description: "Build and maintain our healthcare platform using React, TypeScript, and modern web technologies."
    },
    {
      title: "Healthcare Data Scientist",
      department: "Data Science",
      location: "New York, NY",
      type: "Full-time",
      experience: "3+ years",
      salary: "$130k - $170k",
      description: "Develop predictive models and analytics to improve patient outcomes and healthcare delivery."
    },
    {
      title: "Product Manager",
      department: "Product",
      location: "San Francisco, CA",
      type: "Full-time",
      experience: "4+ years",
      salary: "$140k - $180k",
      description: "Lead product development for our healthcare platform, working closely with engineering and design teams."
    },
    {
      title: "Cybersecurity Specialist",
      department: "Security",
      location: "Remote",
      type: "Full-time",
      experience: "5+ years",
      salary: "$150k - $190k",
      description: "Ensure the security and compliance of our healthcare platform and patient data."
    },
    {
      title: "UX/UI Designer",
      department: "Design",
      location: "Boston, MA",
      type: "Full-time",
      experience: "3+ years",
      salary: "$110k - $140k",
      description: "Create intuitive and accessible user experiences for patients, doctors, and pharmacists."
    },
    {
      title: "Clinical Research Associate",
      department: "Research",
      location: "Chicago, IL",
      type: "Full-time",
      experience: "2+ years",
      salary: "$80k - $110k",
      description: "Support clinical trials and research initiatives to validate our healthcare solutions."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <Badge className="bg-white/20 text-white border-white/30 mb-6">
            Join Our Team
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Build the Future of Healthcare
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-blue-100 mb-8">
            Join a passionate team of innovators working to transform healthcare through technology
          </p>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg">
            View Open Positions
          </Button>
        </div>
      </div>

      {/* Why Work With Us */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Prescribr Cloud?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We offer more than just a job - we offer a mission-driven career with exceptional growth opportunities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <Card key={index} className="border border-gray-200 hover:shadow-lg transition-all">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <CardTitle className="text-xl font-bold text-gray-900">
                      {benefit.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Culture */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Culture
              </h2>
              <p className="text-lg text-gray-600">
                A collaborative, innovative, and mission-driven environment
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mr-4">
                    <Heart className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Mission-Driven</h3>
                    <p className="text-gray-600">
                      Every project we work on has the potential to improve patient outcomes and save lives. 
                      We're motivated by impact, not just profit.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mr-4">
                    <Users className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Collaborative</h3>
                    <p className="text-gray-600">
                      We believe the best solutions come from diverse perspectives working together. 
                      Cross-functional collaboration is built into how we work.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mr-4">
                    <Zap className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Innovative</h3>
                    <p className="text-gray-600">
                      We encourage experimentation and calculated risk-taking to develop breakthrough solutions 
                      that advance healthcare.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mr-4">
                    <Globe className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Global Impact</h3>
                    <p className="text-gray-600">
                      Our platform serves users around the world, giving you the opportunity to make a difference 
                      on a global scale.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mr-4">
                    <Briefcase className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Professional Growth</h3>
                    <p className="text-gray-600">
                      We invest heavily in our team's development with learning stipends, mentorship programs, 
                      and career advancement opportunities.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mr-4">
                    <Coffee className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Work-Life Balance</h3>
                    <p className="text-gray-600">
                      We believe in sustainable productivity. Flexible schedules, remote work options, 
                      and unlimited PTO help you maintain balance.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Open Positions
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Join our growing team and help shape the future of healthcare technology
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {positions.map((position, index) => (
              <Card key={index} className="border border-gray-200 hover:shadow-lg transition-all">
                <CardHeader>
                  <div className="flex flex-wrap justify-between items-start gap-4">
                    <div>
                      <CardTitle className="text-xl font-bold text-gray-900 mb-2">
                        {position.title}
                      </CardTitle>
                      <Badge className="bg-blue-50 text-blue-700">
                        {position.department}
                      </Badge>
                    </div>
                    <Badge className="bg-gray-100 text-gray-700">
                      {position.type}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center text-sm text-gray-600">
                      <MapPin className="w-4 h-4 mr-2" />
                      {position.location}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Clock className="w-4 h-4 mr-2" />
                      {position.experience} experience
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <DollarSign className="w-4 h-4 mr-2" />
                      {position.salary}
                    </div>
                  </div>
                  <p className="text-gray-600 mb-6">
                    {position.description}
                  </p>
                  <Button className="w-full">
                    Apply Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">
              Don't see a position that matches your skills? We're always looking for talented individuals.
            </p>
            <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
              Send Us Your Resume
            </Button>
          </div>
        </div>
      </section>

      {/* Life at Prescribr Cloud */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Life at Prescribr Cloud
            </h2>
            <p className="text-xl text-blue-100 mb-12">
              See what our team members have to say about working here
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white/10 p-6 rounded-lg">
                <div className="text-yellow-400 text-2xl mb-4">★★★★★</div>
                <p className="text-blue-100 mb-4">
                  "The mission-driven culture here is incredible. I genuinely feel like my work is making a difference in people's lives."
                </p>
                <p className="font-semibold">- Jessica Park, Software Engineer</p>
              </div>
              
              <div className="bg-white/10 p-6 rounded-lg">
                <div className="text-yellow-400 text-2xl mb-4">★★★★★</div>
                <p className="text-blue-100 mb-4">
                  "The flexibility to work remotely while collaborating with such talented teammates has been a game-changer for my career."
                </p>
                <p className="font-semibold">- Marcus Johnson, Product Designer</p>
              </div>
              
              <div className="bg-white/10 p-6 rounded-lg">
                <div className="text-yellow-400 text-2xl mb-4">★★★★★</div>
                <p className="text-blue-100 mb-4">
                  "The learning opportunities and mentorship here have accelerated my growth in ways I never expected."
                </p>
                <p className="font-semibold">- Aisha Khan, Data Scientist</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;