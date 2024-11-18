export async function load({ fetch }) {
	const response = await fetch('/preload/forum/preload.json');
	console.log(await response.json());
}
