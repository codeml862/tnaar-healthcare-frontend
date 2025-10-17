import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  AccessibilityIcon as Accessibility, 
  Volume2, 
  Eye, 
  MousePointer,
  Keyboard,
  Contrast,
  ZoomIn,
  FileText, 
  Mail, 
  Phone,
  Download,
  CheckCircle
} from "lucide-react";

const AccessibilityPage = () => {
  const accessibilityFeatures = [
    {
      icon: Contrast,
      title: "Visual Adjustments",
      description: "High contrast mode, customizable text size, and color adjustment options",
      features: ["High Contrast Mode", "Text Size Controls", "Color Filters", "Dark Mode"]
    },
    {
      icon: Volume2,
      title: "Audio Support",
      description: "Screen reader compatibility and audio descriptions for multimedia content",
      features: ["Screen Reader Compatible", "Audio Descriptions", "Text-to-Speech", "Sound Alerts"]
    },
    {
      icon: Keyboard,
      title: "Keyboard Navigation",
      description: "Full keyboard accessibility for users who cannot use a mouse",
      features: ["Full Keyboard Control", "Keyboard Shortcuts", "Focus Indicators", "Skip Navigation"]
    },
    {
      icon: MousePointer,
      title: "Motor Assistance",
      description: "Adjustable timing and alternative input device support",
      features: ["Adjustable Timing", "Voice Control", "Switch Access", "Touch Support"]
    }
  ];

  const guidelines = [
    {
      title: "WCAG 2.1 AA Compliance",
      description: "Our platform meets Level AA success criteria of the Web Content Accessibility Guidelines"
    },
    {
      title: "Section 508 Compliance",
      description: "We adhere to the accessibility standards outlined in Section 508 of the Rehabilitation Act"
    },
    {
      title: "ADA Compliance",
      description: "Our digital services comply with the Americans with Disabilities Act accessibility requirements"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-white/20 text-white border-white/30 mb-6">
              Accessibility
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Accessibility Commitment
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              We are committed to making our digital services accessible to all users, including those with disabilities
            </p>
          </div>
        </div>
      </div>

      {/* Accessibility Statement */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Accessibility Commitment
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                At TNAAR, we believe in equal access to healthcare information and services for all users. 
                We are continuously working to improve the accessibility of our digital platforms.
              </p>
              
              <Card className="border border-gray-200 bg-blue-50">
                <CardContent className="p-8">
                  <div className="flex items-center justify-center mb-4">
                    <Accessibility className="w-12 h-12 text-blue-600 mr-4" />
                    <h3 className="text-2xl font-bold text-gray-900">
                      Equal Access for All
                    </h3>
                  </div>
                  <p className="text-gray-700 text-lg">
                    Our commitment to accessibility means that people with disabilities can use our website, 
                    mobile applications, and digital services with ease and independence.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Accessibility Features */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Accessibility Features
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our platform includes a variety of features designed to enhance usability for all users
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {accessibilityFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="border border-gray-200 hover:shadow-lg transition-all">
                  <CardHeader>
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mr-4">
                        <Icon className="w-6 h-6" />
                      </div>
                      <CardTitle className="text-xl font-bold text-gray-900">
                        {feature.title}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">
                      {feature.description}
                    </p>
                    <ul className="space-y-2">
                      {feature.features.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* How to Use */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                How to Use Accessibility Features
              </h2>
              <p className="text-lg text-gray-600">
                Easily access and customize our accessibility options to suit your needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold">1</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Access Settings</h3>
                <p className="text-gray-600">
                  Click the accessibility icon in the footer of any page to open the accessibility menu.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold">2</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Customize Options</h3>
                <p className="text-gray-600">
                  Select from various accessibility options including text size, contrast, and navigation preferences.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold">3</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Save Preferences</h3>
                <p className="text-gray-600">
                  Your preferences are saved automatically and will be applied whenever you visit our site.
                </p>
              </div>
            </div>

            <Card className="border border-gray-200">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Keyboard Shortcuts
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <p className="font-semibold text-gray-900 mb-2">Navigation</p>
                    <ul className="space-y-2">
                      <li className="flex justify-between">
                        <span>Tab</span>
                        <span className="text-gray-600">Move to next focusable element</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Shift + Tab</span>
                        <span className="text-gray-600">Move to previous focusable element</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Enter</span>
                        <span className="text-gray-600">Activate focused element</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-2">Accessibility Menu</p>
                    <ul className="space-y-2">
                      <li className="flex justify-between">
                        <span>Alt + 0</span>
                        <span className="text-gray-600">Open accessibility menu</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Esc</span>
                        <span className="text-gray-600">Close accessibility menu</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Compliance */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Accessibility Compliance
              </h2>
              <p className="text-lg text-gray-600">
                Our commitment to meeting international accessibility standards
              </p>
            </div>

            <div className="space-y-6">
              {guidelines.map((guideline, index) => (
                <Card key={index} className="border border-gray-200">
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-green-500 mt-1 mr-4 flex-shrink-0" />
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                          {guideline.title}
                        </h3>
                        <p className="text-gray-600">
                          {guideline.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Feedback */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Help Us Improve
            </h2>
            <p className="text-lg text-gray-600 mb-12">
              Your feedback helps us make our services more accessible to everyone
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="border border-gray-200">
                <CardContent className="pt-8">
                  <Mail className="w-10 h-10 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">Email Feedback</h3>
                  <p className="text-gray-600 mb-4">
                    Share your accessibility experience with us
                  </p>
                  <Button variant="outline">
                    Send Email
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="border border-gray-200">
                <CardContent className="pt-8">
                  <Phone className="w-10 h-10 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">Accessibility Hotline</h3>
                  <p className="text-gray-600 mb-4">
                    Call our dedicated accessibility support line
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

export default AccessibilityPage;