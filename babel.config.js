// babel.config.js
module.exports = function (api) {
	const isServer = api.caller((caller) => caller?.isServer);
	const isCallerDevelopment = api.caller((caller) => caller?.isDev);

	const presets = [
		[
			'next/babel',
			{
				'preset-react': {
					importSource: !isServer && isCallerDevelopment ? '@welldone-software/why-did-you-render' : 'react',
				},
				'preset-env': {
					targets: {
						browsers: ['last 10 versions', '> 0.05%', 'ie>11'],
					},
					corejs: '3.0.0',
					useBuiltIns: 'entry',
				},
			},
		],
	];

	return { presets };
};
