import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Github, Linkedin, ExternalLink, Loader2 } from 'lucide-react';
import { z } from 'zod';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

const contactSchema = z.object({
  name: z.string().trim().min(1, 'Name is required').max(100, 'Name must be less than 100 characters'),
  email: z.string().email('Invalid email address').max(255, 'Email must be less than 255 characters'),
  message: z.string().trim().min(1, 'Message is required').max(1000, 'Message must be less than 1000 characters')
});

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    // Clear error for this field when user starts typing
    if (errors[e.target.name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[e.target.name];
        return newErrors;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Client-side validation first
    const result = contactSchema.safeParse(formData);
    
    if (!result.success) {
      const newErrors: Record<string, string> = {};
      result.error.errors.forEach(err => {
        if (err.path[0]) {
          newErrors[err.path[0] as string] = err.message;
        }
      });
      setErrors(newErrors);
      return;
    }
    
    setErrors({});
    setIsSubmitting(true);

    try {
      // Submit to edge function with server-side validation
      const { data, error } = await supabase.functions.invoke('contact-form', {
        body: result.data
      });

      if (error) {
        throw new Error(error.message || 'Failed to send message');
      }

      toast({
        title: "Message Sent!",
        description: data?.message || "Thank you for reaching out. I'll get back to you soon!",
      });

      // Reset form on success
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Contact form error:', error);
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'tharunratnala6@gmail.com',
      link: 'mailto:tharunratnala6@gmail.com',
      color: 'group-hover:text-blue-400',
      bgColor: 'group-hover:bg-blue-500/20'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+91 8328515310',
      link: 'tel:+918328515310',
      color: 'group-hover:text-green-400',
      bgColor: 'group-hover:bg-green-500/20'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Hyderabad, India',
      link: '#',
      color: 'group-hover:text-purple-400',
      bgColor: 'group-hover:bg-purple-500/20'
    }
  ];

  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com/tharunratnala6',
      color: 'hover:text-gray-400',
      bgColor: 'hover:bg-gray-500/20'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://www.linkedin.com/in/tharunratnala6',
      color: 'hover:text-blue-400',
      bgColor: 'hover:bg-blue-500/20'
    },
    {
      name: 'Email',
      icon: Mail,
      url: 'mailto:tharunratnala6@gmail.com',
      color: 'hover:text-green-400',
      bgColor: 'hover:bg-green-500/20'
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto">
            Ready to bring your ideas to life? Let's collaborate and create something amazing together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 shadow-2xl relative overflow-hidden group hover:shadow-blue-500/25 transition-all duration-500"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-blue-200 mb-2">
                    Your Name
                  </label>
                  <motion.input
                    whileFocus={{ scale: 1.02 }}
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    maxLength={100}
                    className={`w-full px-4 py-3 bg-white/10 border ${errors.name ? 'border-red-400' : 'border-white/20'} rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 ${errors.name ? 'focus:ring-red-400/50' : 'focus:ring-blue-400/50'} focus:border-transparent backdrop-blur-sm transition-all duration-300`}
                    placeholder="Enter your name"
                    required
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-400">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-blue-200 mb-2">
                    Email Address
                  </label>
                  <motion.input
                    whileFocus={{ scale: 1.02 }}
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    maxLength={255}
                    className={`w-full px-4 py-3 bg-white/10 border ${errors.email ? 'border-red-400' : 'border-white/20'} rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 ${errors.email ? 'focus:ring-red-400/50' : 'focus:ring-blue-400/50'} focus:border-transparent backdrop-blur-sm transition-all duration-300`}
                    placeholder="Enter your email"
                    required
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-400">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-blue-200 mb-2">
                    Message
                  </label>
                  <motion.textarea
                    whileFocus={{ scale: 1.02 }}
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    maxLength={1000}
                    rows={5}
                    className={`w-full px-4 py-3 bg-white/10 border ${errors.message ? 'border-red-400' : 'border-white/20'} rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 ${errors.message ? 'focus:ring-red-400/50' : 'focus:ring-blue-400/50'} focus:border-transparent backdrop-blur-sm transition-all duration-300 resize-none`}
                    placeholder="Tell me about your project..."
                    required
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-400">{errors.message}</p>
                  )}
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: isSubmitting ? 1 : 1.05 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.95 }}
                  className="w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg text-white font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Contact Details */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.link}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ x: 15, scale: 1.05, rotateY: 5 }}
                  className={`flex items-center gap-4 p-4 backdrop-blur-sm bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 hover:border-blue-400/30 transition-all duration-300 group ${info.bgColor}`}
                >
                  <motion.div 
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className={`p-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg group-hover:scale-110 transition-transform duration-300 ${info.bgColor}`}
                  >
                    <info.icon className="w-6 h-6 text-white" />
                  </motion.div>
                  <div>
                    <h4 className="text-white font-semibold">{info.title}</h4>
                    <p className={`text-gray-300 group-hover:text-blue-200 transition-colors duration-300 ${info.color}`}>{info.value}</p>
                  </div>
                  <ExternalLink className="w-4 h-4 text-gray-400 ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="backdrop-blur-sm bg-white/5 rounded-xl border border-white/10 p-6"
            >
              <h4 className="text-white font-semibold mb-4">Connect on Social</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    whileHover={{ scale: 1.2, y: -5, rotate: 10 }}
                    whileTap={{ scale: 0.9 }}
                    className={`p-3 bg-white/10 rounded-lg border border-white/20 text-white ${social.color} ${social.bgColor} transition-all duration-300 hover:shadow-lg`}
                  >
                    <social.icon className="w-6 h-6" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Quote */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="backdrop-blur-sm bg-white/5 rounded-xl border border-white/10 p-6"
            >
              <blockquote className="text-gray-300 italic leading-relaxed">
                "The best way to predict the future is to create it. Let's build something extraordinary together."
              </blockquote>
              <cite className="text-blue-400 font-medium mt-2 block">- Tharun Ratnala</cite>
            </motion.div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16 pt-8 border-t border-white/10"
        >
          <p className="text-gray-400">
            © 2025 Tharun Ratnala. Crafted with ❤️
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
