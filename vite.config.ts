import { defineConfig } from "vite";

export default defineConfig({
	base: "/smoke-code-day-1/",
	server: {
		fs: {
			strict: false,
		},
	},
});
