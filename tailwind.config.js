/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class',
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			colors: {
				primary: {
					100: '#D5DAE6',
					200: '#AAB6C9',
					300: '#8091AC',
					400: '#556D8F',
					// Your main deep blue color
					500: '#0F1A3A',
					600: '#0C152F',
					700: '#0A1227',
					800: '#070E1E',
					main: '#0F1A3A',
				},
				secondary: {
					100: '#FDF7E4',
					200: '#FBEFB9',
					300: '#F9E78F',
					400: '#F7D05F',
					// Your secondary rich gold color
					500: '#F5B92C',
					600: '#D1A026',
					700: '#AE8620',
					800: '#8A6D19',
					main: '#F5B92C',
				},
			},
		},
	},
	plugins: [],
};
