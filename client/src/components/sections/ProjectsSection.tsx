import { motion } from "framer-motion";
import { useDesignMode } from "@/contexts/DesignModeContext";
import { ProjectCard } from "@/components/ui/project-card";
import { Tooltip } from "@/components/ui/tooltip";
import { InfoIcon } from "lucide-react";
import { projects as projectsData } from "@/lib/data";
import { projects as fullProjects } from "@/lib/resumeData";

export function ProjectsSection() {
  const { isUXMode, isBalancedMode } = useDesignMode();
  
  const buttonClass = isUXMode ? "btn-ux" : isBalancedMode ? "btn-balanced" : "btn-ui";

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
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${isBalancedMode ? 'text-[var(--text-color)]' : ''}`}>
            {isUXMode ? 'Project Experience' : isBalancedMode ? 'Featured Projects' : 'Stunning Creations'}
          </h2>
          <p className={`max-w-2xl mx-auto ${isUXMode ? 'text-base' : isBalancedMode ? 'text-lg text-[var(--text-light)]' : 'text-lg'}`}>
            {isUXMode 
              ? 'A collection of development projects with details on technologies and responsibilities'
              : isBalancedMode 
                ? 'Showcasing recent work across various technologies and domains'
                : 'Explore a curated gallery of masterfully crafted digital experiences'
            }
            <Tooltip content="Notice how project cards, images, and information change between UI, UX, and balanced modes to reflect different design priorities.">
              <div className="difference-indicator">
                <InfoIcon className="h-3 w-3" />
              </div>
            </Tooltip>
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {fullProjects.slice(0, 6).map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="h-full"
            >
              <ProjectCard
                image={project.image}
                title={project.title}
                description={project.description}
                category={project.category}
                technologies={project.technologies}
                period={project.period}
                role={project.role}
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
          {isBalancedMode ? (
            <a href="#" className="px-5 py-2.5 bg-[var(--primary-color)] text-white rounded-md font-medium inline-flex items-center hover:bg-[var(--primary-color)]/90 transition-colors">
              View All Projects
            </a>
          ) : (
            <a href="#" className={`btn ${buttonClass} inline-block`}>
              {isUXMode ? 'View All Projects' : 'Explore Gallery'}
            </a>
          )}
        </motion.div>
      </div>
    </section>
  );
}
