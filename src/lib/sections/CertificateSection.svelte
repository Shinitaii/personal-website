<script lang="ts">
	import Section from '$lib/Section.svelte';

	type Certificate = {
		title: string;
		issuer: string;
		period: string;
		tags: string[];
		description: string;
		proofUrl: string;
	};

	const certificates: Certificate[] = [
		{
			title: 'IT Specialist - Databases',
			issuer: 'Certiport, a Pearson VUE business',
			period: 'Dec 2025 - Dec 2030',
			tags: [
				'Core Database Concepts',
				'Creating Database Objects',
				'Database Administration',
				'Data Manipulation',
				'Data Storage'
			],
			description:
				'Earner demonstrates foundational knowledge of how to design and query relational databases such as MySQL, Microsoft SQL Server, or Oracle.',
			proofUrl: 'https://www.credly.com/badges/e4ed66d1-86ac-4bfe-a85d-5826ba121da9/public_url'
		}
	];
</script>

<Section id="certificates" title="Certificates">
	<div class="grid w-full gap-4">
		{#each certificates as certificate}
			<article class="bg-bg/90 dark:bg-lighter-dark-bg/80 border-border/70 dark:border-dark-border rounded-2xl border p-4 shadow-[0_16px_40px_rgba(86,105,137,0.1)] dark:shadow-[0_24px_65px_rgba(0,0,0,0.38)] sm:p-5">
				<div class="mb-4 flex flex-col gap-2">
					<div class="flex flex-wrap items-center gap-3">
						<h2 class="text-xl font-bold sm:text-2xl">{certificate.title}</h2>
						<span class="bg-primary/20 dark:bg-dark-secondary/20 rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-wide sm:text-xs">
							{certificate.period}
						</span>
					</div>
					<div class="text-sm text-gray-600 dark:text-gray-300">
						<span class="mr-4"><b>Issuer:</b> {certificate.issuer}</span>
					</div>
				</div>

				<div class="mb-4 flex flex-wrap gap-2">
					{#each certificate.tags as tag}
						<span class="bg-tertiary/20 dark:bg-dark-accent/20 rounded-full px-3 py-1 text-xs sm:text-sm">
							{tag}
						</span>
					{/each}
				</div>

				<p class="mb-4 text-sm leading-relaxed sm:text-base">{certificate.description}</p>
				{#if certificate.proofUrl}
					<a
						href={certificate.proofUrl}
						target="_blank"
						rel="noopener"
						class="bg-primary text-text inline-flex rounded-full px-4 py-2 text-sm font-semibold transition hover:scale-[1.02]"
					>
						View Proof on Credly
					</a>
				{:else}
					<span class="bg-secondary/20 text-text dark:bg-dark-secondary/20 dark:text-dark-text inline-flex rounded-full px-4 py-2 text-sm font-semibold">
						Credly link pending
					</span>
				{/if}
			</article>
		{/each}
	</div>
</Section>
