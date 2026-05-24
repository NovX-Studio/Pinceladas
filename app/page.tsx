import Navbar from "@/components/Navbar";
import BentoHero from "@/components/BentoHero";
import BentoGrid from "@/components/BentoGrid";
import WhyUs from "@/components/WhyUs";
import Location from "@/components/Location";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <>
      <Navbar />
      <BentoHero />
      <BentoGrid />
      <WhyUs />
      <Location />
      <Footer />
      <WhatsAppButton />
    </>
  );
}
