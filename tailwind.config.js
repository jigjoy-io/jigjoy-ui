/** @type {import('tailwindcss').Config} */
const { theme, plugins } = require("@jigjoy-io/tailwind-config")

module.exports = {
	content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
	prefix: "jigjoyui-",
	theme: {
		...theme,
	},
	plugins: [...plugins],
}
