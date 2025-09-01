<script lang="ts">
	export let id: string = '';
	export let title: string;
	export let inner: boolean = false;
</script>

<div {id} class="p-8">
	<div
		class={`${inner ? 'w-full' : 'w-1/2'} bg-bg dark:bg-dark-bg border-border dark:border-dark-border mx-auto my-2 flex flex-col items-center justify-center gap-4 rounded-2xl border p-4 shadow-md`}
	>
		{#if title}
			<div class="border-text dark:border-dark-text self-start border-b text-xl font-bold">
				{title}
			</div>
		{/if}
		<div class="flex w-full flex-col">
			<slot />
		</div>
	</div>
</div>
