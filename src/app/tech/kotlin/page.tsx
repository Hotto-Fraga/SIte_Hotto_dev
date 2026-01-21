"use client"

import { SiKotlin } from 'react-icons/si'
import Link from 'next/link'

export default function KotlinPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-900 dark:to-purple-900/20 py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <Link href="/" className="inline-flex items-center gap-2 text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 mb-8 transition">
          ← Back
        </Link>
        
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 md:p-12">
          <div className="flex items-center gap-6 mb-8">
            <div className="bg-purple-500/10 p-6 rounded-xl">
              <SiKotlin className="text-purple-500 text-6xl" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-2">
                Kotlin
              </h1>
              <p className="text-purple-600 dark:text-purple-400 text-lg">
                Modern and concise language for JVM
              </p>
            </div>
          </div>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Kotlin is a modern, concise, and safe programming language that works perfectly with Java. 
              Developed by JetBrains, it became the official language for Android development in 2019.
            </p>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              With its elegant syntax and powerful features like null safety, coroutines, and function extensions, 
              Kotlin allows you to write cleaner code with fewer errors. It's fully interoperable with 
              Java, making it easy to gradually migrate existing projects.
            </p>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              We use Kotlin to create high-performance native Android applications, leveraging its ability 
              to reduce boilerplate code and increase development productivity. Its active community and 
              official Google support make it an excellent choice for modern projects.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
