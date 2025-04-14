import { ReactNode, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface TooltipProps {
  children: ReactNode;
  content: string;
  position?: "top" | "bottom" | "left" | "right";
  delay?: number;
  width?: string;
}

export function Tooltip({
  children,
  content,
  position = "top",
  delay = 0,
  width = "200px",
}: TooltipProps) {
  const [isVisible, setIsVisible] = useState(false);

  const positionStyles = {
    top: "bottom-full left-1/2 transform -translate-x-1/2 mb-2",
    bottom: "top-full left-1/2 transform -translate-x-1/2 mt-2",
    left: "right-full top-1/2 transform -translate-y-1/2 mr-2",
    right: "left-full top-1/2 transform -translate-y-1/2 ml-2",
  };

  const arrowStyles = {
    top: "top-full left-1/2 transform -translate-x-1/2 border-t-[var(--text-color)] border-r-transparent border-b-transparent border-l-transparent",
    bottom: "bottom-full left-1/2 transform -translate-x-1/2 border-b-[var(--text-color)] border-r-transparent border-t-transparent border-l-transparent",
    left: "left-full top-1/2 transform -translate-y-1/2 border-l-[var(--text-color)] border-t-transparent border-r-transparent border-b-transparent",
    right: "right-full top-1/2 transform -translate-y-1/2 border-r-[var(--text-color)] border-t-transparent border-l-transparent border-b-transparent",
  };

  return (
    <div 
      className="relative inline-block"
      onMouseEnter={() => setTimeout(() => setIsVisible(true), delay)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.15 }}
            className={`absolute z-50 ${positionStyles[position]}`}
            style={{ width }}
          >
            <div className="bg-[var(--text-color)] text-[var(--background-color)] text-sm p-2 rounded-md shadow-lg">
              {content}
              <div className={`absolute w-0 h-0 border-4 ${arrowStyles[position]}`} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
