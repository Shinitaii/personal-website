<script lang="ts">
	export let label: string;
</script>

<div
	class="bg-bg dark:bg-dark-bg border-border flex flex-col items-center justify-end gap-3 rounded border p-2 shadow-md transition hover:-translate-y-1.5"
>
	<slot />
	<span class="text-xs font-bold">{label}</span>
</div>
