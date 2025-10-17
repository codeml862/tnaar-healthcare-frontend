import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, Brain, Activity, Wind, Shield, Search, ChevronRight } from "lucide-react";

const PrescriptionMedicines = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const medicines = [
    {
      id: 1,
      name: "CardioHealth Plus",
      category: "Cardiovascular",
      description: "Advanced formulation for heart health and blood pressure management with proven results. Contains ACE inhibitors and beta blockers for optimal cardiovascular support.",
      price: 299,
      manufacturer: "TNAAR Healthcare",
      prescriptionRequired: true,
      icon: Heart,
      color: "from-red-500 to-pink-600",
    },
    {
      id: 2,
      name: "NeuroVital",
      category: "Neurological",
      description: "Cognitive support and neurological wellness supplement for mental clarity. Enhances memory, focus, and neural connectivity with natural nootropics.",
      price: 349,
      manufacturer: "TNAAR Healthcare",
      prescriptionRequired: true,
      icon: Brain,
      color: "from-purple-500 to-indigo-600",
    },
    {
      id: 3,
      name: "MetaboBalance",
      category: "Metabolic Health",
      description: "Comprehensive metabolic support for diabetes and weight management. Regulates insulin sensitivity and supports healthy glucose metabolism.",
      price: 279,
      manufacturer: "TNAAR Healthcare",
      prescriptionRequired: true,
      icon: Activity,
      color: "from-green-500 to-emerald-600",
    },
    {
      id: 4,
      name: "RespiClear",
      category: "Respiratory",
      description: "Advanced respiratory support for asthma and COPD management. Reduces inflammation and opens airways for easier breathing.",
      price: 329,
      manufacturer: "TNAAR Healthcare",
      prescriptionRequired: true,
      icon: Wind,
      color: "from-teal-500 to-blue-600",
    },
    {
      id: 5,
      name: "ImmunoBoost",
      category: "Immune Support",
      description: "Strengthen your immune system with natural ingredients and antioxidants. Provides comprehensive defense against common pathogens and seasonal illnesses.",
      price: 199,
      manufacturer: "TNAAR Healthcare",
      prescriptionRequired: true,
      icon: Shield,
      color: "from-orange-500 to-amber-600",
    },
  ];

  const filteredMedicines = medicines.filter(medicine =>
    medicine.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    medicine.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Prescription Medicines
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Doctor-prescribed medications for various health conditions. All products require a valid prescription.
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search prescription medicines..."
              className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* Medicines Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredMedicines.map((medicine) => {
            const Icon = medicine.icon;
            return (
              <Card key={medicine.id} className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${medicine.color} flex items-center justify-center`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <Badge className="bg-blue-100 text-blue-800 text-xs font-medium">
                      Prescription Required
                    </Badge>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{medicine.name}</h3>
                  <p className="text-sm text-gray-500 mb-3">{medicine.category}</p>
                  <p className="text-gray-600 text-sm mb-4">{medicine.description}</p>
                  
                  <div className="flex justify-between items-center mt-6">
                    <span className="text-lg font-bold text-gray-900">₹{medicine.price}</span>
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
        <div className="bg-blue-50 rounded-2xl p-6 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Important Information</h2>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>All prescription medicines require a valid doctor's prescription</li>
            <li>Consult your healthcare provider before starting any new medication</li>
            <li>Follow the prescribed dosage and usage instructions carefully</li>
            <li>Store medicines in a cool, dry place away from direct sunlight</li>
            <li>Check expiration dates before use</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PrescriptionMedicines;