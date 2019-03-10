export default class Storage {
	constructor(prefix) {
		this.prefix = prefix;
	}

	get(key) {
		localStorage.getItem(this.prefix + key);
	}

	set(key, data) {
		localStorage.setItem(this.prefix + key, data);
	}

	delete(key) {
		localStorage.removeItem(this.prefix + key);
	}

	clear() {
		localStorage.clear();
	}
}
