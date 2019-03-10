export default class JWT {
	constructor(token) {
		this.token = token;
	}

	get decodedToken() {
		const [, token] = this.token.split('.');
		let encoded = token.replace(/-/g, '+').replace(/_/g, '/');
		const length = encoded.length % 4;

		if (length === 2) encoded += '==';
		if (length === 3) encoded += '=';

		return JSON.parse(decodeURIComponent(window.atob(encoded))) || {};
	}

	get expired() {
		const { exp } = this.decodedToken;
		return !exp ? false : exp <= Date.now();
	}
}
