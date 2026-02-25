import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import cvData from "@/data/cv.json";

import tuwien2Logo from "@/assets/logos/tuwien2.png";
import ferLogo from "@/assets/logos/fer.png";

const logoMap: Record<string, string> = {
  "Technical University (TU Wien)": tuwien2Logo,
  "FER (University of Zagreb)": ferLogo,
};

const formatDate = (d: string) => {
  const [year, month] = d.split("-");
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  return month ? `${months[parseInt(month) - 1]} ${year}` : year;
};

const EducationSection = () => {
  // Skip high school
  const education = cvData.education.filter((e) => e.studyType !== "High School");

  return (
    <AnimatedSection className="section-padding">
      <div className="section-container">
        <h2 className="text-section text-foreground mb-14">Education</h2>
        <div className="space-y-12">
          {education.map((edu, i) => (
            <motion.div
              key={i}
              className="flex gap-6 items-start"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <div className="flex-shrink-0 flex h-14 w-14 items-center justify-center rounded-xl bg-secondary overflow-hidden">
                {logoMap[edu.institution] ? (
                  <img src={logoMap[edu.institution]} alt={edu.institution} className={`object-contain ${edu.institution.includes("FER") ? "h-12 w-12" : "h-10 w-10"}`} />
                ) : (
                  <span className="text-xs font-medium text-muted-foreground">{edu.institution.charAt(0)}</span>
                )}
              </div>
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                  <div>
                    <h3 className="text-base font-semibold text-foreground">{edu.studyType} in {edu.area}</h3>
                    <p className="text-sm text-muted-foreground">
                      {edu.url ? (
                        <a href={edu.url} target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors duration-300">
                          {edu.institution}
                        </a>
                      ) : edu.institution}
                    </p>
                    <p className="text-sm text-tertiary">{edu.location}</p>
                  </div>
                  <span className="text-sm text-tertiary whitespace-nowrap">
                    {formatDate(edu.startDate)} — {formatDate(edu.endDate)}{edu.endDateNote ? ` (${edu.endDateNote})` : ""}
                  </span>
                </div>
                {edu.highlights && (
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed max-w-xl">
                    {edu.highlights[0]}
                  </p>
                )}
                {edu.thesis && (
                  <p className="mt-2 text-sm text-muted-foreground">
                    Thesis:{" "}
                    <a href={edu.thesis.url} target="_blank" rel="noopener noreferrer" className="underline decoration-border hover:text-foreground transition-colors duration-300">
                      {edu.thesis.title}
                    </a>
                    {edu.thesis.grade && <span className="text-tertiary"> — Grade: {edu.thesis.grade}</span>}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default EducationSection;
