module.exports = {
  extends: [
    "stylelint-config-standard",
    "stylelint-config-idiomatic-order",
    "stylelint-config-recommended-scss",
  ],
  plugins: [
    "stylelint-order",
    "stylelint-scss",
    "stylelint-images",
    "stylelint-declaration-block-no-ignored-properties",
  ],
  rules: {
    "no-empty-source": null,
    "images/broken": true,
    "images/prefer-data-uri": 256,
    "plugin/declaration-block-no-ignored-properties": true,
    indentation: "tab",
  },
  ignoreFiles: [
    "./coverage/**/*",
    "./dist/**/*",
    "./node_modules/**/*",
    "./src/**/__snapshots__/**/*",
  ],
  reportNeedlessDisables: true,
  reportInvalidScopeDisables: true,
};
