"use client"

import { useState } from 'react'
import { LuMenu, LuX } from 'react-icons/lu'
import ToggleThemeButton from '../ui/ToggleThemeButton'

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            
            {/* Logo */}
            <a href="/" className="flex items-center gap-2 hover:opacity-80 transition">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center shadow-lg transform rotate-45">
                <span className="text-white font-bold text-lg transform -rotate-45">HD</span>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent hidden sm:inline">
                Hotto Dev
              </span>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-6">
              <a 
                href="/#technologies" 
                className="text-gray-700 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 transition font-medium"
              >
                Technologies
              </a>
              <a 
                href="/#projects" 
                className="text-gray-700 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 transition font-medium"
              >
                Projects
              </a>
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-3">
              <ToggleThemeButton />
              
              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition"
                aria-label="Menu"
              >
                {isMenuOpen ? (
                  <LuX size={24} className="text-gray-700 dark:text-gray-300" />
                ) : (
                  <LuMenu size={24} className="text-gray-700 dark:text-gray-300" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
            <nav className="px-4 py-4 space-y-3">
              <a 
                href="/#technologies"
                onClick={() => setIsMenuOpen(false)}
                className="block px-4 py-3 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-orange-50 dark:hover:bg-orange-900/20 hover:text-orange-600 dark:hover:text-orange-400 transition font-medium"
              >
                Technologies
              </a>
              <a 
                href="/#projects"
                onClick={() => setIsMenuOpen(false)}
                className="block px-4 py-3 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-orange-50 dark:hover:bg-orange-900/20 hover:text-orange-600 dark:hover:text-orange-400 transition font-medium"
              >
                Projects
              </a>
            </nav>
          </div>
        )}
      </header>

      {/* Spacer to prevent content from going under fixed navbar */}
      <div className="h-16"></div>
    </>
  )
}
