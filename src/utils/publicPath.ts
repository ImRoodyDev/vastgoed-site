const publicUrl = process.env.PUBLIC_URL || '';

export function publicPath(path: string) {
	const normalizedPath = path.startsWith('/') ? path : `/${path}`;
	return `${publicUrl}${normalizedPath}`;
}
