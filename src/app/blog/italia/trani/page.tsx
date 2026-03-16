"use client"

import Link from 'next/link'

export default function TraniPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50 dark:from-gray-900 dark:to-orange-900/20 py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <Link
          href="/blog/italia"
          className="inline-flex items-center gap-2 text-orange-600 dark:text-orange-400 hover:text-orange-700 dark:hover:text-orange-300 mb-8 transition font-medium"
        >
          ← Back to Italy
        </Link>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
          <div className="h-2 bg-gradient-to-r from-green-500 to-red-500" />
          <div className="p-8 md:p-12">
            <div className="flex items-center gap-6 mb-8">
              <div className="text-7xl">🐟</div>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-2">
                  Trani
                </h1>
                <p className="text-orange-600 dark:text-orange-400 text-lg font-medium">
                  The Pearl of the Adriatic
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 mb-8">
              <span className="px-4 py-1.5 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 rounded-full text-sm font-medium">⛪ Seaside Cathedral</span>
              <span className="px-4 py-1.5 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 rounded-full text-sm font-medium">⚓ Historic Harbor</span>
              <span className="px-4 py-1.5 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 rounded-full text-sm font-medium">🌅 Sunset Views</span>
            </div>

            <div className="prose prose-lg dark:prose-invert max-w-none space-y-6">
              <section>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                  📖 The Journey
                </h2>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Trani combines sea breeze, medieval architecture, and local food in a calm atmosphere.
                  Write here your travel story about Trani.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                  ✨ Highlights
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    {
                      icon: '⛪',
                      title: 'Cattedrale di San Nicola Pellegrino',
                      desc: 'One of the most iconic seaside Romanesque cathedrals in Southern Italy.',
                    },
                    {
                      icon: '🏰',
                      title: 'Castello Svevo',
                      desc: 'A medieval fortress with strategic views over the Adriatic coast.',
                    },
                    {
                      icon: '⚓',
                      title: 'Porto di Trani',
                      desc: 'A charming harbor lined with restaurants, boats, and old stone buildings.',
                    },
                    {
                      icon: '🍝',
                      title: 'Local Cuisine',
                      desc: 'Fresh seafood, handmade pasta, and olive oil from the Puglia region.',
                    },
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
                  💡 Tips
                </h2>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li className="flex items-start gap-2"><span className="text-orange-500 mt-1">•</span> Add your travel tips here.</li>
                </ul>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}