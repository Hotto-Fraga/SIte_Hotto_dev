"use client"

import { useState } from 'react'
import { FaQuoteLeft } from 'react-icons/fa'

const quotes = [
  { text: "O código limpo sempre parece que foi escrito por alguém que se importa.", author: "Robert C. Martin" },
  { text: "Primeiro resolva o problema. Depois escreva o código.", author: "John Johnson" },
  { text: "A perfeição é alcançada não quando não há mais nada para adicionar, mas quando não há mais nada para remover.", author: "Antoine de Saint-Exupéry" },
  { text: "Qualquer tolo pode escrever código que um computador pode entender. Bons programadores escrevem código que humanos podem entender.", author: "Martin Fowler" },
  { text: "Experiência é o nome que damos aos nossos erros.", author: "Oscar Wilde" },
  { text: "A melhor maneira de prever o futuro é inventá-lo.", author: "Alan Kay" },
  { text: "Code is like humor. When you have to explain it, it's bad.", author: "Cory House" },
  { text: "Simplicidade é a sofisticação máxima.", author: "Leonardo da Vinci" },
]

export default function QuoteGenerator() {
  const [quote, setQuote] = useState(quotes[0])

  const generateQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length)
    setQuote(quotes[randomIndex])
  }

  return (
    <div className="bg-gradient-to-br from-indigo-500 to-purple-600 dark:from-indigo-700 dark:to-purple-800 rounded-2xl p-6 shadow-xl min-h-[400px] flex flex-col">
      <h3 className="text-2xl font-bold text-white mb-4">Quote Generator</h3>
      
      <div className="flex-1 bg-white/10 backdrop-blur rounded-xl p-8 border border-white/20 flex flex-col justify-center">
        <FaQuoteLeft className="text-white/40 text-4xl mb-4" />
        <p className="text-xl text-white font-medium mb-6 leading-relaxed">
          "{quote.text}"
        </p>
        <p className="text-white/80 text-right font-semibold">
          — {quote.author}
        </p>
      </div>

      <button
        onClick={generateQuote}
        className="mt-6 w-full py-4 bg-white text-indigo-600 font-semibold rounded-lg hover:bg-gray-100 transition shadow-lg"
      >
        New Quote
      </button>
    </div>
  )
}
