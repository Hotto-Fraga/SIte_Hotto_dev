"use client"

import { useState } from 'react'
import { FaTrash, FaCheck } from 'react-icons/fa'

interface Todo {
  id: number
  text: string
  completed: boolean
}

export default function TodoList() {
  const [todos, setTodos] = useState<Todo[]>([])
  const [input, setInput] = useState('')

  const addTodo = () => {
    if (input.trim()) {
      setTodos([...todos, { id: Date.now(), text: input, completed: false }])
      setInput('')
    }
  }

  const toggleTodo = (id: number) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ))
  }

  const deleteTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  return (
    <div className="bg-gradient-to-br from-purple-500 to-pink-600 dark:from-purple-700 dark:to-pink-800 rounded-2xl p-6 shadow-xl min-h-[400px]">
      <h3 className="text-2xl font-bold text-white mb-4">To-Do List</h3>
      
      <div className="flex gap-2 mb-6">
        <input
          type="text"
          placeholder="New task..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && addTodo()}
          className="flex-1 px-4 py-2 rounded-lg bg-white/20 backdrop-blur text-white placeholder-white/70 border border-white/30 focus:outline-none focus:ring-2 focus:ring-white/50"
        />
        <button
          onClick={addTodo}
          className="px-6 py-2 bg-white text-purple-600 font-semibold rounded-lg hover:bg-gray-100 transition"
        >
          Add
        </button>
      </div>

      <div className="space-y-2 max-h-80 overflow-y-auto">
        {todos.map(todo => (
          <div
            key={todo.id}
            className="bg-white/10 backdrop-blur rounded-lg p-3 flex items-center gap-3 border border-white/20"
          >
            <button
              onClick={() => toggleTodo(todo.id)}
              className={`w-6 h-6 rounded border-2 flex items-center justify-center ${
                todo.completed ? 'bg-green-500 border-green-500' : 'border-white/50'
              }`}
            >
              {todo.completed && <FaCheck className="text-white text-xs" />}
            </button>
            <span className={`flex-1 text-white ${todo.completed ? 'line-through opacity-60' : ''}`}>
              {todo.text}
            </span>
            <button
              onClick={() => deleteTodo(todo.id)}
              className="text-red-300 hover:text-red-100 transition"
            >
              <FaTrash />
            </button>
          </div>
        ))}
        {todos.length === 0 && (
          <div className="text-center text-white/60 py-8">
            No tasks yet. Add one!
          </div>
        )}
      </div>
    </div>
  )
}
