"use client"

import Image from 'next/image'

type Aboutme = {
  title: string
  alt: string
  text: string
  image?: string
  video?: string
}

const Aboutme = [
  {
    title: 'Hotto Dev',
    image: '/images/others/aboutmeprofile.jpeg',
    alt: 'Uffizi Gallery in Firenze',
    text: 'International Student and aspiring Software Engineer with foundation in Python, React, NodeJS, and NextJS. Proven ability to adapt to diverse environments and solve complex problems. Speaking in English, Spanish and French, | am eager to contribute to the company while gaining hands-on industry experience.',
  },
] satisfies Aboutme[]

export default function Aboutmepage() {
  return (
<div className="bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 dark:from-gray-900 dark:via-gray-900 dark:to-orange-950/30 pt-10 pb-10 px-4">
      <div className="max-w-5xl mx-auto">

        <article className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden border border-orange-100 dark:border-orange-900/30">
          <div className="h-2 bg-gradient-to-r from-green-500 to-red-500" />
          <div className="p-8 md:p-8">
            <header className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-3">
                  About me
                </h1>
              </div>
            </header>

            <div className="space-y-10">
              {Aboutme.map((profile, index) => (
                <section className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
                  <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-orange-100 dark:border-orange-900/40 bg-orange-100/60 dark:bg-orange-900/20">
                    {profile.image ? (
                      <Image
                        src={profile.image}
                        alt={profile.alt}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    ) : (
                        <Image className="object-cover"
                        src="public/images/others/aboutmeprofile.jpeg"
                        alt="profile"
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        />
                    )}
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                      {profile.title}
                    </h2>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      {profile.text}
                    </p>
                  </div>
                </section>
              ))}
            </div>
          </div>
        </article>
      </div>
    </div>
  )
}
