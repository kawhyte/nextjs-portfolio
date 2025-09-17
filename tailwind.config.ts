
import type { Config } from 'tailwindcss'

export default {
  content: [
		"./components/**/*.{js,ts,jsx,tsx}",
		"./ui/**/*.{js,ts,jsx,tsx}",
		"./assets/**/*.{js,ts,jsx,tsx,png,svg}",
		"./src/**/*.{js,ts,jsx,tsx,mdx}",
		"./intro-template/**/*.{js,ts,jsx,tsx}",
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./plugins/**/*.{js,ts,jsx,tsx}",
		"./public/**/*.html",
	],
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
      lineClamp: {
        '1': '1',
        '2': '2',
        '3': '3',
      },

      // Add color classes for our new design system
      colors: {
        'teal': {
          50: 'var(--color-teal-50)',
          100: 'var(--color-teal-100)',
          200: 'var(--color-teal-200)',
          300: 'var(--color-teal-300)',
          400: 'var(--color-teal-400)',
          500: 'var(--color-teal-500)',
          600: 'var(--color-teal-600)',
          700: 'var(--color-teal-700)',
          800: 'var(--color-teal-800)',
          900: 'var(--color-teal-900)',
          950: 'var(--color-teal-950)',
        },
        'blue': {
          50: 'var(--color-blue-50)',
          100: 'var(--color-blue-100)',
          200: 'var(--color-blue-200)',
          300: 'var(--color-blue-300)',
          400: 'var(--color-blue-400)',
          500: 'var(--color-blue-500)',
          600: 'var(--color-blue-600)',
          700: 'var(--color-blue-700)',
          800: 'var(--color-blue-800)',
          900: 'var(--color-blue-900)',
          950: 'var(--color-blue-950)',
        },
        'purple': {
          50: 'var(--color-purple-50)',
          100: 'var(--color-purple-100)',
          200: 'var(--color-purple-200)',
          300: 'var(--color-purple-300)',
          400: 'var(--color-purple-400)',
          500: 'var(--color-purple-500)',
          600: 'var(--color-purple-600)',
          700: 'var(--color-purple-700)',
          800: 'var(--color-purple-800)',
          900: 'var(--color-purple-900)',
          950: 'var(--color-purple-950)',
        },
        'orange': {
          50: 'var(--color-orange-50)',
          100: 'var(--color-orange-100)',
          200: 'var(--color-orange-200)',
          300: 'var(--color-orange-300)',
          400: 'var(--color-orange-400)',
          500: 'var(--color-orange-500)',
          600: 'var(--color-orange-600)',
          700: 'var(--color-orange-700)',
          800: 'var(--color-orange-800)',
          900: 'var(--color-orange-900)',
          950: 'var(--color-orange-950)',
        },
        // Accent background utilities
        'accent-teal-subtlest': 'var(--color-accent-teal-subtlest)',
        'accent-teal-subtle': 'var(--color-accent-teal-subtle)',
        'accent-blue-subtlest': 'var(--color-accent-blue-subtlest)',
        'accent-blue-subtle': 'var(--color-accent-blue-subtle)',
        'accent-purple-subtlest': 'var(--color-accent-purple-subtlest)',
        'accent-purple-subtle': 'var(--color-accent-purple-subtle)',
        'accent-orange-subtlest': 'var(--color-accent-orange-subtlest)',
        'accent-orange-subtle': 'var(--color-accent-orange-subtle)',
      },

	  keyframes: {
				float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-4px)' },
        },
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
				// Add marquee keyframes
				"marquee-infinite": {
					"0%": { transform: "translateX(0%)" },
					"100%": { transform: "translateX(-100%)" },
				},
			},
			animation: {
				wave: "wave 1.5s infinite",
				float: 'float 3s ease-in-out infinite',
				// Add marquee animation utility
				"marquee-infinite": "marquee-infinite 85s linear infinite", // Adjust duration (25s) as needed
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
	},
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ],
} satisfies Config
