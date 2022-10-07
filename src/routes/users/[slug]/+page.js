import { token } from '../../stores/store.js';
import { APP_API_URL, APP_TOKEN } from '../../stores/authCrud';
import axios from 'axios';

/** @type {import('./$types').Load} */
export async function load(event) {
	let user;
	let tokens;

	token.subscribe((data) => {
		tokens = data;
	});

	user = await axios({
		method: 'GET',
		url: `${APP_API_URL}/user/${event.params.slug}`,
		headers: {
			'x-app-token': APP_TOKEN,
			'x-user-token': tokens
		}
	})
		.then((res) => res.data)
		.then((data) => {
			console.log(data);
			return data.data.user;
		})
		.catch((err) => console.log(err));

	return {
		user: user
	};
}
