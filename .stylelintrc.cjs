module.exports = {
	extends: ["stylelint-config-standard-scss", "stylelint-config-recess-order"],
	rules: {
		"keyframes-name-pattern": null,
		"scss/at-function-pattern": null,
		"scss/at-mixin-pattern": null,
		"scss/dollar-variable-pattern": null,
		"scss/percent-placeholder-pattern": null,
		"scss/selector-no-union-class-name": null,
		"selector-class-pattern": null,
		"selector-id-pattern": null,
    "no-descending-specificity": null,
    "media-feature-name-no-unknown": [
      true,
      {
        "ignoreMediaFeatureNames": [
          "min-device-pixel-ratio"
        ]
      }
    ],
    "unit-no-unknown": [
      true,
      {
        "ignoreUnits": [
          "/xs/",
          "/xl/"
        ]
      }
    ],
	},
	ignoreFiles: ["**/node_modules/**", "./dist/**", "./src/styles/settings/**"],
};
