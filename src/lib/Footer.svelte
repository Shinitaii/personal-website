<script lang="ts">
	import Icon from '@iconify/svelte';
	import { contacts } from '$lib/socials';
	const year = new Date().getFullYear();
</script>

<footer
	class="bg-bg dark:bg-dark-bg border-border dark:border-dark-border mt-12 flex w-full flex-col items-center gap-2 border-t py-6 text-sm"
>
	<div class="mb-1 flex flex-wrap justify-center gap-4">
		{#each contacts as s}
			<a
				href={s.url}
				target={s.name === 'Email' ? undefined : '_blank'}
				rel={s.name === 'Email' ? undefined : 'noopener'}
				class="flex items-center gap-2 transition-transform hover:scale-110"
				title={s.name}
				tabindex="0"
			>
				<Icon icon={s.icon} width="24" />
				<span class="text-sm">{s.name}</span>
			</a>
		{/each}
	</div>
	<div class="opacity-70">&copy; {year} Shinitaii. All rights reserved.</div>
	<div class="opacity-60">
		<a
			href="https://github.com/Shinitaii/personal-website"
			target="_blank"
			rel="noopener"
			class="hover:text-primary underline">Source Code</a
		>
	</div>
</footer>
