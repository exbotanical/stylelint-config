const { extends: extensions, rules, plugins, ...rest } = require('./base');

module.exports = {
	...rest,
	extends: extensions.concat(['stylelint-config-recommended-scss']),
	overrides: [
		{
			customSyntax: 'postcss-html',
			files: ['**/*.vue']
		}
	],
	plugins: plugins.concat(['stylelint-scss']),
	rules: {
		...rules,
		'scss/at-rule-no-unknown': [
			true,
			{
				ignoreAtRules: ['layer']
			}
		]
	}
};
