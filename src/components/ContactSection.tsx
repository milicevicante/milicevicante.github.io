import { motion } from "framer-motion";
import cvData from "@/data/cv.json";

const ContactSection = () => {
  return (
    <motion.section
      className="section-padding bg-elevated"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="section-container text-center">
        <h2 className="text-section text-foreground mb-6">Get in Touch</h2>
        <p className="text-muted-foreground text-body-lg mb-10 max-w-md mx-auto">
          Open to research collaborations, data science opportunities, and interesting conversations.
        </p>
        <div className="flex items-center justify-center gap-8">
          {[
            { label: "LinkedIn", href: cvData.basics.profiles.find(p => p.network === "LinkedIn")?.url, external: true },
            { label: "Email", href: `mailto:${cvData.basics.email}`, external: false },
            { label: "X", href: cvData.basics.profiles.find(p => p.network === "X")?.url, external: true },
            { label: "GitHub", href: cvData.basics.profiles.find(p => p.network === "GitHub")?.url, external: true },
          ].filter(l => l.href).map((l) => (
            <a
              key={l.label}
              href={l.href!}
              target={l.external ? "_blank" : undefined}
              rel={l.external ? "noopener noreferrer" : undefined}
              className="text-foreground font-medium text-sm hover:text-muted-foreground transition-colors duration-300"
            >
              {l.label}
            </a>
          ))}
        </div>
        <div className="mt-20 text-xs text-tertiary">
          © {new Date().getFullYear()} {cvData.basics.name}
        </div>
      </div>
    </motion.section>
  );
};

export default ContactSection;
