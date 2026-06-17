import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CoffeeCollection from "./components/CoffeeCollection";
import About from "./components/About";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import Testimonials from "./components/Testimonials";
import WhyChoose from "./components/WhyChoose";
import Image from "next/image";

export default function Home() {
  return (
    
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      <CoffeeCollection />
      <WhyChoose />
      <Testimonials />
      <About/>
      <Footer/>
      <WhatsAppButton />
    </main>
    
  );
}