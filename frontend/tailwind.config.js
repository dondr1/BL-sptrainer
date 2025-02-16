/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				'accent-pink-200': '#F8BBD0', // Example hex
				'accent-orange-200': '#FFE0B2', // Example hex
			},
		},
	},
	plugins: [],
};
