"use client"

import { SiReact } from 'react-icons/si'
import Link from 'next/link'

export default function ReactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50 dark:from-gray-900 dark:to-orange-900/20 py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <Link href="/" className="inline-flex items-center gap-2 text-cyan-600 dark:text-cyan-400 hover:text-cyan-700 dark:hover:text-cyan-300 mb-8 transition">
          ← Back
        </Link>
        
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 md:p-12">
          <div className="flex items-center gap-6 mb-8">
            <div className="bg-cyan-400/10 p-6 rounded-xl">
              <SiReact className="text-cyan-400 text-6xl" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-2">
                React
              </h1>
              <p className="text-cyan-600 dark:text-cyan-400 text-lg">
                JavaScript library for user interfaces
              </p>
            </div>
          </div>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              React is the most popular JavaScript library for building user interfaces. Developed 
              and maintained by Facebook, it revolutionized web development with its model based on 
              reusable components and Virtual DOM for efficient rendering.
            </p>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              With React, we build declarative interfaces where application state automatically determines 
              what is rendered. Hooks like useState and useEffect simplified state management and 
              side effects. The React ecosystem is vast, including tools like Redux, React Router, 
              and Next.js.
            </p>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              We use React to create dynamic and responsive single-page applications (SPAs). Its 
              component-based architecture promotes code reuse, maintainability, and easier testing. 
              It's our primary choice for modern and interactive web interfaces.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
