import { getAllUser } from '../stores/authCrud.js';
import { token } from '../stores/store.js';
import { getStatisticData } from '../stores/authCrud.js';
import axios from 'axios';

/** @type {import('./$types').Load} */
export async function load(event) {
	let stats;
	let tokens;

	token.subscribe((data) => {
		tokens = data;
	});

	stats = await getStatisticData(tokens).then(({ data }) => {
		return data;
	});

	return {
		// ok, you probably don't need a `load` function for this
		stats
	};
}
