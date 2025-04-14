import { motion } from "framer-motion";
import { useDesignMode } from "@/contexts/DesignModeContext";
import { Tooltip } from "@/components/ui/tooltip";
import { InfoIcon } from "lucide-react";

export function HeroSection() {
  const { isUXMode } = useDesignMode();

  const buttonClass = isUXMode ? "btn-ux" : "btn-ui";

  return (
    <section className="ui-element py-12 md:py-20" id="hero">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Design that <span className="ui-element" style={{ color: "var(--primary-color)" }}>communicates</span> & <span className="ui-element" style={{ color: "var(--secondary-color)" }}>connects</span>
            </motion.h1>
            <motion.p 
              className="text-lg md:text-xl mb-6 ui-element"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              style={{ maxWidth: "500px" }}
            >
              Explore how UI and UX approaches create different experiences through this interactive portfolio showcase.
            </motion.p>
            <motion.div 
              className="mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <span 
                className="text-sm font-medium py-1 px-3 rounded-full text-white inline-flex items-center"
                style={{ backgroundColor: "var(--accent-color)" }}
              >
                Interactive Demo
                <Tooltip 
                  content="This portfolio has two modes: UI-focused (Dribbble-inspired) and UX-focused (Gov.uk-inspired). Toggle between them to see the difference!"
                >
                  <div className="difference-indicator ml-2">
                    <InfoIcon className="h-3 w-3" />
                  </div>
                </Tooltip>
              </span>
            </motion.div>
            <motion.div 
              className="flex space-x-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <a href="#projects" className={`btn ${buttonClass}`}>
                View Projects
              </a>
              <a 
                href="#about" 
                className="text-base font-medium px-6 py-3 ui-element"
                style={{ color: "var(--primary-color)" }}
              >
                Learn More
              </a>
            </motion.div>
          </div>
          
          <motion.div 
            className="md:w-1/2 flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="relative ui-element">
              <img 
                src="https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
                alt="Design comparison illustration" 
                className="rounded-lg shadow-lg" 
                style={{ maxWidth: "100%", height: "auto" }}
              />
              {!isUXMode && (
                <div 
                  className="absolute -bottom-4 -right-4 bg-white p-3 rounded-lg shadow-lg ui-element" 
                  style={{ border: "3px solid var(--accent-color)" }}
                >
                  <span className="text-sm font-medium" style={{ color: "var(--primary-color)" }}>
                    Toggle modes to see the difference
                  </span>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
