"use client"

import Link from "next/link"
import type { IconType } from "react-icons"
import { SiJavascript, SiNextdotjs, SiReact, SiNodedotjs, SiPython } from "react-icons/si"

type TechItem = {
  name: string
  subtitle: string
  icon: IconType
  iconClass: string
  iconBoxClass: string
  accentClass: string
  cardBorderClass?: string
  paragraphs: string[]
}

const techItems: TechItem[] = [
  {
    name: "JavaScript",
    subtitle: "The language of the modern web",
    icon: SiJavascript,
    iconClass: "text-yellow-500",
    iconBoxClass: "bg-yellow-500/10",
    accentClass: "text-yellow-600 dark:text-yellow-400",
    paragraphs: [
      "JavaScript is the essential programming language for web development. Originally created to make web pages interactive, today it's a complete language that runs both in browsers (client-side) and on servers (Node.js).",
      "Modern JavaScript (ES6+) brought powerful features like arrow functions, async/await, destructuring, modules, and much more. It's the foundation of popular frameworks and libraries like React, Vue, Angular and enables creating everything from simple animations to complex real-time web applications.",
      "We master JavaScript to create interactive web experiences, manipulate DOM, make asynchronous requests, work with APIs, and build full-stack applications. Its versatility and omnipresence on the web make it a fundamental skill for any modern developer.",
    ],
  },
  {
    name: "Next.js",
    subtitle: "React framework for production",
    icon: SiNextdotjs,
    iconClass: "text-black dark:text-white",
    iconBoxClass: "bg-gray-500/10",
    accentClass: "text-gray-600 dark:text-gray-400",
    cardBorderClass: "border border-gray-200 dark:border-gray-700",
    paragraphs: [
      "Next.js is the most popular React framework for production web applications. Developed by Vercel, it adds essential features to React like server-side rendering (SSR), static site generation (SSG), file-based routing, and automatic optimizations.",
      "With Next.js 13+, the App Router brought Server Components, data streaming, shared layouts, and unprecedented performance optimizations. Native TypeScript support, API Routes for backend, automatic image optimization, and much more make development extremely productive.",
      "We use Next.js as our primary choice for modern web applications. Its ability to combine different rendering strategies, optimized SEO, and exceptional performance make it ideal for projects of any scale, from landing pages to complex platforms.",
    ],
  },
  {
    name: "React",
    subtitle: "JavaScript library for user interfaces",
    icon: SiReact,
    iconClass: "text-cyan-400",
    iconBoxClass: "bg-cyan-400/10",
    accentClass: "text-cyan-600 dark:text-cyan-400",
    paragraphs: [
      "React is the most popular JavaScript library for building user interfaces. Developed and maintained by Facebook, it revolutionized web development with its model based on reusable components and Virtual DOM for efficient rendering.",
      "With React, we build declarative interfaces where application state automatically determines what is rendered. Hooks like useState and useEffect simplified state management and side effects. The React ecosystem is vast, including tools like Redux, React Router, and Next.js.",
      "We use React to create dynamic and responsive single-page applications (SPAs). Its component-based architecture promotes code reuse, maintainability, and easier testing. It's our primary choice for modern and interactive web interfaces.",
    ],
  },
  {
    name: "Node.js",
    subtitle: "JavaScript on the server",
    icon: SiNodedotjs,
    iconClass: "text-green-600",
    iconBoxClass: "bg-green-600/10",
    accentClass: "text-green-600 dark:text-green-400",
    paragraphs: [
      "Node.js is a JavaScript runtime built on Chrome's V8 engine that allows running JavaScript on the server. It revolutionized backend development by bringing the same language used in frontend to the server, enabling full-stack development with JavaScript.",
      "With its non-blocking I/O model and event-driven architecture, Node.js is perfect for applications that require high concurrency and real-time capabilities, like chat apps, RESTful APIs, microservices, and data streaming. NPM offers the world's largest open-source library ecosystem.",
      "We use Node.js to build scalable backends, robust APIs with Express or Fastify, build and automation tools, and real-time services with WebSockets. Its performance and ability to handle multiple simultaneous connections make it ideal for modern applications.",
    ],
  },
  {
    name: "Python",
    subtitle: "Versatility and simplicity in code",
    icon: SiPython,
    iconClass: "text-orange-500",
    iconBoxClass: "bg-orange-500/10",
    accentClass: "text-orange-600 dark:text-orange-400",
    paragraphs: [
      "Python is a high-level, interpreted, general-purpose programming language. Known for its clear and readable syntax, Python is perfect for both beginners and experienced developers seeking productivity.",
      "The absolute leader in data science, machine learning, and artificial intelligence, Python offers powerful libraries like NumPy, Pandas, TensorFlow, and PyTorch. It's also excellent for web development with frameworks like Django and Flask, automation, and scripting.",
      "We use Python for data analysis, API development, process automation, deployment scripts, and machine learning projects. Its vast collection of packages on PyPI and active community make almost any task possible with efficiency.",
    ],
  },
]

export default function TechStackPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-yellow-50 to-amber-50 dark:from-gray-900 dark:to-yellow-900/20 py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-yellow-600 dark:text-yellow-400 hover:text-yellow-700 dark:hover:text-yellow-300 mb-8 transition"
        >
          ← Back
        </Link>

        <div className="space-y-6">
          {techItems.map((tech) => {
            const Icon = tech.icon

            return (
              <section
                key={tech.name}
                className={"bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 md:p-12 " + (tech.cardBorderClass ?? "")}
              >
                <div className="flex items-center gap-6 mb-8">
                  <div className={tech.iconBoxClass + " p-6 rounded-xl"}>
                    <Icon className={tech.iconClass + " text-6xl"} />
                  </div>
                  <div>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-2">
                      {tech.name}
                    </h2>
                    <p className={tech.accentClass + " text-lg"}>
                      {tech.subtitle}
                    </p>
                  </div>
                </div>

                <div className="prose prose-lg dark:prose-invert max-w-none">
                  {tech.paragraphs.map((paragraph, index) => (
                    <p
                      key={index}
                      className={
                        index < tech.paragraphs.length - 1
                          ? "text-gray-700 dark:text-gray-300 leading-relaxed mb-4"
                          : "text-gray-700 dark:text-gray-300 leading-relaxed"
                      }
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </section>
            )
          })}
        </div>
      </div>
    </main>
  )
}