import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import cvData from "@/data/cv.json";

const SkillsSection = () => {
  return (
    <AnimatedSection className="section-padding bg-elevated">
      <div className="section-container">
        <h2 className="text-section text-foreground mb-14">Skills</h2>
        <div className="grid gap-x-16 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {cvData.skills.map((group, gi) => (
            <motion.div
              key={gi}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: gi * 0.08 }}
            >
              <h3 className="text-xs font-semibold text-muted-foreground mb-4 tracking-widest uppercase">
                {group.name}
              </h3>
              <ul className="space-y-2">
                {group.keywords.map((kw) => (
                  <li
                    key={kw}
                    className="text-sm text-foreground"
                  >
                    {kw}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Languages */}
        <motion.div
          className="mt-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3 className="text-xs font-semibold text-muted-foreground mb-4 tracking-widest uppercase">Languages</h3>
          <ul className="flex flex-wrap gap-x-8 gap-y-2">
            {cvData.languages.map((l) => (
              <li key={l.language} className="text-sm text-foreground">
                {l.language} <span className="text-tertiary">— {l.fluency}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </AnimatedSection>
  );
};

export default SkillsSection;
