"use client"

import { SiPython } from 'react-icons/si'
import Link from 'next/link'

export default function PythonPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50 dark:from-gray-900 dark:to-orange-900/20 py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <Link href="/" className="inline-flex items-center gap-2 text-orange-600 dark:text-orange-400 hover:text-orange-700 dark:hover:text-orange-300 mb-8 transition">
          ← Back
        </Link>
        
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 md:p-12">
          <div className="flex items-center gap-6 mb-8">
            <div className="bg-orange-500/10 p-6 rounded-xl">
              <SiPython className="text-orange-500 text-6xl" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-2">
                Python
              </h1>
              <p className="text-orange-600 dark:text-orange-400 text-lg">
                Versatility and simplicity in code
              </p>
            </div>
          </div>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Python is a high-level, interpreted, general-purpose programming language. Known 
              for its clear and readable syntax, Python is perfect for both beginners and experienced developers 
              seeking productivity.
            </p>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              The absolute leader in data science, machine learning, and artificial intelligence, Python offers 
              powerful libraries like NumPy, Pandas, TensorFlow, and PyTorch. It's also excellent for 
              web development with frameworks like Django and Flask, automation, and scripting.
            </p>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              We use Python for data analysis, API development, process automation, 
              deployment scripts, and machine learning projects. Its vast collection of packages on PyPI and 
              active community make almost any task possible with efficiency.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
