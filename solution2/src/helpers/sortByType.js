export function sortByType(type, data) {
	return data.sort((a, b) => (a[type] > b[type] ? 1 : -1));
}
