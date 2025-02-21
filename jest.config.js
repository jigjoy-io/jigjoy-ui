/** @type {import('ts-jest').JestConfigWithTsJest} **/
module.exports = {
	preset: "ts-jest",
	testEnvironment: "jsdom",
	setupFilesAfterEnv: ["<rootDir>/src/setupTests.ts"],
	transform: {
		"^.+.tsx?$": ["ts-jest", {}],
	},
}
