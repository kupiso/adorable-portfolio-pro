import FloatingPetals from "@/components/FloatingPetals";
import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import WaveDivider from "@/components/WaveDivider";
import ObjectiveSection from "@/components/ObjectiveSection";
import ExperienceSection from "@/components/ExperienceSection";
import EducationSection from "@/components/EducationSection";
import CertificationsSection from "@/components/CertificationsSection";
import SkillsSection from "@/components/SkillsSection";
import ReferencesSection from "@/components/ReferencesSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

const Index = () => (
  <>
    <FloatingPetals />
    <TopBar />
    <Header />
    <main>
      <HeroSection />
      <AboutSection />
      <WaveDivider />
      <ObjectiveSection />
      <ExperienceSection />
      <EducationSection />
      <CertificationsSection />
      <SkillsSection />
      <ReferencesSection />
      <ContactSection />
    </main>
    <Footer />
    <BackToTop />
  </>
);

export default Index;
