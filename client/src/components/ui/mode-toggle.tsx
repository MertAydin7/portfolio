import { useDesignMode } from "@/contexts/DesignModeContext";
import { Tooltip } from "./tooltip";
import { InfoIcon, LayoutIcon, MousePointerIcon, Columns } from "lucide-react";

interface ModeToggleProps {
  showLabels?: boolean;
  className?: string;
}

export function ModeToggle({ showLabels = true, className = "" }: ModeToggleProps) {
  const { mode, isUXMode, isUIMode, isBalancedMode, setMode, toggleMode } = useDesignMode();

  return (
    <div className={`flex items-center ${className}`}>
      <div className="flex p-1 rounded-full bg-gray-100 dark:bg-gray-800">
        {/* UI Mode Button */}
        <button 
          onClick={() => setMode('ui')}
          className={`flex items-center justify-center p-1.5 rounded-full transition-all ${
            isUIMode 
            ? 'bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-sm' 
            : 'text-gray-500 hover:text-gray-700 hover:bg-gray-200'
          }`}
          aria-label="UI Mode"
          title="UI Mode"
        >
          <LayoutIcon size={16} className={isUIMode ? 'animate-pulse' : ''} />
          {showLabels && isUIMode && (
            <span className="ml-1 text-xs font-medium">UI</span>
          )}
        </button>
        
        {/* UX Mode Button */}
        <button 
          onClick={() => setMode('ux')}
          className={`flex items-center justify-center p-1.5 rounded-full transition-all ml-1 ${
            isUXMode 
            ? 'bg-blue-600 text-white shadow-sm' 
            : 'text-gray-500 hover:text-gray-700 hover:bg-gray-200'
          }`}
          aria-label="UX Mode"
          title="UX Mode"
        >
          <MousePointerIcon size={16} />
          {showLabels && isUXMode && (
            <span className="ml-1 text-xs font-medium">UX</span>
          )}
        </button>
        
        {/* Balanced Mode Button */}
        <button 
          onClick={() => setMode('balanced')}
          className={`flex items-center justify-center p-1.5 rounded-full transition-all ml-1 ${
            isBalancedMode 
            ? 'bg-gradient-to-r from-blue-500 to-green-500 text-white shadow-sm' 
            : 'text-gray-500 hover:text-gray-700 hover:bg-gray-200'
          }`}
          aria-label="Balanced Mode"
          title="Balanced Mode"
        >
          <Columns size={16} />
          {showLabels && isBalancedMode && (
            <span className="ml-1 text-xs font-medium">Balanced</span>
          )}
        </button>
      </div>
      
      <Tooltip
        content="Switch between modes: UI-focused (style over function), UX-focused (function over style), or Balanced (best of both worlds)."
      >
        <div className="difference-indicator ml-2">
          <InfoIcon className="h-3 w-3" />
        </div>
      </Tooltip>
    </div>
  );
}
