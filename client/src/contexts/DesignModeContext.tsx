import { createContext, useContext } from "react";

// Define our possible design modes
export type DesignMode = 'ui' | 'ux' | 'balanced';

// Define the shape of our context
export interface DesignModeContextType {
  isUXMode: boolean;
  isUIMode: boolean;
  isBalancedMode: boolean;
  mode: DesignMode;
  setMode: (mode: DesignMode) => void;
  toggleMode: () => void;
}

// Create the context with a default value
export const DesignModeContext = createContext<DesignModeContextType>({
  isUXMode: false,
  isUIMode: true,
  isBalancedMode: false,
  mode: 'ui',
  setMode: () => console.warn("No DesignModeProvider found"),
  toggleMode: () => console.warn("No DesignModeProvider found")
});

// Hook to use the context
export function useDesignMode(): DesignModeContextType {
  return useContext(DesignModeContext);
}
