module.exports = {
	content: [
		"./components/**/*.{js,ts,jsx,tsx}",
		"./ui/**/*.{js,ts,jsx,tsx}",
		"./assets/**/*.{js,ts,jsx,tsx,png,svg}",
		"./components/**/*.{js,ts,jsx,tsx}",
		"./src/**/*.{js,ts,jsx,tsx,mdx}",
		"./intro-template/**/*.{js,ts,jsx,tsx}",
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./plugins/**/*.{js,ts,jsx,tsx}",
		"./public/**/*.html",
	],
	//   purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
	//   darkMode: false, // or 'media' or 'class'
	theme: {
		screens: {
			sm: "375px",
			md: "768px",
			lg: "1200px",
		},
		container: {
			center: true,
			padding: {
				DEFAULT: "1rem",
				md: "2rem",
			},
		},
		extend: {
			keyframes: {
				wave: {
					"0%": { transform: "rotate(0.0deg)" },
					"15%": { transform: "rotate(14.0deg)" },
					"30%": { transform: "rotate(-8.0deg)" },
					"40%": { transform: "rotate(14.0deg)" },
					"50%": { transform: "rotate(-4.0deg)" },
					"60%": { transform: "rotate(10.0deg)" },
					"70%": { transform: "rotate(0.0deg)" },
					"100%": { transform: "rotate(0.0deg)" },
				},
			},
			animation: {
				wave: "wave 1.5s infinite",
			},

			linearGradientColors: {
				"icon-gradient": ["#FF0000", "#0000FF"],
			},

			fontFamily: {
				sans: "var(--font-sans)",
				serif: "var(--font-serif)",
			},
		},
		fontSize: {
			tiny: ".675rem",
			xs: ".75rem",
			sm: ".86rem",
			base: "1rem",
			lg: "1.125rem",
			xl: "1.25rem",
			"2xl": "1.70rem",
			"3xl": "2.10rem",
			"4xl": "2.3rem",
			"4.5xl": "2.5rem",
			"5xl": "3rem",
			"5.5xl": "3.5rem",
			"6xl": "4rem",
			"7xl": "5rem",
			"7.5xl": "6rem",
			"8xl": "7rem",
			"8.5xl": "8rem",
			"9xl": "9rem",
			"10xl": "10rem",
			"11xl": "11rem",
			"12xl": "12rem",
			"15xl": "15rem",
		},

		//     lineClamp: {
		//     1: 1,
		//     2: 2,
		//     3: 3
		//   },
	},
	variants: {
		extend: {},
	},

	plugins: [require("tailwindcss-line-clamp")],
};
