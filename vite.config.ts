import { defineConfig } from 'vite';
import { extname, relative, resolve } from 'path';
import { fileURLToPath } from 'node:url';
import { glob } from 'glob';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';

export default defineConfig({
	plugins: [react(), dts({ include: ['lib'] })],
	resolve: {
		alias: {
			'@Components': resolve(__dirname, 'src/components'),
		},
	},
	build: {
		lib: {
			entry: resolve(__dirname, 'lib/main.ts'),
			formats: ['es'],
		},
		rollupOptions: {
			external: ['react', 'react/jsx-runtime'],
			input: Object.fromEntries(
				glob.sync('src/**/*.{ts,tsx}').map((file) => [
					// ? The name of the entry point
					// ? src/nested/foo.ts becomes nested/foo
					relative('src', file.slice(0, file.length - extname(file).length)),
					// ? The absolute path to the entry file
					// ? src/nested/foo.ts becomes /project/src/nested/foo.ts
					fileURLToPath(new URL(file, import.meta.url)),
				])
			),
		},
	},
});
