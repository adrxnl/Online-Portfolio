import { motion } from 'motion/react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { useState } from 'react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock form submission
    alert('Thanks for reaching out! This is a demo form.');
    setFormData({ name: '', email: '', message: '' });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'lopez.adrian2622@gmail.com',
      href: 'mailto:lopez.adrian2622@gmail.com'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Dallas, TX',
      href: null
    }
  ];

  return (
    <section id="contact" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-white mb-4">Get In Touch</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Looking for a passionate, driven developer to join your team? Let's build something amazing together—reach out and discover how I can add value to your visions!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-white mb-6">Contact Information</h3>
            <div className="space-y-6 mb-8">
              {contactInfo.map((info) => (
                <div key={info.label} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-green-600 to-emerald-500 flex items-center justify-center flex-shrink-0 shadow-lg shadow-green-500/50">
                    <info.icon className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="text-slate-400 text-sm mb-1">{info.label}</p>
                    {info.href ? (
                      <a href={info.href} className="text-white hover:text-green-400 transition-colors">
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-white">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-zinc-900/50 backdrop-blur-sm rounded-2xl p-8 border border-zinc-800">
              <h4 className="text-white mb-4">Why work with me?</h4>
              <ul className="space-y-3">
                <li className="text-slate-300 flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  4 years of high-level computer science education
                </li>
                <li className="text-slate-300 flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  Knowledge in modern web technologies
                </li>
                <li className="text-slate-300 flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  Clean, maintainable, and scalable code
                </li>
                <li className="text-slate-300 flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  Strong communication, collaboration, and leadership skills
                </li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="bg-zinc-900/50 backdrop-blur-sm rounded-2xl p-8 border border-zinc-800">
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="text-slate-300 mb-2 block">
                    Name
                  </label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="bg-black/50 border-zinc-700 text-white placeholder:text-slate-500 focus:border-green-500"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="text-slate-300 mb-2 block">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="bg-black/50 border-zinc-700 text-white placeholder:text-slate-500 focus:border-green-500"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="text-slate-300 mb-2 block">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Tell me about your project..."
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    className="bg-black/50 border-zinc-700 text-white placeholder:text-slate-500 focus:border-green-500 resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 shadow-lg shadow-green-600/50"
                >
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </Button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
