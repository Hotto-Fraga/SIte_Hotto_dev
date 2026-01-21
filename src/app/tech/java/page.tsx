"use client"

import { SiOpenjdk } from 'react-icons/si'
import Link from 'next/link'

export default function JavaPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-50 dark:from-gray-900 dark:to-red-900/20 py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <Link href="/" className="inline-flex items-center gap-2 text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300 mb-8 transition">
          ← Back
        </Link>
        
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 md:p-12">
          <div className="flex items-center gap-6 mb-8">
            <div className="bg-red-600/10 p-6 rounded-xl">
              <SiOpenjdk className="text-red-600 text-6xl" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-2">
                Java
              </h1>
              <p className="text-red-600 dark:text-red-400 text-lg">
                Robust platform for enterprise applications
              </p>
            </div>
          </div>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Java is one of the most popular and enduring programming languages in the world. With over 25 years 
              of history, it's the primary choice for large-scale enterprise applications, banking systems, 
              and Android applications.
            </p>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Its "write once, run anywhere" philosophy allows Java code to run on any 
              platform that has a JVM (Java Virtual Machine). With features like automatic garbage collection, 
              robust multithreading, and a mature framework ecosystem, Java remains a solid choice.
            </p>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              We use Java to develop scalable backend systems, RESTful APIs with Spring Boot, 
              microservices, and distributed applications that require high performance and reliability. Its 
              maturity and vast documentation ensure stable and long-term projects.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
