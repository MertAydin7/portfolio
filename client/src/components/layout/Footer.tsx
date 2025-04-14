import { useDesignMode } from "@/contexts/DesignModeContext";

export function Footer() {
  const { isUXMode, toggleMode } = useDesignMode();
  
  return (
    <footer className="ui-element py-8" style={{ backgroundColor: "var(--background-color)" }}>
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm">&copy; {new Date().getFullYear()} Design Portfolio. All rights reserved.</p>
          </div>
          
          <div className="flex items-center">
            <span className="text-sm mr-4">Currently viewing:</span>
            <span 
              className="text-sm font-bold" 
              style={{ color: "var(--primary-color)" }}
            >
              {isUXMode ? 'UX Mode' : 'UI Mode'}
            </span>
            <button 
              onClick={toggleMode}
              className="text-sm ml-4 underline" 
              style={{ color: "var(--link-color)" }}
            >
              Switch to {isUXMode ? 'UI' : 'UX'} Mode
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
