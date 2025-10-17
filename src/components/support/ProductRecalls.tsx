import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { 
  Search, 
  FileText, 
  Mail, 
  Phone,
  Download,
  AlertTriangle,
  Clock,
  CheckCircle,
  XCircle,
  Calendar,
  Filter
} from "lucide-react";

const ProductRecalls = () => {
  const activeRecalls = [
    {
      id: "REC-2024-001",
      productName: "TNAAR-Q10 Tablets",
      lotNumber: "TQ10-2405A",
      reason: "Potential microbial contamination",
      date: "2024-05-15",
      status: "Active",
      severity: "High"
    },
    {
      id: "REC-2024-002",
      productName: "VitaHealth Multivitamin",
      lotNumber: "VH-MV-2403B",
      reason: "Mislabeling of ingredients",
      date: "2024-03-22",
      status: "Active",
      severity: "Medium"
    }
  ];

  const resolvedRecalls = [
    {
      id: "REC-2023-015",
      productName: "Omega-3 Fish Oil Capsules",
      lotNumber: "OF3-2312C",
      reason: "Packaging defect",
      date: "2023-12-10",
      resolutionDate: "2024-01-15",
      status: "Resolved",
      severity: "Low"
    },
    {
      id: "REC-2023-012",
      productName: "Calcium Plus Tablets",
      lotNumber: "CP-2311A",
      reason: "Understrength active ingredient",
      date: "2023-11-05",
      resolutionDate: "2023-12-20",
      status: "Resolved",
      severity: "High"
    }
  ];

  const faqs = [
    {
      question: "What should I do if I have a recalled product?",
      answer: "Stop using the product immediately and contact our customer service for return instructions. If you have experienced any adverse effects, consult your healthcare provider."
    },
    {
      question: "How will I be compensated for a recalled product?",
      answer: "We provide full refunds for recalled products. In some cases, we may also offer replacement products or additional compensation depending on the situation."
    },
    {
      question: "How are recalls communicated to the public?",
      answer: "We notify customers through multiple channels including our website, email alerts, press releases, and direct communication with healthcare providers and pharmacies."
    },
    {
      question: "How can I check if my product is affected?",
      answer: "Check the lot number on your product packaging against the lot numbers listed in active recalls. If you're unsure, contact our customer service for assistance."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-red-600 to-orange-600 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-white/20 text-white border-white/30 mb-6">
              Product Safety
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Product Recalls & Safety Notices
            </h1>
            <p className="text-xl text-red-100 mb-8">
              Important safety information about recalled products and corrective actions
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input 
                type="text" 
                placeholder="Search recalls by product name or lot number..." 
                className="pl-12 pr-32 py-4 text-base rounded-full border-0 shadow-lg"
              />
              <Button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-red-600 hover:bg-red-700 text-white rounded-full px-6">
                Search
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Active Recalls */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                Active Recalls
              </h2>
              <p className="text-gray-600">
                Currently active product recalls requiring immediate attention
              </p>
            </div>
            <div className="flex items-center mt-4 md:mt-0">
              <Filter className="w-5 h-5 text-gray-500 mr-2" />
              <select className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>All Severity Levels</option>
                <option>High</option>
                <option>Medium</option>
                <option>Low</option>
              </select>
            </div>
          </div>

          {activeRecalls.length > 0 ? (
            <div className="space-y-6">
              {activeRecalls.map((recall, index) => (
                <Card key={index} className="border border-red-200 bg-red-50 hover:shadow-md transition-all">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row justify-between">
                      <div className="mb-4 md:mb-0 md:pr-6">
                        <div className="flex items-center mb-2">
                          <AlertTriangle className="w-5 h-5 text-red-600 mr-2" />
                          <Badge className="bg-red-600 text-white">
                            {recall.status}
                          </Badge>
                          <Badge variant="secondary" className="ml-2">
                            {recall.severity} Severity
                          </Badge>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                          {recall.productName}
                        </h3>
                        <p className="text-gray-600 mb-3">
                          <span className="font-semibold">Lot Number:</span> {recall.lotNumber}
                        </p>
                        <p className="text-gray-700 mb-3">
                          <span className="font-semibold">Reason:</span> {recall.reason}
                        </p>
                        <div className="flex items-center text-sm text-gray-500">
                          <Calendar className="w-4 h-4 mr-1" />
                          <span>Posted: {recall.date}</span>
                        </div>
                      </div>
                      <div className="flex flex-col items-start md:items-end">
                        <Button className="bg-red-600 hover:bg-red-700 text-white mb-3">
                          Report Affected Product
                        </Button>
                        <Button variant="outline">
                          <Download className="w-4 h-4 mr-2" />
                          Download Notice
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <Card className="border border-gray-200">
              <CardContent className="p-12 text-center">
                <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  No Active Recalls
                </h3>
                <p className="text-gray-600">
                  There are currently no active product recalls.
                </p>
              </CardContent>
            </Card>
          )}
        </div>
      </section>

      {/* Resolved Recalls */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                Resolved Recalls
              </h2>
              <p className="text-gray-600">
                Previously issued recalls that have been resolved
              </p>
            </div>
          </div>

          <div className="space-y-6">
            {resolvedRecalls.map((recall, index) => (
              <Card key={index} className="border border-gray-200 hover:shadow-md transition-all">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row justify-between">
                    <div className="mb-4 md:mb-0 md:pr-6">
                      <div className="flex items-center mb-2">
                        <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                        <Badge className="bg-green-600 text-white">
                          {recall.status}
                        </Badge>
                        <Badge variant="secondary" className="ml-2">
                          {recall.severity} Severity
                        </Badge>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {recall.productName}
                      </h3>
                      <p className="text-gray-600 mb-3">
                        <span className="font-semibold">Lot Number:</span> {recall.lotNumber}
                      </p>
                      <p className="text-gray-700 mb-3">
                        <span className="font-semibold">Reason:</span> {recall.reason}
                      </p>
                      <div className="flex items-center text-sm text-gray-500">
                        <Calendar className="w-4 h-4 mr-1" />
                        <span>Posted: {recall.date}</span>
                        <span className="mx-2">•</span>
                        <span>Resolved: {recall.resolutionDate}</span>
                      </div>
                    </div>
                    <div className="flex flex-col items-start md:items-end">
                      <Button variant="outline">
                        <Download className="w-4 h-4 mr-2" />
                        Download Notice
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-gray-600">
                Important information about product recalls and safety notices
              </p>
            </div>

            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <Card key={index} className="border border-gray-200">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-lg font-bold text-gray-900">
                      {faq.question}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      {faq.answer}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Support */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Have Questions About a Recall?
            </h2>
            <p className="text-xl text-blue-100 mb-12">
              Our product safety team is available to assist you
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="bg-white/10 border-white/20">
                <CardContent className="pt-8">
                  <Phone className="w-10 h-10 text-white mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">Product Safety Hotline</h3>
                  <p className="text-blue-100 mb-4">
                    For immediate assistance with recalled products
                  </p>
                  <Button variant="outline" className="bg-white text-blue-600 hover:bg-gray-100 border-white">
                    Call Now
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="bg-white/10 border-white/20">
                <CardContent className="pt-8">
                  <Mail className="w-10 h-10 text-white mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">Email Support</h3>
                  <p className="text-blue-100 mb-4">
                    Send detailed questions about product recalls
                  </p>
                  <Button variant="outline" className="bg-white text-blue-600 hover:bg-gray-100 border-white">
                    Send Email
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductRecalls;