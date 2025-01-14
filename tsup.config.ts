import { defineConfig } from "tsup"

export default defineConfig({
	format: ["cjs", "esm"],
	entry: ["src/index.ts"],
	external: ["react", "react-dom", "framer-motion"],
	target: "es2019",
	clean: true,
})
