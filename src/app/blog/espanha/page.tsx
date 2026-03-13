"use client"

import Link from 'next/link'

export default function EspanhaPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50 dark:from-gray-900 dark:to-orange-900/20 py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <Link href="/blog" className="inline-flex items-center gap-2 text-orange-600 dark:text-orange-400 hover:text-orange-700 dark:hover:text-orange-300 mb-8 transition font-medium">
          ← Voltar às Viagens
        </Link>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
          <div className="h-2 bg-gradient-to-r from-red-500 to-yellow-400" />
          <div className="p-8 md:p-12">
            <div className="flex items-center gap-6 mb-8">
              <div className="text-7xl">
                <img src="https://upload.wikimedia.org/wikipedia/en/thumb/9/9a/Flag_of_Spain.svg/1280px-Flag_of_Spain.svg.png" alt="Spain" className="w-20 h-auto rounded shadow" />
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-2">
                  Espanha
                </h1>
                <p className="text-orange-600 dark:text-orange-400 text-lg font-medium">
                  Paixão, cultura e siesta
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 mb-8">
              <span className="px-4 py-1.5 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 rounded-full text-sm font-medium">💃 Flamenco</span>
              <span className="px-4 py-1.5 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 rounded-full text-sm font-medium">🍷 Tapas</span>
              <span className="px-4 py-1.5 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 rounded-full text-sm font-medium">☀️ Sol mediterrâneo</span>
            </div>

            <div className="prose prose-lg dark:prose-invert max-w-none space-y-6">

              <section>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                  📖 A Viagem
                </h2>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  A Espanha é um país que vive com intensidade. Da energia contagiante de Barcelona à grandiosidade histórica de Madrid, passando pela magia da Andaluzia, cada região tem uma alma própria. Escreve aqui a tua história sobre a Espanha...
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                  ✨ Destaques
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { icon: '⛪', title: 'Sagrada Família', desc: 'A obra-prima de Gaudí em Barcelona, ainda em construção após mais de 100 anos.' },
                    { icon: '🏟️', title: 'Madrid', desc: 'Museu do Prado, Plaza Mayor e a incomparável vida noturna espanhola.' },
                    { icon: '💃', title: 'Sevilha', desc: 'O coração do flamenco, com o bairro de Triana e a Giralda.' },
                    { icon: '🏰', title: 'Granada', desc: 'A Alhambra, um dos complexos islâmicos medievais mais belos do mundo.' },
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
                  💡 Dicas
                </h2>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li className="flex items-start gap-2"><span className="text-orange-500 mt-1">•</span> Adiciona as tuas dicas de viagem aqui...</li>
                </ul>
              </section>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
