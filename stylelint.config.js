/** @type {import("stylelint").Config} */
export default {
	extends: "stylelint-config-sweet",
	rules: {
		"@stylistic/indentation": "tab",
		"selector-pseudo-class-no-unknown": [true, {
			ignorePseudoClasses: ["global"]
		}]
	}
};
