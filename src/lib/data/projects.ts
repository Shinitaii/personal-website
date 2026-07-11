export type Project = {
	slug: string;
	title: string;
	period: string;
	role: string;
	platform: string;
	tags: string[];
	description: string;
	bullets: string[];
	githubUrl?: string;
	sortYear: number;
	sortRank: number;
	visible?: boolean;
};

export const projects: Project[] = [
	{
		slug: 'listajuan',
		title: 'ListaJuan',
		period: 'June 2026 - Present',
		role: 'Solo Developer',
		platform: 'Mobile',
		tags: ['Svelte', 'Firebase', 'Firestore', 'Capacitor'],
		description:
			'A Filipino grocery price-journal app, tracking spend and price history across trips to reduce forgotten items and guesswork at the market.',
		bullets: [
			'Built the core loop — log trip, build item price history, check last price, review monthly spend — with manual price entry for v1 to avoid friction that could kill the habit.',
			'Made the load-bearing call to skip cross-variant price normalization, storing each transaction with full context (item, market, quantity, unit type, price) instead of a misleading per-unit average.'
		],
		githubUrl: 'https://github.com/Shinitaii/listajuan',
		sortYear: 2026,
		sortRank: 4,
		visible: false
	},
	{
		slug: 'utilitool',
		title: 'Utilitool',
		period: 'May 2026 - Present',
		role: 'Solo Developer',
		platform: 'Website + Mobile + API',
		tags: ['Automation', 'Groq', 'Ollama', 'Node.js', 'Express', 'Firebase Functions', 'SvelteKit', 'Capacitor'],
		description: 'A scalable utility calculation engine with AI-assisted OCR and analytics for Meralco and Manila Water billings, built for my father.',
		bullets: [
			'Engineered a scalable utility calculation engine for Meralco and Manila Water billings, reducing manual billing processing by 80% for 6 monthly tenants with data collected since 2023.',
			'Developed the full-stack architecture: a Node.js/Express REST API on Firebase Functions, a SvelteKit/Vite frontend deployed on Vercel, and a Svelte/Capacitor mobile app.'
		],
		githubUrl: 'https://github.com/Shinitaii/utilitool',
		sortYear: 2026,
		sortRank: 3
	},
	{
		slug: 'moldify',
		title: 'Moldify',
		period: 'Aug 2025 - May 2026',
		role: 'Lead Developer',
		platform: 'Website + Mobile + API',
		tags: ['PyTorch', 'AWS', 'Firebase', 'Node.js', 'Express', 'Flask', 'TypeScript', 'Flutter'],
		description:
			'An AI-assisted mold identification and monitoring platform that helps farmers detect and monitor mold growth through image analysis and metadata.',
		bullets: [
			'Orchestrated a multi-platform REST API on Firebase Functions and AWS Lambda, with CI/CD via GitHub Actions, connecting the backend and ML service to the website and mobile application.',
			'Finetuned and built a multimodal CNN-ANN mold image classification model trained on 571 labeled microscopic images across 6 genus categories, achieving 93% overall accuracy on the CNN layer.',
			'Implemented local caching (Redis/SWR/Dio) across the API, Next.js web, and Flutter mobile clients.'
		],
		githubUrl: 'https://github.com/fortran-thesis',
		sortYear: 2025,
		sortRank: 2
	},
	{
		slug: 'deck',
		title: 'Deck',
		period: 'Aug 2024 - Aug 2025',
		role: 'Lead Developer',
		platform: 'Website + Mobile + API',
		tags: ['CodeIgniter', 'Flutter', 'Dart', 'Firebase', 'PHP', 'TypeScript', 'Express'],
		description:
			'An AI-assisted flashcards and task management ecosystem spanning website, mobile, and API for student study workflows.',
		bullets: [
			'Designed and implemented the core Express REST API, integrating JWT authentication, secure session management, and task management endpoints.',
			'Implemented and integrated REST API endpoints from frontend to backend using CodeIgniter, and extended the platform with an admin dashboard for moderation and user management.',
			'Developed and optimized the Flutter mobile app connecting to backend services for student study workflows, improving student study performance by 30% based on testing.'
		],
		githubUrl: 'https://github.com/majiinB/Deck-V2',
		sortYear: 2024,
		sortRank: 1
	},
	{
		slug: 'through-the-woods',
		title: 'Through The Woods',
		period: 'Jan 2024 - May 2024',
		role: 'Lead Developer',
		platform: 'Mobile',
		tags: ['Unity', 'C#', 'Game Systems'],
		description: 'A 2D adventure-puzzle game about siblings navigating a magical forest, inspired by Hansel and Gretel.',
		bullets: [
			'Implemented five core game systems: audio, main menu navigation, save/load, and cutscene/dialogue flow.',
			'Developed level progression and item collection mechanics with state management.'
		],
		githubUrl: 'https://github.com/Shinitaii/through-the-woods',
		sortYear: 2024,
		sortRank: 0
	},
].sort((left, right) => {
	if (left.sortYear !== right.sortYear) {
		return right.sortYear - left.sortYear;
	}

	return right.sortRank - left.sortRank;
});
