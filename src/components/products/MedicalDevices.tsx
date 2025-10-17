import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Thermometer, Heart, Activity, Gauge, Syringe, Search, ChevronRight } from "lucide-react";

const MedicalDevices = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const devices = [
    {
      id: 1,
      name: "Digital Thermometer",
      category: "Temperature Monitoring",
      description: "Fast and accurate digital thermometer with fever alert. Provides readings in 10 seconds with easy-to-read display.",
      price: 299,
      manufacturer: "TNAAR Healthcare",
      prescriptionRequired: false,
      icon: Thermometer,
      color: "from-red-500 to-pink-600",
    },
    {
      id: 2,
      name: "Blood Pressure Monitor",
      category: "Cardiovascular",
      description: "Automatic blood pressure monitor with heart rate detection. Stores up to 120 readings and connects to smartphone app.",
      price: 1299,
      manufacturer: "TNAAR Healthcare",
      prescriptionRequired: false,
      icon: Heart,
      color: "from-blue-500 to-indigo-600",
    },
    {
      id: 3,
      name: "Pulse Oximeter",
      category: "Respiratory",
      description: "Fingertip pulse oximeter for measuring blood oxygen saturation. Essential for monitoring respiratory health and fitness.",
      price: 799,
      manufacturer: "TNAAR Healthcare",
      prescriptionRequired: false,
      icon: Activity,
      color: "from-teal-500 to-green-600",
    },
    {
      id: 4,
      name: "Glucose Meter",
      category: "Diabetes Care",
      description: "Advanced glucose monitoring system with Bluetooth connectivity. Includes 50 test strips and lancing device.",
      price: 899,
      manufacturer: "TNAAR Healthcare",
      prescriptionRequired: false,
      icon: Gauge,
      color: "from-purple-500 to-pink-600",
    },
    {
      id: 5,
      name: "Insulin Pen",
      category: "Diabetes Care",
      description: "Precision insulin delivery pen with dose memory. Ergonomic design for easy handling and accurate dosing.",
      price: 499,
      manufacturer: "TNAAR Healthcare",
      prescriptionRequired: true,
      icon: Syringe,
      color: "from-orange-500 to-yellow-600",
    },
  ];

  const filteredDevices = devices.filter(device =>
    device.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    device.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Medical Devices
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Healthcare devices for monitoring and managing your health at home.
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search medical devices..."
              className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* Devices Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredDevices.map((device) => {
            const Icon = device.icon;
            return (
              <Card key={device.id} className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${device.color} flex items-center justify-center`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <Badge className={device.prescriptionRequired ? "bg-blue-100 text-blue-800 text-xs font-medium" : "bg-green-100 text-green-800 text-xs font-medium"}>
                      {device.prescriptionRequired ? "Prescription Required" : "OTC"}
                    </Badge>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{device.name}</h3>
                  <p className="text-sm text-gray-500 mb-3">{device.category}</p>
                  <p className="text-gray-600 text-sm mb-4">{device.description}</p>
                  
                  <div className="flex justify-between items-center mt-6">
                    <span className="text-lg font-bold text-gray-900">₹{device.price}</span>
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
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Medical Device Information</h2>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>Read the instruction manual carefully before using any medical device</li>
            <li>Calibrate devices regularly for accurate readings</li>
            <li>Clean and maintain devices according to manufacturer guidelines</li>
            <li>Replace batteries and parts as recommended</li>
            <li>Consult your healthcare provider to interpret results correctly</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MedicalDevices;