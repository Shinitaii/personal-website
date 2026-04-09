<script lang="ts">
	import { onMount } from 'svelte';
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
		class="bg-bg text-text border-border dark:bg-dark-bg dark:text-dark-text dark:border-dark-border fixed right-3 bottom-3 rounded-2xl border px-3 py-2 text-xs shadow-md transition duration-300 hover:cursor-pointer hover:text-primary dark:hover:text-dark-primary active:scale-95 active:duration-200 sm:right-4 sm:bottom-4 sm:text-sm"
	>
		BACK TO TOP
	</button>
{/if}
