"use client"

import Logo from './Logo'

export default function HeroSection() {
  return (
    <section className="relative min-h-[600px] flex items-center justify-center bg-gradient-to-br from-orange-50 via-red-50 to-yellow-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-72 h-72 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-red-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-700"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <div className="flex justify-center mb-8">
          <Logo />
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Transform your ideas into
          <span className="block bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500 bg-clip-text text-transparent">
            Flawless Code
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
          Modern web development with the best technologies on the market. 
          From concept to production, we create digital experiences that impress.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#projects"
            className="px-8 py-4 bg-gradient-to-r from-orange-500 to-red-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all"
          >
            View Projects
          </a>
          <a
            href="#technologies"
            className="px-8 py-4 bg-white dark:bg-gray-800 text-gray-800 dark:text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all border-2 border-gray-200 dark:border-gray-700"
          >
            Explore Tech Stack
          </a>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
          <div>
            <div className="text-4xl font-bold bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">9+</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Technologies</div>
          </div>
          <div>
            <div className="text-4xl font-bold bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">6</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Demo Projects</div>
          </div>
          <div>
            <div className="text-4xl font-bold bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">100%</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Dedication</div>
          </div>
        </div>
      </div>
    </section>
  )
}
