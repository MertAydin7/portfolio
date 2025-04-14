import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import { useState, useEffect } from "react";
import { DesignModeContext } from "@/contexts/DesignModeContext";

// Define the possible design modes as a type
type DesignMode = 'ui' | 'ux' | 'balanced';

// Routes component
function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  );
}

// Main App component
function App() {
  // Create the design mode state directly in the App component
  const [mode, setMode] = useState<DesignMode>('ui');
  
  // Derived states for backward compatibility and easier checks
  const isUXMode = mode === 'ux';
  const isUIMode = mode === 'ui';
  const isBalancedMode = mode === 'balanced';
  
  // Mode setter function
  const setDesignMode = (newMode: DesignMode) => {
    setMode(newMode);
  };
  
  // Toggle function that cycles through all three modes
  const toggleMode = () => {
    setMode(prevMode => {
      switch (prevMode) {
        case 'ui': return 'ux';
        case 'ux': return 'balanced';
        case 'balanced': return 'ui';
        default: return 'ui';
      }
    });
  };
  
  // Apply the appropriate class to the root element based on the current mode
  useEffect(() => {
    const rootElement = document.documentElement;
    
    // Remove all mode classes first
    rootElement.classList.remove('ux-mode', 'ui-mode', 'balanced-mode');
    
    // Add the appropriate class based on the current mode
    if (mode === 'ux') {
      rootElement.classList.add('ux-mode');
    } else if (mode === 'balanced') {
      rootElement.classList.add('balanced-mode');
    } else {
      rootElement.classList.add('ui-mode');
    }
  }, [mode]);
  
  // Create the context value
  const designModeValue = {
    isUXMode,
    isUIMode,
    isBalancedMode,
    mode,
    setMode: setDesignMode,
    toggleMode
  };
  
  return (
    <QueryClientProvider client={queryClient}>
      <DesignModeContext.Provider value={designModeValue}>
        <div className="min-h-screen">
          <Router />
          <Toaster />
        </div>
      </DesignModeContext.Provider>
    </QueryClientProvider>
  );
}

export default App;
