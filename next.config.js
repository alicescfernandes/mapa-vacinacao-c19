const withReactSvg = require('next-react-svg');
const path = require('path');
module.exports = withReactSvg({
	distDir: process.env.NODE_ENV === 'development' ? '.next_dev' : '.next',
	i18n: {
		localeDetection: false,
		locales: ['pt-PT'],
		defaultLocale: 'pt-PT',
	},
	include: path.resolve(__dirname, 'assets/'),
	webpack(config, options) {
		config.node = {
			fs: 'empty',
		};
		return config;
	},
});
