export default {
	decode(token) {
		const [, secret] = token.split('.');
		let encoded = secret.replace(/-/g, '+').replace(/_/g, '/');
		const length = encoded.length % 4;

		if (length === 2) encoded += '==';
		if (length === 3) encoded += '=';

		return JSON.parse(decodeURIComponent(window.atob(encoded))) || {};
	},
	expired(token) {
		const { exp } = this.decode(token);
		return !exp ? false : exp <= Date.now() / 1000;
	},
};
