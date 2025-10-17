import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Factory, Shield, Leaf, Zap, Truck, ChevronRight } from "lucide-react";

const DrugManufacturing = () => {
  const manufacturingStandards = [
    {
      id: 1,
      name: "GMP Compliance",
      description: "Good Manufacturing Practice standards ensure our facilities meet the highest quality and safety requirements.",
      icon: Shield,
      color: "from-blue-500 to-cyan-600",
    },
    {
      id: 2,
      name: "Sustainable Production",
      description: "Eco-friendly manufacturing processes that minimize environmental impact while maintaining product quality.",
      icon: Leaf,
      color: "from-green-500 to-emerald-600",
    },
    {
      id: 3,
      name: "Advanced Technology",
      description: "State-of-the-art equipment and automated systems for precision manufacturing and quality control.",
      icon: Zap,
      color: "from-purple-500 to-pink-600",
    },
    {
      id: 4,
      name: "Global Distribution",
      description: "Efficient logistics network ensuring timely delivery of medications worldwide.",
      icon: Truck,
      color: "from-orange-500 to-red-600",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Drug Manufacturing
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            World-class pharmaceutical manufacturing with cutting-edge technology and strict quality control standards.
          </p>
        </div>

        {/* Manufacturing Process */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Our Manufacturing Process</h2>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
            {[
              { step: "1", title: "Raw Material Sourcing", description: "Careful selection and testing of high-quality raw materials from trusted suppliers." },
              { step: "2", title: "Formulation", description: "Precise blending of ingredients according to strict pharmaceutical standards." },
              { step: "3", title: "Production", description: "Manufacturing in controlled environments with advanced equipment." },
              { step: "4", title: "Quality Control", description: "Comprehensive testing at multiple stages to ensure safety and efficacy." },
              { step: "5", title: "Packaging", description: "Secure packaging with tamper-evident seals and detailed labeling." },
            ].map((process, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-xl p-4 text-center hover:shadow-lg transition-shadow">
                <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold mx-auto mb-3">
                  {process.step}
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{process.title}</h3>
                <p className="text-sm text-gray-600">{process.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Standards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {manufacturingStandards.map((standard) => {
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

        {/* Facilities */}
        <div className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl p-8 text-white mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl font-bold mb-4">State-of-the-Art Facilities</h2>
              <p className="text-lg mb-6">
                Our manufacturing facilities span over 500,000 square feet and are equipped with the latest technology for pharmaceutical production.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center gap-2">
                  <Shield className="w-5 h-5" />
                  <span>FDA-approved manufacturing sites</span>
                </li>
                <li className="flex items-center gap-2">
                  <Factory className="w-5 h-5" />
                  <span>24/7 quality monitoring systems</span>
                </li>
                <li className="flex items-center gap-2">
                  <Leaf className="w-5 h-5" />
                  <span>ISO 14001 environmental certification</span>
                </li>
              </ul>
              <Button className="bg-white text-blue-600 hover:bg-gray-100 font-bold py-3 px-6 rounded-lg">
                View Facility Gallery
              </Button>
            </div>
            <div className="bg-white/20 rounded-xl p-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/30 p-4 rounded-lg text-center">
                  <div className="text-3xl font-bold">25+</div>
                  <div className="text-sm">Manufacturing Units</div>
                </div>
                <div className="bg-white/30 p-4 rounded-lg text-center">
                  <div className="text-3xl font-bold">99.9%</div>
                  <div className="text-sm">Quality Compliance</div>
                </div>
                <div className="bg-white/30 p-4 rounded-lg text-center">
                  <div className="text-3xl font-bold">500M+</div>
                  <div className="text-sm">Units Produced Annually</div>
                </div>
                <div className="bg-white/30 p-4 rounded-lg text-center">
                  <div className="text-3xl font-bold">24/7</div>
                  <div className="text-sm">Monitoring</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Learn More About Our Manufacturing Process</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Discover how we ensure the highest quality standards in every medication we produce.
          </p>
          <Button className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-bold py-3 px-6 rounded-lg">
            Download Manufacturing Brochure
            <ChevronRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DrugManufacturing;