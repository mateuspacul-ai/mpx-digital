import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Differentials from "@/components/Differentials";
import Founder from "@/components/Founder";
import Team from "@/components/Team";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Differentials />
        <Founder />
        <Team />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
