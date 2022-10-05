const maxTextLength = (text, length = 50) => {
	if (typeof text === 'string') {
		return text.split(0, length);
	}
	return;
};

export function DefaultErrorPopup(
	error = {},
	opts = {
		name: void 0,
		overrideMessage: void 0
	}
) {
	try {
		let { name, overrideMessage: overideMessage } = opts || {};
		let formatedMessage = null;
		name = name || 'Request Error!';
		console.error({ error, name });
		if (error && error?.response?.data) {
			error = error.response.data;
			let msg = maxTextLength(error.message);
			let code = error.code;
			let status = error.status;
			let subError = error.error;
			let subErrorName = subError ? subError.name : null;

			if (msg)
				formatedMessage = `
				<p>
					${msg}
					<br />
					<small><pre>#${code} - ${status}/${subErrorName}</pre></small>
				</p>
				<small class="text-muted">send this message to staffs or developers</small>
			`;
		}

		if (error && typeof error.message === 'string') {
			formatedMessage = `
				<p>
					${error.message}
				</p>
				<small class="text-muted">send this message to staffs or developers</small>
				`;
		}

		return Swal.fire({
			title: name,
			html: overideMessage || formatedMessage || 'Server error, please try again!',
			icon: 'error',
			confirmButtonText: 'Ok'
		});
	} catch (error) {
		console.error(error);
		return;
	}
}
