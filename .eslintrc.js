module.exports = {
	extends: [
		'next/core-web-vitals', 'airbnb', 'airbnb-typescript',
	],
	parserOptions: {
		project: './tsconfig.eslint.json',
	},
	rules: {
		'react/react-in-jsx-scope': 'off',
		'no-tabs': 'off',
		indent: 'off',
		'@typescript-eslint/indent': ['error', 'tab'],
		'react/jsx-indent': ['error', 'tab'],
		'react/jsx-indent-props': ['error', 'tab'],
		'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
	},
};
