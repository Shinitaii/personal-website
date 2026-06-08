<script lang="ts">
	import Section from '$lib/Section.svelte';
	import Icon from '@iconify/svelte';
	import type { TechStack } from '../../types/tech-types.d.ts';

	const stacks: TechStack[] = getDefaultStacks();

	function getDefaultStacks(): TechStack[] {
		return [
			{
				id: 'languages',
				category: 'Languages',
				items: [
					{ label: 'TypeScript', icon: 'logos:typescript-icon' },
					{ label: 'JavaScript', icon: 'logos:javascript' },
					{ label: 'Java', icon: 'logos:java' },
					{ label: 'Python', icon: 'logos:python' },
					{ label: 'C#', icon: 'logos:c-sharp' },
					{ label: 'Dart', icon: 'logos:dart' },
					{ label: 'HTML', icon: 'logos:html-5' },
					{ label: 'CSS', icon: 'logos:css-3' },
					{ label: 'PHP', icon: 'logos:php' }
				]
			},
			{
				id: 'os',
				category: 'Operating Systems',
				items: [
					{ label: 'Windows', icon: 'mdi:microsoft-windows' },
					{ label: 'Linux', icon: 'mdi:linux' }
				]
			},
			{
				id: 'frontend',
				category: 'Frontend',
				items: [
					{ label: 'Svelte', icon: 'logos:svelte-icon' },
					{ label: 'Next.js', icon: 'logos:nextjs-icon' },
					{ label: 'React', icon: 'logos:react' },
					{ label: 'Flutter', icon: 'logos:flutter' },
					{ label: 'Capacitor', icon: 'logos:capacitorjs-icon' },
					{ label: 'Tailwind CSS', icon: 'logos:tailwindcss-icon' }
				]
			},
			{
				id: 'backend',
				category: 'Backend',
				items: [
					{ label: 'Node.js', icon: 'logos:nodejs-icon' },
					{ label: 'Express', icon: 'logos:express' },
					{ label: 'Flask', icon: 'logos:flask' },
					{ label: 'Spring Boot', icon: 'logos:spring-icon' },
					{ label: 'Laravel', icon: 'logos:laravel' }
				]
			},
			{
				id: 'databases',
				category: 'Databases',
				items: [
					{ label: 'MySQL', icon: 'logos:mysql' },
					{ label: 'PostgreSQL', icon: 'logos:postgresql' },
					{ label: 'Firebase', icon: 'logos:firebase' },
					{ label: 'MongoDB', icon: 'logos:mongodb-icon' },
					{ label: 'Redis', icon: 'logos:redis' }
				]
			},
			{
				id: 'cloud',
				category: 'Cloud Computing',
				items: [
					{ label: 'AWS', icon: 'logos:aws' },
					{ label: 'GCP', icon: 'logos:gcp' }
				]
			},
			{
				id: 'devops',
				category: 'DevOps',
				items: [
					{ label: 'Docker', icon: 'logos:docker-icon' },
					{ label: 'GitHub Actions', icon: 'logos:github-actions-icon' }
				]
			},
			{
				id: 'ml',
				category: 'Machine Learning',
				items: [
					{ label: 'PyTorch', icon: 'logos:pytorch' },
					{ label: 'TensorFlow', icon: 'logos:tensorflow' }
				]
			},
			{
				id: 'testing',
				category: 'Testing',
				items: [
					{ label: 'Jest', icon: 'logos:jest' },
					{ label: 'Postman', icon: 'logos:postman' }
				]
			},
			{
				id: 'gameengines',
				category: 'Game Engines',
				items: [
					{ label: 'Unity', icon: 'logos:unity' },
					{ label: 'Godot', icon: 'logos:godot-icon' }
				]
			},
			{
				id: 'versioncontrol',
				category: 'Version Control',
				items: [
					{ label: 'Git', icon: 'logos:git-icon' },
					{ label: 'GitHub', icon: 'logos:github-icon' },
					{ label: 'GitLab', icon: 'logos:gitlab' }
				]
			}
		];
	}
</script>

<Section id="skills" title="Skills">
	<div class="grid w-full gap-4 sm:grid-cols-2 xl:grid-cols-3">
		{#each stacks as stack (stack.category)}
			<article class="bg-bg/80 dark:bg-lighter-dark-bg/80 border-border/70 dark:border-dark-border rounded-2xl border p-4 shadow-sm transition-transform duration-300 hover:-translate-y-0.5">
				<div class="mb-3 flex items-center justify-between gap-3">
					<h3 class="text-base font-semibold sm:text-lg">{stack.category}</h3>
					<span class="bg-tertiary/20 dark:bg-dark-accent/20 text-text dark:text-dark-text rounded-full px-2 py-1 text-[10px] font-medium uppercase tracking-[0.2em]">
						{stack.items.length}
					</span>
				</div>

				<div class="flex flex-wrap gap-2">
					{#each stack.items as item (item.label)}
						<div class="bg-primary/10 dark:bg-dark-secondary/20 border-border/60 dark:border-dark-border flex items-center gap-2 rounded-full border px-3 py-2 text-sm">
							<Icon icon={item.icon} width="18" />
							<span>{item.label}</span>
						</div>
					{/each}
				</div>
			</article>
		{/each}
	</div>
</Section>