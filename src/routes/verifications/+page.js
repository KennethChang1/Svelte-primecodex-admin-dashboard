import { getAllVerification } from '../stores/authCrud.js';
import { token } from '../stores/store.js';

/** @type {import('./$types').Load} */
export async function load(event) {
	let user;
	let tokens;

	token.subscribe((data) => {
		tokens = data;
	});

	user = await getAllVerification(tokens).then(({ data }) => {
		return data;
	});

	return {
		// ok, you probably don't need a `load` function for this
		user: user
	};
}
