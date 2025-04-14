import { useState, useEffect } from "react";
import { Link } from "wouter";
import { useDesignMode } from "@/contexts/DesignModeContext";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { Menu, X, Info, Eye, Lightbulb, HelpCircle } from "lucide-react";

export function Header() {
  const { isUXMode } = useDesignMode();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 site-header ${isScrolled ? 'shadow-md' : ''}`}>
      <div className="container">
        {isUXMode ? (
          // UX-focused header - Extremely functional, clear, accessible
          <div>
            {/* Skip to main content link - accessibility feature */}
            <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:p-2 focus:bg-blue-700 focus:text-white">
              Skip to main content
            </a>

            <div className="flex justify-between items-center">
              {/* Simple, clear logo */}
              <Link href="/">
                <div className="text-2xl font-bold cursor-pointer">
                  <span className="text-black">
                    Portfolio
                  </span>
                </div>
              </Link>

              {/* Clear mobile menu toggle with proper ARIA labels */}
              <div className="md:hidden">
                <button 
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="p-2 border border-gray-400 bg-white"
                  aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
                  aria-expanded={mobileMenuOpen}
                >
                  {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
                </button>
              </div>

              {/* Clear, predictable navigation */}
              <nav className="hidden md:block ux-nav">
                <ul className="flex">
                  <li>
                    <a href="#about" className="nav-link">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="#projects" className="nav-link">
                      Projects
                    </a>
                  </li>
                  <li>
                    <a href="#skills" className="nav-link">
                      Skills
                    </a>
                  </li>
                  <li>
                    <a href="#contact" className="nav-link">
                      Contact
                    </a>
                  </li>
                </ul>
              </nav>

              {/* Mode toggle with clear labeling */}
              <div className="hidden md:flex items-center">
                <div className="mr-3 text-sm flex items-center">
                  <span className="font-bold mr-1">Current:</span> UX Mode
                </div>
                <ModeToggle />
              </div>
            </div>

            {/* Mobile menu - accessible and properly structured */}
            {mobileMenuOpen && (
              <div className="md:hidden mt-2 pt-2 border-t border-gray-200">
                <nav>
                  <ul className="flex flex-col space-y-2">
                    <li>
                      <a href="#about" className="nav-link block py-2" onClick={() => setMobileMenuOpen(false)}>
                        About
                      </a>
                    </li>
                    <li>
                      <a href="#projects" className="nav-link block py-2" onClick={() => setMobileMenuOpen(false)}>
                        Projects
                      </a>
                    </li>
                    <li>
                      <a href="#skills" className="nav-link block py-2" onClick={() => setMobileMenuOpen(false)}>
                        Skills
                      </a>
                    </li>
                    <li>
                      <a href="#contact" className="nav-link block py-2" onClick={() => setMobileMenuOpen(false)}>
                        Contact
                      </a>
                    </li>
                  </ul>
                </nav>
                <div className="mt-3 pt-3 border-t border-gray-200 flex items-center justify-between">
                  <div className="text-sm">
                    <span className="font-bold">Current:</span> UX Mode
                  </div>
                  <ModeToggle />
                </div>
              </div>
            )}
          </div>
        ) : (
          // UI-focused header - All style, poor usability
          <div>
            <div className="flex justify-between items-center">
              {/* Overly stylized logo */}
              <Link href="/">
                <div className="cursor-pointer">
                  <span className="relative z-10">
                    <span className="text-3xl md:text-4xl font-extrabold ui-element bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
                      Design
                    </span>
                    <span className="text-xl md:text-2xl font-bold ui-element text-[var(--accent-color)] ml-1">
                      Portfolio
                    </span>
                    <span className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-pink-500 to-purple-500"></span>
                  </span>
                </div>
              </Link>

              {/* Confusing mobile menu toggle with no clear purpose */}
              <div className="md:hidden">
                <button 
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="p-2 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full text-white shadow-lg"
                >
                  {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
                </button>
              </div>

              {/* Navigation with unclear interactive states */}
              <nav className="hidden md:block ui-nav">
                <ul className="flex">
                  <li>
                    <a href="#about" className="nav-link">
                      <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent font-medium">
                        Discover
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="#projects" className="nav-link">
                      <span className="bg-gradient-to-r from-purple-500 to-indigo-500 bg-clip-text text-transparent font-medium">
                        Creations
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="#skills" className="nav-link">
                      <span className="bg-gradient-to-r from-indigo-500 to-cyan-500 bg-clip-text text-transparent font-medium">
                        Expertise
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="#contact" className="nav-link">
                      <span className="bg-gradient-to-r from-cyan-500 to-emerald-500 bg-clip-text text-transparent font-medium">
                        Connect
                      </span>
                    </a>
                  </li>
                </ul>
              </nav>

              {/* Complex mode toggle with confusing design */}
              <div className="hidden md:flex items-center">
                {/* Decorative elements that add noise */}
                <div className="w-2 h-2 rounded-full bg-pink-500 mr-1 animate-pulse"></div>
                <div className="w-2 h-2 rounded-full bg-purple-500 mr-1 animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                <div className="w-2 h-2 rounded-full bg-indigo-500 mr-3 animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                
                <div className="mr-2 relative">
                  <ModeToggle />
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-pink-500 rounded-full animate-ping opacity-75"></div>
                </div>
                
                <span className="ml-2 text-sm text-gray-400 italic">
                  Style Mode
                </span>
              </div>
            </div>

            {/* Confusing mobile menu with excessive styling */}
            {mobileMenuOpen && (
              <div className="md:hidden mt-6 pb-4 relative overflow-hidden">
                {/* Decorative gradient background that makes text harder to read */}
                <div className="absolute inset-0 opacity-10 bg-gradient-to-b from-purple-500 to-pink-500 pointer-events-none"></div>
                
                <nav className="ui-nav relative z-10">
                  <ul className="flex flex-col space-y-6">
                    <li>
                      <a href="#about" className="nav-link block" onClick={() => setMobileMenuOpen(false)}>
                        <span className="text-lg font-medium bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
                          Discover
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="#projects" className="nav-link block" onClick={() => setMobileMenuOpen(false)}>
                        <span className="text-lg font-medium bg-gradient-to-r from-purple-500 to-indigo-500 bg-clip-text text-transparent">
                          Creations
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="#skills" className="nav-link block" onClick={() => setMobileMenuOpen(false)}>
                        <span className="text-lg font-medium bg-gradient-to-r from-indigo-500 to-cyan-500 bg-clip-text text-transparent">
                          Expertise
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="#contact" className="nav-link block" onClick={() => setMobileMenuOpen(false)}>
                        <span className="text-lg font-medium bg-gradient-to-r from-cyan-500 to-emerald-500 bg-clip-text text-transparent">
                          Connect
                        </span>
                      </a>
                    </li>
                  </ul>
                </nav>
                
                {/* Hard to identify toggle section */}
                <div className="mt-8 flex flex-col items-center">
                  <div className="w-16 h-1 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full mb-6"></div>
                  
                  <div className="flex items-center shadow-lg p-3 rounded-full bg-gradient-to-r from-pink-500/10 to-purple-500/10">
                    <span className="mr-3 text-sm text-gray-400 italic">
                      Switch View
                    </span>
                    <ModeToggle />
                  </div>
                  
                  <div className="mt-4 flex justify-center">
                    <HelpCircle size={18} className="text-gray-300" />
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </header>
  );
}
