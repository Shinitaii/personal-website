import { error } from '@sveltejs/kit';
import { projects } from '$lib/data/projects';
import type { EntryGenerator } from './$types';

export const prerender = true;

export const entries: EntryGenerator = () => projects.map((project) => ({ slug: project.slug }));

export function load({ params }) {
	const project = projects.find((item) => item.slug === params.slug);

	if (!project) {
		error(404, 'Project not found');
	}

	return { project };
}
