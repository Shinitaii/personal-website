<script lang="ts">
	export let id: string = '';
	export let title: string;
	export let inner: boolean = false;
</script>

<div {id} class="px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
	<div
		class={`${inner ? 'w-full' : 'w-full max-w-5xl lg:max-w-6xl'} bg-bg dark:bg-dark-bg border-border/80 dark:border-dark-border mx-auto my-2 flex flex-col items-center justify-center gap-4 rounded-2xl border p-4 shadow-[0_18px_45px_rgba(86,105,137,0.12)] dark:shadow-[0_28px_80px_rgba(0,0,0,0.45)] sm:p-6`}
	>
		{#if title}
			<div class="border-text dark:border-dark-tertiary self-start border-b text-xl font-bold sm:text-2xl">
				{title}
			</div>
		{/if}
		<div class="flex w-full flex-col">
			<slot />
		</div>
	</div>
</div>
