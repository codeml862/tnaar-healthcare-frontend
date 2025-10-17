import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
// import TabletViewer from "@/components/TabletViewer";
import Products from "@/components/Products";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ChatBot from "@/components/ChatBot";
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const [refreshKey, setRefreshKey] = useState(0);
  const { toast } = useToast();

  // Function to trigger refresh of tablets
  const refreshTablets = () => {
    setRefreshKey(prev => prev + 1);
  };

  // Expose refresh function to global scope so it can be called when tablets are added
  useEffect(() => {
    // @ts-ignore
    window.refreshTablets = refreshTablets;
    
    return () => {
      // @ts-ignore
      delete window.refreshTablets;
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        {/* <TabletViewer refreshKey={refreshKey} /> */}
        <Products />
        <Contact />
      </main>
      <Footer />
      <ChatBot />
    </div>
  );
};

export default Index;