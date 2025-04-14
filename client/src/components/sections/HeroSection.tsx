import { motion } from "framer-motion";
import { useDesignMode } from "@/contexts/DesignModeContext";
import { Tooltip } from "@/components/ui/tooltip";
import { InfoIcon, ArrowRight, ChevronDown } from "lucide-react";

export function HeroSection() {
  const { isUXMode } = useDesignMode();

  // UI Mode animations
  const uiAnimations = {
    heading: {
      initial: { opacity: 0, y: 30 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.7, ease: "easeOut" }
    },
    paragraph: {
      initial: { opacity: 0, y: 30 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.7, delay: 0.2, ease: "easeOut" }
    },
    badge: {
      initial: { opacity: 0, scale: 0.8 },
      animate: { opacity: 1, scale: 1 },
      transition: { duration: 0.5, delay: 0.4 }
    },
    buttons: {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.6, delay: 0.5 }
    },
    image: {
      initial: { opacity: 0, scale: 0.9, rotate: -5 },
      animate: { opacity: 1, scale: 1, rotate: 0 },
      transition: { duration: 0.8, delay: 0.3, ease: "easeOut" }
    },
    decorItem1: {
      initial: { opacity: 0, x: -50 },
      animate: { opacity: 0.8, x: 0 },
      transition: { duration: 0.8, delay: 0.9 }
    },
    decorItem2: {
      initial: { opacity: 0, y: 50 },
      animate: { opacity: 0.6, y: 0 },
      transition: { duration: 0.8, delay: 1.1 }
    }
  };

  // UX Mode animations - much more subtle and functional
  const uxAnimations = {
    heading: {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      transition: { duration: 0.5 }
    },
    paragraph: {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      transition: { duration: 0.5, delay: 0.1 }
    },
    badge: {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      transition: { duration: 0.4, delay: 0.2 }
    },
    buttons: {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      transition: { duration: 0.4, delay: 0.3 }
    },
    image: {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      transition: { duration: 0.5, delay: 0.1 }
    }
  };

  // Choose which animation set to use
  const animations = isUXMode ? uxAnimations : uiAnimations;

  return (
    <section className={`hero-section ${isUXMode ? '' : 'overflow-hidden'}`} id="hero">
      <div className="container">
        {isUXMode ? (
          // UX-Focused Hero - Clear, functional, accessible
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-full md:w-7/12 mb-8 md:mb-0">
              <div className="bg-blue-100 border-l-4 border-blue-700 p-3 mb-5 text-sm">
                <p className="font-medium">Currently viewing: <strong>UX Mode</strong> - Gov.uk inspired design pattern</p>
              </div>
              
              <motion.h1 
                {...animations.heading}
                className="mb-4"
              >
                Design that puts users first
              </motion.h1>
              
              <motion.p 
                {...animations.paragraph}
                className="text-lg mb-6 max-w-2xl"
              >
                This portfolio demonstrates two different design approaches. The UX-focused approach (current view) emphasizes clarity, accessibility, and usability.
              </motion.p>
              
              <motion.div 
                {...animations.badge}
                className="mb-6"
              >
                <span className="inline-flex items-center px-3 py-1 bg-blue-50 text-blue-800 border border-blue-200 rounded-sm text-sm">
                  Interactive Demo
                  <Tooltip content="Toggle between UI and UX modes to experience different design approaches">
                    <InfoIcon className="h-4 w-4 ml-2 text-blue-600" />
                  </Tooltip>
                </span>
              </motion.div>
              
              <motion.div 
                {...animations.buttons}
                className="space-y-3 sm:space-y-0 sm:space-x-4 flex flex-col sm:flex-row"
              >
                <a href="#projects" className="btn-ux">
                  View Projects
                </a>
                <a href="#about" className="text-base underline text-blue-700 font-medium px-2 py-2 inline-flex items-center">
                  Learn More <ArrowRight className="h-4 w-4 ml-1" />
                </a>
              </motion.div>
            </div>
            
            <motion.div 
              {...animations.image}
              className="w-full md:w-5/12"
            >
              <div className="border border-gray-300 rounded-md overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
                  alt="Design comparison illustration" 
                  className="w-full"
                />
                <div className="bg-gray-100 p-3 border-t border-gray-300">
                  <p className="text-sm text-gray-700">Toggle the switch in the header to see the UI-focused design version</p>
                </div>
              </div>
            </motion.div>
          </div>
        ) : (
          // UI-Focused Hero - Creative, visually striking, animation-rich
          <div className="flex flex-col md:flex-row items-center relative">
            {/* Decorative elements - UI mode only */}
            <motion.div 
              {...uiAnimations.decorItem1}
              className="absolute top-20 left-0 w-64 h-64 bg-gradient-to-r from-purple-500/10 to-pink-500/5 rounded-full blur-3xl -z-10"
            />
            <motion.div 
              {...uiAnimations.decorItem2}
              className="absolute bottom-10 right-10 w-72 h-72 bg-gradient-to-r from-cyan-500/10 to-blue-500/5 rounded-full blur-3xl -z-10"
            />
            
            <div className="w-full md:w-1/2 mb-12 md:mb-0 relative">
              <motion.span 
                className="absolute -top-6 left-0 text-xs font-medium bg-gradient-to-r from-purple-500 to-pink-500 text-white py-1 px-3 rounded-full"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                UI Mode • Dribbble Inspired
              </motion.span>
            
              <motion.h1 
                {...animations.heading}
                className="relative"
              >
                Design that <span className="relative">
                  captivates
                  <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></span>
                </span> & <span className="relative">
                  inspires
                  <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-pink-500 to-orange-500 rounded-full"></span>
                </span>
              </motion.h1>
              
              <motion.p 
                {...animations.paragraph}
                className="text-lg md:text-xl mb-8 max-w-xl"
              >
                Explore the beauty of UI-focused design with vibrant colors, creative animations, and eye-catching visuals in this interactive showcase.
              </motion.p>
              
              <motion.div 
                {...animations.badge}
                className="mb-8"
              >
                <span className="text-sm font-medium py-2 px-4 rounded-full text-white inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 shadow-lg shadow-purple-500/30">
                  <span className="animate-pulse w-2 h-2 bg-white rounded-full"></span>
                  Interactive Experience
                  <Tooltip content="Switch between UI mode (current) and UX mode to experience different design philosophies">
                    <div className="ml-1 w-5 h-5 rounded-full bg-white/20 flex items-center justify-center">
                      <InfoIcon className="h-3 w-3 text-white" />
                    </div>
                  </Tooltip>
                </span>
              </motion.div>
              
              <motion.div 
                {...animations.buttons}
                className="flex items-center gap-6"
              >
                <a href="#projects" className="btn-ui">
                  Explore Projects
                </a>
                <a href="#about" className="group flex items-center text-base font-medium relative">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Discover More</span>
                  <span className="ml-2 transform transition-transform group-hover:translate-x-1">
                    <ArrowRight className="h-5 w-5 text-pink-500" />
                  </span>
                </a>
              </motion.div>
              
              <motion.div 
                className="mt-16 flex justify-center md:hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.3 }}
              >
                <ChevronDown className="h-8 w-8 text-gray-400 animate-bounce" />
              </motion.div>
            </div>
            
            <motion.div 
              {...animations.image}
              className="w-full md:w-1/2 flex justify-center relative"
            >
              <div className="relative">
                <div className="absolute inset-0 -m-6 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl blur-xl"></div>
                <img 
                  src="https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
                  alt="Creative design illustration" 
                  className="relative rounded-xl shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-700"
                />
                <div className="absolute -bottom-5 -right-5 bg-white p-4 rounded-lg shadow-xl border-2 border-pink-500">
                  <span className="flex items-center text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                    Switch to UX Mode
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </div>
      
      {/* Bottom Scroll Indicator - Only in UI Mode */}
      {!isUXMode && (
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 hidden md:block">
          <motion.div 
            className="flex flex-col items-center text-gray-400"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.4 }}
          >
            <span className="text-xs uppercase tracking-widest mb-2">Scroll</span>
            <ChevronDown className="h-6 w-6 animate-bounce" />
          </motion.div>
        </div>
      )}
    </section>
  );
}
