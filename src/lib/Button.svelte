<script lang="ts">
	export let className = '';
</script>

<button
	type="button"
	class={`${className} hover:text-primary dark:hover:text-dark-primary transition duration-300 hover:scale-105 hover:cursor-pointer active:scale-95 active:duration-200`}
	on:click
	{...$$restProps}
>
	<slot />
</button>
