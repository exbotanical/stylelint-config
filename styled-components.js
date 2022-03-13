const { extends: extensions, ...rest } = require('./base');

module.exports = {
	...rest,
	extends: extensions.concat(['stylelint-config-styled-components']),
	overrides: [
		{
			customSyntax: '@stylelint/postcss-css-in-js',
			files: ['**/*.{jsx,tsx}']
		}
	]
};
