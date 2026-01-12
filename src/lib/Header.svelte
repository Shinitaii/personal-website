<script lang="ts">
	import Button from './Button.svelte';

	const sections: string[] = ['stacks', 'projects', 'contact', 'resume'];

	let isDark = false;

	const scrollToSection = (id: string): void => {
		if (id === 'resume') {
			window.open('/CV_Web.pdf', '_blank');
		} else {
			document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
		}
	};
	const toggleDarkMode = () => {
		document.documentElement.classList.toggle('dark');
		isDark = document.documentElement.classList.contains('dark');
	};
</script>

<header>
	<div
		class="bg-bg dark:bg-dark-bg border-border dark:border-dark-border mx-auto flex w-3/5 justify-evenly rounded-b-2xl border p-4 shadow-md"
	>
		<h1 class="text-2xl font-bold">Shinitaii</h1>
		<div>
			{#each sections as section}
				<Button on:click={() => scrollToSection(section)} className="mx-1 p-1">
					{section.toUpperCase()}
				</Button>
			{/each}
		</div>
		<Button on:click={toggleDarkMode} className="hover:scale-120">{isDark ? '🌙' : '☀️'}</Button>
	</div>
</header>
