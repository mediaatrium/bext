module.exports = {
	mode: 'jit',
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx}',
		'./src/components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		fontSize: {
			html: '62.5%',
			1.6: '1.6rem',
			2: '2rem',
			5: '5rem',
		},
		fontFamily: {
			roboto: ['Roboto', 'sans-serif'],
		},
		screens: {
			'2xl': { max: '1536px' },
			xl: { max: '1280px' },
			lg: { max: '1024px' },
			md: { max: '768px' },
			sm: { max: '640px' },
			xs: { max: '500px' },
		},
		spacing: {
			0: '0',
			0.1: '0.1rem',
			0.2: '0.2rem',
			0.3: '0.3rem',
			0.4: '0.4rem',
			0.5: '0.5rem',
			0.6: '0.6rem',
			0.7: '0.7rem',
			0.8: '0.8rem',
			0.9: '0.9rem',
			1: '1rem',
			1.6: '1.6rem',
			2: '2rem',
			3: '3rem',
			4: '4rem',
			5: '5rem',
			6: '6rem',
			7: '7rem',
			8: '8rem',
			9: '9rem',
			10: '10rem',
			12: '12rem',
			14: '15rem',
			16: '16rem',
			18: '16rem',
			20: '20rem',
			25: '25rem',
			30: '30rem',
			40: '40rem',
			50: '50rem',
			60: '60rem',
			70: '70rem',
			80: '80rem',
			90: '90rem',
			100: '100rem',
		},
		extend: {
			colors: {
				gray: {
					DEFAULT: '#222222',
				},
			},
		},
	},
	variants: {},
};