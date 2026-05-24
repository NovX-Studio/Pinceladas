import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import BrandMarquee from "@/components/BrandMarquee";
import Categories from "@/components/Categories";
import WhyUs from "@/components/WhyUs";
import Location from "@/components/Location";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <BrandMarquee />
      <Categories />
      <WhyUs />
      <Location />
      <Footer />
      <WhatsAppButton />
    </>
  );
}
