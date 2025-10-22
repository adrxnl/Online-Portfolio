import { motion } from 'motion/react';
import { Badge } from './ui/badge';
import { Code2, Wrench, Cloud, Palette } from 'lucide-react';

export function Skills() {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: Palette,
      color: 'from-green-600 to-green-400',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'TypeScript',  'Tailwind CSS']
    },
    {
      title: 'Backend',
      icon: Code2,
      color: 'from-emerald-600 to-emerald-400',
      skills: ['Node.js', 'C++/C', 'Express', 'Java', 'SQL']
    },
    {
      title: 'Database & Tools',
      icon: Wrench,
      color: 'from-green-500 to-emerald-500',
      skills: ['MongoDB', 'Git Management', 'Visual Studio Code', 'Figma', 'Supabase']
    },
    {
      title: 'DevOps & Cloud',
      icon: Cloud,
      color: 'from-lime-600 to-green-500',
      skills: ['Docker', 'AWS', 'CI/CD', 'GitHub Actions', 'Netlify']
    }
  ];

  return (
    <section className="py-20 bg-zinc-950">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-white mb-4">Skills & Expertise</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            A comprehensive toolkit built through years of hands-on development
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-zinc-900/50 backdrop-blur-sm rounded-2xl p-8 border border-zinc-800 hover:border-green-900 transition-colors"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${category.color} flex items-center justify-center shadow-lg shadow-green-500/20`}>
                  <category.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-white">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="bg-zinc-800/50 text-slate-300 hover:bg-green-950 hover:text-green-300 border-zinc-700"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
