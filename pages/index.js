// import styles from '../styles/Home.module.css'
import ContactSection from "../components/ContactSection/ContactSection";
import HeroSection from "../components/HeroSection/HeroSection";
import { ServiceSection } from "../components/ServiceSection/ServiceSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServiceSection />
      <ContactSection />
    </>
  );
}
