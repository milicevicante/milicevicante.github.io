import { motion } from "framer-motion";
import cvData from "@/data/cv.json";
import headshot from "@/assets/headshot.jpg";

const HeroSection = () => {
  return (
    <section className="relative flex min-h-[100dvh] items-center justify-center overflow-hidden">
      <div className="section-container">
        <div className="flex flex-col items-center gap-12 md:flex-row md:items-center md:justify-between md:gap-16">
          {/* Text */}
          <div className="order-2 md:order-1 flex flex-col items-center text-center md:items-start md:text-left md:flex-1">
            <motion.h1
              className="text-hero text-foreground"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            >
              {cvData.basics.name}
            </motion.h1>
            <motion.p
              className="mt-5 text-subtitle text-muted-foreground max-w-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1], delay: 0.15 }}
            >
              Data Scientist &<br className="sm:hidden" /> Machine Learning Researcher
            </motion.p>
            <motion.div
              className="mt-8 flex flex-wrap justify-center md:justify-start gap-5"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.35 }}
            >
              {[
                { label: "LinkedIn", href: cvData.basics.profiles.find(p => p.network === "LinkedIn")?.url },
                { label: "Email", href: `mailto:${cvData.basics.email}` },
                { label: "X", href: cvData.basics.profiles.find(p => p.network === "X")?.url },
                { label: "GitHub", href: cvData.basics.profiles.find(p => p.network === "GitHub")?.url },
              ].filter(l => l.href).map((l) => (
                <a
                  key={l.label}
                  href={l.href!}
                  target={l.label === "Email" ? undefined : "_blank"}
                  rel={l.label === "Email" ? undefined : "noopener noreferrer"}
                  className="text-muted-foreground hover:text-foreground transition-colors duration-300 text-sm tracking-wide"
                >
                  {l.label}
                </a>
              ))}
            </motion.div>
          </div>

          {/* Headshot */}
          <motion.div
            className="order-1 md:order-2 flex-shrink-0"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1], delay: 0.1 }}
          >
            <img
              src={headshot}
              alt={`Portrait of ${cvData.basics.name}`}
              className="h-56 w-56 rounded-full object-cover shadow-card md:h-72 md:w-72"
            />
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
      >
        <motion.div
          className="h-10 w-[1px] bg-border"
          animate={{ scaleY: [0, 1, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          style={{ transformOrigin: "top" }}
        />
      </motion.div>
    </section>
  );
};

export default HeroSection;
