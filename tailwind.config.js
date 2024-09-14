module.exports = {
	content: [
		'./components/**/*.{js,ts,jsx,tsx}',
		'./ui/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
		'./src/**/*.{js,ts,jsx,tsx,mdx}',
		'./intro-template/**/*.{js,ts,jsx,tsx}',
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./plugins/**/*.{js,ts,jsx,tsx}',
		'./public/**/*.html',
	  ],
//   purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
//   darkMode: false, // or 'media' or 'class'
  theme: {

    extend: {},
    fontSize: {
			xs: ".75rem",
			sm: ".875rem",
			tiny: ".875rem",
			base: "1rem",
			lg: "1.125rem",
			xl: "1.25rem",
			"2xl": "1.5rem",
			"3xl": "1.875rem",
			"4xl": "2.25rem",
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
  

  plugins: [require('tailwindcss-line-clamp')],
}
