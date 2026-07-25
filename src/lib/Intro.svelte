<script lang="ts">
	import Icon from '@iconify/svelte';
	import { contacts } from '$lib/socials';
</script>


<div id="intro" class="grid min-h-screen grid-cols-1 gap-10 py-6 lg:grid-cols-2 lg:gap-8">
	<div class="flex flex-col items-center justify-center gap-6 text-center lg:items-center lg:text-left">
		<div class="flex w-full max-w-sm justify-center lg:max-w-none lg:justify-center xl:w-4/5">
			<img
				src="/pic.jpg"
				alt="Richmond Glenn Viloria, software engineer"
				class="w-full max-w-xs rounded-full p-3 sm:max-w-sm"
			/>
		</div>
		<div class="flex w-full max-w-xl flex-col items-center justify-start gap-1 lg:items-start">
			<p class="text-sm sm:text-base">Hello! <span class="italic">My name is...</span></p>
			<h1 class="text-4xl font-bold sm:text-5xl lg:text-6xl">Richmond Glenn Viloria</h1>
			<p class="text-sm sm:text-base">Software Engineer — Node.js, TypeScript, Firebase — Full-Stack & Backend.</p>
		</div>
	</div>
	<div class="flex flex-col items-center justify-center lg:items-start">
		<div class="flex w-full max-w-2xl flex-col items-center justify-end lg:items-start">
			<p class="mb-4 max-w-xl text-center text-sm leading-relaxed sm:text-base lg:text-left">
				I build production systems with a focus on backend and full-stack development — Node.js, TypeScript,
				React, Firebase, and MongoDB. I use AI tools like Claude Code to accelerate development without
				skipping the judgment work.
			</p>
			<div class="mb-4 flex flex-wrap justify-center gap-3 lg:justify-start">
				<span
					class="bg-secondary/20 text-text border-border/70 dark:border-dark-border dark:bg-dark-secondary/20 dark:text-dark-text inline-flex items-center gap-2 rounded-full border px-3 py-2 text-sm font-medium"
				>
					Open to junior backend & full-stack roles
				</span>
			</div>
			<div class="mb-5 flex flex-wrap justify-center gap-3 lg:justify-start">
				{#each contacts as contact}
					<a
						href={contact.url}
						target={contact.name === 'Email' ? undefined : '_blank'}
						rel={contact.name === 'Email' ? undefined : 'noopener'}
						class="bg-primary/15 text-text border-border/70 dark:border-dark-border dark:bg-dark-secondary/20 dark:text-dark-text inline-flex items-center gap-2 rounded-full border px-3 py-2 text-sm font-medium transition hover:scale-105"
						title={contact.name}
					>
						<Icon icon={contact.icon} width="18" />
						<span>{contact.name}</span>
					</a>
				{/each}
			</div>
			<p class="text-sm sm:text-base">Class of 2026 in</p>
			<p class="text-3xl font-bold sm:text-4xl lg:text-5xl">Computer Science</p>
			<p class="text-xs italic sm:text-sm">Application Development Elective Track</p>
			<p class="mt-4 text-sm italic sm:text-base">Creating, planning and designing systems in:</p>
			<div class="mt-2 flex flex-col gap-1">
				<p class="text-lg sm:text-xl lg:text-2xl">{'>'} <span class="font-bold">Website Development</span></p>
				<p class="text-lg sm:text-xl lg:text-2xl">{'>'} <span class="font-bold">Mobile Development</span></p>
				<p class="text-lg sm:text-xl lg:text-2xl">{'>'} <span class="font-bold">Game Development</span></p>
			</div>
		</div>
	</div>
</div>
