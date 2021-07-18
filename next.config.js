const withReactSvg = require('next-react-svg');
const path = require('path');
module.exports = withReactSvg({
	distDir: process.env.NODE_ENV === 'development' ? '.next_dev' : '.next',
	include: path.resolve(__dirname, 'assets/'),
	optimizeFonts: false,
});
