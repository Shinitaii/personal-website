<script lang="ts">
	import Section from '$lib/Section.svelte';

	// Set this once an intro video (e.g. an Upwork pitch) is recorded — the placeholder hides until then
	const introVideoUrl: string | null = null;

	const offerings = [
		{
			title: 'Fullstack Web & Mobile Builds',
			description: 'End-to-end delivery from API to frontend to mobile app — backend on Node.js/Express/Firebase, frontend on Next.js/SvelteKit/React, and mobile via Flutter or Capacitor.'
		},
		{
			title: 'Workflow Automation',
			description: 'Turning manual, spreadsheet-based processes into real working systems — like Utilitool, which replaced manual utility billing for 6 tenants and cut processing time by 80%.'
		},
		{
			title: 'AI-Accelerated Development',
			description: 'Using tools like Claude Code to move from spec to deployed product faster, without cutting corners on architecture, security, or maintainability.'
		}
	];
</script>

<Section id="freelance" title="Work With Me">
	<p class="mb-5 text-sm leading-relaxed sm:text-base">
		I take on freelance projects where a client needs a working product built end-to-end —
		solo, fast, and with the architecture to grow. Whether it's automating a manual process,
		building a new web or mobile app from scratch, or modernizing an existing system, I handle
		backend, frontend, mobile, and deployment myself.
	</p>

	{#if introVideoUrl}
		<div class="bg-bg/90 dark:bg-lighter-dark-bg/80 border-border/70 dark:border-dark-border mb-5 aspect-video w-full overflow-hidden rounded-2xl border shadow-[0_16px_40px_rgba(86,105,137,0.1)] dark:shadow-[0_24px_65px_rgba(0,0,0,0.38)]">
			<iframe
				class="h-full w-full"
				src={introVideoUrl}
				title="Intro video"
				loading="lazy"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
				allowfullscreen
			></iframe>
		</div>
	{/if}

	<div class="grid w-full gap-4 sm:grid-cols-3">
		{#each offerings as offer}
			<div class="bg-bg/90 dark:bg-lighter-dark-bg/80 border-border/70 dark:border-dark-border rounded-2xl border p-4 shadow-[0_16px_40px_rgba(86,105,137,0.1)] dark:shadow-[0_24px_65px_rgba(0,0,0,0.38)] sm:p-5">
				<h3 class="mb-2 text-lg font-bold sm:text-xl">{offer.title}</h3>
				<p class="text-sm leading-relaxed sm:text-base">{offer.description}</p>
			</div>
		{/each}
	</div>

	<a
		href="#intro"
		class="bg-primary text-text mt-6 inline-flex rounded-full px-5 py-2.5 text-sm font-semibold transition hover:scale-[1.02] sm:text-base"
	>
		Let's talk about your project
	</a>
</Section>
