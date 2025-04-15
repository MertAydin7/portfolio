import { motion } from "framer-motion";
import { useDesignMode } from "@/contexts/DesignModeContext";
import { Tooltip } from "@/components/ui/tooltip";
import { 
  InfoIcon, 
  Paintbrush, 
  UserCheck, 
  CheckCircle, 
  GraduationCap, 
  Briefcase, 
  Scale 
} from "lucide-react";
import { personalInfo, education, workExperience } from "@/lib/resumeData";

export function AboutSection() {
  const { isUXMode, isBalancedMode } = useDesignMode();

  const uiFeatures = [
    "Bold, vibrant color schemes with creative contrast",
    "Expressive typography with decorative elements",
    "Dramatic spacing and layout choices",
    "Animated interactions and visual feedback",
  ];

  const uxFeatures = [
    "Clear, accessible color schemes with sufficient contrast",
    "Readable typography with consistent hierarchy",
    "Consistent spacing and predictable layouts",
    "Focused on seamless task completion and clarity",
  ];

  const balancedFeatures = [
    "Visually attractive without sacrificing readability",
    "Purposeful animations that enhance usability",
    "Clear information hierarchy with aesthetic appeal",
    "Modern design patterns aligned with user expectations",
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section className={`ui-element py-16 md:py-24 ${isBalancedMode ? 'bg-[var(--section-bg)]' : ''}`} id="about">
      <div className="container mx-auto px-4 md:px-8">
        {/* Section heading */}
        <motion.div
          className="ui-element mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${isBalancedMode ? 'text-[var(--text-color)]' : ''}`}>
            {isUXMode ? 'About Me & This Project' : isBalancedMode ? 'About Me' : 'The Designer & Vision'}
          </h2>
          <p className={`max-w-2xl mx-auto ${isUXMode ? 'text-base' : isBalancedMode ? 'text-lg text-[var(--text-light)]' : 'text-lg'}`}>
            {isUXMode
              ? 'Education, experience, and design philosophy'
              : isBalancedMode
                ? `${personalInfo.summary}`
                : 'The creative mind behind these captivating digital experiences'}
          </p>
        </motion.div>

        {/* Personal info & education section */}
        <div className={`mb-16 ${isBalancedMode ? 'bg-white p-8 rounded-lg shadow-sm' : ''}`}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-10">
            {/* Education section */}
            <motion.div
              className="ui-element"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center mb-6">
                <div className={`p-2 rounded-md mr-3 ${isBalancedMode ? 'bg-blue-50' : ''}`}>
                  <GraduationCap 
                    className={`h-6 w-6 ${isBalancedMode ? 'text-blue-600' : ''}`} 
                    style={!isBalancedMode ? { color: "var(--primary-color)" } : {}} 
                  />
                </div>
                <h3 className={`text-xl md:text-2xl font-bold ${isBalancedMode ? 'text-[var(--text-color)]' : ''}`}>
                  {isUXMode ? 'Education' : isBalancedMode ? 'Education' : 'Academic Excellence'}
                </h3>
              </div>
              
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <motion.div 
                    key={index}
                    className={`${isBalancedMode ? 'border-l-2 border-gray-200 pl-4' : ''}`}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <h4 className={`font-bold ${isBalancedMode ? 'text-[var(--text-color)]' : (isUXMode ? '' : 'text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600')}`}>
                      {edu.school}
                    </h4>
                    <p className={`${isUXMode ? 'text-sm text-gray-700' : isBalancedMode ? 'text-sm text-[var(--text-light)]' : 'text-gray-400 italic'}`}>
                      {edu.college}
                    </p>
                    <div className={`flex flex-wrap items-center mt-1 ${isUXMode ? 'mb-2' : 'mb-1'}`}>
                      <span className={`${isUXMode ? 'font-medium' : isBalancedMode ? 'font-medium text-[var(--text-color)]' : 'font-light'}`}>
                        {edu.degree}
                      </span>
                      <span className={`mx-2 ${isUXMode ? '' : isBalancedMode ? 'text-gray-400' : 'text-gray-500'}`}>•</span>
                      <span className={`${isUXMode ? 'bg-blue-100 text-blue-800 px-2 py-0.5 rounded text-xs' : isBalancedMode ? 'text-[var(--primary-color)] text-sm' : 'text-purple-400 text-sm'}`}>
                        {edu.date}
                      </span>
                    </div>
                    {edu.gpa && (
                      <p className={`text-sm ${isUXMode ? 'text-gray-700' : isBalancedMode ? 'text-[var(--text-light)]' : 'text-gray-400'}`}>
                        GPA: {edu.gpa}
                      </p>
                    )}
                    {edu.achievements && edu.achievements.length > 0 && (
                      <ul className="mt-2">
                        {edu.achievements.map((achievement, i) => (
                          <li 
                            key={i}
                            className={`text-sm flex items-center ${isUXMode ? 'text-blue-700' : isBalancedMode ? 'text-[var(--text-light)]' : 'text-gray-400'}`}
                          >
                            <span className="mr-1.5">•</span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Work experience section */}
            <motion.div
              className="ui-element"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="flex items-center mb-6">
                <div className={`p-2 rounded-md mr-3 ${isBalancedMode ? 'bg-purple-50' : ''}`}>
                  <Briefcase 
                    className={`h-6 w-6 ${isBalancedMode ? 'text-purple-600' : ''}`} 
                    style={!isBalancedMode ? { color: "var(--secondary-color)" } : {}} 
                  />
                </div>
                <h3 className={`text-xl md:text-2xl font-bold ${isBalancedMode ? 'text-[var(--text-color)]' : ''}`}>
                  {isUXMode ? 'Work Experience' : isBalancedMode ? 'Work Experience' : 'Professional Journey'}
                </h3>
              </div>
              
              <div className="space-y-6">
                {workExperience.map((work, index) => (
                  <motion.div 
                    key={index}
                    className={`${isBalancedMode ? 'border-l-2 border-gray-200 pl-4' : ''}`}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <h4 className={`font-bold ${isBalancedMode ? 'text-[var(--text-color)]' : (isUXMode ? '' : 'text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500')}`}>
                      {work.company}
                    </h4>
                    <div className={`flex flex-wrap items-center mt-1 ${isUXMode ? 'mb-2' : 'mb-1'}`}>
                      <span className={`${isUXMode ? 'font-medium' : isBalancedMode ? 'font-medium text-[var(--text-color)]' : 'font-light'}`}>
                        {work.position}
                      </span>
                      <span className={`mx-2 ${isUXMode ? '' : isBalancedMode ? 'text-gray-400' : 'text-gray-500'}`}>•</span>
                      <span className={`${isUXMode ? 'bg-blue-100 text-blue-800 px-2 py-0.5 rounded text-xs' : isBalancedMode ? 'text-[var(--primary-color)] text-sm' : 'text-blue-400 text-sm'}`}>
                        {work.period}
                      </span>
                    </div>
                    <p className={`text-sm ${isUXMode ? 'text-gray-700' : isBalancedMode ? 'text-[var(--text-light)]' : 'text-gray-400'}`}>
                      {work.location}
                    </p>
                    {work.responsibilities && work.responsibilities.length > 0 && (
                      <ul className="mt-2 space-y-1">
                        {work.responsibilities.map((responsibility, i) => (
                          <li 
                            key={i}
                            className={`text-sm flex items-start ${isUXMode ? 'text-gray-700' : isBalancedMode ? 'text-[var(--text-light)]' : 'text-gray-400'}`}
                          >
                            <span className="mr-1.5 mt-1">•</span>
                            <span>{responsibility}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Design philosophy section */}
        <h3 className={`text-xl md:text-2xl font-bold mb-6 ${isBalancedMode ? 'text-center text-[var(--text-color)]' : ''}`}>
          {isUXMode ? 'Design Philosophy' : isBalancedMode ? 'Design Philosophy' : 'Creative Vision'}
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-6">
          {/* UI Column */}
          <motion.div
            className={`ui-element p-6 md:p-6 rounded-lg ${isBalancedMode ? 'bg-white shadow-sm' : ''}`}
            style={!isBalancedMode ? { border: "2px solid var(--primary-color)" } : {}}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center mb-4">
              <Paintbrush 
                className={`h-5 w-5 mr-3 ${isBalancedMode ? 'text-pink-600' : ''}`} 
                style={!isBalancedMode ? { color: "var(--primary-color)" } : {}} 
              />
              <h4 className={`text-lg font-bold ${isBalancedMode ? 'text-[var(--text-color)]' : ''}`}>UI-Focused Design</h4>
              <Tooltip content="UI (User Interface) design emphasizes visual appeal, trend-awareness, and aesthetic impact.">
                <div className="difference-indicator">
                  <InfoIcon className="h-3 w-3" />
                </div>
              </Tooltip>
            </div>
            <p className={`mb-4 text-sm ${isBalancedMode ? 'text-[var(--text-light)]' : ''}`}>
              Aesthetic-driven approach prioritizing visual impact and creative expression.
            </p>
            <motion.ul
              className="space-y-2"
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              {uiFeatures.map((feature, index) => (
                <motion.li key={index} className="flex items-start" variants={item}>
                  <CheckCircle 
                    className={`h-4 w-4 mt-0.5 mr-2 ${isBalancedMode ? 'text-pink-500' : ''}`} 
                    style={!isBalancedMode ? { color: "var(--accent-color)" } : {}} 
                  />
                  <span className={`text-sm ${isBalancedMode ? 'text-[var(--text-color)]' : ''}`}>{feature}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Balanced Column */}
          <motion.div
            className={`ui-element p-6 md:p-6 rounded-lg ${isBalancedMode ? 'bg-white shadow-sm border-2 border-[var(--primary-color)]' : ''}`}
            style={!isBalancedMode ? { border: "2px solid var(--accent-color)" } : {}}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="flex items-center mb-4">
              <Scale 
                className={`h-5 w-5 mr-3 ${isBalancedMode ? 'text-[var(--primary-color)]' : ''}`} 
                style={!isBalancedMode ? { color: "var(--accent-color)" } : {}} 
              />
              <h4 className={`text-lg font-bold ${isBalancedMode ? 'text-[var(--text-color)]' : ''}`}>Balanced Design</h4>
              <Tooltip content="Balanced design combines the best aspects of both UI and UX design, creating experiences that are both visually appealing and highly usable.">
                <div className="difference-indicator">
                  <InfoIcon className="h-3 w-3" />
                </div>
              </Tooltip>
            </div>
            <p className={`mb-4 text-sm ${isBalancedMode ? 'text-[var(--text-light)]' : ''}`}>
              Harmonious approach that balances aesthetics with functionality and usability.
            </p>
            <motion.ul
              className="space-y-2"
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              {balancedFeatures.map((feature, index) => (
                <motion.li key={index} className="flex items-start" variants={item}>
                  <CheckCircle 
                    className={`h-4 w-4 mt-0.5 mr-2 ${isBalancedMode ? 'text-[var(--primary-color)]' : ''}`} 
                    style={!isBalancedMode ? { color: "var(--accent-color)" } : {}} 
                  />
                  <span className={`text-sm ${isBalancedMode ? 'text-[var(--text-color)]' : ''}`}>{feature}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* UX Column */}
          <motion.div
            className={`ui-element p-6 md:p-6 rounded-lg ${isBalancedMode ? 'bg-white shadow-sm' : ''}`}
            style={!isBalancedMode ? { border: "2px solid var(--secondary-color)" } : {}}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="flex items-center mb-4">
              <UserCheck 
                className={`h-5 w-5 mr-3 ${isBalancedMode ? 'text-blue-600' : ''}`} 
                style={!isBalancedMode ? { color: "var(--secondary-color)" } : {}} 
              />
              <h4 className={`text-lg font-bold ${isBalancedMode ? 'text-[var(--text-color)]' : ''}`}>UX-Focused Design</h4>
              <Tooltip content="UX (User Experience) design emphasizes usability, accessibility, and efficient task completion.">
                <div className="difference-indicator">
                  <InfoIcon className="h-3 w-3" />
                </div>
              </Tooltip>
            </div>
            <p className={`mb-4 text-sm ${isBalancedMode ? 'text-[var(--text-light)]' : ''}`}>
              User-centered approach prioritizing usability and accessibility.
            </p>
            <motion.ul
              className="space-y-2"
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              {uxFeatures.map((feature, index) => (
                <motion.li key={index} className="flex items-start" variants={item}>
                  <CheckCircle 
                    className={`h-4 w-4 mt-0.5 mr-2 ${isBalancedMode ? 'text-blue-500' : ''}`} 
                    style={!isBalancedMode ? { color: "var(--secondary-color)" } : {}} 
                  />
                  <span className={`text-sm ${isBalancedMode ? 'text-[var(--text-color)]' : ''}`}>{feature}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
