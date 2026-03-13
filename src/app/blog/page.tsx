"use client"

import Link from 'next/link'

const countries = [
  {
    slug: 'romania',
    name: 'Romania',
    flag: '🇷🇴',
    tagline: 'A terra de Drácula e castelos medievais',
    description: 'Montanhas dos Cárpatos, castelos históricos, cidades vibrantes e uma cultura rica e misteriosa.',
    color: 'from-blue-500 to-yellow-400',
  },
  {
    slug: 'portugal',
    name: 'Portugal',
    flag: '🇵🇹',
    tagline: 'Onde o mar encontra a história',
    description: 'Dos elétricos de Lisboa às caves do Porto e às praias douradas do Algarve.',
    color: 'from-red-600 to-green-600',
  },
  {
    slug: 'brasil',
    name: 'Brasil',
    flag: '🇧🇷',
    tagline: 'A terra do carnaval e das florestas',
    description: 'Cultura vibrante, praias deslumbrantes, maravilhas da Amazónia e um povo caloroso.',
    color: 'from-green-500 to-yellow-400',
  },
  {
    slug: 'andorra',
    name: 'Andorra',
    flag: '🇦🇩',
    tagline: 'A joia escondida dos Pirenéus',
    description: 'Um pequeno país entre a França e a Espanha, famoso pela neve, compras e paisagens únicas.',
    color: 'from-blue-600 to-red-500',
  },
  {
    slug: 'espanha',
    name: 'Espanha',
    flag: '🇪🇸',
    tagline: 'Paixão, cultura e siesta',
    description: 'Da Sagrada Família aos espetáculos de flamenco, tapas e praias mediterrâneas.',
    color: 'from-red-500 to-yellow-400',
  },
  {
    slug: 'franca',
    name: 'França',
    flag: '🇫🇷',
    tagline: 'Arte, gastronomia e a Torre Eiffel',
    description: 'O romance de Paris, os campos de lavanda da Provença e uma gastronomia de excelência.',
    color: 'from-blue-600 to-red-600',
  },
  {
    slug: 'italia',
    name: 'Itália',
    flag: '🇮🇹',
    tagline: 'Onde a história ganha vida',
    description: 'Ruínas antigas em Roma, arte em Florença, canais em Veneza e a melhor pizza do mundo.',
    color: 'from-green-500 to-red-500',
  },
  {
    slug: 'united-kingdom',
    name: 'United Kingdom',
    flag: '🇬🇧',
    tagline: 'Tradição encontra modernidade',
    description: 'O skyline icónico de Londres, as Highlands escocesas, castelos galeses e campos ingleses.',
    color: 'from-blue-700 to-red-600',
  },
]

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-yellow-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">

      {/* Hero */}
      <div className="py-20 px-4 text-center">
        <div className="text-6xl mb-6">✈️</div>
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
          As Minhas{' '}
          <span className="bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500 bg-clip-text text-transparent">
            Viagens
          </span>
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
          Histórias, memórias e experiências de cada canto do mundo que tive o prazer de explorar.
        </p>
        <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 rounded-full shadow text-sm text-gray-500 dark:text-gray-400 font-medium">
          🌍 {countries.length} países visitados
        </div>
      </div>

      {/* Country Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {countries.map((country) => (
            <Link
              key={country.slug}
              href={`/blog/${country.slug}`}
              className="group bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden"
            >
              {/* Color Banner */}
              <div className={`h-3 bg-gradient-to-r ${country.color}`} />

              <div className="p-6">
                <div className="text-5xl mb-4">{country.flag}</div>
                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-1 group-hover:text-orange-500 dark:group-hover:text-orange-400 transition-colors">
                  {country.name}
                </h2>
                <p className="text-sm text-orange-600 dark:text-orange-400 font-medium mb-3">
                  {country.tagline}
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  {country.description}
                </p>
                <div className="mt-5 text-orange-500 dark:text-orange-400 text-sm font-semibold group-hover:translate-x-1 transition-transform inline-block">
                  Ler mais →
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}