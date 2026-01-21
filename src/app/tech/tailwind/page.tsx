"use client"

import { SiTailwindcss } from 'react-icons/si'
import Link from 'next/link'

export default function TailwindPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 to-teal-50 dark:from-gray-900 dark:to-cyan-900/20 py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <Link href="/" className="inline-flex items-center gap-2 text-cyan-600 dark:text-cyan-400 hover:text-cyan-700 dark:hover:text-cyan-300 mb-8 transition">
          ← Back
        </Link>
        
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 md:p-12">
          <div className="flex items-center gap-6 mb-8">
            <div className="bg-cyan-500/10 p-6 rounded-xl">
              <SiTailwindcss className="text-cyan-500 text-6xl" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-2">
                Tailwind CSS
              </h1>
              <p className="text-cyan-600 dark:text-cyan-400 text-lg">
                Modern utility-first CSS framework
              </p>
            </div>
          </div>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Tailwind CSS is a utility-first CSS framework that revolutionized how we build interfaces. 
              Instead of pre-styled components, it offers low-level utility classes that allow 
              creating custom designs directly in HTML.
            </p>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              With Tailwind, you gain development speed without sacrificing creative flexibility. 
              The design system is consistent, the final bundle is optimized through PurgeCSS, and 
              support for dark mode, responsiveness, and hover/focus states is natively integrated.
            </p>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              We use Tailwind CSS in all our modern web projects to create elegant, 
              responsive, and performant interfaces. Its configurability and plugin ecosystem allow adapting the 
              framework perfectly to each project's needs.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
