"use client"

import { SiNextdotjs } from 'react-icons/si'
import Link from 'next/link'

export default function NextJsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-slate-50 dark:from-gray-900 dark:to-gray-800 py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <Link href="/" className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 mb-8 transition">
          ← Back
        </Link>
        
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 md:p-12 border border-gray-200 dark:border-gray-700">
          <div className="flex items-center gap-6 mb-8">
            <div className="bg-gray-500/10 p-6 rounded-xl">
              <SiNextdotjs className="text-black dark:text-white text-6xl" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-2">
                Next.js
              </h1>
              <p className="text-gray-600 dark:text-gray-400 text-lg">
                React framework for production
              </p>
            </div>
          </div>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Next.js is the most popular React framework for production web applications. Developed by Vercel, 
              it adds essential features to React like server-side rendering (SSR), static site generation 
              (SSG), file-based routing, and automatic optimizations.
            </p>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              With Next.js 13+, the App Router brought Server Components, data streaming, shared layouts, 
              and unprecedented performance optimizations. Native TypeScript support, API Routes for 
              backend, automatic image optimization, and much more make development extremely productive.
            </p>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              We use Next.js as our primary choice for modern web applications. Its ability to 
              combine different rendering strategies, optimized SEO, and exceptional performance make 
              it ideal for projects of any scale, from landing pages to complex platforms.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
