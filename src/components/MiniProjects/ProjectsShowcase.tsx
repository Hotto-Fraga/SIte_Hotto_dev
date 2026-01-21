"use client"

import WeatherApp from './WeatherApp'
import Calculator from './Calculator'
import TodoList from './TodoList'
import Timer from './Timer'
import ColorPicker from './ColorPicker'
import QuoteGenerator from './QuoteGenerator'

export default function ProjectsShowcase() {
  return (
    <section id="projects" className="py-20 px-4 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
            Interactive Mini Projects
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            Practical demonstrations of modern web applications
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <WeatherApp />
          <Calculator />
          <TodoList />
          <Timer />
          <ColorPicker />
          <QuoteGenerator />
        </div>
      </div>
    </section>
  )
}
