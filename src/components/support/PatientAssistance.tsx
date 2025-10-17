import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { 
  Search, 
  FileText, 
  Users, 
  Mail, 
  Phone,
  Download,
  CheckCircle,
  Clock,
  DollarSign,
  Shield
} from "lucide-react";

const PatientAssistance = () => {
  const assistancePrograms = [
    {
      title: "Prescription Assistance Program",
      description: "Help patients who cannot afford their medications",
      eligibility: "Income-based, uninsured or underinsured",
      icon: DollarSign,
      color: "bg-blue-100 text-blue-600"
    },
    {
      title: "Co-pay Assistance Program",
      description: "Reduce out-of-pocket costs for eligible patients",
      eligibility: "Commercial insurance holders",
      icon: Shield,
      color: "bg-green-100 text-green-600"
    },
    {
      title: "Patient Savings Program",
      description: "Discounts on prescription medications",
      eligibility: "Most commercially insured patients",
      icon: CheckCircle,
      color: "bg-purple-100 text-purple-600"
    },
    {
      title: "Free Sample Program",
      description: "Complimentary medication samples for new patients",
      eligibility: "New patients with qualifying conditions",
      icon: Users,
      color: "bg-amber-100 text-amber-600"
    }
  ];

  const frequentlyRequested = [
    {
      title: "Patient Enrollment Forms",
      type: "PDF",
      size: "245 KB"
    },
    {
      title: "Program Guidelines",
      type: "PDF",
      size: "189 KB"
    },
    {
      title: "Eligibility Checklist",
      type: "DOC",
      size: "112 KB"
    },
    {
      title: "Income Verification Form",
      type: "PDF",
      size: "98 KB"
    }
  ];

  const faqs = [
    {
      question: "Who is eligible for patient assistance programs?",
      answer: "Eligibility varies by program but generally includes patients who are uninsured, underinsured, or meet specific income requirements. Most programs require proof of prescription and financial need."
    },
    {
      question: "How long does the application process take?",
      answer: "Most applications are processed within 5-10 business days. You will receive a status update via email or mail once a decision is made."
    },
    {
      question: "Can I apply for multiple assistance programs?",
      answer: "Yes, you may qualify for more than one program. Each program has different eligibility criteria, and our support team can help determine which programs are best for your situation."
    },
    {
      question: "What documents do I need to apply?",
      answer: "Commonly required documents include a valid prescription, proof of income, insurance information (if applicable), and identification. Specific requirements vary by program."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-white/20 text-white border-white/30 mb-6">
              Patient Assistance
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Patient Financial Assistance Programs
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Helping patients access medications regardless of their ability to pay
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input 
                type="text" 
                placeholder="Search patient assistance programs..." 
                className="pl-12 pr-32 py-4 text-base rounded-full border-0 shadow-lg"
              />
              <Button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-600 hover:bg-blue-700 text-white rounded-full px-6">
                Search
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Assistance Programs */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Assistance Programs
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive support programs designed to help patients access necessary medications
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {assistancePrograms.map((program, index) => {
              const Icon = program.icon;
              return (
                <Card key={index} className="border border-gray-200 hover:shadow-lg transition-all">
                  <CardHeader>
                    <div className={`w-12 h-12 rounded-lg ${program.color} flex items-center justify-center mb-4`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <CardTitle className="text-xl font-bold text-gray-900">
                      {program.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">
                      {program.description}
                    </p>
                    <Badge variant="secondary" className="text-xs">
                      {program.eligibility}
                    </Badge>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                How It Works
              </h2>
              <p className="text-lg text-gray-600">
                Simple steps to get financial assistance for your medications
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold">1</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Check Eligibility</h3>
                <p className="text-gray-600">
                  Determine which programs you qualify for based on your income, insurance status, and medical needs.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold">2</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Submit Application</h3>
                <p className="text-gray-600">
                  Complete the required forms and provide necessary documentation to support your application.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold">3</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Receive Assistance</h3>
                <p className="text-gray-600">
                  Once approved, you'll receive your medication or financial assistance according to program guidelines.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                Frequently Requested Resources
              </h2>
              <p className="text-gray-600">
                Downloadable forms and documents to help with your application
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {frequentlyRequested.map((resource, index) => (
              <Card key={index} className="border border-gray-200 hover:shadow-md transition-all">
                <CardContent className="p-6">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">
                        {resource.title}
                      </h3>
                      <div className="flex items-center text-sm text-gray-500">
                        <FileText className="w-4 h-4 mr-2" />
                        <span>{resource.type}</span>
                        <span className="mx-2">•</span>
                        <span>{resource.size}</span>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      <Download className="w-4 h-4 mr-2" />
                      Download
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-gray-600">
                Answers to common questions about patient assistance programs
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

            <div className="text-center mt-12">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg">
                View All FAQs
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Support */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Need Help With Patient Assistance?
            </h2>
            <p className="text-lg text-gray-600 mb-12">
              Our patient support specialists are here to help you navigate our assistance programs
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="border border-gray-200">
                <CardContent className="pt-8">
                  <Phone className="w-10 h-10 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">Phone Support</h3>
                  <p className="text-gray-600 mb-4">
                    Speak directly with a patient assistance specialist
                  </p>
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                    Call Now
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="border border-gray-200">
                <CardContent className="pt-8">
                  <Mail className="w-10 h-10 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">Email Support</h3>
                  <p className="text-gray-600 mb-4">
                    Send us your questions and concerns
                  </p>
                  <Button variant="outline">
                    Send Email
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="border border-gray-200">
                <CardContent className="pt-8">
                  <Clock className="w-10 h-10 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">Live Chat</h3>
                  <p className="text-gray-600 mb-4">
                    Get instant help during business hours
                  </p>
                  <Button variant="outline">
                    Start Chat
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

export default PatientAssistance;