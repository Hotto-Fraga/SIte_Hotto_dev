"use client"

import Link from 'next/link'

type ProjectPreview = {
	id: number
	title: string
	description: string
	badge: string
	thumb: string
	href: string
}

const projectPreviews: ProjectPreview[] = [
	{
		id: 1,
		title: 'Hotto Food Diary',
		description: 'A daily meal planner with Fatsecret API.',
		badge: 'Check now',
		thumb: '/images/others/diariohotto.png',
		href: '/projects/dashboard-financas',
	},
	{
		id: 2,
		title: 'Workout Planner',
		description: 'My personal daily workout planner.',
		badge: 'Coming soon...',
		thumb: '/images/others/project-thumb-2.jpg',
		href: '/projects/gerenciador-rotina',
	},
	{
		id: 3,
		title: 'Sabor Local',
		description: 'Find the best restaurants in Lisbon with Sabor Local.',
		badge: 'College Project',
		thumb: '/images/others/saborlocal.png',
		href: '/projects/app-viagens',
	},
]

export default function Projects() {
	return (
		<section className="bg-gradient-to-b from-[#f6f4e9] via-[#f9f2e8] to-[#fffaf2] px-4 py-16 dark:from-gray-950 dark:via-gray-900 dark:to-gray-900">
			<div className="mx-auto max-w-6xl">
				<div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
					<div>
						<p className="text-sm font-semibold uppercase tracking-[0.25em] text-orange-700 dark:text-orange-300">
							Projects
						</p>
						<h2 className="mt-2 text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
							Hotto Dev
						</h2>
					</div>

					<Link
						href="/projects"
						className="inline-flex w-fit items-center rounded-full border border-orange-300 bg-white px-5 py-2 text-sm font-semibold text-orange-700 transition hover:bg-orange-50 dark:border-orange-800 dark:bg-gray-900 dark:text-orange-300 dark:hover:bg-gray-800"
					>
						Check all the projects
					</Link>
				</div>

				<div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6">
					{projectPreviews.map((project) => (
						<Link
							key={project.id}
							href={project.href}
							className="group relative h-[320px] overflow-hidden rounded-[1.25rem] bg-[hsl(var(--card))] shadow-[0_4px_16px_hsl(var(--foreground)/0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_28px_hsl(var(--foreground)/0.15)]"
						>
							<img src={project.thumb} alt={project.title} className="h-[180px] w-full object-cover" />

							<div className="absolute right-4 top-4 rounded-full bg-gradient-to-r from-orange-500 to-red-500 px-3 py-1 text-sm font-bold text-white shadow-lg">
								{project.badge}
							</div>

							<div className="flex flex-col gap-3 p-6">
								<h3 className="text-xl font-bold text-gray-900 dark:text-white">{project.title}</h3>
								<p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300">{project.description}</p>
								<p className="mt-1 flex items-center gap-1.5 text-xs text-gray-500 dark:text-gray-400">
								</p>
							</div>
						</Link>
					))}
				</div>
			</div>
		</section>
	)
}
