export type MediaItem = {
	projectTitle: string;
	type: 'image' | 'youtube';
	url: string;
	caption?: string;
};

export const mediaItems: MediaItem[] = [];
