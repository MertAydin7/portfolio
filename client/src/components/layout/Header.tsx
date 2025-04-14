import { useState, useEffect } from "react";
import { Link } from "wouter";
import { useDesignMode } from "@/contexts/DesignModeContext";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { Menu, X } from "lucide-react";

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
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/">
            <div className="text-2xl md:text-3xl font-bold cursor-pointer">
              {isUXMode ? (
                // UX Mode Logo - Simple, focused on clarity
                <span className="text-[var(--primary-color)]">
                  Portfolio
                </span>
              ) : (
                // UI Mode Logo - Creative with gradient effect
                <span>
                  <span className="ui-element bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] bg-clip-text text-transparent">
                    Design
                  </span>
                  <span className="ui-element text-[var(--accent-color)]">
                    Portfolio
                  </span>
                </span>
              )}
            </div>
          </Link>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 ${isUXMode ? 'rounded-md border border-gray-300' : 'text-[var(--primary-color)]'}`}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className={`hidden md:block ${isUXMode ? "ux-nav" : "ui-nav"}`}>
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

          {/* Mode Toggle */}
          <div className="hidden md:flex items-center">
            <ModeToggle />
            <span className="ml-3 text-sm text-gray-500">
              {isUXMode ? "UX Mode" : "UI Mode"}
            </span>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className={`md:hidden mt-4 pb-2 ${isUXMode ? 'border-t border-gray-200 pt-2' : ''}`}>
            <nav className={`${isUXMode ? "ux-nav" : "ui-nav"}`}>
              <ul className={`flex flex-col ${isUXMode ? 'space-y-2' : 'space-y-4'}`}>
                <li>
                  <a href="#about" className="nav-link block" onClick={() => setMobileMenuOpen(false)}>
                    About
                  </a>
                </li>
                <li>
                  <a href="#projects" className="nav-link block" onClick={() => setMobileMenuOpen(false)}>
                    Projects
                  </a>
                </li>
                <li>
                  <a href="#skills" className="nav-link block" onClick={() => setMobileMenuOpen(false)}>
                    Skills
                  </a>
                </li>
                <li>
                  <a href="#contact" className="nav-link block" onClick={() => setMobileMenuOpen(false)}>
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
            <div className={`${isUXMode ? 'mt-3 pt-3 border-t border-gray-200' : 'mt-5'} flex items-center`}>
              <ModeToggle />
              <span className="ml-3 text-sm text-gray-500">
                {isUXMode ? "UX Mode" : "UI Mode"}
              </span>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
