import axios from 'axios';
import { token } from './store';

export const APP_API_URL = 'https://staging-orbit.turnkey.id/api/v2';
export const REBATE_API_URL = 'https://staging-rebate.turnkey.id/api';
export const LOGIN_URL = `${APP_API_URL}/auth/admin/login`;
export const APP_TOKEN =
	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6MTgsImV4cGlyZWQiOjE2NTQzMjY1NTkuODE5LCJpYXQiOjE2MjMyMjI1NTl9.Rn5aIjaYXlJauIToxQrlwS_ppbhhatavtQfgN9iUIR4';

export const getAllUser = async (token) => {
	// Authorization head should be fulfilled in interceptor.
	if (!token) return {};
	try {
		return axios({
			method: 'GET',
			url: `${APP_API_URL}/user/user`,
			headers: {
				'x-app-token': APP_TOKEN,
				'x-user-token': token
			}
		}).then((res) => res.data);
	} catch (err) {
		console.log(err);
	}
};

export const getAllAdmin = async (token) => {
	// Authorization head should be fulfilled in interceptor.
	if (!token) return {};
	return axios({
		method: 'GET',
		url: `${APP_API_URL}/user/admin`,
		headers: {
			'x-app-token': APP_TOKEN,
			'x-user-token': token
		}
	}).then((res) => res.data);
};

export const getAllVerification = async (token) => {
	// Authorization head should be fulfilled in interceptor.
	if (!token) return {};
	return axios({
		method: 'GET',
		url: `${APP_API_URL}/verification`,
		headers: {
			'x-app-token': APP_TOKEN,
			'x-user-token': token
		}
	}).then((res) => res.data);
};

export const getStatisticData = async (token) => {
	if (!token) return {};
	let currentDate = new Date();
	let startDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
	return axios({
		method: 'get',
		url: `${APP_API_URL}/statistics?from=${startDate.toISOString()}&to=${currentDate.toISOString()}`,
		headers: {
			'x-app-token': APP_TOKEN,
			'x-user-token': token
		}
	})
		.catch((err) => {
			console.log(err);
			throw err;
		})
		.then((res) => res.data);
};

export function createAdmin(token) {
	if (!token) return {};
	return axios({
		method: 'POST',
		url: `${APP_API_URL}/user`,
		headers: {
			'x-app-token': APP_TOKEN,
			'x-user-token': token
		},
		data: {
			name,
			email,
			phone,
			password,
			role,
			status
		}
	})
		.then(({ data }) => {
			swal
				.fire({
					text: 'Success create admin',
					confirmButtonText: 'Ok'
				})
				.then((result) => {
					if (result.isConfirmed) {
						window.location.reload();
					}
				});
		})
		.catch((err) => {
			DefaultErrorPopup(err).then((res) => {
				window.location.reload();
			});
		});
}

export const getAllPayment = async (token) => {
	// Authorization head should be fulfilled in interceptor.
	if (!token) return {};
	return axios({
		method: 'GET',
		url: `${APP_API_URL}/payment`,
		headers: {
			'x-app-token': APP_TOKEN,
			'x-user-token': token
		}
	}).then((res) => res.data);
};

export const getAllAccountSpec = async (token) => {
	// Authorization head should be fulfilled in interceptor.
	if (!token) return {};
	return axios({
		method: 'GET',
		url: `${APP_API_URL}/account-spec`,
		headers: {
			'x-app-token': APP_TOKEN,
			'x-user-token': token
		}
	}).then((res) => res.data);
};

export const getInternalTransfer = async (token) => {
	if (!token) return {};
	return axios({
		url: `${APP_API_URL}/account/internal-transfer`,
		method: 'GET',
		headers: {
			'x-app-token': APP_TOKEN,
			'x-user-token': token
		}
	}).then((res) => res.data);
};

export default function (email, password) {
	if (!token) return {};
	return axios({
		method: 'post',
		url: LOGIN_URL,
		headers: {
			'x-app-token': APP_TOKEN
		},
		data: {
			email,
			password
		}
	}).then((res) => res.data);
}

export const fetchRebateProfiles = async () => {
	if (!token) return {};
	const graphQLRequest = {
		variables: {},

		query: `
			query {
				CommissionProfile {
					id
					user_id
					user_role
					user {
						id
						name
						email
					}
					status
					start_date
					end_date
					created_at
					updated_at
					profile_accounts {
						type_id
						type_name
						name
						schemas {
							type
							value_type
							value
							level
						}
					}
				}
			}
		`
	};

	const res = await axios({
		url: `${REBATE_API_URL}/v1/graphql`,
		method: 'POST',
		data: graphQLRequest,
		headers: {
			'x-app-token': APP_TOKEN
		}
	});
	return res.data?.data?.CommissionProfile;
};
