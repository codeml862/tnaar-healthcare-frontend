import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShieldCheck, TestTube, Microscope, Award, ChevronRight } from "lucide-react";

const QualityAssurance = () => {
  const qualityStandards = [
    {
      id: 1,
      name: "Raw Material Testing",
      description: "Comprehensive analysis of all incoming materials to ensure purity and compliance with pharmaceutical standards.",
      icon: TestTube,
      color: "from-blue-500 to-cyan-600",
    },
    {
      id: 2,
      name: "In-Process Controls",
      description: "Continuous monitoring during manufacturing to maintain consistent quality throughout production.",
      icon: Microscope,
      color: "from-green-500 to-emerald-600",
    },
    {
      id: 3,
      name: "Finished Product Testing",
      description: "Rigorous final testing of all products before release to ensure safety, efficacy, and quality.",
      icon: ShieldCheck,
      color: "from-purple-500 to-pink-600",
    },
    {
      id: 4,
      name: "Regulatory Compliance",
      description: "Adherence to international quality standards including FDA, EMA, and other regulatory requirements.",
      icon: Award,
      color: "from-orange-500 to-red-600",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Quality Assurance
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Uncompromising commitment to quality at every stage of production. Our rigorous quality assurance program ensures the safety and efficacy of all our products.
          </p>
        </div>

        {/* Quality Standards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {qualityStandards.map((standard) => {
            const Icon = standard.icon;
            return (
              <Card key={standard.id} className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${standard.color} flex items-center justify-center flex-shrink-0`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{standard.name}</h3>
                      <p className="text-gray-600">{standard.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Quality Process */}
        <div className="bg-blue-50 rounded-2xl p-6 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Our Quality Assurance Process</h2>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {[
              { 
                title: "Quality Control", 
                description: "Systematic testing and inspection of materials, processes, and products to ensure they meet specified requirements.",
                badge: "QC"
              },
              { 
                title: "Quality Assurance", 
                description: "Proactive processes designed to prevent defects and ensure quality requirements are met throughout production.",
                badge: "QA"
              },
              { 
                title: "Validation", 
                description: "Documented evidence that processes consistently produce products meeting predetermined specifications.",
                badge: "VAL"
              },
              { 
                title: "Continuous Improvement", 
                description: "Ongoing efforts to enhance processes, products, or services through regular evaluation and optimization.",
                badge: "CI"
              },
            ].map((process, index) => (
              <div key={index} className="bg-white rounded-xl p-5 border border-gray-200">
                <Badge className="mb-3 bg-blue-100 text-blue-800">{process.badge}</Badge>
                <h3 className="font-bold text-lg text-gray-900 mb-2">{process.title}</h3>
                <p className="text-gray-600 text-sm">{process.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Industry Certifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-white border border-gray-200 rounded-2xl overflow-hidden">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">FDA Approval</h3>
                <p className="text-gray-600 mb-4">Compliant with U.S. Food and Drug Administration regulations and standards.</p>
                <Badge className="bg-green-100 text-green-800">Current</Badge>
              </CardContent>
            </Card>
            
            <Card className="bg-white border border-gray-200 rounded-2xl overflow-hidden">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4">
                  <ShieldCheck className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">ISO 9001</h3>
                <p className="text-gray-600 mb-4">International standard for quality management systems.</p>
                <Badge className="bg-blue-100 text-blue-800">Certified</Badge>
              </CardContent>
            </Card>
            
            <Card className="bg-white border border-gray-200 rounded-2xl overflow-hidden">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center mx-auto mb-4">
                  <Microscope className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">GMP Certified</h3>
                <p className="text-gray-600 mb-4">Good Manufacturing Practice compliance for pharmaceutical production.</p>
                <Badge className="bg-purple-100 text-purple-800">Verified</Badge>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl p-8 text-white">
          <h2 className="text-2xl font-bold mb-4">Download Our Quality Report</h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Detailed information about our quality assurance processes, testing procedures, and compliance standards.
          </p>
          <Button className="bg-white text-blue-600 hover:bg-gray-100 font-bold py-3 px-6 rounded-lg">
            Download Quality Report
            <ChevronRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default QualityAssurance;