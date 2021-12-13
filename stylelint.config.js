module.exports = {
	extends: [
		'stylelint-config-standard',
		'stylelint-config-idiomatic-order',
		'stylelint-config-recommended-scss'
	],
	ignoreFiles: [
		'./coverage/**/*',
		'./dist/**/*',
		'./node_modules/**/*',
		'./src/**/__snapshots__/**/*'
	],
	plugins: [
		'stylelint-order',
		'stylelint-scss',
		'stylelint-images',
		'stylelint-declaration-block-no-ignored-properties'
	],
	reportInvalidScopeDisables: true,
	reportNeedlessDisables: true,
	rules: {
		'images/broken': true,
		'images/prefer-data-uri': 256,
		'indentation': 'tab',
		'no-empty-source': null,
		'plugin/declaration-block-no-ignored-properties': true
	}
};
