import { motion } from "framer-motion";
import { useDesignMode } from "@/contexts/DesignModeContext";
import { Tooltip } from "@/components/ui/tooltip";
import { InfoIcon, ArrowRight, ChevronDown, AlertTriangle, Code, LayoutPanelLeft, MousePointerClick } from "lucide-react";

export function HeroSection() {
  const { isUXMode, isUIMode, isBalancedMode } = useDesignMode();

  // UI Mode animations - extremely exaggerated and flashy
  const uiAnimations = {
    heading: {
      initial: { opacity: 0, y: 50, scale: 0.9 },
      animate: { opacity: 1, y: 0, scale: 1 },
      transition: { duration: 1.2, ease: "easeOut" }
    },
    paragraph: {
      initial: { opacity: 0, y: 50 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 1, delay: 0.4, ease: "easeOut" }
    },
    badge: {
      initial: { opacity: 0, scale: 0.6, rotate: -10 },
      animate: { opacity: 1, scale: 1, rotate: 0 },
      transition: { duration: 0.8, delay: 0.7, type: "spring" }
    },
    buttons: {
      initial: { opacity: 0, y: 30 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.8, delay: 0.9 }
    },
    image: {
      initial: { opacity: 0, scale: 0.8, rotate: -8 },
      animate: { opacity: 1, scale: 1, rotate: 0 },
      transition: { duration: 1.2, delay: 0.5, type: "spring", stiffness: 100 }
    },
    decorItem1: {
      initial: { opacity: 0, x: -100 },
      animate: { opacity: 0.8, x: 0 },
      transition: { duration: 1.2, delay: 1.2 }
    },
    decorItem2: {
      initial: { opacity: 0, y: 100 },
      animate: { opacity: 0.7, y: 0 },
      transition: { duration: 1.2, delay: 1.4 }
    },
    decorItem3: {
      initial: { opacity: 0, scale: 0.5 },
      animate: { opacity: 0.6, scale: 1 },
      transition: { duration: 1.5, delay: 1.6 }
    }
  };

  // UX Mode animations - no animations for better performance and reduced distractions
  const uxAnimations = {
    heading: {
      initial: { opacity: 1 },
      animate: { opacity: 1 },
      transition: { duration: 0 }
    },
    paragraph: {
      initial: { opacity: 1 },
      animate: { opacity: 1 },
      transition: { duration: 0 }
    },
    badge: {
      initial: { opacity: 1 },
      animate: { opacity: 1 },
      transition: { duration: 0 }
    },
    buttons: {
      initial: { opacity: 1 },
      animate: { opacity: 1 },
      transition: { duration: 0 }
    },
    image: {
      initial: { opacity: 1 },
      animate: { opacity: 1 },
      transition: { duration: 0 }
    }
  };

  // Balanced Mode animations - moderate, purposeful animations
  const balancedAnimations = {
    heading: {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.5, ease: "easeOut" }
    },
    paragraph: {
      initial: { opacity: 0, y: 15 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.5, delay: 0.1, ease: "easeOut" }
    },
    badge: {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      transition: { duration: 0.4, delay: 0.2 }
    },
    buttons: {
      initial: { opacity: 0, y: 10 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.4, delay: 0.3 }
    },
    image: {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      transition: { duration: 0.5, delay: 0.2 }
    },
    features: {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      transition: { staggerChildren: 0.1, delayChildren: 0.3 }
    },
    feature: {
      initial: { opacity: 0, x: -10 },
      animate: { opacity: 1, x: 0 },
      transition: { duration: 0.3 }
    }
  };

  // Choose which animation set to use based on the current mode
  const animations = isUXMode 
    ? uxAnimations 
    : isBalancedMode 
      ? balancedAnimations 
      : uiAnimations;

  return (
    <section className={`hero-section ${isUXMode ? '' : isBalancedMode ? 'bg-[var(--section-bg)]' : 'overflow-hidden'}`} id="hero">
      <div className="container">
        {isUXMode ? (
          // UX-Focused Hero - Extremely functional, clear, and accessible with minimal styling
          <div>
            {/* Skip link for accessibility */}
            <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:p-2 focus:bg-blue-700 focus:text-white focus:z-50">
              Skip to main content
            </a>
            
            {/* Mode indicator banner */}
            <div className="bg-blue-100 border-l-4 border-blue-700 p-3 mb-5">
              <h2 className="font-bold text-lg mb-1">UX Mode (All Function, Minimal Style)</h2>
              <p>
                This view prioritizes usability, accessibility, and information hierarchy over aesthetics.
                <span className="font-medium ml-1">Toggle the switch in the header to see the UI-focused version.</span>
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
              <div className="md:col-span-7">
                <h1 className="mb-4">
                  Design for usability and accessibility
                </h1>
                
                <p className="mb-5 text-lg">
                  This portfolio demonstrates the difference between UI and UX design approaches. You are currently viewing the UX-focused version that emphasizes:
                </p>
                
                <ul className="list-disc pl-6 mb-8 space-y-2">
                  <li>Clear information hierarchy with consistent headings</li>
                  <li>Accessible content with proper contrast ratios</li>
                  <li>Efficient screen space usage with minimal decoration</li>
                  <li>Fast loading with no unnecessary animations</li>
                  <li>Keyboard navigable interfaces</li>
                </ul>
                
                <div className="flex flex-col sm:flex-row gap-4 mb-6">
                  <a href="#projects" className="btn-ux">
                    View projects
                  </a>
                  <a href="#about" className="underline text-blue-700 font-medium py-2 flex items-center">
                    About this project <ArrowRight className="h-4 w-4 ml-2" />
                  </a>
                </div>
                
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-3 text-sm">
                  <p><strong>Note:</strong> While this UX-focused approach maximizes usability, it sacrifices visual appeal that could enhance user engagement. This demonstrates why a balance between UI and UX is important.</p>
                </div>
              </div>
              
              <div className="md:col-span-5">
                <div className="border border-gray-300 overflow-hidden">
                  <div className="bg-blue-700 text-white p-2 text-sm font-medium">
                    UI vs UX Design
                  </div>
                  <img 
                    src="https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
                    alt="Comparison of UI and UX design approaches" 
                    className="w-full"
                  />
                  <div className="bg-gray-100 p-4 border-t border-gray-300">
                    <h3 className="font-bold text-sm mb-2">What is UX Design?</h3>
                    <p className="text-sm">User Experience (UX) design focuses on the overall feel of the experience and how users interact with a product. Good UX design is functional even when stripped of visual styling.</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Main content anchor for skip link */}
            <div id="main-content" className="sr-only">Main content starts here</div>
          </div>
        ) : isBalancedMode ? (
          // Balanced Mode Hero - Good combination of aesthetics and usability
          <div className="py-4">
            {/* Skip link for accessibility but styled nicely */}
            <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:p-2 focus:bg-blue-600 focus:text-white focus:z-50 focus:rounded-md">
              Skip to main content
            </a>
            
            {/* Mode indicator - informative but visually integrated */}
            <div className="inline-flex items-center px-3 py-1.5 bg-blue-50 text-blue-800 rounded-md mb-6">
              <InfoIcon size={14} className="mr-1.5" />
              <span className="text-sm font-medium">Balanced Mode - Combining aesthetics with usability</span>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
              <div className="md:col-span-6">
                <motion.h1 
                  {...animations.heading}
                  className="text-3xl md:text-5xl font-bold text-[var(--text-color)] mb-4"
                >
                  Design that <span className="text-[var(--primary-color)]">works</span> and <span className="text-[var(--primary-color)]">delights</span>
                </motion.h1>
                
                <motion.p 
                  {...animations.paragraph}
                  className="text-lg text-[var(--text-color)] mb-6 max-w-xl"
                >
                  This portfolio showcases the perfect balance between visual appeal and usability, creating an experience that's both beautiful and functional.
                </motion.p>
                
                <motion.div
                  className="mb-6"
                  variants={balancedAnimations.features}
                  initial="initial"
                  animate="animate"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <motion.div variants={balancedAnimations.feature} className="flex items-start">
                      <div className="mr-3 mt-1 p-1.5 bg-blue-100 rounded-md text-blue-700">
                        <LayoutPanelLeft size={16} />
                      </div>
                      <div>
                        <h3 className="font-medium mb-1">Visual Appeal</h3>
                        <p className="text-sm text-[var(--text-light)]">Engaging aesthetics without sacrificing usability</p>
                      </div>
                    </motion.div>
                    
                    <motion.div variants={balancedAnimations.feature} className="flex items-start">
                      <div className="mr-3 mt-1 p-1.5 bg-green-100 rounded-md text-green-700">
                        <MousePointerClick size={16} />
                      </div>
                      <div>
                        <h3 className="font-medium mb-1">Intuitive UX</h3>
                        <p className="text-sm text-[var(--text-light)]">Clear navigation and accessible interfaces</p>
                      </div>
                    </motion.div>
                    
                    <motion.div variants={balancedAnimations.feature} className="flex items-start">
                      <div className="mr-3 mt-1 p-1.5 bg-amber-100 rounded-md text-amber-700">
                        <Code size={16} />
                      </div>
                      <div>
                        <h3 className="font-medium mb-1">Modern Design</h3>
                        <p className="text-sm text-[var(--text-light)]">Contemporary aesthetics with proven patterns</p>
                      </div>
                    </motion.div>
                    
                    <motion.div variants={balancedAnimations.feature} className="flex items-start">
                      <div className="mr-3 mt-1 p-1.5 bg-purple-100 rounded-md text-purple-700">
                        <InfoIcon size={16} />
                      </div>
                      <div>
                        <h3 className="font-medium mb-1">Clear Information</h3>
                        <p className="text-sm text-[var(--text-light)]">Well-organized content hierarchy</p>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
                
                <motion.div 
                  {...animations.buttons}
                  className="flex flex-wrap gap-4"
                >
                  <a 
                    href="#projects" 
                    className="px-5 py-2.5 bg-[var(--primary-color)] text-white rounded-md font-medium inline-flex items-center hover:bg-[var(--primary-color)]/90 transition-colors"
                  >
                    View Projects
                  </a>
                  <a 
                    href="#about" 
                    className="px-5 py-2.5 bg-white border border-gray-300 rounded-md text-[var(--text-color)] font-medium hover:bg-gray-50 transition-colors inline-flex items-center"
                  >
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </motion.div>
              </div>
              
              <div className="md:col-span-6">
                <motion.div 
                  {...animations.image}
                  className="relative"
                >
                  {/* Subtle background effect */}
                  <div className="absolute inset-0 -m-4 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-xl"></div>
                  
                  {/* Clean, clear image presentation */}
                  <img 
                    src="https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
                    alt="Design showing balanced UI and UX approaches" 
                    className="relative rounded-lg shadow-md w-full object-cover hover:shadow-lg transition-shadow duration-300"
                  />
                  
                  {/* Informative caption */}
                  <div className="bg-white p-4 rounded-md shadow-md max-w-md mx-auto -mt-16 relative z-10 border border-gray-100">
                    <h3 className="font-medium text-[var(--text-color)] mb-1">Why Balance Matters</h3>
                    <p className="text-sm text-[var(--text-light)]">
                      A balanced design approach creates experiences that are both visually engaging and highly usable.
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
            
            {/* Main content anchor for skip link */}
            <div id="main-content" className="sr-only">Main content starts here</div>
          </div>
        ) : (
          // UI-Focused Hero - Excessively styled with poor usability practices
          <div className="flex flex-col md:flex-row items-center relative">
            {/* Decorative elements - excessive in UI mode, creating visual noise */}
            <motion.div 
              {...uiAnimations.decorItem1}
              className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/10 rounded-full blur-3xl -z-10"
            />
            <motion.div 
              {...uiAnimations.decorItem2}
              className="absolute bottom-40 right-0 w-80 h-80 bg-gradient-to-r from-cyan-500/20 to-blue-500/10 rounded-full blur-3xl -z-10"
            />
            <motion.div 
              {...uiAnimations.decorItem3}
              className="absolute top-40 right-40 w-60 h-60 bg-gradient-to-r from-yellow-500/10 to-orange-500/5 rounded-full blur-3xl -z-10"
            />
            
            <div className="w-full md:w-1/2 mb-16 md:mb-0 relative z-10">
              {/* Floating badge - visually interesting but poorly placed */}
              <motion.span 
                className="absolute -top-6 right-0 md:left-0 text-xs font-medium bg-gradient-to-r from-purple-500 to-pink-500 text-white py-1 px-3 rounded-full shadow-lg"
                initial={{ opacity: 0, x: -20, rotate: -5 }}
                animate={{ opacity: 1, x: 0, rotate: 0 }}
                transition={{ duration: 0.6, delay: 0.8, type: "spring" }}
              >
                UI Mode • Visually Stunning
              </motion.span>
            
              {/* Heading with excessive stylizing - harder to read */}
              <motion.h1 
                {...animations.heading}
                className="relative"
              >
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-shadow">
                  Design that
                </span> <span className="relative">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600">Dazzles</span>
                  <span className="absolute -bottom-3 left-0 w-full h-1.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></span>
                </span> <span className="relative transform inline-block">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">&</span>
                </span> <span className="relative">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500">Delights</span>
                  <span className="absolute -bottom-3 left-0 w-full h-1.5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"></span>
                </span>
              </motion.h1>
              
              {/* Low contrast paragraph text - difficult to read */}
              <motion.p 
                {...animations.paragraph}
                className="text-lg md:text-xl mb-10 max-w-xl text-gray-400 italic font-light"
              >
                Experience the magic of UI-focused design with captivating colors, stunning animations, and eye-catching visual elements in this immersive showcase.
              </motion.p>
              
              {/* Badge with unnecessary animation and poor information */}
              <motion.div 
                {...animations.badge}
                className="mb-10"
              >
                <span className="text-sm font-medium py-2 px-4 rounded-full text-white inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 shadow-lg shadow-purple-500/30 animate-pulse">
                  <span className="w-2 h-2 bg-white rounded-full"></span>
                  Experience the Magic
                  <Tooltip content="This mode prioritizes aesthetics over functionality">
                    <div className="ml-1 w-5 h-5 rounded-full bg-white/20 flex items-center justify-center">
                      <InfoIcon className="h-3 w-3 text-white" />
                    </div>
                  </Tooltip>
                </span>
              </motion.div>
              
              {/* Buttons with poor labeling */}
              <motion.div 
                {...animations.buttons}
                className="flex flex-wrap items-center gap-6 relative"
              >
                <a href="#projects" className="btn-ui">
                  Explore the Beauty
                </a>
                <a href="#about" className="group flex items-center text-base font-medium relative">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Unleash Creativity</span>
                  <span className="ml-2 transform transition-transform group-hover:translate-x-1">
                    <ArrowRight className="h-5 w-5 text-pink-500" />
                  </span>
                </a>
              </motion.div>
              
              {/* Mobile scroll indicator */}
              <motion.div 
                className="mt-16 flex justify-center md:hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.3 }}
              >
                <ChevronDown className="h-8 w-8 text-gray-400 animate-bounce" />
              </motion.div>
            </div>
            
            {/* Image section with excessive effects */}
            <motion.div 
              {...animations.image}
              className="w-full md:w-1/2 flex justify-center relative z-0"
            >
              <div className="relative">
                {/* Excessive blur effects */}
                <div className="absolute inset-0 -m-8 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-2xl blur-2xl"></div>
                <div className="absolute inset-0 -m-4 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-2xl blur-xl rotate-12"></div>
                
                {/* Image with excessive hover effect */}
                <img 
                  src="https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
                  alt="Design illustration" 
                  className="relative rounded-2xl shadow-2xl transform rotate-3 hover:rotate-0 transition-all duration-1000 hover:scale-105 border-4 border-white"
                />
                
                {/* Excessive decorative elements that add no value */}
                <div className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center text-white text-xl shadow-lg">
                  ✨
                </div>
                
                <div className="absolute -bottom-8 -right-8 bg-white p-4 rounded-xl shadow-xl border-2 border-pink-500 rotate-3 hover:rotate-0 transition-all duration-700">
                  <span className="flex items-center text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                    Click for UX Version
                  </span>
                </div>
                
                {/* Hidden warning about usability issues */}
                <div className="opacity-20 hover:opacity-100 transition-opacity duration-500 absolute -bottom-8 -left-8 bg-white p-2 rounded-lg shadow-lg border border-yellow-400 text-xs max-w-[150px]">
                  <AlertTriangle className="h-3 w-3 text-yellow-400 inline" />
                  <span className="ml-1 text-gray-500">This UI prioritizes looks over usability</span>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </div>
      
      {/* Bottom Scroll Indicator - Only in UI Mode - makes it unclear what to do next */}
      {isUIMode && (
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 hidden md:block">
          <motion.div 
            className="flex flex-col items-center text-gray-400"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 0.7, y: 0 }}
            transition={{ duration: 0.5, delay: 1.8 }}
          >
            <span className="text-xs uppercase tracking-widest mb-2 font-light">Discover</span>
            <ChevronDown className="h-6 w-6 animate-bounce" />
          </motion.div>
        </div>
      )}
    </section>
  );
}
