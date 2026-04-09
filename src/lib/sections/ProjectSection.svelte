<script lang="ts">
	import Section from '$lib/Section.svelte';

	type Project = {
		title: string;
		period: string;
		role: string;
		platform: string;
		tags: string[];
		description: string;
		bullets: string[];
		sortYear: number;
		sortRank: number;
	};

	const projects: Project[] = [
		{
			title: 'Moldify',
			period: '2025 - Present',
			role: 'Lead Developer',
			platform: 'Mobile + Website + API',
			tags: ['PyTorch', 'AWS', 'Firebase', 'Node.js', 'Express', 'TypeScript', 'Flutter'],
			description: 'An AI-powered mobile platform that helps farmers detect and monitor mold growth through image analysis and metadata.',
			bullets: [
				'Implemented and integrated REST API endpoints for website and mobile clients.',
				'Connected AWS and Firebase services to support backend storage and deployment needs.',
				'Developed a multimodal CNN-ANN model that identified 5 mold genera with 89% preliminary accuracy on 571 image and metadata samples.'
			],
			sortYear: 2025,
			sortRank: 4
		},
		{
			title: 'Deck Website & API',
			period: '2025',
			role: 'Lead Developer',
			platform: 'Website + API',
			tags: ['CodeIgniter', 'Firebase', 'PHP', 'TypeScript', 'Express'],
			description: 'The admin web portal and API for the Deck ecosystem, used to manage users, content, and analytics.',
			bullets: [
				'Implemented and integrated REST API endpoints from frontend to backend using CodeIgniter.',
				'Extended the platform with an admin dashboard for moderation and user management.'
			],
			sortYear: 2025,
			sortRank: 3
		},
		{
			title: 'Through The Woods',
			period: '2024',
			role: 'Lead Developer',
			platform: 'Game',
			tags: ['Unity', 'C#', 'Game Systems'],
			description: 'A 2D adventure-puzzle game about siblings navigating a magical forest, inspired by Hansel and Gretel.',
			bullets: [
				'Implemented five core game systems: audio, main menu navigation, save/load, and cutscene/dialogue flow.',
				'Developed level progression and item collection mechanics with state management.'
			],
			sortYear: 2024,
			sortRank: 2
		},
		{
			title: 'Deck Mobile',
			period: '2023',
			role: 'Full-stack Developer',
			platform: 'Mobile',
			tags: ['Flutter', 'Dart', 'Firebase'],
			description: 'A mobile app for the Deck ecosystem that connects the frontend to backend services for student study workflows.',
			bullets: [
				'Implemented and integrated REST API endpoints connecting the mobile frontend to backend services using Flutter.',
				'Improved student study performance by 30% based on testing.'
			],
			sortYear: 2023,
			sortRank: 1
		},
		{
			title: 'Utilitool',
			period: '2023 - Ongoing',
			role: 'Full-stack Developer',
			platform: 'Website',
			tags: ['Automation', 'Web', 'Firebase', 'Next.js'],
			description: 'A tenant record tracking and utility bill calculation system built to reduce landlord management overhead.',
			bullets: [
				'Designed and implemented REST API endpoints using Next.js, Express, and Firebase.',
				'Integrated an automated calculation engine that reduced manual process time by 70%.'
			],
			sortYear: 2023,
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
	<div class="grid w-full gap-4">
		{#each projects as project}
			<article class="bg-bg/90 dark:bg-lighter-dark-bg/80 border-border/70 dark:border-dark-border rounded-2xl border p-4 shadow-[0_16px_40px_rgba(86,105,137,0.1)] dark:shadow-[0_24px_65px_rgba(0,0,0,0.38)] sm:p-5">
				<div class="mb-4 flex flex-col gap-2">
					<div class="flex flex-wrap items-center gap-3">
						<h2 class="text-xl font-bold sm:text-2xl">{project.title}</h2>
						<span class="bg-primary/20 dark:bg-dark-secondary/20 rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-wide sm:text-xs">
							{project.period}
						</span>
					</div>
					<div class="text-sm text-gray-600 dark:text-gray-300">
						<span class="mr-4"><b>Role:</b> {project.role}</span>
						<span class="mr-4"><b>Platform:</b> {project.platform}</span>
					</div>
				</div>

				<div class="mb-4 flex flex-wrap gap-2">
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
			</article>
		{/each}
	</div>
</Section>
