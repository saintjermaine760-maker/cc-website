import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="font-poppins">
      <Navbar />
      <Hero />
      <Stats />
      <Services />
      <WhyUs />
      <Gallery />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
}
