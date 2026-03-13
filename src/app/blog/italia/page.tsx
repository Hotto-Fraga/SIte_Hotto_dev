"use client"

import Link from 'next/link'

export default function ItaliaPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50 dark:from-gray-900 dark:to-orange-900/20 py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <Link href="/blog" className="inline-flex items-center gap-2 text-orange-600 dark:text-orange-400 hover:text-orange-700 dark:hover:text-orange-300 mb-8 transition font-medium">
          ← Back to Travels
        </Link>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
          <div className="h-2 bg-gradient-to-r from-green-500 to-red-500" />
          <div className="p-8 md:p-12">
            <div className="flex items-center gap-6 mb-8">
              <div className="text-7xl">
                <img src="https://upload.wikimedia.org/wikipedia/en/thumb/0/03/Flag_of_Italy.svg/1280px-Flag_of_Italy.svg.png" alt="Italy" className="w-20 h-auto rounded shadow" />
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-2">
                  Italy
                </h1>
                <p className="text-orange-600 dark:text-orange-400 text-lg font-medium">
                  Where history comes to life
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 mb-8">
              <span className="px-4 py-1.5 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 rounded-full text-sm font-medium">🍕 Pizza & Pasta</span>
              <span className="px-4 py-1.5 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 rounded-full text-sm font-medium">🏛️ Ancient History</span>
              <span className="px-4 py-1.5 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 rounded-full text-sm font-medium">🎨 Art and Culture</span>
            </div>

            <div className="prose prose-lg dark:prose-invert max-w-none space-y-6">

              <section>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                  📖 The Journey
                </h2>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Italy is an open-air museum. Every street, every square and every building tells millennia of history, art and culture. And the gastronomy? Simply unforgettable. Write here your story about Italy...
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                  ✨ Highlights
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { icon: '🐟', title: 'Trani', desc: 'The Pearl of the Adriatic, featuring a seaside Romanesque Cathedral and a historic limestone harbor.' },
                    { icon: '🎨', title: 'Florence', desc: 'The cradle of the Renaissance, with the Uffizi Gallery and the Florence Cathedral.' },
                    { icon: '🦐', title: 'Bari', desc: 'The Gateway to the East, famous for the Basilica of San Nicola and the handmade pasta of the "Orecchiette Street.' },
                    { icon: '🫒', title: 'Ancona', desc: 'Ancona = The Gateway to the East, boasting a Romanesque Cathedral perched on a hill and a rare sunset over the Adriatic Sea.' },
                    { icon: '🍋', title: 'Fermo', desc: 'The Balcony of the Marche, boasting a grand Renaissance piazza and mysterious underground Roman cisterns.' },
                  ].map((item) => (
                    <div key={item.title} className="bg-orange-50 dark:bg-orange-900/20 rounded-xl p-4">
                      {item.title === 'Bari' ? (
                        <Link href="italia/bari" className="cursor-pointer hover:opacity-80 transition">
                            <div className="text-2xl mb-2">{item.icon}</div>
                            <h3 className="font-semibold text-gray-900 dark:text-white mb-1">{item.title}</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400">{item.desc}</p>
                        </Link>
                      ) : (
                        <>
                          <div className="text-2xl mb-2">{item.icon}</div>
                          <h3 className="font-semibold text-gray-900 dark:text-white mb-1">{item.title}</h3>
                          <p className="text-sm text-gray-600 dark:text-gray-400">{item.desc}</p>
                        </>
                      )}
                    </div>
                  ))}
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
