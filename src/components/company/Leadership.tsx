import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Linkedin, Mail } from "lucide-react";

const Leadership = () => {
  const executives = [
    {
      name: "Dr. Sarah Johnson",
      role: "Chief Executive Officer",
      bio: "Dr. Johnson brings over 20 years of experience in healthcare technology and digital health innovation. She previously served as VP of Digital Health at MediTech Solutions and holds an MD from Harvard Medical School.",
      linkedin: "#",
      expertise: ["Healthcare Innovation", "Digital Transformation", "Strategic Leadership"]
    },
    {
      name: "Michael Chen",
      role: "Chief Technology Officer",
      bio: "Michael is a technology visionary with expertise in scalable cloud solutions and healthcare data security. Before joining Prescribr Cloud, he led engineering teams at major tech companies for 15 years.",
      linkedin: "#",
      expertise: ["Cloud Architecture", "Data Security", "AI/ML Implementation"]
    },
    {
      name: "Emma Rodriguez",
      role: "Chief Product Officer",
      bio: "Emma is passionate about user-centered design in healthcare applications. She has led product development for multiple successful health tech startups and holds a Master's in Human-Computer Interaction.",
      linkedin: "#",
      expertise: ["Product Strategy", "User Experience", "Healthcare Design"]
    },
    {
      name: "David Kim",
      role: "Chief Financial Officer",
      bio: "David brings extensive financial leadership experience from the healthcare and technology sectors. He has managed IPOs and raised over $200M in venture capital for health tech companies.",
      linkedin: "#",
      expertise: ["Financial Strategy", "Investor Relations", "M&A"]
    }
  ];

  const advisors = [
    {
      name: "Prof. Robert Williams",
      role: "Former FDA Commissioner",
      bio: "Advises on regulatory compliance and healthcare policy. Served as FDA Commissioner for 8 years and is now Professor of Health Policy at Georgetown University.",
      linkedin: "#"
    },
    {
      name: "Dr. Jennifer Martinez",
      role: "Chief Medical Officer, HealthFirst Network",
      bio: "Provides clinical expertise and guidance on medical best practices. Leads one of the largest integrated healthcare networks in the Midwest.",
      linkedin: "#"
    },
    {
      name: "James Wilson",
      role: "Cybersecurity Expert",
      bio: "Former CISO at a major hospital system, James specializes in healthcare data protection and compliance with HIPAA regulations.",
      linkedin: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <Badge className="bg-white/20 text-white border-white/30 mb-6">
            Leadership Team
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Visionary Leadership
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-blue-100">
            Meet the experienced leaders driving our mission to transform healthcare through technology
          </p>
        </div>
      </div>

      {/* Executive Leadership */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Executive Leadership
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The core team responsible for strategic direction and day-to-day operations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {executives.map((executive, index) => (
              <Card key={index} className="border border-gray-200 hover:shadow-lg transition-all">
                <CardContent className="pt-8 text-center">
                  <div className="w-24 h-24 rounded-full bg-gray-200 border-2 border-dashed mx-auto mb-6" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {executive.name}
                  </h3>
                  <p className="text-blue-600 font-medium mb-3">
                    {executive.role}
                  </p>
                  <p className="text-gray-600 text-sm mb-4">
                    {executive.bio}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                      Expertise
                    </h4>
                    <div className="flex flex-wrap gap-1 justify-center">
                      {executive.expertise.map((skill, skillIndex) => (
                        <Badge key={skillIndex} className="bg-blue-50 text-blue-700 text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex justify-center gap-3">
                    <a href={executive.linkedin} className="text-gray-400 hover:text-blue-600 transition-colors">
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors">
                      <Mail className="w-5 h-5" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Advisory Board */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Advisory Board
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Industry experts providing strategic guidance and insights
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {advisors.map((advisor, index) => (
              <Card key={index} className="border border-gray-200">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-gray-200 border-2 border-dashed" />
                    <div>
                      <CardTitle className="text-lg font-bold text-gray-900">
                        {advisor.name}
                      </CardTitle>
                      <p className="text-blue-600 text-sm">
                        {advisor.role}
                      </p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">
                    {advisor.bio}
                  </p>
                  <div className="flex justify-start mt-4">
                    <a href={advisor.linkedin} className="text-gray-400 hover:text-blue-600 transition-colors">
                      <Linkedin className="w-5 h-5" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Company Culture */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Culture & Values
              </h2>
              <p className="text-lg text-gray-600">
                The principles that guide how we work and collaborate
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="border border-gray-200">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Innovation First</h3>
                  <p className="text-gray-600 mb-4">
                    We encourage experimentation and calculated risk-taking to develop breakthrough solutions 
                    that advance healthcare.
                  </p>
                  <ul className="text-gray-600 text-sm space-y-2">
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      Hackathons and innovation challenges
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      Dedicated R&D time for all engineers
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      Partnerships with leading research institutions
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border border-gray-200">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Patient-Centric</h3>
                  <p className="text-gray-600 mb-4">
                    Every decision we make prioritizes patient safety, privacy, and improved health outcomes.
                  </p>
                  <ul className="text-gray-600 text-sm space-y-2">
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      Regular patient advisory sessions
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      HIPAA compliance training for all staff
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      Ethical AI development guidelines
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border border-gray-200">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Collaborative</h3>
                  <p className="text-gray-600 mb-4">
                    We believe diverse perspectives and cross-functional teamwork lead to better solutions.
                  </p>
                  <ul className="text-gray-600 text-sm space-y-2">
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      Cross-departmental project teams
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      Open office design and collaboration spaces
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      Regular all-hands meetings and transparency
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border border-gray-200">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Continuous Learning</h3>
                  <p className="text-gray-600 mb-4">
                    We invest in our team's growth through education, training, and professional development.
                  </p>
                  <ul className="text-gray-600 text-sm space-y-2">
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      Annual learning stipend for each employee
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      In-house training and mentorship programs
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      Conference attendance and speaking opportunities
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Interested in Joining Our Team?
          </h2>
          <p className="text-xl max-w-2xl mx-auto text-blue-100 mb-8">
            We're always looking for talented individuals who share our passion for healthcare innovation.
          </p>
          <button className="bg-white text-blue-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors">
            View Career Opportunities
          </button>
        </div>
      </section>
    </div>
  );
};

export default Leadership;