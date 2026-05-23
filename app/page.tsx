import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
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
      <Categories />
      <WhyUs />
      <Location />
      <Footer />
      <WhatsAppButton />
    </>
  );
}
