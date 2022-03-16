module.exports = {
	i18n: {
		locales: ['de-DE'],
		defaultLocale: 'de-DE',
	},
	swcMinify: true,
	reactStrictMode: true,
	webpack: (config, { dev, isServer }) => {
		if (!dev && !isServer) {
			Object.assign(config.resolve.alias, {
				'react/jsx-runtime.js': 'preact/compat/jsx-runtime',
				react: 'preact/compat',
				'react-dom/test-utils': 'preact/test-utils',
				'react-dom': 'preact/compat',
			});
		}
		return config;
	},
};
