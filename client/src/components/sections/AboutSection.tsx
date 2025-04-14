import { motion } from "framer-motion";
import { useDesignMode } from "@/contexts/DesignModeContext";
import { Tooltip } from "@/components/ui/tooltip";
import { InfoIcon, Paintbrush, UserCheck, CheckCircle } from "lucide-react";

export function AboutSection() {
  const { isUXMode } = useDesignMode();

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
    <section className="ui-element py-16 md:py-24" id="about">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          className="ui-element mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About This Project</h2>
          <p className="max-w-2xl mx-auto text-lg">
            A demonstration of how design approaches impact user experience
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <motion.div
            className="ui-element p-6 md:p-8 rounded-lg"
            style={{ border: "2px solid var(--primary-color)" }}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center mb-4">
              <Paintbrush className="h-6 w-6 mr-3" style={{ color: "var(--primary-color)" }} />
              <h3 className="text-2xl font-bold">UI-Focused Design</h3>
              <Tooltip content="UI (User Interface) design emphasizes visual appeal, trend-awareness, and aesthetic impact. Think: Dribbble designs.">
                <div className="difference-indicator">
                  <InfoIcon className="h-3 w-3" />
                </div>
              </Tooltip>
            </div>
            <p className="mb-4">
              Aesthetic-driven approach prioritizing visual impact and creative expression. Key characteristics:
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
                  <CheckCircle className="h-5 w-5 mt-1 mr-2" style={{ color: "var(--accent-color)" }} />
                  <span>{feature}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          <motion.div
            className="ui-element p-6 md:p-8 rounded-lg"
            style={{ border: "2px solid var(--secondary-color)" }}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center mb-4">
              <UserCheck className="h-6 w-6 mr-3" style={{ color: "var(--secondary-color)" }} />
              <h3 className="text-2xl font-bold">UX-Focused Design</h3>
              <Tooltip content="UX (User Experience) design emphasizes usability, accessibility, and efficient task completion. Think: Gov.uk designs.">
                <div className="difference-indicator">
                  <InfoIcon className="h-3 w-3" />
                </div>
              </Tooltip>
            </div>
            <p className="mb-4">
              User-centered approach prioritizing usability and accessibility. Key characteristics:
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
                    className="h-5 w-5 mt-1 mr-2" 
                    style={{ color: isUXMode ? "var(--secondary-color)" : "var(--secondary-color)" }} 
                  />
                  <span>{feature}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
