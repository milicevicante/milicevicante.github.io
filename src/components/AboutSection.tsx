import AnimatedSection from "./AnimatedSection";

const AboutSection = () => {
  return (
    <AnimatedSection className="section-padding">
      <div className="section-container">
        <h2 className="text-section text-foreground mb-10">About</h2>
        <p className="text-body-lg text-muted-foreground max-w-2xl leading-relaxed">
          24-year-old engineer interested in providing solutions to complex problems. I enjoy understanding the core concepts of machine learning and applying them to real-world challenges.
        </p>
      </div>
    </AnimatedSection>
  );
};

export default AboutSection;
