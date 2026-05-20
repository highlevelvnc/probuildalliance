import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { PillarsBar } from "@/components/PillarsBar";
import { Services } from "@/components/Services";
import { Portfolio } from "@/components/Portfolio";
import { Process } from "@/components/Process";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { ScrollRevealMount } from "@/components/ScrollRevealMount";
import { JsonLd } from "@/components/JsonLd";

export default function Page() {
  return (
    <>
      <ScrollRevealMount />
      <Header />
      <main>
        <Hero />
        <PillarsBar />
        <Services />
        <Portfolio />
        <Process />
        <About />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
      <JsonLd />
    </>
  );
}
