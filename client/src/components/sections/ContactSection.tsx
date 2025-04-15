import { useState } from "react";
import { motion } from "framer-motion";
import { useDesignMode } from "@/contexts/DesignModeContext";
import { Tooltip } from "@/components/ui/tooltip";
import { 
  InfoIcon, Mail, Phone, MapPin, 
  Globe, GraduationCap, Briefcase, User, 
  Github, ExternalLink
} from "lucide-react";
import { FaLinkedinIn } from "react-icons/fa";
import { SiLeetcode, SiHackerrank } from "react-icons/si";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { personalInfo } from "@/lib/resumeData";

export function ContactSection() {
  const { isUXMode, isBalancedMode } = useDesignMode();
  const { toast } = useToast();
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const buttonClass = isUXMode ? "btn-ux" : "btn-ui";
  const formControlClass = isUXMode ? "ux-form-control" : "ui-form-control";

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formState.name || !formState.email || !formState.message) {
      toast({
        title: "Error",
        description: "Please fill out all fields",
        variant: "destructive",
      });
      return;
    }
    
    try {
      setIsSubmitting(true);
      const response = await apiRequest("POST", "/api/contact", formState);
      
      if (response.ok) {
        toast({
          title: "Success!",
          description: "Your message has been sent successfully.",
        });
        setFormState({ name: "", email: "", message: "" });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section 
      className={`ui-element py-16 md:py-24 ${isBalancedMode ? 'bg-[var(--section-alt-bg)]' : ''}`} 
      id="contact"
    >
      <div className="container mx-auto px-4 md:px-8">
        <motion.div 
          className="ui-element mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${isBalancedMode ? 'text-[var(--text-color)]' : ''}`}>
            {isUXMode ? 'Contact Information' : isBalancedMode ? 'Get in Touch' : 'Connect & Collaborate'}
          </h2>
          <p className={`max-w-2xl mx-auto ${isUXMode ? 'text-base' : isBalancedMode ? 'text-lg text-[var(--text-light)]' : 'text-lg'}`}>
            {isUXMode 
              ? 'How to reach me for professional inquiries' 
              : isBalancedMode 
                ? "Interested in discussing collaboration opportunities or have questions about my work?" 
                : "Let's create something extraordinary together"}
            <Tooltip content="Notice how the contact information presentation, form elements, and social media buttons change between the three design modes.">
              <div className="difference-indicator">
                <InfoIcon className="h-3 w-3" />
              </div>
            </Tooltip>
          </p>
        </motion.div>
        
        <div className={`max-w-5xl mx-auto ${isBalancedMode ? 'bg-white p-8 rounded-lg shadow-sm' : ''}`}>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Contact Information Column */}
            <motion.div
              className="lg:col-span-2"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className={`mb-8 ${isBalancedMode ? 'pb-6 border-b border-gray-100' : ''}`}>
                <h3 className={`text-xl font-bold mb-6 ${isBalancedMode ? 'text-[var(--text-color)]' : ''}`}>
                  {isUXMode ? 'Contact Details' : isBalancedMode ? 'Contact Information' : 'Reach Out'}
                </h3>
                <ul className="space-y-5">
                  <li className="flex items-start">
                    <div className={`p-2 rounded-md mr-3 ${isBalancedMode ? 'bg-blue-50' : ''}`}>
                      <Mail 
                        className={`h-5 w-5 ${isBalancedMode ? 'text-blue-600' : ''}`} 
                        style={!isBalancedMode ? { color: "var(--primary-color)" } : {}} 
                      />
                    </div>
                    <div>
                      <p className={`font-medium ${isBalancedMode ? 'text-[var(--text-color)]' : ''}`}>
                        {isUXMode ? 'Email' : 'Email Address'}
                      </p>
                      <a 
                        href={`mailto:${personalInfo.email}`} 
                        className={`hover:underline ${
                          isUXMode 
                            ? 'text-blue-700' 
                            : isBalancedMode 
                              ? 'text-[var(--primary-color)]' 
                              : 'text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500'
                        }`}
                      >
                        {personalInfo.email}
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className={`p-2 rounded-md mr-3 ${isBalancedMode ? 'bg-green-50' : ''}`}>
                      <Phone 
                        className={`h-5 w-5 ${isBalancedMode ? 'text-green-600' : ''}`} 
                        style={!isBalancedMode ? { color: "var(--secondary-color)" } : {}} 
                      />
                    </div>
                    <div>
                      <p className={`font-medium ${isBalancedMode ? 'text-[var(--text-color)]' : ''}`}>
                        {isUXMode ? 'Phone' : 'Phone Number'}
                      </p>
                      <a 
                        href={`tel:${personalInfo.phone.replace(/[^0-9+]/g, '')}`} 
                        className={`hover:underline ${
                          isUXMode 
                            ? 'text-blue-700' 
                            : isBalancedMode 
                              ? 'text-[var(--text-color)]' 
                              : 'text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500'
                        }`}
                      >
                        {personalInfo.phone}
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className={`p-2 rounded-md mr-3 ${isBalancedMode ? 'bg-purple-50' : ''}`}>
                      <MapPin 
                        className={`h-5 w-5 ${isBalancedMode ? 'text-purple-600' : ''}`} 
                        style={!isBalancedMode ? { color: "var(--accent-color)" } : {}} 
                      />
                    </div>
                    <div>
                      <p className={`font-medium ${isBalancedMode ? 'text-[var(--text-color)]' : ''}`}>
                        Location
                      </p>
                      <p className={
                        isUXMode 
                          ? 'text-gray-700' 
                          : isBalancedMode 
                            ? 'text-[var(--text-light)]' 
                            : 'text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-pink-500'
                      }>
                        {personalInfo.location}
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className={`p-2 rounded-md mr-3 ${isBalancedMode ? 'bg-indigo-50' : ''}`}>
                      <Globe 
                        className={`h-5 w-5 ${isBalancedMode ? 'text-indigo-600' : ''}`} 
                        style={!isBalancedMode ? { color: "var(--primary-color)" } : {}} 
                      />
                    </div>
                    <div>
                      <p className={`font-medium ${isBalancedMode ? 'text-[var(--text-color)]' : ''}`}>
                        LinkedIn
                      </p>
                      <a 
                        href={`https://${personalInfo.linkedin}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`hover:underline flex items-center gap-1 ${
                          isUXMode 
                            ? 'text-blue-700' 
                            : isBalancedMode 
                              ? 'text-[var(--primary-color)]' 
                              : 'text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-500'
                        }`}
                      >
                        {personalInfo.linkedin}
                        {!isUXMode && <ExternalLink className="h-3 w-3" />}
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className={`text-lg font-bold mb-5 ${isBalancedMode ? 'text-[var(--text-color)]' : ''}`}>
                  {isUXMode ? 'Online Profiles' : isBalancedMode ? 'Professional Profiles' : 'Digital Presence'}
                </h4>
                <div className={`flex flex-wrap gap-3 ${isUXMode ? '' : 'justify-center'}`}>
                  <a 
                    href={`https://${personalInfo.linkedin}`} 
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn Profile"
                    className={`
                      ${isUXMode 
                        ? 'w-auto px-4 py-2 flex items-center gap-2 rounded bg-blue-100 text-blue-700 hover:bg-blue-200' 
                        : isBalancedMode
                          ? 'w-10 h-10 rounded-md flex items-center justify-center bg-[var(--primary-color)] text-white hover:opacity-90 transition' 
                          : 'w-12 h-12 rounded-full flex items-center justify-center ui-element text-white shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1'
                      }
                    `}
                    style={!isBalancedMode && !isUXMode ? { backgroundColor: "var(--primary-color)" } : {}}
                  >
                    {isUXMode && 'LinkedIn'}
                    <FaLinkedinIn className={isUXMode ? 'h-4 w-4' : 'h-5 w-5'} />
                  </a>
                  
                  <a 
                    href="https://github.com/mertaydin9999" 
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub Profile"
                    className={`
                      ${isUXMode 
                        ? 'w-auto px-4 py-2 flex items-center gap-2 rounded bg-gray-100 text-gray-700 hover:bg-gray-200' 
                        : isBalancedMode
                          ? 'w-10 h-10 rounded-md flex items-center justify-center bg-gray-800 text-white hover:opacity-90 transition' 
                          : 'w-12 h-12 rounded-full flex items-center justify-center ui-element text-white shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1'
                      }
                    `}
                    style={!isBalancedMode && !isUXMode ? { backgroundColor: "var(--secondary-color)" } : {}}
                  >
                    {isUXMode && 'GitHub'}
                    <Github className={isUXMode ? 'h-4 w-4' : 'h-5 w-5'} />
                  </a>
                  
                  <a 
                    href="https://leetcode.com/baydin2" 
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LeetCode Profile"
                    className={`
                      ${isUXMode 
                        ? 'w-auto px-4 py-2 flex items-center gap-2 rounded bg-yellow-100 text-yellow-700 hover:bg-yellow-200' 
                        : isBalancedMode
                          ? 'w-10 h-10 rounded-md flex items-center justify-center bg-yellow-500 text-white hover:opacity-90 transition' 
                          : 'w-12 h-12 rounded-full flex items-center justify-center ui-element text-white shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1'
                      }
                    `}
                    style={!isBalancedMode && !isUXMode ? { backgroundColor: "var(--accent-color)" } : {}}
                  >
                    {isUXMode && 'LeetCode'}
                    <SiLeetcode className={isUXMode ? 'h-4 w-4' : 'h-5 w-5'} />
                  </a>
                  
                  <a 
                    href="https://www.hackerrank.com/profile/bugra_mert2001" 
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="HackerRank Profile"
                    className={`
                      ${isUXMode 
                        ? 'w-auto px-4 py-2 flex items-center gap-2 rounded bg-green-100 text-green-700 hover:bg-green-200' 
                        : isBalancedMode
                          ? 'w-10 h-10 rounded-md flex items-center justify-center bg-green-600 text-white hover:opacity-90 transition' 
                          : 'w-12 h-12 rounded-full flex items-center justify-center ui-element text-white shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1'
                      }
                    `}
                    style={!isBalancedMode && !isUXMode ? { backgroundColor: "var(--primary-color)" } : {}}
                  >
                    {isUXMode && 'HackerRank'}
                    <SiHackerrank className={isUXMode ? 'h-4 w-4' : 'h-5 w-5'} />
                  </a>
                </div>
              </div>
            </motion.div>
            
            {/* Send Message Column */}
            <motion.div
              className="lg:col-span-3"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className={`text-xl font-bold mb-6 ${isBalancedMode ? 'text-[var(--text-color)]' : ''}`}>
                {isUXMode ? 'Send Message' : isBalancedMode ? 'Send a Message' : 'Let\'s Chat'}
              </h3>
              
              <form onSubmit={handleSubmit} className={isBalancedMode ? 'p-6 border border-gray-100 rounded-lg' : ''}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="name" className={`block mb-2 ${isBalancedMode ? 'text-sm font-medium text-[var(--text-color)]' : 'font-medium'}`}>
                      {isUXMode ? 'Name *' : 'Your Name'}
                    </label>
                    <div className={`relative ${!isUXMode && !isBalancedMode ? 'ui-element overflow-hidden' : ''}`}>
                      {!isUXMode && !isBalancedMode && (
                        <div className="absolute left-0 top-0 bottom-0 w-1" style={{ backgroundColor: "var(--primary-color)" }}></div>
                      )}
                      <div className="flex items-center">
                        {!isUXMode && !isBalancedMode && (
                          <User className="h-4 w-4 absolute left-3 text-gray-400" />
                        )}
                        <input 
                          type="text" 
                          id="name" 
                          name="name"
                          className={`${formControlClass} ${!isUXMode && !isBalancedMode ? 'pl-10' : ''} ${
                            isBalancedMode ? 'w-full rounded-md border-gray-200 shadow-sm focus:border-[var(--primary-color)] focus:ring-1 focus:ring-[var(--primary-color)]' : ''
                          }`}
                          placeholder={isUXMode ? "Enter your name" : "Your name"}
                          value={formState.name}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className={`block mb-2 ${isBalancedMode ? 'text-sm font-medium text-[var(--text-color)]' : 'font-medium'}`}>
                      {isUXMode ? 'Email *' : 'Your Email'}
                    </label>
                    <div className={`relative ${!isUXMode && !isBalancedMode ? 'ui-element overflow-hidden' : ''}`}>
                      {!isUXMode && !isBalancedMode && (
                        <div className="absolute left-0 top-0 bottom-0 w-1" style={{ backgroundColor: "var(--secondary-color)" }}></div>
                      )}
                      <div className="flex items-center">
                        {!isUXMode && !isBalancedMode && (
                          <Mail className="h-4 w-4 absolute left-3 text-gray-400" />
                        )}
                        <input 
                          type="email" 
                          id="email" 
                          name="email"
                          className={`${formControlClass} ${!isUXMode && !isBalancedMode ? 'pl-10' : ''} ${
                            isBalancedMode ? 'w-full rounded-md border-gray-200 shadow-sm focus:border-[var(--primary-color)] focus:ring-1 focus:ring-[var(--primary-color)]' : ''
                          }`}
                          placeholder={isUXMode ? "Enter your email" : "Your email"}
                          value={formState.email}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mb-5">
                  <label htmlFor="message" className={`block mb-2 ${isBalancedMode ? 'text-sm font-medium text-[var(--text-color)]' : 'font-medium'}`}>
                    {isUXMode ? 'Message *' : 'Your Message'}
                  </label>
                  <div className={`relative ${!isUXMode && !isBalancedMode ? 'ui-element overflow-hidden' : ''}`}>
                    {!isUXMode && !isBalancedMode && (
                      <div className="absolute left-0 top-0 bottom-0 w-1" style={{ backgroundColor: "var(--accent-color)" }}></div>
                    )}
                    <textarea 
                      id="message" 
                      name="message"
                      rows={isUXMode ? 5 : isBalancedMode ? 6 : 4}
                      className={`${formControlClass} ${
                        isBalancedMode ? 'w-full rounded-md border-gray-200 shadow-sm focus:border-[var(--primary-color)] focus:ring-1 focus:ring-[var(--primary-color)]' : ''
                      }`}
                      placeholder={isUXMode ? "Enter your message" : isBalancedMode ? "What would you like to discuss?" : "Share your thoughts..."}
                      value={formState.message}
                      onChange={handleChange}
                    />
                  </div>
                  {isUXMode && (
                    <p className="mt-1 text-sm text-gray-500">
                      All fields marked with * are required.
                    </p>
                  )}
                </div>
                <div className={isBalancedMode ? 'flex justify-end' : ''}>
                  <button 
                    type="submit" 
                    className={`${
                      isUXMode 
                        ? 'bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded font-medium' 
                        : isBalancedMode
                          ? 'bg-[var(--primary-color)] hover:bg-[var(--primary-dark)] text-white font-medium py-2.5 px-5 rounded-md transition-colors'
                          : 'ui-element text-white py-3 px-8 rounded-md font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1'
                    } ${isBalancedMode ? 'w-auto' : 'w-full'}`}
                    style={!isBalancedMode && !isUXMode ? { background: "linear-gradient(135deg, var(--primary-color), var(--accent-color))" } : {}}
                    disabled={isSubmitting}
                  >
                    {isSubmitting 
                      ? "Sending..." 
                      : isUXMode 
                        ? "Submit Message" 
                        : isBalancedMode 
                          ? "Send Message" 
                          : "Send Message ✨"}
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
