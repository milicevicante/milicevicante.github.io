import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import cvData from "@/data/cv.json";

import cshLogo from "@/assets/logos/csh.png";
import tuwien2Logo from "@/assets/logos/tuwien2.png";
import meduniLogo from "@/assets/logos/meduni.png";
import senecuraLogo from "@/assets/logos/senecura.png";

const logoMap: Record<string, string> = {
  "Complexity Science Hub": cshLogo,
  "Technical University (TU Wien)": tuwien2Logo,
  "Medical University of Vienna": meduniLogo,
  "SeneCura Group": senecuraLogo,
};

const formatDate = (d: string | null) => {
  if (!d) return "Present";
  const [year, month] = d.split("-");
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  return month ? `${months[parseInt(month) - 1]} ${year}` : year;
};

const ExperienceSection = () => {
  return (
    <AnimatedSection className="section-padding bg-elevated">
      <div className="section-container">
        <h2 className="text-section text-foreground mb-14">Experience</h2>
        <div className="space-y-12">
          {(() => {
            // Group TU Wien jobs together
            const grouped: { name: string; url?: string; location: string; logo?: string; positions: typeof cvData.work }[] = [];
            cvData.work.forEach((job) => {
              const existing = grouped.find((g) => g.name === job.name);
              if (existing) {
                existing.positions.push(job);
              } else {
                grouped.push({ name: job.name, url: job.url, location: job.location, logo: logoMap[job.name], positions: [job] });
              }
            });

            return grouped.map((group, i) => (
              <motion.div
                key={i}
                className="group flex gap-6 items-start"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
              >
                {/* Logo */}
                <div className="flex-shrink-0 flex h-14 w-14 items-center justify-center rounded-xl bg-background shadow-soft overflow-hidden">
                  {group.logo ? (
                    <img src={group.logo} alt={group.name} className="h-10 w-10 object-contain" />
                  ) : (
                    <span className="text-xs font-medium text-muted-foreground">{group.name.charAt(0)}</span>
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-muted-foreground mb-2">
                    {group.url ? (
                      <a href={group.url} target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors duration-300 font-medium">
                        {group.name}
                      </a>
                    ) : <span className="font-medium">{group.name}</span>}
                  </p>
                  <p className="text-sm text-tertiary mb-2">{group.location}</p>
                  <div className="space-y-4">
                    {group.positions.map((job, j) => (
                      <div key={j}>
                        <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                          <h3 className="text-base font-semibold text-foreground">{job.position}</h3>
                          <span className="text-sm text-tertiary whitespace-nowrap">
                            {formatDate(job.startDate)} — {formatDate(job.endDate)}
                          </span>
                        </div>
                        <p className="mt-1 text-sm text-muted-foreground leading-relaxed max-w-xl">{job.summary}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ));
          })()}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default ExperienceSection;
