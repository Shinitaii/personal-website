<script lang="ts">
	import Section from '$lib/Section.svelte';

	type WorkEntry = {
		title: string;
		period: string;
		role: string;
		context: string;
		tags: string[];
		description: string;
		bullets: string[];
		sortYear: number;
		sortRank: number;
	};

	const workEntries: WorkEntry[] = [
		{
			title: 'ORTADEL Technologies',
			period: 'Feb 2026 - Present',
			role: 'Software Developer Intern',
			context: 'Internship',
			tags: ['Software Development', 'Internship', 'Ongoing'],
			description: 'Current software development internship at ORTADEL Technologies.',
			bullets: [],
			sortYear: 2026,
			sortRank: 1
		}
	].sort((left, right) => {
		if (left.sortYear !== right.sortYear) {
			return right.sortYear - left.sortYear;
		}

		return right.sortRank - left.sortRank;
	});
</script>

<Section id="work" title="Work Experiences">
	<div class="grid w-full gap-4">
		{#each workEntries as entry}
			<article class="bg-bg/90 dark:bg-lighter-dark-bg/80 border-border/70 dark:border-dark-border rounded-2xl border p-4 shadow-[0_16px_40px_rgba(86,105,137,0.1)] dark:shadow-[0_24px_65px_rgba(0,0,0,0.38)] sm:p-5">
				<div class="mb-4 flex flex-col gap-2">
					<div class="flex flex-wrap items-center gap-3">
						<h2 class="text-xl font-bold sm:text-2xl">{entry.title}</h2>
						<span class="bg-primary/20 dark:bg-dark-secondary/20 rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-wide sm:text-xs">
							{entry.period}
						</span>
					</div>
					<div class="text-sm text-gray-600 dark:text-gray-300">
						<span class="mr-4"><b>Role:</b> {entry.role}</span>
						<span class="mr-4"><b>Type:</b> {entry.context}</span>
					</div>
				</div>

				<div class="mb-4 flex flex-wrap gap-2">
					{#each entry.tags as tag}
						<span class="bg-tertiary/20 dark:bg-dark-accent/20 rounded-full px-3 py-1 text-xs sm:text-sm">
							{tag}
						</span>
					{/each}
				</div>

				<p class="mb-3 text-sm leading-relaxed sm:text-base">{entry.description}</p>
				{#if entry.bullets.length > 0}
					<ul class="ml-5 list-disc space-y-2">
						{#each entry.bullets as bullet}
							<li class="text-sm sm:text-base">{bullet}</li>
						{/each}
					</ul>
				{/if}
			</article>
		{/each}
	</div>
</Section>
