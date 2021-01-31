const withReactSvg = require('next-react-svg');
const path = require('path');

module.exports = withReactSvg({
	i18n: {
		localeDetection: false,
		locales: ['pt-PT'],
		defaultLocale: 'pt-PT',
	},
	include: path.resolve(__dirname, 'assets/'),
	webpack(config, options) {
		return config;
	},
});
