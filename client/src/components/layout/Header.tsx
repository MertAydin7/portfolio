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
    <header className={`py-6 sticky top-0 z-50 ui-element ${isScrolled ? 'shadow-md' : ''}`} style={{ backgroundColor: 'var(--background-color)' }}>
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/">
            <a className="text-2xl md:text-3xl font-bold">
              <span className="ui-element" style={{ color: "var(--primary-color)" }}>
                Design
              </span>
              <span className="ui-element" style={{ color: "var(--secondary-color)" }}>
                Portfolio
              </span>
            </a>
          </Link>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2"
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className={`hidden md:block ${isUXMode ? "ux-nav" : "ui-nav"}`}>
            <ul className="flex space-x-6">
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
          <div className="hidden md:block">
            <ModeToggle />
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-2">
            <nav className={`${isUXMode ? "ux-nav" : "ui-nav"}`}>
              <ul className="flex flex-col space-y-3">
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
            <div className="mt-4">
              <ModeToggle />
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
