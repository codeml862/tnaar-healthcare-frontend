import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  TrendingUp, 
  DollarSign, 
  BarChart3, 
  Users, 
  Target, 
  Calendar,
  Download,
  ExternalLink
} from "lucide-react";

const Investors = () => {
  const financialHighlights = [
    {
      icon: TrendingUp,
      title: "Revenue Growth",
      value: "$12.4M",
      change: "+42% YoY",
      description: "Strong growth driven by expanding customer base"
    },
    {
      icon: Users,
      title: "Active Users",
      value: "125K+",
      change: "+65% YoY",
      description: "Healthcare providers and patients using our platform"
    },
    {
      icon: Target,
      title: "Market Expansion",
      value: "12 Countries",
      change: "+4 New Markets",
      description: "Global presence across North America, Europe, and Asia"
    },
    {
      icon: BarChart3,
      title: "Customer Retention",
      value: "94%",
      change: "+3% YoY",
      description: "Industry-leading retention rate"
    }
  ];

  const documents = [
    {
      title: "Q3 2023 Financial Report",
      date: "2023-11-01",
      type: "PDF",
      size: "2.4MB"
    },
    {
      title: "Annual Report 2022",
      date: "2023-03-15",
      type: "PDF",
      size: "4.1MB"
    },
    {
      title: "Investor Presentation Q3 2023",
      date: "2023-11-01",
      type: "PPT",
      size: "3.2MB"
    },
    {
      title: "SEC Filings",
      date: "Ongoing",
      type: "PDF",
      size: "Various"
    }
  ];

  const upcomingEvents = [
    {
      title: "Q3 2023 Earnings Call",
      date: "2023-11-15",
      time: "10:00 AM PST",
      description: "Quarterly financial results and business update"
    },
    {
      title: "Healthcare Innovation Summit",
      date: "2023-12-05",
      time: "All Day",
      description: "Presenting our latest technology advances"
    },
    {
      title: "Annual Investor Day",
      date: "2024-02-20",
      time: "9:00 AM PST",
      description: "Comprehensive business strategy and roadmap"
    }
  ];

  const leadership = [
    {
      name: "Dr. Sarah Johnson",
      title: "Chief Executive Officer",
      experience: "20+ years in healthcare technology"
    },
    {
      name: "Michael Chen",
      title: "Chief Financial Officer",
      experience: "Former CFO at HealthTech Solutions"
    },
    {
      name: "Emma Rodriguez",
      title: "Chief Product Officer",
      experience: "Led product teams at major tech companies"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <Badge className="bg-white/20 text-white border-white/30 mb-6">
            Investor Relations
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Investing in the Future of Healthcare
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-blue-100 mb-8">
            Join us in transforming healthcare through innovative technology solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-blue-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg">
              Download Investor Kit
            </Button>
            <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white/10 font-semibold py-3 px-8 rounded-lg">
              Contact IR Team
            </Button>
          </div>
        </div>
      </div>

      {/* Financial Highlights */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Financial Highlights
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Key metrics demonstrating our strong growth trajectory
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {financialHighlights.map((highlight, index) => {
              const Icon = highlight.icon;
              return (
                <Card key={index} className="border border-gray-200 hover:shadow-lg transition-all">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <CardTitle className="text-xl font-bold text-gray-900">
                      {highlight.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-2">
                      <span className="text-2xl font-bold text-gray-900">{highlight.value}</span>
                      <span className="text-green-600 font-medium ml-2">{highlight.change}</span>
                    </div>
                    <p className="text-gray-600 text-sm">
                      {highlight.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Financial Documents */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Financial Documents
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Access our latest financial reports and investor presentations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {documents.map((document, index) => (
              <Card key={index} className="border border-gray-200">
                <CardContent className="pt-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-lg font-bold text-gray-900">
                      {document.title}
                    </h3>
                    <Download className="w-5 h-5 text-gray-400" />
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="space-y-1 text-sm text-gray-600">
                      <p className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2" />
                        {new Date(document.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
                      </p>
                      <p><span className="font-medium">Format:</span> {document.type} ({document.size})</p>
                    </div>
                    <Button variant="outline" size="sm" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                      Download
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Upcoming Events
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Join us at these upcoming investor events and presentations
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {upcomingEvents.map((event, index) => (
              <Card key={index} className="border border-gray-200">
                <CardContent className="pt-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {event.title}
                      </h3>
                      <p className="text-gray-600">
                        {event.description}
                      </p>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg text-center">
                      <p className="font-bold text-gray-900">
                        {new Date(event.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                      </p>
                      <p className="text-sm text-gray-600">
                        {event.time}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Leadership Team
            </h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              The experienced executives guiding our company's growth
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {leadership.map((leader, index) => (
              <Card key={index} className="bg-white/10 border-white/20">
                <CardHeader>
                  <div className="w-16 h-16 rounded-full bg-white/20 mb-4" />
                  <CardTitle className="text-xl font-bold text-white">
                    {leader.name}
                  </CardTitle>
                  <p className="text-blue-200">
                    {leader.title}
                  </p>
                </CardHeader>
                <CardContent>
                  <p className="text-blue-100">
                    {leader.experience}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-16">
            <Button variant="outline" className="bg-white text-blue-600 hover:bg-gray-100 border-white font-semibold py-3 px-8">
              View Full Leadership Profile
            </Button>
          </div>
        </div>
      </section>

      {/* Investment Opportunity */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Investment Opportunity
            </h2>
            <p className="text-lg text-gray-600 mb-12">
              The healthcare technology market is experiencing unprecedented growth. 
              Prescribr Cloud is positioned to capture significant market share with our 
              innovative platform and experienced team.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="bg-blue-50 p-6 rounded-lg">
                <DollarSign className="w-10 h-10 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Market Size</h3>
                <p className="text-gray-600">
                  $400B+ global digital health market with 15% annual growth
                </p>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-lg">
                <Target className="w-10 h-10 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Our Position</h3>
                <p className="text-gray-600">
                  Top 5 prescription management platforms with 25% market share growth
                </p>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-lg">
                <TrendingUp className="w-10 h-10 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Growth Potential</h3>
                <p className="text-gray-600">
                  Projected 300% revenue growth over the next 5 years
                </p>
              </div>
            </div>
            
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                For Investment Inquiries
              </h3>
              <p className="text-gray-600 mb-6">
                Contact our Investor Relations team to learn more about investment opportunities 
                and schedule a meeting with our leadership team.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg">
                  Contact IR Team
                </Button>
                <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold py-3 px-8 rounded-lg">
                  Schedule Meeting
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Investors;