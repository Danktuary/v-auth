

export default {
	display(messages = []) {
		if (typeof messages === 'string') messages = [messages];
		if (!Array.isArray(messages) || !messages.length) return;

		for (const message of messages) {
			console.log(message);
		}
	},
};
