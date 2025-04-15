import { motion } from "framer-motion";
import { useDesignMode } from "@/contexts/DesignModeContext";

interface ProjectCardProps {
  image: string;
  title: string;
  description: string;
  category: string;
  technologies?: string[];
  period?: string; 
  role?: string;
}

export function ProjectCard({
  image,
  title,
  description,
  category,
  technologies = [],
  period,
  role
}: ProjectCardProps) {
  const { isUXMode, isBalancedMode } = useDesignMode();

  return (
    <motion.div
      className={`${isUXMode ? "ux-project-card" : isBalancedMode ? "balanced-project-card" : "ui-project-card"} ui-element h-full`}
      whileHover={isUXMode ? { y: 0 } : isBalancedMode ? { y: -5 } : { y: -10 }}
    >
      <div className="relative overflow-hidden" style={{ height: "200px" }}>
        <img
          src={image}
          alt={title}
          className={`w-full h-full object-cover ${isUXMode ? '' : isBalancedMode ? 'hover:scale-105 transition-transform duration-500' : 'transition-transform duration-700 hover:scale-110'}`}
        />
        {!isUXMode && !isBalancedMode && (
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
            <p className="text-white text-lg font-bold p-4">{title}</p>
          </div>
        )}
        
        {/* Period badge - only in balanced and UX mode */}
        {(isBalancedMode || isUXMode) && period && (
          <div className={`absolute top-2 right-2 ${isBalancedMode ? 'bg-white/90 text-gray-800' : 'bg-blue-700 text-white'} text-xs px-2 py-1 rounded-md font-medium`}>
            {period}
          </div>
        )}
      </div>
      
      <div className={`p-5 ${isBalancedMode ? 'flex flex-col h-[calc(100%-200px)]' : ''}`}>
        <div className={isBalancedMode ? 'flex-grow' : ''}>
          <h3 className={`${isUXMode ? 'text-lg' : isBalancedMode ? 'text-xl' : 'text-xl font-bold'} mb-2`}>
            {title}
            {isBalancedMode && role && <span className="text-sm text-[var(--text-light)] ml-2">({role})</span>}
          </h3>
          
          {isUXMode && role && (
            <p className="text-sm font-medium text-blue-700 mb-2">{role}</p>
          )}
          
          <p className={`mb-4 ${isUXMode ? 'text-sm' : isBalancedMode ? 'text-sm text-[var(--text-color)]' : ''}`}>
            {description}
          </p>
          
          {/* Technologies list - show in balanced and UX mode */}
          {(isBalancedMode || isUXMode) && technologies.length > 0 && (
            <div className="mb-4">
              <div className="flex flex-wrap gap-1.5">
                {technologies.map((tech, index) => (
                  <span 
                    key={index} 
                    className={`inline-block text-xs px-2 py-1 rounded ${
                      isBalancedMode 
                        ? 'bg-gray-100 text-gray-800' 
                        : 'bg-blue-100 text-blue-800 border border-blue-200'
                    }`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
        
        <div className={`flex justify-between items-center ${isBalancedMode ? 'mt-auto pt-3 border-t border-gray-100' : ''}`}>
          <span
            className={`text-xs font-medium py-1 px-2.5 rounded-full ${
              isBalancedMode 
                ? 'bg-[var(--primary-color)/10] text-[var(--primary-color)]' 
                : 'text-white'
            }`}
            style={!isBalancedMode ? { backgroundColor: "var(--accent-color)" } : {}}
          >
            {category}
          </span>
          <a
            href="#"
            className={`text-xs font-medium ${isBalancedMode ? 'text-[var(--primary-color)] hover:underline' : ''}`}
            style={!isBalancedMode ? { color: "var(--link-color)" } : {}}
          >
            View Details →
          </a>
        </div>
      </div>
    </motion.div>
  );
}
