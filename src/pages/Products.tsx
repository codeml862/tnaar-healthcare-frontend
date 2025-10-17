import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Pill, ShoppingCart, Heart, Leaf, Stethoscope } from "lucide-react";

const ProductsPage = () => {
  const productCategories = [
    {
      id: 1,
      name: "Prescription Medicines",
      description: "Doctor-prescribed medications for various health conditions",
      icon: Pill,
      color: "from-blue-500 to-indigo-600",
      link: "/products/prescription-medicines",
    },
    {
      id: 2,
      name: "OTC Products",
      description: "Over-the-counter products for common health issues",
      icon: ShoppingCart,
      color: "from-green-500 to-emerald-600",
      link: "/products/otc-products",
    },
    {
      id: 3,
      name: "Supplements",
      description: "Dietary supplements to support your health and wellness goals",
      icon: Leaf,
      color: "from-purple-500 to-pink-600",
      link: "/products/supplements",
    },
    {
      id: 4,
      name: "Medical Devices",
      description: "Healthcare devices for monitoring and managing your health",
      icon: Heart,
      color: "from-red-500 to-orange-600",
      link: "/products/medical-devices",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Healthcare Products
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive range of pharmaceutical products, supplements, and medical devices to support your health journey
          </p>
        </div>

        {/* Product Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {productCategories.map((category) => {
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
                      Explore {category.name}
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
            <h2 className="text-3xl font-bold mb-4">Quality You Can Trust</h2>
            <p className="text-xl mb-6">
              All our products are manufactured under strict quality control standards and approved by regulatory authorities
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <div className="flex items-center gap-2">
                <Stethoscope className="w-6 h-6" />
                <span>Doctor Approved</span>
              </div>
              <div className="flex items-center gap-2">
                <Leaf className="w-6 h-6" />
                <span>Natural Ingredients</span>
              </div>
              <div className="flex items-center gap-2">
                <Pill className="w-6 h-6" />
                <span>Quality Assured</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;