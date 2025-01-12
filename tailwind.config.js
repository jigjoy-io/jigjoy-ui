const { theme, plugins, content } = require("@jigjoy-io/tailwind-config")

module.exports = {
	content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
	theme: {
		...theme,
	},
	plugins: [...plugins],
}
