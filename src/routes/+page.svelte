<script>
	import Header from '$lib/Header.svelte';
	import Intro from '$lib/Intro.svelte';
	import WorkSection from '$lib/sections/WorkSection.svelte';
	import ProjectSection from '$lib/sections/ProjectSection.svelte';
	import MediaSection from '$lib/sections/MediaSection.svelte';
	import FreelanceSection from '$lib/sections/FreelanceSection.svelte';
	import CertificateSection from '$lib/sections/CertificateSection.svelte';
	import StackSection from '$lib/sections/StackSection.svelte';
	import UpButton from '$lib/UpButton.svelte';
	import Footer from '$lib/Footer.svelte';

	const faqSchema = {
		'@context': 'https://schema.org',
		'@type': 'FAQPage',
		mainEntity: [
			{
				'@type': 'Question',
				name: 'What does Richmond Glenn Viloria do?',
				acceptedAnswer: {
					'@type': 'Answer',
					text: 'He is an aspiring software engineer focused on website, mobile, and game development, with experience across frontend, backend, and deployment.'
				}
			},
			{
				'@type': 'Question',
				name: 'What kinds of projects does he take on?',
				acceptedAnswer: {
					'@type': 'Answer',
					text: 'He takes on fullstack web and mobile builds, workflow automation, and product development work that needs a complete end-to-end implementation.'
				}
			},
			{
				'@type': 'Question',
				name: 'How can someone contact him?',
				acceptedAnswer: {
					'@type': 'Answer',
					text: 'He can be reached through the contact links located at his website: https://rgviloria.vercel.app.'
				}
			}
		]
	};

	const personSchema = {
		'@context': 'https://schema.org',
		'@type': 'Person',
		name: 'Richmond Glenn Viloria',
		alternateName: 'Shinitaii',
		jobTitle: 'Aspiring Software Engineer',
		description:
			'Aspiring software engineer focused on website, mobile, and game development, with experience across frontend, backend, and deployment.',
		url: 'https://rgviloria.vercel.app',
		image: 'https://rgviloria.vercel.app/pic.jpg',
		sameAs: ['https://ph.linkedin.com/in/rgviloria', 'https://github.com/Shinitaii'],
		alumniOf: {
			'@type': 'CollegeOrUniversity',
			name: 'University of Makati'
		},
		knowsAbout: [
			'SvelteKit',
			'Svelte',
			'TypeScript',
			'Vite',
			'Node.js',
			'Express',
			'Firebase',
			'Flutter',
			'React',
			'AWS',
			'GitHub Actions',
			'PostgreSQL',
			'MySQL'
		]
	};

	const websiteSchema = {
		'@context': 'https://schema.org',
		'@type': 'WebSite',
		name: 'Richmond Glenn Viloria',
		url: 'https://rgviloria.vercel.app',
		author: {
			'@type': 'Person',
			name: 'Richmond Glenn Viloria'
		}
	};
</script>

<svelte:head>
	<title>Richmond Glenn Viloria | Aspiring Software Engineer</title>
	<meta
		name="description"
		content="Portfolio of Richmond Glenn Viloria, an aspiring software engineer focused on website, mobile, and game development, with work experience, projects, freelance work, and technical skills."
	/>
	<meta name="robots" content="index,follow" />
	<meta property="og:title" content="Richmond Glenn Viloria | Aspiring Software Engineer" />
	<meta
		property="og:description"
		content="Portfolio of Richmond Viloria, an aspiring software engineer focused on website, mobile, and game development."
	/>
	<meta property="og:type" content="website" />
	<meta property="og:image" content="https://rgviloria.vercel.app/pic.jpg" />
	<meta property="og:image:alt" content="Richmond Glenn Viloria, aspiring software engineer" />
	<meta property="og:site_name" content="Richmond Glenn Viloria" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="Richmond Glenn Viloria | Aspiring Software Engineer" />
	<meta
		name="twitter:description"
		content="Portfolio of Richmond Glenn Viloria, an aspiring software engineer focused on website, mobile, and game development."
	/>
	<meta name="twitter:image" content="https://rgviloria.vercel.app/pic.jpg" />
	<link rel="canonical" href="https://rgviloria.vercel.app" />
	<meta property="og:url" content="https://rgviloria.vercel.app" />
	{@html `<script type="application/ld+json">${JSON.stringify(personSchema)}</` + `script>`}
	{@html `<script type="application/ld+json">${JSON.stringify(websiteSchema)}</` + `script>`}
	{@html `<script type="application/ld+json">${JSON.stringify(faqSchema)}</` + `script>`}
</svelte:head>

<UpButton />
<Header />
<main>
	<Intro />
	<WorkSection />
	<ProjectSection />
	<MediaSection />
	<FreelanceSection />
	<CertificateSection />
	<StackSection />
</main>
<Footer />
