import { defineConfig } from "tsup"

export default defineConfig({
	format: ["cjs", "esm"],
	entry: ["src/index.ts"],
	external: ["react", "react-dom", "framer-motion"],
	dts: true,
	clean: true,
})
