<script lang="ts">
	import Section from '$lib/Section.svelte';
	import { mediaItems } from '$lib/media';
	import { projects } from '$lib/data/projects';
	import { formatPeriod, isOngoing } from '$lib/utils/period';

	const hasMedia = (title: string) => mediaItems.some((item) => item.projectTitle === title);

	const visibleProjects = projects.filter((project) => project.visible !== false);

	const projectListSchema = {
		'@context': 'https://schema.org',
		'@type': 'ItemList',
		itemListElement: visibleProjects.map((project, index) => ({
			'@type': 'ListItem',
			position: index + 1,
			url: `https://rgviloria.vercel.app/projects/${project.slug}`,
			name: project.title
		}))
	};
</script>

<svelte:head>
	{@html `<script type="application/ld+json">${JSON.stringify(projectListSchema)}</` + `script>`}
</svelte:head>

<Section id="projects" title="Projects">
	<div class="relative w-full pl-6 sm:pl-8">
		<div class="bg-border/70 dark:bg-dark-border absolute top-2 bottom-2 left-1 w-px sm:left-1.5"></div>
		<div class="grid w-full gap-8">
			{#each visibleProjects as project}
				<div class="relative">
					<span class="bg-primary border-bg dark:border-dark-bg absolute top-1.5 -left-[1.4rem] h-3 w-3 rounded-full border-2 sm:-left-[1.65rem]"></span>

					<div class="mb-2 flex flex-wrap items-center gap-3">
						<h3 class="text-xl font-bold sm:text-2xl">{project.title}</h3>
						<span
							class={`rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-wide sm:text-xs ${
								isOngoing(project.endPeriod)
									? 'bg-green-500/15 text-green-800 dark:bg-green-400/15 dark:text-green-300'
									: 'bg-primary/20 dark:bg-dark-secondary/20'
							}`}
						>
							{formatPeriod(project.startPeriod, project.endPeriod)}
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

					<div class="mt-4 flex flex-wrap gap-3">
						<a
							href={`/projects/${project.slug}`}
							class="bg-primary text-text inline-flex rounded-full px-4 py-2 text-sm font-semibold transition hover:scale-[1.02]"
						>
							View Project Details
						</a>
						{#if project.liveUrl}
							<a
								href={project.liveUrl}
								target="_blank"
								rel="noopener"
								class="border-border/70 dark:border-dark-border text-text dark:text-dark-text inline-flex rounded-full border px-4 py-2 text-sm font-semibold transition hover:scale-[1.02]"
							>
								Visit Live Site
							</a>
						{/if}
						{#if project.githubUrl}
							<a
								href={project.githubUrl}
								target="_blank"
								rel="noopener"
								class="border-border/70 dark:border-dark-border text-text dark:text-dark-text inline-flex rounded-full border px-4 py-2 text-sm font-semibold transition hover:scale-[1.02]"
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
