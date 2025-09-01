<script lang="ts">
	export let title: string;
	export let open: boolean = false;

	let isOpen = open;

	function toggle() {
		isOpen = !isOpen;
	}
</script>

<div
	class="bg-lighter-bg dark:bg-lighter-dark-bg border-border dark:border-dark-border my-2 w-full rounded-lg border shadow-md"
>
	<div class="flex items-center justify-center px-4">
		<p class="w-11/12 text-xl font-bold">{title}</p>
		<button
			class="m-4 flex w-1/12 scale-150 items-center justify-center text-left text-xl font-bold transition hover:scale-180 hover:cursor-pointer focus:outline-none active:scale-150"
			on:click={toggle}
			aria-expanded={isOpen}
			aria-controls={`dropdown-${title}`}
		>
			<span>{isOpen ? '▲' : '▼'}</span>
		</button>
	</div>

	{#if isOpen}
		<div id={`dropdown-${title}`} class="border-border dark:border-dark-border border-t p-4">
			<div class="grid grid-cols-5 gap-x-2 gap-y-4">
				<slot />
			</div>
		</div>
	{/if}
</div>
