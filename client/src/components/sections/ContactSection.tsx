import { useState } from "react";
import { motion } from "framer-motion";
import { useDesignMode } from "@/contexts/DesignModeContext";
import { Tooltip } from "@/components/ui/tooltip";
import { InfoIcon, Mail, Phone, MapPin } from "lucide-react";
import { FaTwitter, FaDribbble, FaLinkedinIn } from "react-icons/fa";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";

export function ContactSection() {
  const { isUXMode } = useDesignMode();
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
      className="ui-element py-16 md:py-24" 
      id="contact" 
      style={{ backgroundColor: "var(--background-color)" }}
    >
      <div className="container mx-auto px-4 md:px-8">
        <motion.div 
          className="ui-element mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get in Touch</h2>
          <p className="max-w-2xl mx-auto text-lg">
            Interested in discussing design approaches?
            <Tooltip content="Notice how the form elements, buttons, and overall contact section layout changes between UI and UX modes.">
              <div className="difference-indicator">
                <InfoIcon className="h-3 w-3" />
              </div>
            </Tooltip>
          </p>
        </motion.div>
        
        <div className="max-w-3xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-xl font-bold mb-4">Contact Information</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Mail className="mt-1 mr-3" style={{ color: "var(--primary-color)" }} />
                  <div>
                    <p className="font-medium">Email</p>
                    <a href="mailto:hello@designportfolio.com" className="hover:underline">
                      hello@designportfolio.com
                    </a>
                  </div>
                </li>
                <li className="flex items-start">
                  <Phone className="mt-1 mr-3" style={{ color: "var(--secondary-color)" }} />
                  <div>
                    <p className="font-medium">Phone</p>
                    <a href="tel:+1234567890" className="hover:underline">
                      +1 (234) 567-890
                    </a>
                  </div>
                </li>
                <li className="flex items-start">
                  <MapPin className="mt-1 mr-3" style={{ color: "var(--accent-color)" }} />
                  <div>
                    <p className="font-medium">Location</p>
                    <p>San Francisco, CA</p>
                  </div>
                </li>
              </ul>
              
              <div className="mt-8">
                <h4 className="text-lg font-bold mb-3">Follow Me</h4>
                <div className="flex space-x-4">
                  <a 
                    href="#" 
                    className="w-10 h-10 rounded-full flex items-center justify-center ui-element text-white"
                    style={{ backgroundColor: "var(--primary-color)" }}
                  >
                    <FaTwitter />
                  </a>
                  <a 
                    href="#" 
                    className="w-10 h-10 rounded-full flex items-center justify-center ui-element text-white"
                    style={{ backgroundColor: "var(--secondary-color)" }}
                  >
                    <FaDribbble />
                  </a>
                  <a 
                    href="#" 
                    className="w-10 h-10 rounded-full flex items-center justify-center ui-element text-white"
                    style={{ backgroundColor: "var(--accent-color)" }}
                  >
                    <FaLinkedinIn />
                  </a>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-xl font-bold mb-4">Send a Message</h3>
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="block mb-2 font-medium">
                    Name
                  </label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name"
                    className={formControlClass}
                    placeholder="Your name"
                    value={formState.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block mb-2 font-medium">
                    Email
                  </label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email"
                    className={formControlClass}
                    placeholder="Your email"
                    value={formState.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="message" className="block mb-2 font-medium">
                    Message
                  </label>
                  <textarea 
                    id="message" 
                    name="message"
                    rows={4} 
                    className={formControlClass}
                    placeholder="Your message"
                    value={formState.message}
                    onChange={handleChange}
                  />
                </div>
                <button 
                  type="submit" 
                  className={`btn ${buttonClass} w-full`}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
