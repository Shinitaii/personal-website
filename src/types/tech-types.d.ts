export interface TechItem {
	label: string;
	icon: string;
}

export interface TechStack {
	id: string;
	category: string;
	items: TechItem[];
}