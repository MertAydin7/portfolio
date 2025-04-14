import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import { useState } from "react";
import { DesignModeContext } from "@/contexts/DesignModeContext";

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
  const [isUXMode, setIsUXMode] = useState(false);
  
  // Toggle function
  const toggleMode = () => {
    setIsUXMode(prevMode => !prevMode);
  };
  
  // Create the context value
  const designModeValue = {
    isUXMode,
    toggleMode
  };
  
  return (
    <QueryClientProvider client={queryClient}>
      <DesignModeContext.Provider value={designModeValue}>
        <div className={`min-h-screen ${isUXMode ? 'ux-mode' : ''}`}>
          <Router />
          <Toaster />
        </div>
      </DesignModeContext.Provider>
    </QueryClientProvider>
  );
}

export default App;
