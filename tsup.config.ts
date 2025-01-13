import { defineConfig } from "tsup"

export default defineConfig({
	format: ["cjs", "esm"],
	entry: ["src/index.ts"],
	external: ["react", "react-dom"], // Exclude these from the bundle
	dts: true,
	shims: true,
	skipNodeModulesBundle: true,
	clean: true,
})
