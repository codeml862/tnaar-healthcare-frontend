import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Pill, Droplets, Eye, Stethoscope, Zap, Search, ChevronRight } from "lucide-react";

const OTCProducts = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const products = [
    {
      id: 1,
      name: "PainRelief Extra Strength",
      category: "Pain Management",
      description: "Fast-acting pain relief for headaches, muscle aches, and minor pains. Contains 500mg of acetaminophen per tablet.",
      price: 89,
      manufacturer: "TNAAR Healthcare",
      prescriptionRequired: false,
      icon: Pill,
      color: "from-blue-500 to-cyan-600",
    },
    {
      id: 2,
      name: "AllerClear",
      category: "Allergy Relief",
      description: "Non-drowsy allergy relief for sneezing, runny nose, and itchy eyes. Provides 24-hour relief from common allergens.",
      price: 129,
      manufacturer: "TNAAR Healthcare",
      prescriptionRequired: false,
      icon: Droplets,
      color: "from-teal-500 to-green-600",
    },
    {
      id: 3,
      name: "EyeCare Lubricant",
      category: "Eye Care",
      description: "Soothing eye drops for dry, irritated eyes. Preservative-free formula for sensitive eyes.",
      price: 199,
      manufacturer: "TNAAR Healthcare",
      prescriptionRequired: false,
      icon: Eye,
      color: "from-purple-500 to-indigo-600",
    },
    {
      id: 4,
      name: "DigestiEase",
      category: "Digestive Health",
      description: "Fast relief from heartburn, acid reflux, and indigestion. Neutralizes stomach acid for quick comfort.",
      price: 149,
      manufacturer: "TNAAR Healthcare",
      prescriptionRequired: false,
      icon: Stethoscope,
      color: "from-orange-500 to-red-600",
    },
    {
      id: 5,
      name: "EnergyBoost B12",
      category: "Vitamins & Supplements",
      description: "Liquid B12 vitamin for energy and metabolism support. Easy-to-absorb formula for quick results.",
      price: 249,
      manufacturer: "TNAAR Healthcare",
      prescriptionRequired: false,
      icon: Zap,
      color: "from-yellow-500 to-orange-600",
    },
  ];

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            OTC Products
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Over-the-counter products for common health issues. No prescription required.
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search OTC products..."
              className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredProducts.map((product) => {
            const Icon = product.icon;
            return (
              <Card key={product.id} className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${product.color} flex items-center justify-center`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <Badge className="bg-green-100 text-green-800 text-xs font-medium">
                      OTC
                    </Badge>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
                  <p className="text-sm text-gray-500 mb-3">{product.category}</p>
                  <p className="text-gray-600 text-sm mb-4">{product.description}</p>
                  
                  <div className="flex justify-between items-center mt-6">
                    <span className="text-lg font-bold text-gray-900">₹{product.price}</span>
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
        <div className="bg-green-50 rounded-2xl p-6 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">OTC Product Information</h2>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>No prescription required for purchase</li>
            <li>Always read and follow the product label instructions</li>
            <li>Consult a healthcare provider if symptoms persist</li>
            <li>Check for potential drug interactions with current medications</li>
            <li>Store in a cool, dry place and keep out of reach of children</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default OTCProducts;