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
		class="text-md bg-bg dark:bg-dark-bg text-text dark:text-dark-text hover:text-primary dark:hover:text-dark-primary border-border dark:border-dark-border fixed right-0 bottom-0 m-4 rounded-2xl border p-3 shadow-md transition duration-300 hover:cursor-pointer active:scale-95 active:duration-200"
	>
		BACK TO TOP
	</button>
{/if}
