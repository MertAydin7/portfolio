import { motion } from "framer-motion";
import { useDesignMode } from "@/contexts/DesignModeContext";

interface ProjectCardProps {
  image: string;
  title: string;
  description: string;
  category: string;
}

export function ProjectCard({
  image,
  title,
  description,
  category,
}: ProjectCardProps) {
  const { isUXMode } = useDesignMode();

  return (
    <motion.div
      className={`${isUXMode ? "ux-project-card" : "ui-project-card"} ui-element`}
      whileHover={isUXMode ? { y: 0 } : { y: -10 }}
    >
      <div className="relative overflow-hidden" style={{ height: "200px" }}>
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
        />
        {!isUXMode && (
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
            <p className="text-white text-lg font-bold p-4">{title}</p>
          </div>
        )}
      </div>
      <div className="p-5">
        <h3 className="text-xl font-bold mb-3">{title}</h3>
        <p className="mb-4">{description}</p>
        <div className="flex justify-between items-center">
          <span
            className="text-sm font-medium py-1 px-3 rounded-full text-white"
            style={{ backgroundColor: "var(--accent-color)" }}
          >
            {category}
          </span>
          <a
            href="#"
            className="text-sm font-medium"
            style={{ color: "var(--link-color)" }}
          >
            View Details →
          </a>
        </div>
      </div>
    </motion.div>
  );
}
