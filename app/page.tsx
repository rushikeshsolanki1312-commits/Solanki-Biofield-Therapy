import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import Technology from "@/components/Technology";
import WhyChoose from "@/components/WhyChoose";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Products />
        <Technology />
        <WhyChoose />
        <About />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
