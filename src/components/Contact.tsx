import { Mail, Github, Phone, Linkedin } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import TargetCursor from "./ui/target-cursor";
import { useToast } from "./ui/use-toast";

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    message: ''
  });
  const sectionRef = useRef<HTMLElement>(null);
  const { toast } = useToast();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.fullname || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all fields.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.fullname,
          email: formData.email,
          message: formData.message,
        }),
      });

      if (response.ok) {
        toast({
          title: "Success!",
          description: "Your message has been sent successfully. I'll get back to you soon!",
        });

        // Reset form
        setFormData({
          fullname: '',
          email: '',
          message: ''
        });
      } else {
        throw new Error('Failed to send email');
      }
    } catch (error) {
      console.error('Email Error:', error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again or contact me directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialLinks = [
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/-rohit-khandelwal-/",
      label: "LinkedIn"
    },
    {
      icon: Github,
      href: "https://github.com/rohit-2059",
      label: "GitHub"
    },
    {
      icon: Phone,
      href: "tel:+918302725007",
      label: "Phone"
    },
    {
      icon: Mail,
      href: "mailto:rohit.khandelwal.2059@gmail.com",
      label: "Email"
    }
  ];

  return (
    <section ref={sectionRef} id="contact" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 mb-12 sm:mb-16 md:mb-20 bg-black">
      <div className="max-w-7xl mx-auto">
        {/* Desktop Only - TargetCursor */}
        <div className="hidden sm:block">
          <TargetCursor targetSelector=".cursor-target" />
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-2 mb-6 sm:mb-8">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-primary text-xs sm:text-sm font-medium uppercase tracking-wider">
              CONNECT WITH ME
            </span>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-start">
            {/* Left Column - Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 sm:mb-8 leading-tight">
                Let's start a project
                <br className="hidden sm:block" />
                <span className="sm:hidden"> </span>together
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <motion.div 
                  className="space-y-2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 }}
                >
                  <label htmlFor="fullname" className="text-white font-medium text-sm sm:text-base">
                    Full Name
                  </label>
                  <Input
                    id="fullname"
                    name="fullname"
                    value={formData.fullname}
                    onChange={handleInputChange}
                    placeholder=""
                    className="bg-transparent border-gray-700 border-b-2 border-t-0 border-l-0 border-r-0 rounded-none px-0 text-white placeholder:text-gray-500 focus:border-primary focus:ring-0 h-10 sm:h-12 text-sm sm:text-base"
                    required
                  />
                </motion.div>

                <motion.div 
                  className="space-y-2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.5 }}
                >
                  <label htmlFor="email" className="text-white font-medium text-sm sm:text-base">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder=""
                    className="bg-transparent border-gray-700 border-b-2 border-t-0 border-l-0 border-r-0 rounded-none px-0 text-white placeholder:text-gray-500 focus:border-primary focus:ring-0 h-10 sm:h-12 text-sm sm:text-base"
                    required
                  />
                </motion.div>

                <motion.div 
                  className="space-y-2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.6 }}
                >
                  <label htmlFor="message" className="text-white font-medium text-sm sm:text-base">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder=""
                    rows={4}
                    className="bg-transparent border-gray-700 border-b-2 border-t-0 border-l-0 border-r-0 rounded-none px-0 text-white placeholder:text-gray-500 focus:border-primary focus:ring-0 resize-none text-sm sm:text-base min-h-[80px] sm:min-h-[120px]"
                    required
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.7 }}
                  className="pt-4"
                >
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="cursor-target bg-transparent border-2 border-white text-white hover:border-primary hover:bg-primary/10 hover:text-white transition-all duration-300 px-6 sm:px-8 py-2 sm:py-3 rounded-full disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base w-full sm:w-auto"
                  >
                    {isSubmitting ? 'Sending...' : 'Submit'}
                  </Button>
                </motion.div>
              </form>
            </motion.div>

            {/* Right Column - Profile Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col items-start space-y-6 sm:space-y-8 mt-8 lg:mt-0"
            >
              <div className="flex items-center gap-2 mb-2 sm:mb-4">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                <span className="text-primary text-xs sm:text-sm font-medium">
                  Available for work
                </span>
              </div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.5 }}
                className="mb-6 sm:mb-8"
              >
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden border-4 border-white/20">
                  <img 
                    src="/WhatsApp Image 2025-01-26 at 22.22.44.jpeg" 
                    alt="Rohit Khandelwal"
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6 }}
                className="space-y-4"
              >
                <p className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-xs sm:max-w-md">
                  My inbox is always open. Whether you have a project or just want to say Hi, I 
                  would love to hear from you. Feel free to contact me and I'll get back to you.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.7 }}
                className="flex gap-4 sm:gap-6 pt-6 sm:pt-8"
              >
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    className="cursor-target flex items-center justify-center text-gray-400 hover:text-primary transition-all duration-300 p-2"
                    whileHover={{ scale: 1.2, y: -3 }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.8 + index * 0.1 }}
                  >
                    <social.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
