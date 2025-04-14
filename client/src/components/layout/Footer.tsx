import { useDesignMode } from "@/contexts/DesignModeContext";

export function Footer() {
  const { isUXMode, toggleMode } = useDesignMode();
  
  return (
    <footer className="site-footer">
      <div className="container">
        {isUXMode ? (
          // UX-Focused Footer - Clear structure, accessible links, practical design
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-white font-bold text-lg mb-4">About</h3>
              <p className="text-gray-300 text-sm">
                This portfolio showcases the difference between UI-focused design and UX-focused design approaches.
              </p>
            </div>
            
            <div>
              <h3 className="text-white font-bold text-lg mb-4">Links</h3>
              <ul className="space-y-2">
                <li><a href="#about" className="text-gray-300 hover:text-white hover:underline">About</a></li>
                <li><a href="#projects" className="text-gray-300 hover:text-white hover:underline">Projects</a></li>
                <li><a href="#skills" className="text-gray-300 hover:text-white hover:underline">Skills</a></li>
                <li><a href="#contact" className="text-gray-300 hover:text-white hover:underline">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-white font-bold text-lg mb-4">Design Modes</h3>
              <p className="text-gray-300 text-sm mb-3">
                You are currently viewing the <strong>UX-focused</strong> version with emphasis on clarity, accessibility, and usability.
              </p>
              <button 
                onClick={toggleMode}
                className="text-white bg-blue-700 hover:bg-blue-800 px-4 py-2 rounded-md text-sm font-medium focus:outline-none focus:ring-2 focus:ring-yellow-400"
              >
                Switch to UI Mode
              </button>
            </div>
          </div>
        ) : (
          // UI-Focused Footer - Creative layout, fancy effects, aesthetic focus
          <div className="flex flex-col md:flex-row items-start justify-between">
            <div className="mb-8 md:mb-0 w-full md:w-1/3">
              <h3 className="text-white text-2xl font-bold mb-4 bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">Design Portfolio</h3>
              <p className="text-gray-400">
                Showcasing the beauty of creative UI design with vibrant colors and engaging animations.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-x-8 gap-y-4 w-full md:w-2/3">
              <div>
                <div className="h-px w-12 bg-gradient-to-r from-pink-500 to-purple-500 mb-4"></div>
                <h4 className="text-white text-lg font-semibold mb-3">Navigation</h4>
                <ul className="space-y-2">
                  <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About</a></li>
                  <li><a href="#projects" className="text-gray-400 hover:text-white transition-colors">Projects</a></li>
                </ul>
              </div>
              
              <div>
                <div className="h-px w-12 bg-gradient-to-r from-purple-500 to-cyan-400 mb-4"></div>
                <h4 className="text-white text-lg font-semibold mb-3">More</h4>
                <ul className="space-y-2">
                  <li><a href="#skills" className="text-gray-400 hover:text-white transition-colors">Skills</a></li>
                  <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
                </ul>
              </div>
              
              <div className="col-span-2 mt-6">
                <div className="h-px w-12 bg-gradient-to-r from-cyan-400 to-emerald-400 mb-4"></div>
                <h4 className="text-white text-lg font-semibold mb-3">Design Mode</h4>
                <p className="text-gray-400 mb-3">
                  Currently in <span className="text-pink-400 font-medium">UI Mode</span> - focused on aesthetic beauty and visual delight
                </p>
                <button 
                  onClick={toggleMode}
                  className="px-6 py-2 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-white font-medium hover:shadow-lg hover:shadow-pink-500/20 transition-all duration-300 transform hover:-translate-y-1"
                >
                  Switch to UX Mode
                </button>
              </div>
            </div>
          </div>
        )}
        
        <div className={`${isUXMode ? 'mt-8 pt-6 border-t border-gray-700' : 'mt-12 pt-6 border-t border-gray-800'} text-center text-gray-400 text-sm`}>
          &copy; {new Date().getFullYear()} Design Portfolio. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
