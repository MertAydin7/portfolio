import { createContext, useState, useContext, ReactNode, useEffect } from "react";

interface DesignModeContextType {
  isUXMode: boolean;
  toggleMode: () => void;
}

// Create the context with a default value to satisfy TypeScript
const DesignModeContext = createContext<DesignModeContextType>({
  isUXMode: false,
  toggleMode: () => console.warn("No DesignModeProvider found")
});

export function DesignModeProvider({ children }: { children: ReactNode }) {
  const [isUXMode, setIsUXMode] = useState<boolean>(false);
  const [mounted, setMounted] = useState(false);

  // Use useEffect to handle client-side rendering properly
  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleMode = () => {
    setIsUXMode((prevMode) => !prevMode);
  };

  // Create the context value object just once (optimization)
  const contextValue = {
    isUXMode,
    toggleMode
  };

  // Render children only after mounting to avoid hydration issues
  return (
    <DesignModeContext.Provider value={contextValue}>
      {mounted ? children : null}
    </DesignModeContext.Provider>
  );
}

export function useDesignMode(): DesignModeContextType {
  const context = useContext(DesignModeContext);
  return context;
}
