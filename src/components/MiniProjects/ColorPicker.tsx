"use client"

import { useState } from 'react'

export default function ColorPicker() {
  const [color, setColor] = useState('#ff6b6b')
  const [copied, setCopied] = useState(false)

  const hexToRgb = (hex: string) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
    return result
      ? `rgb(${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)})`
      : null
  }

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const presetColors = [
    '#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#ffeaa7',
    '#dfe6e9', '#6c5ce7', '#fd79a8', '#fdcb6e', '#00b894'
  ]

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl border border-gray-200 dark:border-gray-700">
      <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Color Picker</h3>
      
      <div className="mb-6">
        <div
          className="w-full h-40 rounded-xl mb-4 border-4 border-gray-200 dark:border-gray-700 shadow-lg transition-all"
          style={{ backgroundColor: color }}
        ></div>
        
        <div className="flex gap-2 mb-4">
          <input
            type="color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            className="w-20 h-12 rounded cursor-pointer"
          />
          <input
            type="text"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            className="flex-1 px-4 py-2 rounded-lg border-2 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white font-mono focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>

        <div className="space-y-2 mb-4">
          <div className="flex justify-between items-center p-3 bg-gray-100 dark:bg-gray-700 rounded-lg">
            <span className="text-sm text-gray-600 dark:text-gray-400">HEX:</span>
            <button
              onClick={() => copyToClipboard(color)}
              className="font-mono text-gray-800 dark:text-white hover:text-orange-500 transition"
            >
              {color}
            </button>
          </div>
          <div className="flex justify-between items-center p-3 bg-gray-100 dark:bg-gray-700 rounded-lg">
            <span className="text-sm text-gray-600 dark:text-gray-400">RGB:</span>
            <button
              onClick={() => copyToClipboard(hexToRgb(color) || '')}
              className="font-mono text-gray-800 dark:text-white hover:text-orange-500 transition"
            >
              {hexToRgb(color)}
            </button>
          </div>
        </div>

        <div className="grid grid-cols-5 gap-2">
          {presetColors.map((presetColor) => (
            <button
              key={presetColor}
              onClick={() => setColor(presetColor)}
              className="w-full h-10 rounded-lg border-2 border-gray-300 dark:border-gray-600 hover:scale-110 transition-transform"
              style={{ backgroundColor: presetColor }}
            ></button>
          ))}
        </div>

        {copied && (
          <div className="mt-4 text-center text-green-500 font-semibold">
            ✓ Copied to clipboard!
          </div>
        )}
      </div>
    </div>
  )
}
