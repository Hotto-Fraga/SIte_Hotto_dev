"use client"

import { SiCplusplus } from 'react-icons/si'
import Link from 'next/link'

export default function CppPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50 dark:from-gray-900 dark:to-orange-900/20 py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <Link href="/" className="inline-flex items-center gap-2 text-orange-600 dark:text-orange-400 hover:text-orange-700 dark:hover:text-orange-300 mb-8 transition">
          ← Back
        </Link>
        
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 md:p-12">
          <div className="flex items-center gap-6 mb-8">
            <div className="bg-orange-600/10 p-6 rounded-xl">
              <SiCplusplus className="text-orange-600 text-6xl" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-2">
                C++
              </h1>
              <p className="text-orange-600 dark:text-orange-400 text-lg">
                Performance and low-level control
              </p>
            </div>
          </div>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              C++ is a powerful programming language that offers fine control over system resources 
              and exceptional performance. An extension of C with object-oriented programming features, it's 
              fundamental in systems that require maximum efficiency.
            </p>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Used in game engines, operating systems, hardware drivers, graphics applications, and 
              high-performance software. Modern C++ (C++11 and later) brought features that 
              make code safer and more expressive while maintaining unparalleled execution speed.
            </p>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              We apply C++ in projects that demand intensive processing, optimization of complex algorithms, 
              and development of low-level components. Its combination of high-level abstraction 
              with low-level control makes it ideal for performance-critical applications.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
