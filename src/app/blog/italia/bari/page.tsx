"use client"

import Link from 'next/link'

export default function BariPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50 dark:from-gray-900 dark:to-orange-900/20 py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <Link href="/blog/italia" className="inline-flex items-center gap-2 text-orange-600 dark:text-orange-400 hover:text-orange-700 dark:hover:text-orange-300 mb-8 transition font-medium">
          ← Back to Italy
        </Link>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
          <div className="h-2 bg-gradient-to-r from-green-500 to-red-500" />
          <div className="p-8 md:p-12">
            <div className="flex items-center gap-6 mb-8">
              <div className="text-7xl">🏖️</div>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-2">
                  Bari
                </h1>
                <p className="text-orange-600 dark:text-orange-400 text-lg font-medium">
                  The Pearl of Adriatic Sea
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 mb-8">
              <span className="px-4 py-1.5 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 rounded-full text-sm font-medium">🌊 Adriatic Coast</span>
              <span className="px-4 py-1.5 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 rounded-full text-sm font-medium">🏛️ Medieval History</span>
              <span className="px-4 py-1.5 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 rounded-full text-sm font-medium">🍝 Orecchiette Pasta</span>
            </div>

            <div className="prose prose-lg dark:prose-invert max-w-none space-y-6">

              <section>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                  📖 The Journey
                </h2>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Bari is a charming port city in the Puglia region, where ancient history meets vibrant Mediterranean culture. With its beautiful Adriatic waterfront, ancient basilicas, and delicious local cuisine, Bari offers an authentic Italian experience away from the typical tourist routes. Write here your story about Bari...
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                  ✨ Highlights
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { icon: '⛪', title: 'Basilica di San Nicola', desc: 'A magnificent Romanesque cathedral housing the relics of Saint Nicholas, patron of sailors.' },
                    { icon: '🏰', title: 'Castello Svevo', desc: 'A stunning medieval fortress overlooking the harbor with strategic architectural importance.' },
                    { icon: '🌅', title: 'Lungomare', desc: 'A beautiful seafront promenade perfect for evening walks and sunset views.' },
                    { icon: '🏘️', title: 'Bari Vecchia', desc: 'The enchanting old town with narrow winding streets, traditional houses, and local shops.' },
                  ].map((item) => (
                    <div key={item.title} className="bg-orange-50 dark:bg-orange-900/20 rounded-xl p-4">
                      <div className="text-2xl mb-2">{item.icon}</div>
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-1">{item.title}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                  🍽️ Local Cuisine
                </h2>
                <div className="bg-orange-50 dark:bg-orange-900/20 rounded-xl p-6">
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                    Bari is renowned for its incredible culinary traditions. Don't miss these local specialties:
                  </p>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                    <li className="flex items-start gap-2"><span className="text-orange-500 mt-1">🍝</span> <strong>Orecchiette con cime di rapa</strong> - Ear-shaped pasta with turnip greens, the city's signature dish</li>
                    <li className="flex items-start gap-2"><span className="text-orange-500 mt-1">🦪</span> <strong>Fresh seafood</strong> - Sea urchins, mussels, and fresh fish from the Adriatic</li>
                    <li className="flex items-start gap-2"><span className="text-orange-500 mt-1">🥖</span> <strong>Focaccia barese</strong> - Delicious flatbread with olive oil and roasted vegetables</li>
                    <li className="flex items-start gap-2"><span className="text-orange-500 mt-1">🥫</span> <strong>Burrata cheese</strong> - Creamy cheese from nearby production areas</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                  💡 Tips
                </h2>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li className="flex items-start gap-2"><span className="text-orange-500 mt-1">•</span> Add your travel tips here...</li>
                </ul>
              </section>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
