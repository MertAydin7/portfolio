import { motion } from "framer-motion";
import { useDesignMode } from "@/contexts/DesignModeContext";
import { SkillBar } from "@/components/ui/skill-bar";
import { Tooltip } from "@/components/ui/tooltip";
import { InfoIcon, Code, Database, Globe, Wrench } from "lucide-react";
import { 
  skills, 
  programmingLanguages, 
  frameworks, 
  dataTools, 
  developmentTools 
} from "@/lib/data";
import { coursework } from "@/lib/resumeData";

export function SkillsSection() {
  const { isUXMode, isBalancedMode } = useDesignMode();

  // Colors for skill categories
  const categoryColors = {
    programming: { bg: "bg-blue-100", text: "text-blue-700", accent: "#3b82f6" },
    frameworks: { bg: "bg-purple-100", text: "text-purple-700", accent: "#8b5cf6" },
    data: { bg: "bg-green-100", text: "text-green-700", accent: "#10b981" },
    tools: { bg: "bg-amber-100", text: "text-amber-700", accent: "#f59e0b" }
  };

  return (
    <section className={`ui-element py-16 md:py-24 ${isBalancedMode ? 'bg-[var(--section-bg)]' : ''}`} id="skills">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          className="ui-element mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${isBalancedMode ? 'text-[var(--text-color)]' : ''}`}>
            {isUXMode ? 'Technical Skills' : isBalancedMode ? 'Development Skills' : 'Extraordinary Abilities'}
          </h2>
          <p className={`max-w-2xl mx-auto ${isUXMode ? 'text-base' : isBalancedMode ? 'text-lg text-[var(--text-light)]' : 'text-lg'}`}>
            {isUXMode 
              ? 'Programming languages, frameworks, and technical expertise' 
              : isBalancedMode 
                ? 'A comprehensive overview of my technical toolkit and capabilities'
                : 'Mastery of cutting-edge technologies and creative solutions'
            }
            <Tooltip content="Notice how the skill visualization changes between modes, reflecting different ways to present the same information.">
              <div className="difference-indicator">
                <InfoIcon className="h-3 w-3" />
              </div>
            </Tooltip>
          </p>
        </motion.div>

        {/* Main skills visualization */}
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

        {/* Additional skills sections */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
          {/* Programming Languages */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className={isBalancedMode ? 'bg-white p-6 rounded-lg shadow-sm' : ''}
          >
            <div className="flex items-center mb-4">
              <div className={`mr-3 p-2 rounded-md ${isBalancedMode ? categoryColors.programming.bg : ''}`}>
                <Code className={isBalancedMode ? categoryColors.programming.text : ''} size={20} />
              </div>
              <h3 className={`text-xl font-bold ${isBalancedMode ? 'text-[var(--text-color)]' : ''}`}>
                Programming Languages
              </h3>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {programmingLanguages.map((lang, index) => (
                <motion.span
                  key={index}
                  className={`py-1.5 px-3 text-sm ${
                    isUXMode 
                      ? 'bg-blue-100 text-blue-800 rounded' 
                      : isBalancedMode 
                        ? 'border border-gray-200 rounded-md' 
                        : 'rounded-full ui-element'
                  }`}
                  style={!isBalancedMode && !isUXMode ? { 
                    border: `2px solid ${
                      index % 3 === 0 
                        ? "var(--primary-color)" 
                        : index % 3 === 1 
                          ? "var(--secondary-color)" 
                          : "var(--accent-color)"
                    }`
                  } : {}}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  whileHover={isUXMode ? {} : { y: -3, scale: 1.03 }}
                >
                  {lang}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Frameworks & Libraries */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className={isBalancedMode ? 'bg-white p-6 rounded-lg shadow-sm' : ''}
          >
            <div className="flex items-center mb-4">
              <div className={`mr-3 p-2 rounded-md ${isBalancedMode ? categoryColors.frameworks.bg : ''}`}>
                <Globe className={isBalancedMode ? categoryColors.frameworks.text : ''} size={20} />
              </div>
              <h3 className={`text-xl font-bold ${isBalancedMode ? 'text-[var(--text-color)]' : ''}`}>
                Frameworks & Libraries
              </h3>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {frameworks.map((framework, index) => (
                <motion.span
                  key={index}
                  className={`py-1.5 px-3 text-sm ${
                    isUXMode 
                      ? 'bg-purple-100 text-purple-800 rounded' 
                      : isBalancedMode 
                        ? 'border border-gray-200 rounded-md' 
                        : 'rounded-full ui-element'
                  }`}
                  style={!isBalancedMode && !isUXMode ? { 
                    border: `2px solid ${
                      index % 3 === 0 
                        ? "var(--primary-color)" 
                        : index % 3 === 1 
                          ? "var(--secondary-color)" 
                          : "var(--accent-color)"
                    }`
                  } : {}}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  whileHover={isUXMode ? {} : { y: -3, scale: 1.03 }}
                >
                  {framework}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Data Analysis Tools */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={isBalancedMode ? 'bg-white p-6 rounded-lg shadow-sm' : ''}
          >
            <div className="flex items-center mb-4">
              <div className={`mr-3 p-2 rounded-md ${isBalancedMode ? categoryColors.data.bg : ''}`}>
                <Database className={isBalancedMode ? categoryColors.data.text : ''} size={20} />
              </div>
              <h3 className={`text-xl font-bold ${isBalancedMode ? 'text-[var(--text-color)]' : ''}`}>
                Data Analysis Tools
              </h3>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {dataTools.map((tool, index) => (
                <motion.span
                  key={index}
                  className={`py-1.5 px-3 text-sm ${
                    isUXMode 
                      ? 'bg-green-100 text-green-800 rounded' 
                      : isBalancedMode 
                        ? 'border border-gray-200 rounded-md' 
                        : 'rounded-full ui-element'
                  }`}
                  style={!isBalancedMode && !isUXMode ? { 
                    border: `2px solid ${
                      index % 3 === 0 
                        ? "var(--primary-color)" 
                        : index % 3 === 1 
                          ? "var(--secondary-color)" 
                          : "var(--accent-color)"
                    }`
                  } : {}}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  whileHover={isUXMode ? {} : { y: -3, scale: 1.03 }}
                >
                  {tool}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Development Tools */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className={isBalancedMode ? 'bg-white p-6 rounded-lg shadow-sm' : ''}
          >
            <div className="flex items-center mb-4">
              <div className={`mr-3 p-2 rounded-md ${isBalancedMode ? categoryColors.tools.bg : ''}`}>
                <Wrench className={isBalancedMode ? categoryColors.tools.text : ''} size={20} />
              </div>
              <h3 className={`text-xl font-bold ${isBalancedMode ? 'text-[var(--text-color)]' : ''}`}>
                Development Tools
              </h3>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {developmentTools.map((tool, index) => (
                <motion.span
                  key={index}
                  className={`py-1.5 px-3 text-sm ${
                    isUXMode 
                      ? 'bg-amber-100 text-amber-800 rounded' 
                      : isBalancedMode 
                        ? 'border border-gray-200 rounded-md' 
                        : 'rounded-full ui-element'
                  }`}
                  style={!isBalancedMode && !isUXMode ? { 
                    border: `2px solid ${
                      index % 3 === 0 
                        ? "var(--primary-color)" 
                        : index % 3 === 1 
                          ? "var(--secondary-color)" 
                          : "var(--accent-color)"
                    }`
                  } : {}}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  whileHover={isUXMode ? {} : { y: -3, scale: 1.03 }}
                >
                  {tool}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Coursework Section */}
        <motion.div
          className={`mt-16 ${isBalancedMode ? 'bg-white p-6 rounded-lg shadow-sm max-w-3xl mx-auto' : 'mt-16'}`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h3 className={`text-xl font-bold mb-4 ${isBalancedMode ? 'text-[var(--text-color)]' : (isUXMode ? 'text-center' : 'text-center bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent')}`}>
            {isUXMode ? 'Relevant Coursework' : isBalancedMode ? 'Academic Coursework' : 'Elite Educational Background'}
          </h3>
          
          <div className={`flex flex-wrap ${isUXMode ? 'gap-2' : isBalancedMode ? 'gap-3' : 'justify-center gap-4'}`}>
            {coursework.map((course, index) => (
              <motion.div
                key={index}
                className={`
                  ${isUXMode 
                    ? 'bg-gray-100 text-gray-800 rounded py-1.5 px-3 text-sm' 
                    : isBalancedMode 
                      ? 'bg-gray-50 border border-gray-200 rounded-md py-2 px-4 text-[var(--text-color)]' 
                      : 'py-2 px-4 rounded-full bg-gradient-to-r shadow-md'
                  }
                `}
                style={!isBalancedMode && !isUXMode ? { 
                  backgroundImage: `linear-gradient(to right, ${
                    index % 4 === 0 
                      ? "rgba(168, 85, 247, 0.1), rgba(217, 70, 239, 0.1)" 
                      : index % 4 === 1 
                        ? "rgba(79, 70, 229, 0.1), rgba(16, 185, 129, 0.1)" 
                        : index % 4 === 2
                          ? "rgba(245, 158, 11, 0.1), rgba(239, 68, 68, 0.1)"
                          : "rgba(6, 182, 212, 0.1), rgba(16, 185, 129, 0.1)"
                  })`,
                  border: `1px solid ${
                    index % 4 === 0 
                      ? "rgba(168, 85, 247, 0.3)" 
                      : index % 4 === 1 
                        ? "rgba(79, 70, 229, 0.3)" 
                        : index % 4 === 2
                          ? "rgba(245, 158, 11, 0.3)"
                          : "rgba(6, 182, 212, 0.3)"
                  }`
                } : {}}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={isUXMode ? {} : { y: -3, scale: 1.05 }}
              >
                {course}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}