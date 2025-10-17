import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Leaf, Sparkles, Bone, HeartPulse, Dumbbell, Search, ChevronRight } from "lucide-react";

const Supplements = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const supplements = [
    {
      id: 1,
      name: "VitaComplete Multivitamin",
      category: "Multivitamins",
      description: "Comprehensive daily multivitamin with essential vitamins and minerals. Supports overall health and fills nutritional gaps in your diet.",
      price: 399,
      manufacturer: "TNAAR Healthcare",
      prescriptionRequired: false,
      icon: Sparkles,
      color: "from-purple-500 to-pink-600",
    },
    {
      id: 2,
      name: "Omega-3 Fish Oil",
      category: "Omega Fatty Acids",
      description: "High-potency fish oil with EPA and DHA for heart and brain health. Supports cardiovascular function and cognitive performance.",
      price: 449,
      manufacturer: "TNAAR Healthcare",
      prescriptionRequired: false,
      icon: Leaf,
      color: "from-teal-500 to-green-600",
    },
    {
      id: 3,
      name: "BoneStrength Calcium",
      category: "Bone Health",
      description: "Calcium and Vitamin D3 complex for strong bones and teeth. Essential for bone density maintenance and muscle function.",
      price: 299,
      manufacturer: "TNAAR Healthcare",
      prescriptionRequired: false,
      icon: Bone,
      color: "from-blue-500 to-cyan-600",
    },
    {
      id: 4,
      name: "HeartGuard CoQ10",
      category: "Heart Health",
      description: "Coenzyme Q10 supplement for heart health and energy production. Supports cardiovascular function and cellular energy metabolism.",
      price: 599,
      manufacturer: "TNAAR Healthcare",
      prescriptionRequired: false,
      icon: HeartPulse,
      color: "from-red-500 to-pink-600",
    },
    {
      id: 5,
      name: "ProteinPlus Whey",
      category: "Sports Nutrition",
      description: "Premium whey protein isolate for muscle recovery and growth. Low in carbs and lactose, ideal for fitness enthusiasts.",
      price: 699,
      manufacturer: "TNAAR Healthcare",
      prescriptionRequired: false,
      icon: Dumbbell,
      color: "from-orange-500 to-yellow-600",
    },
  ];

  const filteredSupplements = supplements.filter(supplement =>
    supplement.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    supplement.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Supplements
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Dietary supplements to support your health and wellness goals. No prescription required.
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search supplements..."
              className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* Supplements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredSupplements.map((supplement) => {
            const Icon = supplement.icon;
            return (
              <Card key={supplement.id} className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${supplement.color} flex items-center justify-center`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <Badge className="bg-purple-100 text-purple-800 text-xs font-medium">
                      Supplement
                    </Badge>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{supplement.name}</h3>
                  <p className="text-sm text-gray-500 mb-3">{supplement.category}</p>
                  <p className="text-gray-600 text-sm mb-4">{supplement.description}</p>
                  
                  <div className="flex justify-between items-center mt-6">
                    <span className="text-lg font-bold text-gray-900">₹{supplement.price}</span>
                    <Button className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white rounded-lg">
              View Details
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Additional Info */}
        <div className="bg-purple-50 rounded-2xl p-6 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Supplement Information</h2>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>Dietary supplements are not intended to diagnose, treat, cure, or prevent diseases</li>
            <li>Consult your healthcare provider before starting any new supplement regimen</li>
            <li>Follow recommended dosage instructions on the product label</li>
            <li>Store in a cool, dry place and keep out of reach of children</li>
            <li>Discontinue use and consult a doctor if adverse reactions occur</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Supplements;