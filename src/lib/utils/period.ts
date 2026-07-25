export function isOngoing(endPeriod?: string): boolean {
	return !endPeriod;
}

export function formatPeriod(startPeriod: string, endPeriod?: string): string {
	return `${formatIsoDate(startPeriod)} - ${endPeriod ? formatIsoDate(endPeriod) : 'Present'}`;
}

function formatIsoDate(iso: string): string {
	const [year, month] = iso.split('-').map(Number);
	return new Date(year, month - 1, 1).toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
}
