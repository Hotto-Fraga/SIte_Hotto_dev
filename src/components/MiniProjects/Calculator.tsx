"use client"

import { useState } from 'react'

export default function Calculator() {
  const [display, setDisplay] = useState('0')
  const [equation, setEquation] = useState('')

  const handleNumber = (num: string) => {
    setDisplay(display === '0' ? num : display + num)
  }

  const handleOperator = (op: string) => {
    setEquation(display + ' ' + op + ' ')
    setDisplay('0')
  }

  const handleCalculate = () => {
    try {
      const result = eval(equation + display)
      setDisplay(String(result))
      setEquation('')
    } catch {
      setDisplay('Error')
      setEquation('')
    }
  }

  const handleClear = () => {
    setDisplay('0')
    setEquation('')
  }

  const buttons = [
    '7', '8', '9', '/',
    '4', '5', '6', '*',
    '1', '2', '3', '-',
    '0', '.', '=', '+'
  ]

  return (
    <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 shadow-xl">
      <h3 className="text-2xl font-bold text-white mb-4">Calculator</h3>
      
      <div className="bg-gray-700 rounded-lg p-4 mb-4">
        <div className="text-sm text-gray-400 h-6">{equation}</div>
        <div className="text-3xl font-bold text-white text-right">{display}</div>
      </div>

      <div className="grid grid-cols-4 gap-2 mb-2">
        {buttons.map((btn) => (
          <button
            key={btn}
            onClick={() => {
              if (btn === '=') handleCalculate()
              else if (['+', '-', '*', '/'].includes(btn)) handleOperator(btn)
              else handleNumber(btn)
            }}
            className={`p-4 rounded-lg font-semibold text-lg transition ${
              btn === '=' 
                ? 'bg-orange-500 hover:bg-orange-600 text-white col-span-1'
                : ['+', '-', '*', '/'].includes(btn)
                ? 'bg-gray-600 hover:bg-gray-500 text-white'
                : 'bg-gray-700 hover:bg-gray-600 text-white'
            }`}
          >
            {btn}
          </button>
        ))}
      </div>
      
      <button
        onClick={handleClear}
        className="w-full p-4 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-lg transition"
      >
        Clear
      </button>
    </div>
  )
}
