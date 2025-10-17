import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ProductsPage from "./pages/Products";
import DoctorDashboard from "./pages/DoctorDashboard";
import PharmacistDashboard from "./pages/PharmacistDashboard";
import PatientDashboard from "./pages/PatientDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import Blog from "./pages/Blog";
import Careers from "./pages/Careers";
import TabletsPage from "./pages/Tablets";
import RequestQuote from "./pages/RequestQuote";
// Company Pages
import About from "./pages/About";
import Leadership from "./pages/Leadership";
import Press from "./pages/Press";
import Contact from "./pages/Contact";
import Investors from "./pages/Investors";
// Product Pages
import PrescriptionMedicines from "./pages/products/PrescriptionMedicines";
import OTCProducts from "./pages/products/OTCProducts";
import Supplements from "./pages/products/Supplements";
import MedicalDevices from "./pages/products/MedicalDevices";
// New Product Pages
import Cardiovascular from "./pages/products/Cardiovascular";
import Neurological from "./pages/products/Neurological";
import Pain from "./pages/products/Pain";
import Metabolic from "./pages/products/Metabolic";
import Oncology from "./pages/products/Oncology";
// Service Pages
import ClinicalResearch from "./pages/services/ClinicalResearch";
import DrugManufacturing from "./pages/services/DrugManufacturing";
import QualityAssurance from "./pages/services/QualityAssurance";
import RegulatoryAffairs from "./pages/services/RegulatoryAffairs";
import ServicesPage from "./pages/Services";
// Custom Pages
import TabletListing from "./pages/TabletListing";
// Support Pages
import Help from "./pages/Help";
import PatientAssistancePage from "./pages/PatientAssistance";
import ProductSupportPage from "./pages/ProductSupport";
import AdverseEvents from "./pages/AdverseEvents";
import Recalls from "./pages/Recalls";
import Accessibility from "./pages/Accessibility";
// Resource Pages
import Research from "./pages/resources/Research";
import Trials from "./pages/resources/Trials";
import Patients from "./pages/resources/Patients";
import Providers from "./pages/resources/Providers";
import Education from "./pages/resources/Education";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/prescription-medicines" element={<PrescriptionMedicines />} />
          <Route path="/products/otc-products" element={<OTCProducts />} />
          <Route path="/products/supplements" element={<Supplements />} />
          <Route path="/products/medical-devices" element={<MedicalDevices />} />
          {/* New Product Routes */}
          <Route path="/products/cardiovascular" element={<Cardiovascular />} />
          <Route path="/products/neurological" element={<Neurological />} />
          <Route path="/products/pain" element={<Pain />} />
          <Route path="/products/metabolic" element={<Metabolic />} />
          <Route path="/products/oncology" element={<Oncology />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/clinical-research" element={<ClinicalResearch />} />
          <Route path="/services/drug-manufacturing" element={<DrugManufacturing />} />
          <Route path="/services/quality-assurance" element={<QualityAssurance />} />
          <Route path="/services/regulatory-affairs" element={<RegulatoryAffairs />} />
          <Route path="/doctor/dashboard" element={<DoctorDashboard />} />
          <Route path="/pharmacist/dashboard" element={<PharmacistDashboard />} />
          <Route path="/patient/dashboard" element={<PatientDashboard />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/about" element={<About />} />
          <Route path="/leadership" element={<Leadership />} />
          <Route path="/press" element={<Press />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/investors" element={<Investors />} />
          <Route path="/tablets" element={<TabletsPage />} />
          <Route path="/tablets/listing" element={<TabletListing />} />
          <Route path="/request-quote" element={<RequestQuote />} />
          {/* Support Pages */}
          <Route path="/help" element={<Help />} />
          <Route path="/patient-assistance" element={<PatientAssistancePage />} />
          <Route path="/support" element={<ProductSupportPage />} />
          <Route path="/adverse-events" element={<AdverseEvents />} />
          <Route path="/recalls" element={<Recalls />} />
          <Route path="/accessibility" element={<Accessibility />} />
          {/* Resource Pages */}
          <Route path="/research" element={<Research />} />
          <Route path="/trials" element={<Trials />} />
          <Route path="/patients" element={<Patients />} />
          <Route path="/providers" element={<Providers />} />
          <Route path="/education" element={<Education />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;