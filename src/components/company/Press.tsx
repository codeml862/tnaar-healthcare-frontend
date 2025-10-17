import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Download, ExternalLink } from "lucide-react";

const Press = () => {
  const pressReleases = [
    {
      title: "Prescribr Cloud Announces $50M Series B Funding to Expand Healthcare Platform",
      date: "2023-11-15",
      summary: "Healthcare technology company secures additional funding to accelerate product development and market expansion.",
      category: "Funding"
    },
    {
      title: "New Partnership with Major Hospital Network Enhances Patient Care Through Digital Prescriptions",
      date: "2023-09-22",
      summary: "Collaboration with HealthFirst Network brings Prescribr Cloud's platform to 500+ healthcare facilities.",
      category: "Partnership"
    },
    {
      title: "Prescribr Cloud Achieves HIPAA Compliance for Enhanced Data Security",
      date: "2023-07-10",
      summary: "Platform meets stringent healthcare data protection standards, ensuring patient privacy and security.",
      category: "Compliance"
    },
    {
      title: "CEO Dr. Sarah Johnson Named to Healthcare Technology Leaders List",
      date: "2023-05-18",
      summary: "Recognition for innovative leadership in digital health transformation.",
      category: "Recognition"
    },
    {
      title: "Prescribr Cloud Launches AI-Powered Drug Interaction Checker",
      date: "2023-03-30",
      summary: "New feature helps healthcare providers identify potential medication conflicts in real-time.",
      category: "Product"
    },
    {
      title: "Company Expands to European Market with GDPR-Compliant Platform",
      date: "2023-01-12",
      summary: "International expansion brings secure prescription management to healthcare providers across Europe.",
      category: "Expansion"
    }
  ];

  const mediaAssets = [
    {
      title: "Company Logo (Primary)",
      format: "PNG, SVG",
      size: "2MB",
      url: "#"
    },
    {
      title: "Company Logo (White Background)",
      format: "PNG, SVG",
      size: "1.8MB",
      url: "#"
    },
    {
      title: "Product Screenshots",
      format: "PNG, JPG",
      size: "15MB",
      url: "#"
    },
    {
      title: "Executive Headshots",
      format: "JPG",
      size: "8MB",
      url: "#"
    },
    {
      title: "Brand Guidelines",
      format: "PDF",
      size: "3MB",
      url: "#"
    }
  ];

  const mediaContacts = [
    {
      name: "Jennifer Walsh",
      title: "Head of Communications",
      email: "press@prescribrcloud.com",
      phone: "+1 (555) 123-4567"
    },
    {
      name: "Michael Torres",
      title: "Senior PR Manager",
      email: "media@prescribrcloud.com",
      phone: "+1 (555) 123-4568"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <Badge className="bg-white/20 text-white border-white/30 mb-6">
            Press & Media
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Media Resources
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-blue-100">
            Access our latest news, press releases, and media assets
          </p>
        </div>
      </div>

      {/* Latest News */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Latest News
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Stay up to date with Prescribr Cloud announcements and achievements
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pressReleases.map((release, index) => (
              <Card key={index} className="border border-gray-200 hover:shadow-lg transition-all">
                <CardHeader>
                  <div className="flex justify-between items-start mb-3">
                    <Badge className="bg-blue-50 text-blue-700">
                      {release.category}
                    </Badge>
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar className="w-4 h-4 mr-1" />
                      {new Date(release.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
                    </div>
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">
                    {release.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    {release.summary}
                  </p>
                  <button className="text-blue-600 hover:text-blue-800 font-medium flex items-center">
                    Read Full Release
                    <ExternalLink className="w-4 h-4 ml-1" />
                  </button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors">
              View All Press Releases
            </button>
          </div>
        </div>
      </section>

      {/* Media Assets */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Media Assets
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Download high-resolution logos, images, and brand resources
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {mediaAssets.map((asset, index) => (
              <Card key={index} className="border border-gray-200">
                <CardContent className="pt-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-lg font-bold text-gray-900">
                      {asset.title}
                    </h3>
                    <Download className="w-5 h-5 text-gray-400" />
                  </div>
                  <div className="space-y-2 text-sm text-gray-600">
                    <p><span className="font-medium">Format:</span> {asset.format}</p>
                    <p><span className="font-medium">Size:</span> {asset.size}</p>
                  </div>
                  <button className="mt-4 text-blue-600 hover:text-blue-800 font-medium flex items-center">
                    Download
                    <ExternalLink className="w-4 h-4 ml-1" />
                  </button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Media Contact */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Media Contact
              </h2>
              <p className="text-lg text-gray-600">
                For media inquiries, interview requests, or press materials
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {mediaContacts.map((contact, index) => (
                <Card key={index} className="border border-gray-200">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-gray-900">
                      {contact.name}
                    </CardTitle>
                    <p className="text-blue-600">
                      {contact.title}
                    </p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <p className="text-gray-600">
                        <span className="font-medium">Email:</span> {contact.email}
                      </p>
                      <p className="text-gray-600">
                        <span className="font-medium">Phone:</span> {contact.phone}
                      </p>
                    </div>
                    <button className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors">
                      Contact
                    </button>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-16 bg-blue-50 border border-blue-200 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Press Kit Request
              </h3>
              <p className="text-gray-600 mb-6">
                For comprehensive press kits including executive bios, company fact sheets, 
                and high-resolution imagery, please contact our media team.
              </p>
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors">
                Request Press Kit
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* In The News */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Prescribr Cloud in the News
            </h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              See what industry publications are saying about our innovations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white/10 p-6 rounded-lg">
              <div className="text-lg font-bold mb-3">HealthTech Journal</div>
              <p className="text-blue-100 mb-4">
                "Prescribr Cloud's platform is revolutionizing how prescriptions are managed in modern healthcare settings."
              </p>
              <a href="#" className="text-white font-medium flex items-center">
                Read Article
                <ExternalLink className="w-4 h-4 ml-1" />
              </a>
            </div>
            
            <div className="bg-white/10 p-6 rounded-lg">
              <div className="text-lg font-bold mb-3">Digital Health Today</div>
              <p className="text-blue-100 mb-4">
                "The most innovative prescription management solution we've seen in the past decade."
              </p>
              <a href="#" className="text-white font-medium flex items-center">
                Read Article
                <ExternalLink className="w-4 h-4 ml-1" />
              </a>
            </div>
            
            <div className="bg-white/10 p-6 rounded-lg">
              <div className="text-lg font-bold mb-3">Tech in Medicine</div>
              <p className="text-blue-100 mb-4">
                "A game-changer for healthcare providers looking to streamline their prescription workflows."
              </p>
              <a href="#" className="text-white font-medium flex items-center">
                Read Article
                <ExternalLink className="w-4 h-4 ml-1" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Press;