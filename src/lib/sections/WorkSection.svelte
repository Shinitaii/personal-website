<script lang="ts">
	import Section from '$lib/Section.svelte';
	import { formatPeriod, isOngoing } from '$lib/utils/period';

	type WorkEntry = {
		title: string;
		startPeriod: string;
		endPeriod?: string;
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
			title: 'ORTADEL Technologies Corporation',
			startPeriod: '2026-02-01',
			endPeriod: '2026-05-01',
			role: 'Software Developer Intern',
			context: 'Internship',
			tags: ['Software Development', 'Internship'],
			description: 'A multi-tenant HRIS that automates leave and payroll tracking for multiple companies on a single shared platform.',
			bullets: [
				'Transformed manual leave/payroll tracking Google Sheets-based into an automated multi-tenant HRIS',
				'Architected backend with RBAC, JWT tenant context middleware, and company-scoped data isolation serving 3 concurrent clients; designed the shared-schema approach on the database to prevent cross-tenant data leakage while maintaining independent operations'
			],
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
	<div class="relative w-full pl-6 sm:pl-8">
		<div class="bg-border/70 dark:bg-dark-border absolute top-2 bottom-2 left-1 w-px sm:left-1.5"></div>
		<div class="grid w-full gap-8">
			{#each workEntries as entry}
				<div class="relative">
					<span class="bg-primary border-bg dark:border-dark-bg absolute top-1.5 -left-[1.4rem] h-3 w-3 rounded-full border-2 sm:-left-[1.65rem]"></span>

					<div class="mb-2 flex flex-wrap items-center gap-3">
						<h3 class="text-xl font-bold sm:text-2xl">{entry.title}</h3>
						<span
							class={`rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-wide sm:text-xs ${
								isOngoing(entry.endPeriod)
									? 'bg-green-500/15 text-green-800 dark:bg-green-400/15 dark:text-green-300'
									: 'bg-primary/20 dark:bg-dark-secondary/20'
							}`}
						>
							{formatPeriod(entry.startPeriod, entry.endPeriod)}
						</span>
					</div>
					<div class="mb-3 text-sm text-gray-600 dark:text-gray-300">
						<span class="mr-4"><b>Role:</b> {entry.role}</span>
						<span class="mr-4"><b>Type:</b> {entry.context}</span>
					</div>

					<div class="mb-3 flex flex-wrap gap-2">
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
				</div>
			{/each}
		</div>
	</div>
</Section>
