import React from 'react';
import { Building2, Users, Truck, Package, Shield, FileText, CheckCircle2, Clock, PhoneCall, Pill } from 'lucide-react';

const services = [
  {
    icon: Building2,
    title: "Hospital Supply",
    description: "Comprehensive pharmaceutical supply solutions for hospitals of all sizes with 24/7 emergency delivery and dedicated account management.",
  },
  {
    icon: Users,
    title: "Doctor's Network",
    description: "Direct supply channel for individual practitioners and clinics with personalized recommendations and quick reorder systems.",
  },
  {
    icon: Truck,
    title: "Fast Distribution",
    description: "Reliable temperature-controlled logistics network with same-day delivery options and real-time tracking capabilities.",
  },
  {
    icon: Package,
    title: "Bulk Procurement",
    description: "Cost-effective bulk ordering for large healthcare facilities with volume discounts and flexible payment terms.",
  },
  {
    icon: Shield,
    title: "Quality Assurance",
    description: "Certified pharmaceutical products with complete traceability, FDA approval, and comprehensive batch tracking systems.",
  },
  {
    icon: FileText,
    title: "Regulatory Support",
    description: "Complete documentation and compliance assistance including license verification and audit preparation services.",
  },
];

const stats = [
  { icon: CheckCircle2, value: "500+", label: "Healthcare Partners" },
  { icon: Pill, value: "100+", label: "Products Available" },
  { icon: Clock, value: "24/7", label: "Support Available" },
  { icon: Truck, value: "99.5%", label: "On-Time Delivery" }
];

const Services = () => {
  return (
    <>
      <section id="services" className="py-6 bg-white">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Comprehensive <span className="text-blue-600">Pharmaceutical Services</span>
            </h2>
            <p className="text-lg text-gray-600">
              End-to-end pharmaceutical solutions from procurement to distribution, 
              ensuring quality and reliability at every step.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div
                  key={index}
                  className="bg-gray-50 rounded-xl p-6 border border-gray-200 transition-all duration-300"
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="text-blue-600 mb-3">
                      <IconComponent className="w-8 h-8" />
                    </div>
                    <div className="text-3xl font-bold text-gray-900 mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div 
                  key={index} 
                  className="group bg-gray-50 rounded-xl border border-gray-200 transition-all duration-300"
                >
                  <div className="p-6">
                    <div className="w-16 h-16 mb-4 rounded-xl bg-blue-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;