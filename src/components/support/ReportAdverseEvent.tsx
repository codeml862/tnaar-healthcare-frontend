import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { 
  AlertTriangle,
  FileText, 
  Users, 
  Mail, 
  Phone,
  Download,
  Clock,
  CheckCircle,
  Calendar,
  User,
  Pill,
  FileSpreadsheet
} from "lucide-react";
import { useState } from "react";

const ReportAdverseEvent = () => {
  const [formData, setFormData] = useState({
    reporterName: "",
    reporterEmail: "",
    reporterPhone: "",
    patientId: "",
    productName: "",
    batchNumber: "",
    eventDate: "",
    eventDescription: "",
    severity: "moderate",
    outcome: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would submit to a backend service
    console.log("Adverse event report submitted:", formData);
    alert("Thank you for submitting your adverse event report. We will review it promptly.");
  };

  const reportingGuidelines = [
    {
      title: "What to Report",
      description: "Any unexpected side effects, quality issues, or adverse reactions related to our products",
      icon: AlertTriangle,
      color: "bg-red-100 text-red-600"
    },
    {
      title: "When to Report",
      description: "Immediately upon discovery of any adverse event or quality concern",
      icon: Clock,
      color: "bg-blue-100 text-blue-600"
    },
    {
      title: "How to Report",
      description: "Complete this form or contact our safety department directly",
      icon: FileText,
      color: "bg-green-100 text-green-600"
    },
    {
      title: "Confidentiality",
      description: "All reports are handled with strict confidentiality",
      icon: CheckCircle,
      color: "bg-purple-100 text-purple-600"
    }
  ];

  const faqs = [
    {
      question: "What constitutes an adverse event?",
      answer: "An adverse event is any untoward medical occurrence associated with the use of a pharmaceutical product, regardless of whether there is a causal relationship with the treatment."
    },
    {
      question: "Do I need to be certain the product caused the event?",
      answer: "No, you only need to suspect a relationship. Our safety team will evaluate all reports thoroughly."
    },
    {
      question: "Is my report confidential?",
      answer: "Yes, all adverse event reports are treated with strict confidentiality and used solely for safety monitoring purposes."
    },
    {
      question: "What happens after I submit a report?",
      answer: "Our pharmacovigilance team reviews all reports and may contact you for additional information. Serious events are reported to regulatory authorities as required."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-red-600 to-orange-600 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-white/20 text-white border-white/30 mb-6">
              Safety Reporting
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Report Adverse Event
            </h1>
            <p className="text-xl text-red-100 mb-8">
              Help us ensure patient safety by reporting any adverse events or quality issues
            </p>
          </div>
        </div>
      </div>

      {/* Reporting Guidelines */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Adverse Event Reporting Guidelines
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Important information about when and how to report adverse events
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {reportingGuidelines.map((guideline, index) => {
              const Icon = guideline.icon;
              return (
                <Card key={index} className="border border-gray-200 hover:shadow-lg transition-all">
                  <CardHeader>
                    <div className={`w-12 h-12 rounded-lg ${guideline.color} flex items-center justify-center mb-4`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <CardTitle className="text-xl font-bold text-gray-900">
                      {guideline.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      {guideline.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Report Form */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Adverse Event Report Form
              </h2>
              <p className="text-lg text-gray-600">
                Please provide as much detail as possible to help us investigate
              </p>
            </div>

            <Card className="border border-gray-200">
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Your Name *
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <Input
                          type="text"
                          name="reporterName"
                          value={formData.reporterName}
                          onChange={handleInputChange}
                          placeholder="Enter your full name"
                          className="pl-10"
                          required
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <Input
                          type="email"
                          name="reporterEmail"
                          value={formData.reporterEmail}
                          onChange={handleInputChange}
                          placeholder="your.email@example.com"
                          className="pl-10"
                          required
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <Input
                          type="tel"
                          name="reporterPhone"
                          value={formData.reporterPhone}
                          onChange={handleInputChange}
                          placeholder="(123) 456-7890"
                          className="pl-10"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Patient ID (if applicable)
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <Input
                          type="text"
                          name="patientId"
                          value={formData.patientId}
                          onChange={handleInputChange}
                          placeholder="Patient identification number"
                          className="pl-10"
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Product Name *
                      </label>
                      <div className="relative">
                        <Pill className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <Input
                          type="text"
                          name="productName"
                          value={formData.productName}
                          onChange={handleInputChange}
                          placeholder="Name of the product"
                          className="pl-10"
                          required
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Batch/Lot Number
                      </label>
                      <Input
                        type="text"
                        name="batchNumber"
                        value={formData.batchNumber}
                        onChange={handleInputChange}
                        placeholder="Batch or lot number"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Date of Event *
                      </label>
                      <div className="relative">
                        <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <Input
                          type="date"
                          name="eventDate"
                          value={formData.eventDate}
                          onChange={handleInputChange}
                          className="pl-10"
                          required
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Severity
                      </label>
                      <select
                        name="severity"
                        value={formData.severity}
                        onChange={handleInputChange}
                        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <option value="mild">Mild</option>
                        <option value="moderate">Moderate</option>
                        <option value="severe">Severe</option>
                        <option value="life-threatening">Life-threatening</option>
                        <option value="fatal">Fatal</option>
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Event Description *
                    </label>
                    <Textarea
                      name="eventDescription"
                      value={formData.eventDescription}
                      onChange={handleInputChange}
                      placeholder="Please describe the adverse event in detail, including symptoms, duration, and any treatment provided"
                      rows={5}
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Outcome
                    </label>
                    <Textarea
                      name="outcome"
                      value={formData.outcome}
                      onChange={handleInputChange}
                      placeholder="What was the outcome of the event? (recovered, ongoing, sequelae, fatal, unknown)"
                      rows={3}
                    />
                  </div>
                  
                  <div className="pt-6">
                    <Button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 rounded-lg">
                      Submit Adverse Event Report
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
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
                Important information about adverse event reporting
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

      {/* Additional Resources */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Additional Resources
            </h2>
            <p className="text-lg text-gray-600 mb-12">
              Download forms and guidelines for adverse event reporting
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="border border-gray-200">
                <CardContent className="pt-8">
                  <FileSpreadsheet className="w-10 h-10 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">Reporting Form</h3>
                  <p className="text-gray-600 mb-4">
                    Official adverse event reporting form
                  </p>
                  <Button variant="outline" className="flex items-center mx-auto">
                    <Download className="w-4 h-4 mr-2" />
                    Download PDF
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="border border-gray-200">
                <CardContent className="pt-8">
                  <FileText className="w-10 h-10 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">Guidelines</h3>
                  <p className="text-gray-600 mb-4">
                    Comprehensive reporting guidelines
                  </p>
                  <Button variant="outline" className="flex items-center mx-auto">
                    <Download className="w-4 h-4 mr-2" />
                    Download PDF
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="border border-gray-200">
                <CardContent className="pt-8">
                  <Phone className="w-10 h-10 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">Direct Line</h3>
                  <p className="text-gray-600 mb-4">
                    For immediate reporting of serious events
                  </p>
                  <Button variant="outline">
                    Call Now
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

export default ReportAdverseEvent;