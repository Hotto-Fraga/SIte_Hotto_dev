"use client"

import { SiJavascript } from 'react-icons/si'
import Link from 'next/link'

export default function JavaScriptPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-amber-50 dark:from-gray-900 dark:to-yellow-900/20 py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <Link href="/" className="inline-flex items-center gap-2 text-yellow-600 dark:text-yellow-400 hover:text-yellow-700 dark:hover:text-yellow-300 mb-8 transition">
          ← Back
        </Link>
        
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 md:p-12">
          <div className="flex items-center gap-6 mb-8">
            <div className="bg-yellow-500/10 p-6 rounded-xl">
              <SiJavascript className="text-yellow-500 text-6xl" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-2">
                JavaScript
              </h1>
              <p className="text-yellow-600 dark:text-yellow-400 text-lg">
                The language of the modern web
              </p>
            </div>
          </div>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              JavaScript is the essential programming language for web development. Originally created 
              to make web pages interactive, today it's a complete language that runs both in browsers 
              (client-side) and on servers (Node.js).
            </p>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Modern JavaScript (ES6+) brought powerful features like arrow functions, async/await, 
              destructuring, modules, and much more. It's the foundation of popular frameworks and libraries like React, 
              Vue, Angular and enables creating everything from simple animations to complex real-time web applications.
            </p>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              We master JavaScript to create interactive web experiences, manipulate DOM, make asynchronous 
              requests, work with APIs, and build full-stack applications. Its versatility and 
              omnipresence on the web make it a fundamental skill for any modern developer.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
