import { projects } from '$lib/data/projects';

export const prerender = true;

const SITE_URL = 'https://rgviloria.vercel.app';

export function GET() {
	const urls = [
		{ loc: `${SITE_URL}/`, lastmod: new Date().toISOString().split('T')[0] },
		...projects
			.filter((project) => project.visible !== false)
			.map((project) => ({
				loc: `${SITE_URL}/projects/${project.slug}`,
				lastmod: new Date().toISOString().split('T')[0]
			}))
	];

	const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((url) => `	<url>\n		<loc>${url.loc}</loc>\n		<lastmod>${url.lastmod}</lastmod>\n	</url>`).join('\n')}
</urlset>
`;

	return new Response(body, {
		headers: { 'Content-Type': 'application/xml' }
	});
}
