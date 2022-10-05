// import axios from 'axios';
// import { APP_API_URL } from '../stores/authCrud.js';
// import { APP_TOKEN } from '../stores/authCrud.js';
import { getAllUser } from '../stores/authCrud.js';
import { token } from '../stores/store.js';
import { error } from '@sveltejs/kit';
// import { isLoggedIn } from '../stores/store.js';
// import { error, redirect } from '@sveltejs/kit';

// /** @type {import('./$types').PageServerLoad} */
// export async function load({ params }) {
// 	token.subscribe((data) => {
// 		getAllUser(data).then(({ data }) => {
// 			console.log(data);
// 		});
// 	});
// };

// /** @type {import('./$types').GET} */
// export async function GET({ params }) {
// 	let user;
// 	token.subscribe((data) => {
// 		console.log(data);
// 		getAllUser(data).then(({ data }) => {
// 			user = data;
// 		});
// 	});

// 	return {
// 		user
// 	};
// }
