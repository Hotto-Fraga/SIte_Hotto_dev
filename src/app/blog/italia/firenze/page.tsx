"use client"

import Image from 'next/image'
import Link from 'next/link'

type FirenzeMoment = {
  title: string
  alt: string
  text: string
  image?: string
  video?: string
}

const FirenzeMoments = [
  {
    title: 'Firenze Arrival',
    image: '/images/others/firenze-1.jpeg',
    alt: 'First moments in Firenze',
    text: 'My day started taking a flight from Barcelona to Milan Bergamo, then a bus to Firenze Centrale and finally a short walk to my hotel where i could meet my girlfriend. The weather was reasonable and we had a nice walk around the city center, enjoying the first local dish, the Schiacciata.',
  },
  {
    title: 'Historical Landmarks',
    image: '/images/others/firenze-2.jpeg',
    alt: 'Historical landmarks in Firenze',
    text: 'We woke up really early and started our walk toward the historical landmarks. The first impression was really amazing, every build was absolutely stunning and huge. We visited the Duomo, the Baptistery, the Campanile and the Piazza della Signoria.',
  },
  {
    title: 'Oltrarno',
    image: '/images/others/firenze3.jpeg',
    alt: 'Oltrarno district in Firenze',
    text: 'We explored the Oltrarno district, known for its artistic heritage and charming streets. We visited several galleries and enjoyed the local atmosphere.',
  },
  {
    title: 'Tuscany Cuisine',
    video: '/images/others/firenze-4.mp4',
    alt: 'Typical dishes from Tuscany cuisine',
    text: 'My girlfriend and I were celebrating Valentine Day and decided to have a romantic dinner. We chose to try a special Tuscan dish, Fiorentina. I will be so honest about the dish, i am from Brazil where we are used to have good meat and i was really disappointed with the quality of the meat, it was really tough and not tasty at all.',
  },
  {
    title: 'Uffizi Gallery',
    image: '/images/others/firenze-5.jpeg',
    alt: 'Uffizi Gallery in Firenze',
    text: 'We visited the Uffizi Gallery, which is one of the most famous museums in the world, though I’m not really an art guy. Tickets are €25 for non-Europeans and only €2 for Europeans. Since only my girlfriend is European, we decided to pretend I was too so I could get the €2 rate. Honestly, it’s not worth €25.',
  },
] satisfies FirenzeMoment[]

export default function FirenzePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 dark:from-gray-900 dark:via-gray-900 dark:to-orange-950/30 py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <Link
          href="/blog/italia"
          className="inline-flex items-center gap-2 text-orange-700 dark:text-orange-300 hover:text-orange-800 dark:hover:text-orange-200 mb-8 transition font-medium"
        >
          ← Back to Italy
        </Link>

        <article className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden border border-orange-100 dark:border-orange-900/30">
          <div className="h-2 bg-gradient-to-r from-green-500 to-red-500" />
          <div className="p-8 md:p-12">
            <header className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
              <div>
                <p className="text-sm uppercase tracking-wider text-orange-700 dark:text-orange-300 font-semibold mb-2">
                  Travel Journal
                </p>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-3">
                  Firenze
                </h1>
              </div>
            </header>

            <div className="space-y-10">
              {FirenzeMoments.map((moment, index) => (
                <section key={moment.title} className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
                  <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-orange-100 dark:border-orange-900/40 bg-orange-100/60 dark:bg-orange-900/20">
                    {moment.video ? (
                      <video
                        src={moment.video}
                        controls
                        className="h-full w-full object-cover"
                        preload="metadata"
                      >
                        Your browser does not support the video tag.
                      </video>
                    ) : (
                      <Image
                        src={moment.image ?? ''}
                        alt={moment.alt}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    )}
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                      {moment.title}
                    </h2>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      {moment.text}
                    </p>
                  </div>
                </section>
              ))}
            </div>

            <section className="mt-12 pt-8 border-t border-orange-100 dark:border-orange-900/30">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">Trip Overview</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              In my opinion, Firenze is a city that is more about the experience than the sights. The historical landmarks are impressive, but they don’t really stand out compared to other European cities. The food was a letdown, especially the famous Fiorentina steak. The Uffizi Gallery was also underwhelming, and I wouldn’t recommend it unless you’re really into art. Overall, it was a nice trip, but I wouldn’t rush back to Firenze anytime soon. The city is extremely touristy and expensive, it felt like we were just checking off a list of sights rather than truly enjoying the atmosphere. If you have limited time in Italy, I would suggest prioritizing other cities over Firenze. 
              </p>
            </section>
          </div>
        </article>
      </div>
    </div>
  )
}
