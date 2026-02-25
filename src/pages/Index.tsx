import NavBar from "@/components/NavBar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import EducationSection from "@/components/EducationSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <main>
      <NavBar />
      <HeroSection />
      <div id="about"><AboutSection /></div>
      <div id="experience"><ExperienceSection /></div>
      <div id="education"><EducationSection /></div>
      <div id="contact"><ContactSection /></div>
    </main>
  );
};

export default Index;
