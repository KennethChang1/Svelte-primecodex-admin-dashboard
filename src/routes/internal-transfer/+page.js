import { getInternalTransfer } from '../stores/authCrud.js';
import { token, internalTransfer } from '../stores/store.js';

/** @type {import('./$types').Load} */
export async function load(event) {
	let user;
	let tokens;

	token.subscribe((data) => {
		tokens = data;
	});

	user = await getInternalTransfer(tokens).then(({ data }) => {
		return data;
	});

	return {
		user: user
	};
}
