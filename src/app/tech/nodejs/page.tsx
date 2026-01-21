"use client"

import { SiNodedotjs } from 'react-icons/si'
import Link from 'next/link'

export default function NodeJsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50 dark:from-gray-900 dark:to-green-900/20 py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <Link href="/" className="inline-flex items-center gap-2 text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 mb-8 transition">
          ← Back
        </Link>
        
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 md:p-12">
          <div className="flex items-center gap-6 mb-8">
            <div className="bg-green-600/10 p-6 rounded-xl">
              <SiNodedotjs className="text-green-600 text-6xl" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-2">
                Node.js
              </h1>
              <p className="text-green-600 dark:text-green-400 text-lg">
                JavaScript on the server
              </p>
            </div>
          </div>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Node.js is a JavaScript runtime built on Chrome's V8 engine that allows running 
              JavaScript on the server. It revolutionized backend development by bringing the same language 
              used in frontend to the server, enabling full-stack development with JavaScript.
            </p>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              With its non-blocking I/O model and event-driven architecture, Node.js is perfect for applications that 
              require high concurrency and real-time capabilities, like chat apps, RESTful APIs, microservices, and 
              data streaming. NPM (Node Package Manager) offers the world's largest open-source library ecosystem.
            </p>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              We use Node.js to build scalable backends, robust APIs with Express or Fastify, 
              build and automation tools, and real-time services with WebSockets. Its performance and 
              ability to handle multiple simultaneous connections make it ideal for modern applications.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
