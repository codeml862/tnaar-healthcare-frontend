import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, Phone, Mail, MapPin, Pill } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle hash scrolling
  useEffect(() => {
    const scrollToSection = () => {
      if (location.hash) {
        const element = document.querySelector(location.hash);
        if (element) {
          setTimeout(() => {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }, 100);
        }
      }
    };

    // Scroll after a short delay to ensure DOM is ready
    if (location.pathname === '/') {
      scrollToSection();
    }
  }, [location]);

  const handleHashLinkClick = (e, hash) => {
    e.preventDefault();
    const element = document.querySelector(hash);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      // Update URL without page refresh
      window.history.pushState(null, null, hash);
    }
  };

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "#about" },
    {
      name: "Products",
      href: "/products",
      dropdown: [
        { name: "Prescription Medicines", href: "/products/prescription-medicines" },
        { name: "OTC Products", href: "/products/otc-products" },
        { name: "Supplements", href: "/products/supplements" },
        { name: "Medical Devices", href: "/products/medical-devices" },
      ],
    },
    {
      name: "Services",
      href: "/services",
      dropdown: [
        { name: "Clinical Research", href: "/services/clinical-research" },
        { name: "Drug Manufacturing", href: "/services/drug-manufacturing" },
        { name: "Quality Assurance", href: "/services/quality-assurance" },
        { name: "Regulatory Affairs", href: "/services/regulatory-affairs" },
      ],
    },
    { name: "Research", href: "/research" },
    { name: "Contact", href: "#contact" },
    { name: "Tablets", href: "/tablets" },
    // { name: "Request Quote", href: "/request-quote" },
  ];

  // Add useEffect to handle scrolling when navigating to homepage with hash
  useEffect(() => {
    if (location.pathname === '/' && location.hash) {
      // Delay to ensure DOM is fully loaded
      setTimeout(() => {
        const element = document.querySelector(location.hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [location]);

  return (
    <>
      {/* Top Info Bar */}
      <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-cyan-900 text-white py-2 text-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-between gap-2 sm:gap-4">
            <div className="flex flex-wrap items-center gap-3 sm:gap-6">
              <a href="tel:+911234567890" className="flex items-center gap-1 sm:gap-2 hover:text-cyan-300 transition-colors">
                <Phone size={12} className="sm:w-3.5 sm:h-3.5" />
                <span className="hidden sm:inline text-xs sm:text-sm">+91 1234567890</span>
              </a>
              <a href="mailto:tnaarhealthcare@gmail.com" className="flex items-center gap-1 sm:gap-2 hover:text-cyan-300 transition-colors">
                <Mail size={12} className="sm:w-3.5 sm:h-3.5" />
                <span className="hidden md:inline text-xs sm:text-sm">tnaarhealthcare@gmail.com</span>
              </a>
              <div className="flex items-center gap-1 sm:gap-2 text-cyan-200">
                <MapPin size={12} className="sm:w-3.5 sm:h-3.5" />
                <span className="hidden lg:inline text-xs sm:text-sm">Telangana</span>
              </div>
            </div>
            <div className="flex items-center gap-2 sm:gap-4">
              <span className="text-cyan-200 text-[0.6rem] sm:text-xs">24/7 Customer Support</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-lg shadow-lg mt-0"
            : "bg-white/90 backdrop-blur-md shadow-md mt-10"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo - Visible on all devices */}
            <Link to="/" className="flex items-center space-x-2 sm:space-x-3 group min-w-0">
              <div className="relative flex-shrink-0">
                <img 
                  src={logo} 
                  alt="TNAAR Healthcare Logo" 
                  className="w-8 h-8 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl object-contain shadow-md sm:shadow-lg transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute -top-1 -right-1 w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full border-2 border-white"></div>
              </div>
              <div className="flex flex-col min-w-0">
                <span className="text-base sm:text-2xl font-bold bg-gradient-to-r from-blue-900 to-cyan-700 bg-clip-text text-transparent truncate">
                  TNAAR
                </span>
                <span className="text-[0.6rem] sm:text-xs text-gray-500 font-medium hidden sm:block">Healthcare Excellence</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navItems.map((item) => (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => item.dropdown && setActiveDropdown(item.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  {item.dropdown ? (
                    <>
                      <Link
                        to={item.href}
                        className="flex items-center gap-1 px-4 py-2 text-gray-700 hover:text-blue-600 transition-colors font-medium group"
                      >
                        {item.name}
                        {item.dropdown && (
                          <ChevronDown
                            size={16}
                            className={`transform transition-transform ${
                              activeDropdown === item.name ? "rotate-180" : ""
                            }`}
                          />
                        )}
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-cyan-500 group-hover:w-full transition-all duration-300"></span>
                      </Link>

                      {/* Dropdown Menu */}
                      {item.dropdown && activeDropdown === item.name && (
                        <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-2xl border border-gray-100 py-2 animate-in fade-in slide-in-from-top-2 duration-200">
                          {item.dropdown.map((subItem) => (
                            <Link
                              key={subItem.name}
                              to={subItem.href}
                              className="block px-4 py-3 text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-cyan-50 hover:text-blue-600 transition-all"
                              onClick={() => {
                                setActiveDropdown(null);
                                setIsOpen(false);
                              }}
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    item.href.startsWith('#') ? (
                      <a
                        href={item.href}
                        onClick={(e) => handleHashLinkClick(e, item.href)}
                        className="flex items-center gap-1 px-4 py-2 text-gray-700 hover:text-blue-600 transition-colors font-medium group cursor-pointer"
                      >
                        {item.name}
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-cyan-500 group-hover:w-full transition-all duration-300"></span>
                      </a>
                    ) : (
                      <Link
                        to={item.href}
                        className="flex items-center gap-1 px-4 py-2 text-gray-700 hover:text-blue-600 transition-colors font-medium group"
                      >
                        {item.name}
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-cyan-500 group-hover:w-full transition-all duration-300"></span>
                      </Link>
                    )
                  )}
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="hidden lg:flex items-center space-x-3">
              <Button asChild className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-6 py-2 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <Link to="/request-quote">Request Quote</Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-gray-700 p-2 hover:bg-gray-100 rounded-lg transition-colors"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="lg:hidden py-4 space-y-2 border-t border-gray-100 animate-in slide-in-from-top duration-300">
              {navItems.map((item) => (
                <div key={item.name}>
                  {item.dropdown ? (
                    <>
                      <div
                        className="flex items-center justify-between px-4 py-3 text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-cyan-50 hover:text-blue-600 rounded-lg transition-all font-medium cursor-pointer"
                        onClick={() => {
                          setActiveDropdown(activeDropdown === item.name ? null : item.name);
                        }}
                      >
                        {item.name}
                        {item.dropdown && (
                          <ChevronDown
                            size={16}
                            className={`transform transition-transform ${
                              activeDropdown === item.name ? "rotate-180" : ""
                            }`}
                          />
                        )}
                      </div>
                      {item.dropdown && activeDropdown === item.name && (
                        <div className="ml-4 mt-2 space-y-1">
                          {item.dropdown.map((subItem) => (
                            <Link
                              key={subItem.name}
                              to={subItem.href}
                              className="block px-4 py-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all"
                              onClick={() => {
                                setIsOpen(false);
                                setActiveDropdown(null);
                              }}
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    item.href.startsWith('#') ? (
                      <a
                        href={item.href}
                        onClick={(e) => {
                          handleHashLinkClick(e, item.href);
                          setIsOpen(false);
                        }}
                        className="flex items-center justify-between px-4 py-3 text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-cyan-50 hover:text-blue-600 rounded-lg transition-all font-medium"
                      >
                        {item.name}
                      </a>
                    ) : (
                      <Link
                        to={item.href}
                        className="flex items-center justify-between px-4 py-3 text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-cyan-50 hover:text-blue-600 rounded-lg transition-all font-medium"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.name}
                      </Link>
                    )
                  )}
                </div>
              ))}
              
              {/* Mobile Action Buttons */}
              <div className="px-4 space-y-2">
                <Button asChild className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white py-3 rounded-lg shadow-lg">
                  <Link to="/request-quote">Request Quote</Link>
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Spacer to prevent content from going under fixed navbar */}
      <div className={scrolled ? "h-20" : "h-32"}></div>
    </>
  );
};

export default Navbar;