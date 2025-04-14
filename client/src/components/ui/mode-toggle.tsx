import { useDesignMode } from "@/contexts/DesignModeContext";
import { Switch } from "@/components/ui/switch";
import { Tooltip } from "./tooltip";
import { InfoIcon } from "lucide-react";

interface ModeToggleProps {
  showLabels?: boolean;
  className?: string;
}

export function ModeToggle({ showLabels = true, className = "" }: ModeToggleProps) {
  const { isUXMode, toggleMode } = useDesignMode();

  return (
    <div className={`flex items-center ${className}`}>
      {showLabels && (
        <span className="mr-2 text-sm font-medium">UI</span>
      )}
      <Switch 
        checked={isUXMode}
        onCheckedChange={toggleMode}
        className={`${isUXMode ? 'bg-[var(--primary-color)]' : 'bg-[var(--secondary-color)]'}`}
      />
      {showLabels && (
        <span className="ml-2 text-sm font-medium">UX</span>
      )}
      <Tooltip
        content="Toggle between UI-focused design (aesthetic-driven) and UX-focused design (user-centered). Notice the differences in typography, spacing, colors, and interactive elements."
      >
        <div className="difference-indicator ml-2">
          <InfoIcon className="h-3 w-3" />
        </div>
      </Tooltip>
    </div>
  );
}
