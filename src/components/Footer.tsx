import React, { useState } from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, Youtube, ChevronRight, Send, AlertCircle, FileText, Stethoscope, Clock } from 'lucide-react';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Company: [
      { name: "About Us", href: "/about" },
      { name: "Leadership Team", href: "/leadership" },
      { name: "Careers", href: "/careers" },
      { name: "Press & Media", href: "/press" },
      { name: "Contact Us", href: "/contact" },
      { name: "Investor Relations", href: "/investors" }
    ],
    Products: [
      { name: "Cardiovascular", href: "/products/cardiovascular" },
      { name: "Neurological", href: "/products/neurological" },
      { name: "Pain Management", href: "/products/pain" },
      { name: "Metabolic Disorders", href: "/products/metabolic" },
      { name: "Oncology", href: "/products/oncology" },
      { name: "All Products", href: "/products" }
    ],
    Resources: [
      { name: "Research Papers", href: "/research" },
      { name: "Clinical Trials", href: "/trials" },
      { name: "Patient Resources", href: "/patients" },
      { name: "Healthcare Providers", href: "/providers" },
      // { name: "Drug Information", href: "/drug-info" },
      { name: "Medical Education", href: "/education" }
    ],
    Support: [
      { name: "Help Center", href: "/help" },
      { name: "Patient Assistance", href: "/patient-assistance" },
      { name: "Product Support", href: "/support" },
      { name: "Report Adverse Event", href: "/adverse-events" },
      { name: "Product Recalls", href: "/recalls" },
      { name: "Accessibility", href: "/accessibility" }
    ]
  };

  const socialLinks = [
    { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
    { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
    { icon: Youtube, href: "https://youtube.com", label: "YouTube" }
  ];

  const quickActions = [
    { 
      icon: AlertCircle, 
      title: "Report Adverse Event",
      description: "24/7 Safety Reporting",
      href: "/adverse-events",
      color: "text-red-400"
    },
    { 
      icon: FileText, 
      title: "Prescribing Information",
      description: "Full Product Details",
      href: "/prescribing-info",
      color: "text-blue-400"
    },
    { 
      icon: Stethoscope, 
      title: "Medical Information",
      description: "For Healthcare Professionals",
      href: "/medical-info",
      color: "text-cyan-400"
    },
    { 
      icon: Clock, 
      title: "Patient Assistance",
      description: "Financial Support Programs",
      href: "/patient-assistance",
      color: "text-purple-400"
    }
  ];

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => {
        setSubscribed(false);
        setEmail('');
      }, 3000);
    }
  };

  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-black-900 to-slate-900">
      {/* Grid Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(to right, rgba(59, 130, 246, 0.5) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(59, 130, 246, 0.5) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      {/* Animated gradient orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>

      {/* Content */}
      <div className="relative">
        {/* Quick Actions Section */}
        <div className="border-b border-blue-800/30">
          <div className="container mx-auto px-4 py-8 sm:py-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {quickActions.map((action, index) => (
                <a
                  key={index}
                  href={action.href}
                  className="group p-4 sm:p-6 rounded-xl border border-blue-800/30 bg-slate-800/50 backdrop-blur-sm hover:bg-slate-800/80 hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/20 transition-all transform hover:-translate-y-1"
                  style={{ transitionDelay: `${index * 50}ms` }}
                >
                  <action.icon className={`w-8 h-8 ${action.color} mb-3 group-hover:scale-110 transition-transform`} />
                  <h4 className="font-bold text-white mb-1 text-sm sm:text-base">{action.title}</h4>
                  <p className="text-xs sm:text-sm text-slate-400">{action.description}</p>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="border-b border-blue-800/30">
          <div className="container mx-auto px-4 py-8 sm:py-12">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-center">
                <div className="text-center md:text-left">
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                    Stay Updated on Medical Advances
                  </h3>
                  <p className="text-sm sm:text-base text-slate-300">
                    Subscribe for latest research, product updates, and healthcare insights.
                  </p>
                </div>
                <div className="relative">
                  <div className="flex flex-col sm:flex-row gap-2">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      className="flex-1 px-4 py-3 border border-blue-700/50 bg-slate-800/50 backdrop-blur-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-white placeholder-slate-400 text-sm sm:text-base"
                    />
                    <button
                      onClick={handleSubscribe}
                      className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105 flex items-center justify-center gap-2 font-medium whitespace-nowrap text-sm sm:text-base shadow-lg shadow-blue-500/30"
                    >
                      <Send className="w-4 h-4" />
                      Subscribe
                    </button>
                  </div>
                  {subscribed && (
                    <div className="absolute -bottom-8 left-0 text-green-400 text-sm font-medium animate-pulse">
                      ✓ Successfully subscribed!
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="container mx-auto px-4 py-8 sm:py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8 mb-8 sm:mb-12">
            {/* Brand Column */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-2 mb-4 group">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center transform group-hover:rotate-6 transition-transform shadow-lg shadow-blue-500/50">
                  <span className="text-white font-bold text-xl sm:text-2xl">Y</span>
                </div>
                <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                 TNAAR HEALTHCARE
                </span>
              </div>
              <p className="text-sm sm:text-base text-slate-300 mb-6 leading-relaxed">
                Committed to improving patient lives through cutting-edge pharmaceutical research and innovative treatments.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-3 text-sm text-slate-300 hover:text-blue-400 transition-colors group">
                  <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span>H.NO.5-141-36/A/1, CHENGICHERLA,MEDCHAL-MALKAJGIRI, HYDERABAD-500039, TELANGANA, INDIA</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-300 hover:text-blue-400 transition-colors group">
                  <Phone className="w-4 h-4 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <a href="tel:+1-800-742-7621">+91 1234567890</a>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-300 hover:text-blue-400 transition-colors group">
                  <Mail className="w-4 h-4 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <a href="mailto:tnaarhealthcare@gmail.com">tnaarhealthcare@gmail.com</a>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-slate-800/50 backdrop-blur-sm border border-blue-800/30 flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:border-blue-500 hover:text-white transition-all transform hover:scale-110 hover:-translate-y-1 shadow-lg"
                    style={{ transitionDelay: `${index * 50}ms` }}
                  >
                    <social.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Links Columns */}
            {Object.entries(footerLinks).map(([category, links], categoryIndex) => (
              <div key={category} className="animate-fadeIn" style={{ animationDelay: `${categoryIndex * 100}ms` }}>
                <h3 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">
                  {category}
                </h3>
                <ul className="space-y-2.5">
                  {links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a 
                        href={link.href}
                        className="text-sm text-slate-400 hover:text-blue-400 transition-all flex items-center gap-1 group"
                      >
                        <ChevronRight className="w-3 h-3 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all text-blue-400" />
                        <span>{link.name}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-blue-800/30 pt-6 sm:pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex flex-col md:flex-row items-center gap-2 sm:gap-4 text-xs sm:text-sm text-slate-400 text-center md:text-left">
                <p>© {currentYear} Raja.All rights reserved.</p>
                <span className="hidden md:block">•</span>
                <p className="text-xs">TNAAR HEALTHCARE 15 April 2025</p>
              </div>
              <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
                <a href="/privacy" className="text-xs sm:text-sm text-slate-400 hover:text-blue-400 transition-colors">
                  Privacy Policy
                </a>
                <a href="/terms" className="text-xs sm:text-sm text-slate-400 hover:text-blue-400 transition-colors">
                  Terms of Service
                </a>
                <a href="/cookies" className="text-xs sm:text-sm text-slate-400 hover:text-blue-400 transition-colors">
                  Cookie Settings
                </a>
                <a href="/compliance" className="text-xs sm:text-sm text-slate-400 hover:text-blue-400 transition-colors">
                  Compliance
                </a>
                <a href="/sitemap" className="text-xs sm:text-sm text-slate-400 hover:text-blue-400 transition-colors">
                  Sitemap
                </a>
              </div>
            </div>
          </div>

          {/* Disclaimer */}
          {/* <div className="mt-6 sm:mt-8 p-4 bg-amber-900/30 backdrop-blur-sm border border-amber-700/30 rounded-lg">
            <p className="text-xs text-amber-200/90 text-center leading-relaxed">
              <strong>Important Safety Information:</strong> This website is intended for healthcare professionals and patients seeking information about our products. 
              Always consult your healthcare provider before starting or stopping any medication. To report adverse events, call+91 12334567890 or visit www.midsupplypro.com.
            </p>
          </div> */}
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out forwards;
        }
      `}</style>
    </footer>
  );
};

export default Footer;