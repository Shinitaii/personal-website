<script lang="ts">
	import Section from '$lib/Section.svelte';
	import { mediaItems } from '$lib/media';

	const hasMedia = (title: string) => mediaItems.some((item) => item.projectTitle === title);

	type Project = {
		title: string;
		period: string;
		role: string;
		platform: string;
		tags: string[];
		description: string;
		bullets: string[];
		githubUrl?: string;
		sortYear: number;
		sortRank: number;
	};

	const projects: Project[] = [
		{
			title: 'Moldify',
			period: 'Sept 2025 - April 2026',
			role: 'Lead Developer',
			platform: 'Mobile + Website + API',
			tags: ['PyTorch', 'AWS', 'Firebase', 'Node.js', 'Express', 'Flask', 'TypeScript', 'Flutter'],
			description: 'An AI-assisted mold identification and monitoring platform that helps farmers detect and monitor mold growth through image analysis and metadata.',
			bullets: [
				'Orchestrated a multi-platform REST API on Firebase Functions and AWS Lambda, with CI/CD via GitHub Actions, connecting the backend and ML service to the website and mobile application.',
				'Finetuned and built a multimodal CNN-ANN mold image classification model trained on 571 labeled microscopic images across 6 genus categories, achieving 93% overall accuracy on the CNN layer.',
				'Implemented local caching (Redis/SWR/Dio) across the API, Next.js web, and Flutter mobile clients.'
			],
			githubUrl: 'https://github.com/fortran-thesis',
			sortYear: 2025,
			sortRank: 4
		},
		{
			title: 'Deck',
			period: 'Aug 2024 - Aug 2025',
			role: 'Lead Developer',
			platform: 'Website + Mobile + API',
			tags: ['CodeIgniter', 'Flutter', 'Dart', 'Firebase', 'PHP', 'TypeScript', 'Express'],
			description: 'An AI-assisted flashcards and task management ecosystem spanning website, mobile, and API for student study workflows.',
			bullets: [
				'Designed and implemented the core Express REST API, integrating JWT authentication, secure session management, and task management endpoints.',
				'Implemented and integrated REST API endpoints from frontend to backend using CodeIgniter, and extended the platform with an admin dashboard for moderation and user management.',
				'Developed and optimized the Flutter mobile app connecting to backend services for student study workflows, improving student study performance by 30% based on testing.'
			],
			githubUrl: 'https://github.com/majiinB/Deck-V2',
			sortYear: 2024,
			sortRank: 3
		},
		{
			title: 'Through The Woods',
			period: 'Jan 2024 - May 2024',
			role: 'Lead Developer',
			platform: 'Mobile',
			tags: ['Unity', 'C#', 'Game Systems'],
			description: 'A 2D adventure-puzzle game about siblings navigating a magical forest, inspired by Hansel and Gretel.',
			bullets: [
				'Implemented five core game systems: audio, main menu navigation, save/load, and cutscene/dialogue flow.',
				'Developed level progression and item collection mechanics with state management.'
			],
			githubUrl: 'https://github.com/Shinitaii/through-the-woods',
			sortYear: 2024,
			sortRank: 2
		},
		{
			title: 'Utilitool',
			period: 'May 2026 - June 2026',
			role: 'Solo Developer',
			platform: 'Website + Mobile + API',
			tags: ['Automation', 'Node.js', 'Express', 'Firebase Functions', 'SvelteKit', 'Capacitor'],
			description: 'A scalable utility calculation engine for Meralco and Manila Water billings, built for a freelance client.',
			bullets: [
				'Engineered a scalable utility calculation engine for Meralco and Manila Water billings, reducing manual billing processing by 80% for 6 monthly tenants with data collected since 2023.',
				'Developed the full-stack architecture: a Node.js/Express REST API on Firebase Functions, a SvelteKit/Vite frontend deployed on Vercel, and a Svelte/Capacitor mobile app.'
			],
			githubUrl: 'https://github.com/Shinitaii/utilitool',
			sortYear: 2026,
			sortRank: 0
		}
	].sort((left, right) => {
		if (left.sortYear !== right.sortYear) {
			return right.sortYear - left.sortYear;
		}

		return right.sortRank - left.sortRank;
	});
</script>

<Section id="projects" title="Projects">
	<div class="relative w-full pl-6 sm:pl-8">
		<div class="bg-border/70 dark:bg-dark-border absolute top-2 bottom-2 left-1 w-px sm:left-1.5"></div>
		<div class="grid w-full gap-8">
			{#each projects as project}
				<div class="relative">
					<span class="bg-primary border-bg dark:border-dark-bg absolute top-1.5 -left-[1.4rem] h-3 w-3 rounded-full border-2 sm:-left-[1.65rem]"></span>

					<div class="mb-2 flex flex-wrap items-center gap-3">
						<h2 class="text-xl font-bold sm:text-2xl">{project.title}</h2>
						<span class="bg-primary/20 dark:bg-dark-secondary/20 rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-wide sm:text-xs">
							{project.period}
						</span>
					</div>
					<div class="mb-3 text-sm text-gray-600 dark:text-gray-300">
						<span class="mr-4"><b>Role:</b> {project.role}</span>
						<span class="mr-4"><b>Platform:</b> {project.platform}</span>
					</div>

					<div class="mb-3 flex flex-wrap gap-2">
						{#each project.tags as tag}
							<span class="bg-tertiary/20 dark:bg-dark-accent/20 rounded-full px-3 py-1 text-xs sm:text-sm">
								{tag}
							</span>
						{/each}
					</div>

					<p class="mb-3 text-sm leading-relaxed sm:text-base">{project.description}</p>
					<ul class="ml-5 list-disc space-y-2">
						{#each project.bullets as bullet}
							<li class="text-sm sm:text-base">{bullet}</li>
						{/each}
					</ul>

					<div class="mt-4 flex flex-wrap gap-3">
						{#if project.githubUrl}
							<a
								href={project.githubUrl}
								target="_blank"
								rel="noopener"
								class="bg-primary text-text inline-flex rounded-full px-4 py-2 text-sm font-semibold transition hover:scale-[1.02]"
							>
								View on GitHub
							</a>
						{/if}
						{#if hasMedia(project.title)}
							<a
								href="#media"
								class="border-border/70 dark:border-dark-border text-text dark:text-dark-text inline-flex rounded-full border px-4 py-2 text-sm font-semibold transition hover:scale-[1.02]"
							>
								View Media
							</a>
						{/if}
					</div>
				</div>
			{/each}
		</div>
	</div>
</Section>
