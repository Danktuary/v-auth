const path = require('path');

module.exports = {
	lintOnSave: false,
	configureWebpack: {
		resolve: {
			alias: {
				$: path.join(__dirname, 'src'),
				$c: path.join(__dirname, 'src', 'core'),
				'@': path.join(__dirname, 'demo'),
				'@c': path.join(__dirname, 'demo', 'components'),
				'@v': path.join(__dirname, 'demo', 'views'),
			},
		},
	},
};
