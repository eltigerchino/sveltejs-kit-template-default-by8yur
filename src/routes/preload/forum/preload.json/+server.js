import { error, json } from '@sveltejs/kit';

export const prerender = process.env.BUILD_STATIC === 'true';

export async function GET(context) {
	return json({ someResponse: 'message' });
}
