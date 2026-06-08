<script lang="ts">
	import Section from '$lib/Section.svelte';
	import { mediaItems } from '$lib/media';
</script>

{#if mediaItems.length > 0}
	<Section id="media" title="In Action">
		<div class="grid w-full gap-4 sm:grid-cols-2">
			{#each mediaItems as item}
				<figure class="bg-bg/90 dark:bg-lighter-dark-bg/80 border-border/70 dark:border-dark-border overflow-hidden rounded-2xl border shadow-[0_16px_40px_rgba(86,105,137,0.1)] dark:shadow-[0_24px_65px_rgba(0,0,0,0.38)]">
					{#if item.type === 'youtube'}
						<div class="aspect-video w-full">
							<iframe
								class="h-full w-full"
								src={`https://www.youtube-nocookie.com/embed/${item.url}`}
								title={item.caption ?? item.projectTitle}
								loading="lazy"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
								allowfullscreen
							></iframe>
						</div>
					{:else}
						<img src={item.url} alt={item.caption ?? item.projectTitle} class="h-full w-full object-cover" loading="lazy" />
					{/if}
					<figcaption class="p-3 text-sm text-gray-600 sm:text-base dark:text-gray-300">
						<b>{item.projectTitle}</b>{#if item.caption} — {item.caption}{/if}
					</figcaption>
				</figure>
			{/each}
		</div>
	</Section>
{/if}
