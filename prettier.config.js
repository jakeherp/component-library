/** @type {import("prettier").Config} */
const config = {
	plugins: [
		import('prettier-plugin-tailwindcss'),
		import('@trivago/prettier-plugin-sort-imports'),
	],
	arrowParens: 'always',
	bracketSpacing: true,
	jsxSingleQuote: false,
	printWidth: 80,
	proseWrap: 'preserve',
	quoteProps: 'as-needed',
	semi: true,
	singleQuote: true,
	tabWidth: 2,
	trailingComma: 'es5',
	tailwindConfig: './tailwind.config.js',
	useTabs: true,
	importOrder: [
		'^[./]',
		'^@Components/(.*)$',
		'^@Hooks/(.*)$',
		'^@Lib/(.*)$',
		'<THIRD_PARTY_MODULES>',
	],
	importOrderSeparation: true,
	importOrderSortSpecifiers: true,
};

export default config;
