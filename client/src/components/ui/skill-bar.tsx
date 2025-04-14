import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useDesignMode } from "@/contexts/DesignModeContext";

interface SkillBarProps {
  name: string;
  percentage: number;
  description: string;
}

export function SkillBar({ name, percentage, description }: SkillBarProps) {
  const { isUXMode } = useDesignMode();
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    setIsInView(true);
  }, []);

  return (
    <div className="mb-6 ui-element">
      <div className="flex justify-between mb-2">
        <span className="font-medium">{name}</span>
        <span className="font-medium">{percentage}%</span>
      </div>
      <div 
        className="h-[10px] w-full bg-gray-200 rounded-full overflow-hidden"
        style={{
          backgroundColor: isUXMode ? '#e9ecef' : '#e9ecef',
          borderRadius: isUXMode ? '4px' : '5px'
        }}
      >
        <motion.div
          className="h-full"
          style={{
            backgroundColor: `var(--primary-color)`,
            borderRadius: isUXMode ? '4px' : '5px'
          }}
          initial={{ width: "0%" }}
          animate={{ width: isInView ? `${percentage}%` : "0%" }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        />
      </div>
      <p className="text-sm mt-1">{description}</p>
    </div>
  );
}
