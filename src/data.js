import {
	allUser,
	allAdmin,
	allVerification,
	paymetData,
	accountDataSpec,
	internalTransfer
} from './routes/stores/store';

export default (path, params = {}, dataType) => {
	let datas = [];
	if (dataType === 'user') {
		allUser.subscribe((data) => {
			if (data !== undefined) {
				datas = data.user;
			}
		});
	} else if (dataType === 'admin') {
		allAdmin.subscribe((data) => {
			if (data !== undefined) {
				datas = data.user;
			}
		});
	} else if (dataType === 'verification') {
		allVerification.subscribe((data) => {
			if (data !== undefined) {
				datas = data.verification;
			}
		});
	} else if (dataType === 'payment') {
		paymetData.subscribe((data) => {
			if (data !== undefined) {
				datas = data.payment;
			}
		});
	} else if (dataType === 'account-spec') {
		accountDataSpec.subscribe((data) => {
			if (data !== undefined) {
				datas = data;
			}
		});
	} else if (dataType === 'internal-transfer') {
		internalTransfer.subscribe((data) => {
			if (data !== undefined) {
				datas = data;
			}
		});
	}

	const total = datas.length;

	const per_page = params.per_page || 25;
	const last_page = Math.ceil(total / per_page);
	const page = params.page || 1;
	const from = (page - 1) * per_page;
	const to = page * per_page;
	const slice = datas.slice(from, to);

	return new Promise((resolve, reject) => {
		setTimeout(function () {
			resolve({
				total: total,
				per_page: per_page,
				current_page: page,
				last_page: last_page,
				// first_page_url: 'http://laravel.app?page=1',
				// last_page_url: 'http://laravel.app?page=' + last_page,
				// next_page_url: 'http://laravel.app?page=' + (page + 1),
				// prev_page_url: 'http://laravel.app?page=' + (page - 1),
				// path: 'http://laravel.app',
				from: from,
				to: to,
				data: slice
			});
		});
	});
};
