import { createContext, useContext } from "react";

// Define the shape of our context
export interface DesignModeContextType {
  isUXMode: boolean;
  toggleMode: () => void;
}

// Create the context with a default value
export const DesignModeContext = createContext<DesignModeContextType>({
  isUXMode: false,
  toggleMode: () => console.warn("No DesignModeProvider found")
});

// Hook to use the context
export function useDesignMode(): DesignModeContextType {
  return useContext(DesignModeContext);
}
