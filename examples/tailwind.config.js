const { theme, plugins } = require("@jigjoy-io/tailwind-config")

module.exports = {
	content: ["./src/**/*.{html,js,ts,jsx,tsx}", "./node_modules/@jigjoy-io/ui/dist/*"],
	theme: {
		...theme,
	},
	plugins: [...plugins],
}