export type Project = {
	slug: string;
	title: string;
	period: string;
	role: string;
	platform: string;
	tags: string[];
	description: string;
	bullets: string[];
	story?: string;
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
		story:
			"I built this for my mom. She kept running into the same problem at the market — going back and forth because she'd forget an item, or re-writing the same list every trip since it never felt worth keeping. Seeing it used the way I hoped it would be is a relief, and now I'm curious about pushing it further toward helping with health-conscious grocery choices.",
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
			'Developed the full-stack architecture: a Node.js/Express REST API on Firebase Functions, a SvelteKit/Vite frontend deployed on Vercel, and a Svelte/Capacitor mobile app.',
			'Designed a function-calling chatbot and OCR endpoints with Groq/Ollama Cloud for billing insights, with privacy-by-design guardrails based on the OWASP LLM Top 10.'
		],
		story:
			"This one is for my dad's business. He used to calculate meter readings by hand every month — always double-checking the current reading against the previous one, because it's tedious and one missed check means a billing error. Utilitool replaced that. It's the system he actually uses now, and I still feel proud watching it grow — most recently with AI/ML features layered on top.",
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
		story:
			"This wasn't originally my idea — it started with a teammate who wanted to help farmers identify mold on their crops, working alongside mycologists. I built the AI/ML API layer, the backend API, and connected the frontend proxy layers on both web and mobile. It's a proud and anxious project in equal parts: proud of what we shipped, but it also burned me out, mostly because I didn't ask for help enough. The lesson stuck — asking for help was never the issue, and I shouldn't build alone when I have teammates who can carry weight with me.",
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
		story:
			"Deck was an academic requirement, not something I set out to build — we made it because the flashcard apps around at the time lacked AI-powered generation. What I actually took from it wasn't the API work, though. As project lead, I learned what it means to delegate, to offer help before being asked, and everything else that comes with actually leading a team.",
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
		story:
			"Another academic project, but this one was personal in a different way — it's about loving your family and holding onto them, no matter what. Building it let me fulfill an old dream of making a game. As team lead again, I focused on the core systems myself and trusted my teammates to handle what they were good at.",
		githubUrl: 'https://github.com/Shinitaii/through-the-woods',
		sortYear: 2024,
		sortRank: 0
	},
	{
		slug: 'quest-wall',
		title: 'Quest Wall',
		period: 'Jul 2026 - Present',
		role: 'Solo Developer',
		platform: 'Website',
		tags: ['SvelteKit', 'TypeScript', 'Tailwind CSS', 'Cloudflare Pages', 'Vitest', 'Playwright'],
		description:
			'A fan-made planning tool for FarmRPG players that walks multiple questlines against a pasted inventory and shows exactly where you’ll run out of materials.',
		bullets: [
			'Built an inventory-vs-questline resolver that walks selected questlines in order and surfaces the first resource shortfall per chain, replacing manual spreadsheet cross-referencing.',
			'Shipped as a SvelteKit + TypeScript web app on Cloudflare Pages, accessible from desktop and mobile, with localStorage-based progress tracking and JSON import/export.'
		],
		story:
			"I didn't build this for other players first — I built it because I hit the wall myself. FarmRPG has plenty of quest data, but no real checklist beyond community spreadsheets, and those only track one questline at a time. While working through my own ATI quest, I kept having to manually sync the same inventory across sheets and check by hand whether I had enough for the next quest on either one. That wasn't going away on its own, so I built a tool that plans out questlines and shows exactly where anyone would wall, not just me. It's still in testing, but it's personal — I'm a FarmRPG player myself, and this is the tool I wished existed.",
		githubUrl: 'https://github.com/ffrpg-tech/quest-wall',
		sortYear: 2026,
		sortRank: 5
	}
].sort((left, right) => {
	if (left.sortYear !== right.sortYear) {
		return right.sortYear - left.sortYear;
	}

	return right.sortRank - left.sortRank;
});
