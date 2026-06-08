<script lang="ts">
	import { onMount } from 'svelte';
	import Icon from '@iconify/svelte';
	let show = false;
	const backToTop = (): void => window.scrollTo({ top: 0, behavior: 'smooth' });

	onMount(() => {
		const handleScroll = () => {
			show = window.scrollY > 0;
		};
		window.addEventListener('scroll', handleScroll);
		// Initial check
		handleScroll();
		return () => window.removeEventListener('scroll', handleScroll);
	});
</script>

{#if show}
	<button
		type="button"
		on:click={backToTop}
		title="Back to top"
		aria-label="Back to top"
		class="bg-bg text-text dark:bg-dark-bg dark:text-dark-text border-border dark:border-dark-border fixed right-3 bottom-3 z-[99] flex h-12 w-12 items-center justify-center rounded-full border shadow-md transition duration-300 hover:scale-110 hover:cursor-pointer hover:text-primary dark:hover:text-dark-primary active:scale-95 active:duration-200 sm:right-4 sm:bottom-4 sm:h-14 sm:w-14"
	>
		<Icon icon="lucide:arrow-up" width="22" />
	</button>
{/if}
