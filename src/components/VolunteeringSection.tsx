import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import cvData from "@/data/cv.json";

import acapLogo from "@/assets/logos/acap.png";
import lumosLogo from "@/assets/logos/lumos.svg";
import eestecLogo from "@/assets/logos/eestec.png";

const logoMap: Record<string, string> = {
  ACAP: acapLogo,
  "Lumos Student Data Consulting": lumosLogo,
  "EESTEC LC Zagreb": eestecLogo,
};

const VolunteeringSection = () => {
  return (
    <AnimatedSection className="section-padding">
      <div className="section-container">
        <div className="grid gap-16 md:grid-cols-2">
          {/* Volunteering */}
          <div>
            <h2 className="text-section text-foreground mb-10">Volunteering</h2>
            <div className="space-y-8">
              {cvData.volunteering.map((v, i) => (
                <motion.div
                  key={i}
                  className="flex gap-4 items-start"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                >
                  <div className="flex-shrink-0 flex h-10 w-10 items-center justify-center rounded-lg bg-secondary overflow-hidden">
                    {logoMap[v.organization] ? (
                      <img src={logoMap[v.organization]} alt={v.organization} className="h-7 w-7 object-contain" />
                    ) : (
                      <span className="text-xs font-medium text-muted-foreground">{v.organization.charAt(0)}</span>
                    )}
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-foreground">{v.position}</h3>
                    <p className="text-sm text-muted-foreground">
                      <a href={v.url} target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors duration-300">
                        {v.organization}
                      </a>
                    </p>
                    <p className="text-sm text-tertiary">{v.startDate} — {v.endDate ?? "Present"}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Awards */}
          <div>
            <h2 className="text-section text-foreground mb-10">Awards</h2>
            <div className="space-y-8">
              {cvData.awards.map((a, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                >
                  <h3 className="text-sm font-semibold text-foreground">{a.title}</h3>
                  <p className="text-sm text-muted-foreground mt-0.5">
                    {a.summary}
                    <span className="mx-1.5 text-tertiary">·</span>
                    <span className="text-tertiary">{a.date}</span>
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default VolunteeringSection;
