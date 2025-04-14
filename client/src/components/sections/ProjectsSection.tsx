import { motion } from "framer-motion";
import { useDesignMode } from "@/contexts/DesignModeContext";
import { ProjectCard } from "@/components/ui/project-card";
import { Tooltip } from "@/components/ui/tooltip";
import { InfoIcon } from "lucide-react";
import { projects } from "@/lib/data";

export function ProjectsSection() {
  const { isUXMode } = useDesignMode();
  
  const buttonClass = isUXMode ? "btn-ux" : "btn-ui";

  return (
    <section 
      className="ui-element py-16 md:py-24 relative" 
      id="projects" 
      style={{ backgroundColor: "var(--background-color)" }}
    >
      <div className="container mx-auto px-4 md:px-8">
        <motion.div 
          className="ui-element mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="max-w-2xl mx-auto text-lg">
            Each project is displayed differently based on the active design mode
            <Tooltip content="Notice how project cards, images, and information change between UI and UX modes to reflect different design priorities.">
              <div className="difference-indicator">
                <InfoIcon className="h-3 w-3" />
              </div>
            </Tooltip>
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ProjectCard
                image={project.image}
                title={project.title}
                description={project.description}
                category={project.category}
              />
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <a href="#" className={`btn ${buttonClass} inline-block`}>
            View All Projects
          </a>
        </motion.div>
      </div>
    </section>
  );
}
