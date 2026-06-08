<script lang="ts">
	import Button from './Button.svelte';
	import Icon from '@iconify/svelte';

	const sections: { id: string; label: string }[] = [
		{ id: 'work', label: 'Work' },
		{ id: 'projects', label: 'Projects' },
		{ id: 'freelance', label: 'Freelance' },
		{ id: 'certificates', label: 'Certificates' },
		{ id: 'skills', label: 'Skills' }
	];

	let isDark = false;

	const scrollToSection = (id: string): void => {
		document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
	};
	const toggleDarkMode = () => {
		document.documentElement.classList.toggle('dark');
		isDark = document.documentElement.classList.contains('dark');
	};
</script>

<header>
	<div
		class="bg-bg dark:bg-dark-bg border-border dark:border-dark-border mx-auto flex w-full max-w-6xl flex-col gap-3 rounded-b-2xl border px-4 py-3 shadow-md sm:px-6 lg:flex-row lg:items-center lg:justify-between"
	>
		<div class="flex items-center justify-between gap-3 lg:justify-start">
			<h1 class="text-xl font-bold sm:text-2xl">Shinitaii</h1>
			<Button on:click={toggleDarkMode} className="px-2 py-1 text-sm sm:text-base lg:hidden"><Icon icon={isDark ? 'lucide:moon' : 'lucide:sun'} width="18" /></Button>
		</div>
		<div class="-mx-1 flex w-full gap-2 overflow-x-auto pb-1 sm:mx-0 sm:justify-center lg:flex-1 lg:justify-center lg:overflow-visible">
			{#each sections as section}
				<Button
					on:click={() => scrollToSection(section.id)}
					className="whitespace-nowrap px-2 py-1 text-[11px] sm:px-3 sm:text-sm"
				>
					{section.label.toUpperCase()}
				</Button>
			{/each}
		</div>
		<Button on:click={toggleDarkMode} className="hidden px-2 py-1 text-sm sm:text-base lg:inline-flex"><Icon icon={isDark ? 'lucide:moon' : 'lucide:sun'} width="18" /></Button>
	</div>
</header>
