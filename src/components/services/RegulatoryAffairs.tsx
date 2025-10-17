import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ScrollText, Globe, Shield, FileText, ChevronRight } from "lucide-react";

const RegulatoryAffairs = () => {
  const regulations = [
    {
      id: 1,
      name: "FDA Compliance",
      description: "Full compliance with U.S. Food and Drug Administration regulations for pharmaceutical products.",
      icon: ScrollText,
      color: "from-red-500 to-pink-600",
      region: "United States",
    },
    {
      id: 2,
      name: "EMA Standards",
      description: "Adherence to European Medicines Agency guidelines for drug approval and safety.",
      icon: Globe,
      color: "from-blue-500 to-cyan-600",
      region: "Europe",
    },
    {
      id: 3,
      name: "WHO Guidelines",
      description: "Alignment with World Health Organization standards for pharmaceutical quality and safety.",
      icon: Shield,
      color: "from-green-500 to-emerald-600",
      region: "Global",
    },
    {
      id: 4,
      name: "Local Regulations",
      description: "Compliance with country-specific pharmaceutical regulations and requirements.",
      icon: FileText,
      color: "from-purple-500 to-pink-600",
      region: "International",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Regulatory Affairs
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Navigating complex regulatory landscapes to ensure our products meet all necessary approvals and standards worldwide.
          </p>
        </div>

        {/* Regulatory Framework */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {regulations.map((regulation) => {
            const Icon = regulation.icon;
            return (
              <Card key={regulation.id} className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${regulation.color} flex items-center justify-center`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <Badge className="bg-gray-100 text-gray-800">{regulation.region}</Badge>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{regulation.name}</h3>
                  <p className="text-gray-600 mb-4">{regulation.description}</p>
                  
                  <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50">
                    Learn More
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Regulatory Process */}
        <div className="bg-blue-50 rounded-2xl p-6 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Our Regulatory Process</h2>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {[
              { 
                title: "Pre-Submission", 
                description: "Initial consultation and strategy development with regulatory authorities.",
                steps: ["Regulatory strategy", "Documentation preparation", "Authority meetings"]
              },
              { 
                title: "Submission", 
                description: "Formal submission of applications and supporting documentation.",
                steps: ["Application filing", "Document review", "Fee payment"]
              },
              { 
                title: "Review", 
                description: "Regulatory authority evaluation of submitted materials.",
                steps: ["Technical review", "Inspection scheduling", "Deficiency response"]
              },
              { 
                title: "Approval", 
                description: "Final decision and post-approval commitments.",
                steps: ["Approval decision", "Labeling updates", "Post-market surveillance"]
              },
            ].map((process, index) => (
              <div key={index} className="bg-white rounded-xl p-5 border border-gray-200">
                <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold mb-3">
                  {index + 1}
                </div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">{process.title}</h3>
                <p className="text-gray-600 text-sm mb-3">{process.description}</p>
                <ul className="text-xs text-gray-500 space-y-1">
                  {process.steps.map((step, stepIndex) => (
                    <li key={stepIndex} className="flex items-start gap-1">
                      <span>•</span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Expertise */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Our Regulatory Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-white border border-gray-200 rounded-2xl overflow-hidden">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Drug Approvals</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                    <span>New Drug Applications (NDAs)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                    <span>Abbreviated New Drug Applications (ANDAs)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                    <span>Biologics License Applications (BLAs)</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="bg-white border border-gray-200 rounded-2xl overflow-hidden">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Compliance</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                    <span>Good Manufacturing Practice (GMP)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                    <span>Good Clinical Practice (GCP)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                    <span>Good Laboratory Practice (GLP)</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="bg-white border border-gray-200 rounded-2xl overflow-hidden">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Post-Market</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                    <span>Pharmacovigilance</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                    <span>Periodic Safety Updates</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                    <span>Labeling Changes</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Need Regulatory Support?</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Our regulatory affairs team is ready to assist with your pharmaceutical compliance needs.
          </p>
          <Button className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-bold py-3 px-6 rounded-lg">
            Contact Regulatory Team
            <ChevronRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default RegulatoryAffairs;