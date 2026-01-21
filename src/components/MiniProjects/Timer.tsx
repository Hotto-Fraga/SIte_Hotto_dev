"use client"

import { useState, useEffect } from 'react'
import { FaPlay, FaPause, FaStop } from 'react-icons/fa'

export default function Timer() {
  const [seconds, setSeconds] = useState(0)
  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null

    if (isActive) {
      interval = setInterval(() => {
        setSeconds(s => s + 1)
      }, 1000)
    }

    return () => {
      if (interval) clearInterval(interval)
    }
  }, [isActive])

  const formatTime = (totalSeconds: number) => {
    const hours = Math.floor(totalSeconds / 3600)
    const minutes = Math.floor((totalSeconds % 3600) / 60)
    const secs = totalSeconds % 60
    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`
  }

  const handleReset = () => {
    setIsActive(false)
    setSeconds(0)
  }

  return (
    <div className="bg-gradient-to-br from-green-500 to-teal-600 dark:from-green-700 dark:to-teal-800 rounded-2xl p-6 shadow-xl">
      <h3 className="text-2xl font-bold text-white mb-4">Stopwatch</h3>
      
      <div className="bg-white/10 backdrop-blur rounded-xl p-8 border border-white/20 mb-6">
        <div className="text-6xl font-mono font-bold text-white text-center">
          {formatTime(seconds)}
        </div>
      </div>

      <div className="flex gap-3 justify-center">
        <button
          onClick={() => setIsActive(!isActive)}
          className="p-4 bg-white/20 hover:bg-white/30 backdrop-blur rounded-full transition border border-white/30"
        >
          {isActive ? (
            <FaPause className="text-white text-2xl" />
          ) : (
            <FaPlay className="text-white text-2xl" />
          )}
        </button>
        <button
          onClick={handleReset}
          className="p-4 bg-red-500/80 hover:bg-red-500 backdrop-blur rounded-full transition border border-white/30"
        >
          <FaStop className="text-white text-2xl" />
        </button>
      </div>

      <div className="mt-6 text-center text-white/80 text-sm">
        {isActive ? 'Stopwatch running...' : 'Click play to start'}
      </div>
    </div>
  )
}
