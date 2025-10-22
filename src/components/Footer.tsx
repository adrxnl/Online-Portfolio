import { Github, Linkedin, Mail, Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-black border-t border-zinc-900 py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-slate-400 text-center md:text-left">
            <p className="flex items-center gap-2 justify-center md:justify-start">
              Built with React, TypeScript & Tailwind
            </p>
            <p className="text-sm mt-2">© 2025 Adrian Lopez. All rights reserved.</p>
          </div>

          <div className="flex gap-6">
            <a
              href="https://github.com/adrxnl"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-green-400 transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/adrian-lopez1/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-green-400 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="mailto:lopez.adrian2622@gmail.com"
              className="text-slate-400 hover:text-green-400 transition-colors"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
