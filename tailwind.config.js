const colors = require('tailwindcss/colors');

module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	darkMode: 'class',
	theme: {
		extend: {
			margin: {
				'-50': '-50px',
			},
			spacing: {
				'15': '60px',
			},
			colors: {
				// Light colors
				'primary-light': '#F7F8FC',
				'secondary-light': '#FFFFFF',
				'ternary-light': '#f6f7f8',

				// Dark colors
				'primary-dark': '#0D2438',
				'secondary-dark': '#102D44',
				'ternary-dark': '#1E3851',

				// Extended v3 color
				gray: colors.neutral,
			},
			container: {
				padding: {
					DEFAULT: '0.5rem',
					sm: '1rem',
					lg: '2.5rem',
					xl: '3rem',
					'2xl': '4rem',
				},
			},
		},
	},
	plugins: [require('@tailwindcss/forms')],
};
