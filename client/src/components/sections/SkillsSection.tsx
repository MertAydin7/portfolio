import { motion } from "framer-motion";
import { useDesignMode } from "@/contexts/DesignModeContext";
import { SkillBar } from "@/components/ui/skill-bar";
import { Tooltip } from "@/components/ui/tooltip";
import { InfoIcon } from "lucide-react";
import { skills, designTools } from "@/lib/data";

export function SkillsSection() {
  const { isUXMode } = useDesignMode();

  return (
    <section className="ui-element py-16 md:py-24" id="skills">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          className="ui-element mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Design Skills</h2>
          <p className="max-w-2xl mx-auto text-lg">
            Proficiency across UI and UX disciplines
            <Tooltip content="Notice how the skill visualization changes between modes, reflecting different ways to present the same information.">
              <div className="difference-indicator">
                <InfoIcon className="h-3 w-3" />
              </div>
            </Tooltip>
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <SkillBar
                name={skill.name}
                percentage={skill.percentage}
                description={skill.description}
              />
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h3 className="text-xl font-bold mb-6">Design Tools</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {designTools.map((tool, index) => (
              <motion.span
                key={index}
                className="py-2 px-4 rounded-full ui-element"
                style={{ 
                  border: `2px solid ${index % 3 === 0 
                    ? "var(--primary-color)" 
                    : index % 3 === 1 
                      ? "var(--secondary-color)" 
                      : "var(--accent-color)"}`
                }}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ y: isUXMode ? -2 : -5, scale: isUXMode ? 1.05 : 1.1 }}
              >
                {tool}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
