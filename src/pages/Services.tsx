import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { FlaskConical, Factory, ShieldCheck, FileText } from "lucide-react";

const ServicesPage = () => {
  const serviceCategories = [
    {
      id: 1,
      name: "Clinical Research",
      description: "Advanced clinical trials and research studies to develop innovative treatments",
      icon: FlaskConical,
      color: "from-blue-500 to-indigo-600",
      link: "/services/clinical-research",
    },
    {
      id: 2,
      name: "Drug Manufacturing",
      description: "State-of-the-art manufacturing facilities producing high-quality pharmaceuticals",
      icon: Factory,
      color: "from-green-500 to-emerald-600",
      link: "/services/drug-manufacturing",
    },
    {
      id: 3,
      name: "Quality Assurance",
      description: "Comprehensive quality control systems ensuring product safety and efficacy",
      icon: ShieldCheck,
      color: "from-purple-500 to-pink-600",
      link: "/services/quality-assurance",
    },
    {
      id: 4,
      name: "Regulatory Affairs",
      description: "Expert guidance through regulatory processes for market approvals",
      icon: FileText,
      color: "from-red-500 to-orange-600",
      link: "/services/regulatory-affairs",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Healthcare Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive range of pharmaceutical services to support drug development, manufacturing, and regulatory compliance
          </p>
        </div>

        {/* Service Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {serviceCategories.map((category) => {
            const Icon = category.icon;
            return (
              <Link to={category.link} key={category.id}>
                <Card className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 h-full group">
                  <CardContent className="p-6">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                      {category.name}
                    </h3>
                    <p className="text-gray-600 mb-6">
                      {category.description}
                    </p>
                    
                    <Button className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white rounded-lg">
                      Learn More
                    </Button>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>

        {/* Additional Information */}
        <div className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-3xl p-8 text-white mb-12">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Industry-Leading Expertise</h2>
            <p className="text-xl mb-6">
              Our services are backed by decades of experience and adherence to international standards
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white/10 rounded-xl p-4">
                <h3 className="font-bold text-lg mb-2">Global Standards</h3>
                <p className="text-blue-100">Compliance with FDA, EMA, and other international regulatory bodies</p>
              </div>
              <div className="bg-white/10 rounded-xl p-4">
                <h3 className="font-bold text-lg mb-2">Innovation Focus</h3>
                <p className="text-blue-100">Cutting-edge technologies and methodologies in all our services</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;