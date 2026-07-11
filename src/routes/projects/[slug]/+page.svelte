<script lang="ts">
	import Header from '$lib/Header.svelte';
	import Footer from '$lib/Footer.svelte';
	import UpButton from '$lib/UpButton.svelte';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
	const project = $derived(data.project);

	const canonicalUrl = $derived(`https://rgviloria.vercel.app/projects/${project.slug}`);
	const pageTitle = $derived(`${project.title} | Richmond Glenn Viloria`);

	const creativeWorkSchema = $derived({
		'@context': 'https://schema.org',
		'@type': 'CreativeWork',
		name: project.title,
		description: project.description,
		dateCreated: project.period,
		url: canonicalUrl,
		keywords: project.tags.join(', '),
		author: {
			'@type': 'Person',
			name: 'Richmond Glenn Viloria',
			url: 'https://rgviloria.vercel.app'
		},
		...(project.githubUrl ? { codeRepository: project.githubUrl } : {})
	});
</script>

<svelte:head>
	<title>{pageTitle}</title>
	<meta name="description" content={project.description} />
	<meta name="robots" content="index,follow" />
	<meta property="og:title" content={pageTitle} />
	<meta property="og:description" content={project.description} />
	<meta property="og:type" content="article" />
	<meta property="og:image" content="https://rgviloria.vercel.app/pic.jpg" />
	<meta property="og:site_name" content="Richmond Glenn Viloria" />
	<meta property="og:url" content={canonicalUrl} />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={pageTitle} />
	<meta name="twitter:description" content={project.description} />
	<meta name="twitter:image" content="https://rgviloria.vercel.app/pic.jpg" />
	<link rel="canonical" href={canonicalUrl} />
	{@html `<script type="application/ld+json">${JSON.stringify(creativeWorkSchema)}</` + `script>`}
</svelte:head>

<UpButton />
<Header />
<main>
	<div class="px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
		<div class="bg-bg dark:bg-dark-bg border-border/80 dark:border-dark-border mx-auto my-2 flex w-full max-w-3xl flex-col gap-4 rounded-2xl border p-4 shadow-[0_18px_45px_rgba(86,105,137,0.12)] dark:shadow-[0_28px_80px_rgba(0,0,0,0.45)] sm:p-6">
			<a href="/#projects" class="text-primary text-sm font-semibold hover:underline">&larr; Back to Projects</a>

			<div class="flex flex-wrap items-center gap-3">
				<h1 class="text-2xl font-bold sm:text-3xl">{project.title}</h1>
				<span class="bg-primary/20 dark:bg-dark-secondary/20 rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-wide sm:text-xs">
					{project.period}
				</span>
			</div>

			<div class="text-sm text-gray-600 dark:text-gray-300">
				<span class="mr-4"><b>Role:</b> {project.role}</span>
				<span class="mr-4"><b>Platform:</b> {project.platform}</span>
			</div>

			<div class="flex flex-wrap gap-2">
				{#each project.tags as tag}
					<span class="bg-tertiary/20 dark:bg-dark-accent/20 rounded-full px-3 py-1 text-xs sm:text-sm">
						{tag}
					</span>
				{/each}
			</div>

			<p class="text-sm leading-relaxed sm:text-base">{project.description}</p>

			<h2 class="border-text dark:border-dark-tertiary self-start border-b text-lg font-bold sm:text-xl">
				Highlights
			</h2>
			<ul class="ml-5 list-disc space-y-2">
				{#each project.bullets as bullet}
					<li class="text-sm sm:text-base">{bullet}</li>
				{/each}
			</ul>

			{#if project.githubUrl}
				<a
					href={project.githubUrl}
					target="_blank"
					rel="noopener"
					class="bg-primary text-text mt-2 inline-flex w-fit rounded-full px-4 py-2 text-sm font-semibold transition hover:scale-[1.02]"
				>
					View on GitHub
				</a>
			{/if}
		</div>
	</div>
</main>
<Footer />
