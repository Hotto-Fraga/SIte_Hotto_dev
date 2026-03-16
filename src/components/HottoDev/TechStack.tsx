"use client"

import Link from 'next/link'
import { 
  SiPython, 
  SiReact, 
  SiJavascript, 
  SiNextdotjs, 
  SiNodedotjs 
} from 'react-icons/si'

const technologies = [
  { name: 'Python', icon: SiPython, color: 'text-orange-500', bgColor: 'bg-orange-500/10', slug: 'python' },
  { name: 'React', icon: SiReact, color: 'text-cyan-400', bgColor: 'bg-cyan-400/10', slug: 'react' },
  { name: 'JavaScript', icon: SiJavascript, color: 'text-yellow-500', bgColor: 'bg-yellow-500/10', slug: 'javascript' },
  { name: 'Next.js', icon: SiNextdotjs, color: 'text-black dark:text-white', bgColor: 'bg-gray-500/10', slug: 'nextjs' },
  { name: 'Node.js', icon: SiNodedotjs, color: 'text-green-600', bgColor: 'bg-green-600/10', slug: 'nodejs' },
]

export default function TechStack() {
  return (
    <section className="py-20 px-4 bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
            Technologies
          </h2>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {technologies.map((tech) => (
            <Link
              key={tech.name}
              href={`/tech/${tech.slug}`}
              className={`${tech.bgColor} rounded-xl p-6 flex flex-col items-center gap-4 hover:scale-105 transition-transform cursor-pointer border border-gray-200 dark:border-gray-700`}
            >
              <tech.icon className={`${tech.color} text-5xl`} />
              <span className="font-semibold text-gray-800 dark:text-gray-200">{tech.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
