import { motion } from 'motion/react';
import { Briefcase, GraduationCap } from 'lucide-react';

export function Experience() {
  const experiences = [
    
    {
      type: 'education',
      title: 'Bachelor of Computer Science',
      company: 'University of North Texas',
      period: '2022 - Present',
      description: 'Focused on software engineering, algorithms, and web technologies. ',
      achievements: [
        'Dean\'s List x4 semesters, President\'s List one semester',
        'Led collaboration projects in web development courses',
        'Became members of SHPE and ColorStack student organizations'
      ]
    },
    {
      type: 'education',
      title: 'SHPE Hackerz Director & Webmaster',
      company: 'Society of Hispanic Professional Engineers (SHPE) - UNT Chapter',
      period: '2025 - Present',
      description: 'Coordinated educational meetings with professionals and managed the chapter website to enhance member engagement and outreach.',
      achievements: [
        'Boosted member engagement through effective website management',
        'Networked with industry professionals to provide learning opportunities',
        'Cooperated with executive team to plan events and initiatives'
      ]
    },
    {
      type: 'work',
      title: 'Event Technician',
      company: 'DJ Fernando Lopez',
      period: '2019 - Present',
      description: 'Provided technical support for events, including setup and operation of audio-visual equipment to ensure seamless event execution.',
      achievements: [
        'Ensured optimal performance of lighting and audio systems for 350 guests on average',
        'Increased set-up efficiency by 50% through strategic planning and teamwork',
        'Captured high-quality event footage to demonstrate client satisfaction and marketing efforts'
      ]
    }
  ];

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-white mb-4">Experience & Education</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            My professional journey and academic background
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative pl-8 pb-12 border-l-2 border-green-900 last:pb-0"
            >
              <div className="absolute left-0 top-0 transform -translate-x-1/2">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center shadow-lg ${
                  exp.type === 'work' 
                    ? 'bg-gradient-to-br from-green-600 to-green-500 shadow-green-500/50' 
                    : 'bg-gradient-to-br from-emerald-600 to-emerald-500 shadow-emerald-500/50'
                }`}>
                  {exp.type === 'work' ? (
                    <Briefcase className="h-4 w-4 text-white" />
                  ) : (
                    <GraduationCap className="h-4 w-4 text-white" />
                  )}
                </div>
              </div>

              <div className="bg-zinc-900/50 backdrop-blur-sm rounded-xl p-6 border border-zinc-800 hover:border-green-900 transition-colors">
                <div className="flex flex-wrap justify-between items-start mb-3">
                  <div>
                    <h3 className="text-white mb-1">{exp.title}</h3>
                    <p className="text-green-400">{exp.company}</p>
                  </div>
                  <span className="text-slate-400 text-sm">{exp.period}</span>
                </div>
                <p className="text-slate-300 mb-4">{exp.description}</p>
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="text-slate-400 text-sm flex items-start">
                      <span className="text-green-400 mr-2">▹</span>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
