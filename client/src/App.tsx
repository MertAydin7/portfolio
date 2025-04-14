import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import { useDesignMode } from "./contexts/DesignModeContext";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  );
}

// This component uses the design mode context
function AppContent() {
  const { isUXMode } = useDesignMode();
  
  return (
    <div className={`min-h-screen ${isUXMode ? 'ux-mode' : ''}`}>
      <Router />
      <Toaster />
    </div>
  );
}

// This component does not use the design mode context directly
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AppContent />
    </QueryClientProvider>
  );
}

export default App;
