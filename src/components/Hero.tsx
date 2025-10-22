import { motion } from 'motion/react';
import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react';
import { Button } from './ui/button';
import { AnimatedBackground } from './AnimatedBackground';

export function Hero() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-black">
      {/* Animated background elements */}
      <AnimatedBackground />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="mb-6"
          >
            <div className="w-48 h-48 bg-gradient-to-br from-green-600 to-emerald-500 rounded-full mx-auto flex items-center justify-center shadow-lg shadow-green-500/50 p-1">
              <img
                src="/images/Headshot.jpg"
                alt="Adrian Lopez"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-white text-3xl font-weight-bold mb-8"
          >
            Hi, I'm <span className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">Adrian Lopez</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-slate-300 text-xl max-w-2xl mx-auto mb-8"
          >
            Fullstack Developer crafting seamless digital experiences from database to deployment
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex gap-4 justify-center mb-12"
          >
            <Button
              variant="default"
              className="bg-green-600 hover:bg-green-700 shadow-lg shadow-green-600/50"
              onClick={() => scrollToSection('projects')}
            >
              View My Work
            </Button>
            <Button
              variant="outline"
              className="border-green-600 text-green-400 hover:bg-green-950 hover:text-green-300"
              onClick={() => scrollToSection('contact')}
            >
              <Mail className="mr-2 h-4 w-4" />
              Get In Touch
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="flex gap-6 justify-center"
          >
            <a href="https://github.com/adrxnl" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-green-400 transition-colors">
              <Github className="h-6 w-6" />
            </a>
            <a href="https://linkedin.com/in/adrian-lopez1" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-green-400 transition-colors">
              <Linkedin className="h-6 w-6" />
            </a>
            <a href="mailto:lopez.adrian2622@gmail.com" className="text-slate-400 hover:text-green-400 transition-colors">
              <Mail className="h-6 w-6" />
            </a>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ArrowDown className="h-6 w-6 text-green-500/50" />
      </motion.div>
    </section>
  );
}
