import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Microscope, FlaskConical, Users, TrendingUp, Search, ChevronRight } from "lucide-react";

const ClinicalResearch = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const researchAreas = [
    {
      id: 1,
      name: "Cardiovascular Studies",
      description: "Advanced research in heart disease prevention, treatment, and management. Clinical trials for new cardiovascular medications and devices.",
      icon: FlaskConical,
      color: "from-red-500 to-pink-600",
      status: "Active",
    },
    {
      id: 2,
      name: "Neurological Research",
      description: "Investigating treatments for Alzheimer's, Parkinson's, and other neurological conditions. Focus on neuroplasticity and cognitive enhancement.",
      icon: Microscope,
      color: "from-purple-500 to-indigo-600",
      status: "Active",
    },
    {
      id: 3,
      name: "Oncology Trials",
      description: "Cutting-edge cancer research including immunotherapy, targeted therapy, and personalized medicine approaches for various cancer types.",
      icon: TrendingUp,
      color: "from-blue-500 to-cyan-600",
      status: "Recruiting",
    },
    {
      id: 4,
      name: "Metabolic Health",
      description: "Research in diabetes, obesity, and metabolic syndrome. Developing new treatment protocols and lifestyle interventions.",
      icon: Users,
      color: "from-green-500 to-emerald-600",
      status: "Planning",
    },
  ];

  const filteredResearch = researchAreas.filter(area =>
    area.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    area.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Clinical Research
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Advancing healthcare through innovative clinical trials and research studies. Our commitment to scientific excellence drives medical breakthroughs.
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search research areas..."
              className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* Research Areas Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {filteredResearch.map((area) => {
            const Icon = area.icon;
            return (
              <Card key={area.id} className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${area.color} flex items-center justify-center`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <Badge className={area.status === "Active" ? "bg-green-100 text-green-800" : area.status === "Recruiting" ? "bg-blue-100 text-blue-800" : "bg-yellow-100 text-yellow-800"}>
                      {area.status}
                    </Badge>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{area.name}</h3>
                  <p className="text-gray-600 mb-4">{area.description}</p>
                  
                  <Button className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white rounded-lg">
                    Learn More
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Research Process */}
        <div className="bg-blue-50 rounded-2xl p-6 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Research Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-4 rounded-xl">
              <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center mb-3">
                <span className="text-blue-600 font-bold">1</span>
              </div>
              <h3 className="font-bold text-lg mb-2">Discovery</h3>
              <p className="text-gray-600">Identifying promising research areas and potential therapeutic targets through extensive literature review and preliminary studies.</p>
            </div>
            <div className="bg-white p-4 rounded-xl">
              <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center mb-3">
                <span className="text-blue-600 font-bold">2</span>
              </div>
              <h3 className="font-bold text-lg mb-2">Development</h3>
              <p className="text-gray-600">Designing and conducting rigorous clinical trials with strict ethical standards and regulatory compliance.</p>
            </div>
            <div className="bg-white p-4 rounded-xl">
              <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center mb-3">
                <span className="text-blue-600 font-bold">3</span>
              </div>
              <h3 className="font-bold text-lg mb-2">Implementation</h3>
              <p className="text-gray-600">Translating successful research findings into practical healthcare solutions and treatments.</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl p-8 text-white">
          <h2 className="text-2xl font-bold mb-4">Interested in Participating?</h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Join our clinical research studies and contribute to advancing medical science. All studies are conducted with the highest ethical standards.
          </p>
          <Button className="bg-white text-blue-600 hover:bg-gray-100 font-bold py-3 px-6 rounded-lg">
            View Current Studies
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ClinicalResearch;