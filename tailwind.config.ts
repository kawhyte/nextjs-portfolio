
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

      // Custom Max Width Utilities
      maxWidth: {
        '8xl': '88rem',   // 1408px
        '9xl': '96rem',   // 1536px
        '10xl': '104rem', // 1664px
        '11xl': '112rem', // 1792px
      },

      // 8-Point Spacing System - Following Atlassian Design Principles
      spacing: {
        // Micro spacing (0.25x to 1x)
        '025': '2px',   // 0.25 × 8px
        '050': '4px',   // 0.5 × 8px
        '100': '8px',   // 1 × 8px

        // Small spacing (1.5x to 2x)
        '150': '12px',  // 1.5 × 8px
        '200': '16px',  // 2 × 8px

        // Medium spacing (3x to 4x)
        '300': '24px',  // 3 × 8px
        '400': '32px',  // 4 × 8px

        // Large spacing (5x to 8x)
        '500': '40px',  // 5 × 8px
        '600': '48px',  // 6 × 8px
        '800': '64px',  // 8 × 8px

        // Macro spacing (10x+)
        '1000': '80px', // 10 × 8px
        '1200': '96px', // 12 × 8px
        '1600': '128px', // 16 × 8px
      },

      // Typography Line Heights - 8px Grid Aligned
      lineHeight: {
        'tight-8': '16px',   // 2 × 8px - for small text
        'normal-8': '24px',  // 3 × 8px - for body text
        'relaxed-8': '32px', // 4 × 8px - for larger text
        'loose-8': '40px',   // 5 × 8px - for headings
        'extra-8': '48px',   // 6 × 8px - for large headings
        'mega-8': '56px',    // 7 × 8px - for hero text
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
			// Typography with 8-point grid aligned line heights
			tiny: [".675rem", { lineHeight: "16px" }],    // 2×8px
			xs: [".75rem", { lineHeight: "16px" }],       // 2×8px
			sm: [".86rem", { lineHeight: "24px" }],       // 3×8px
			base: ["1rem", { lineHeight: "24px" }],       // 3×8px
			lg: ["1.125rem", { lineHeight: "32px" }],     // 4×8px
			xl: ["1.25rem", { lineHeight: "32px" }],      // 4×8px
			"2xl": ["1.70rem", { lineHeight: "40px" }],   // 5×8px
			"3xl": ["2.10rem", { lineHeight: "48px" }],   // 6×8px
			"4xl": ["2.3rem", { lineHeight: "48px" }],    // 6×8px
			"4.5xl": ["2.5rem", { lineHeight: "56px" }],  // 7×8px
			"5xl": ["3rem", { lineHeight: "56px" }],      // 7×8px
			"5.5xl": ["3.5rem", { lineHeight: "64px" }],  // 8×8px
			"6xl": ["4rem", { lineHeight: "64px" }],      // 8×8px
			"7xl": ["5rem", { lineHeight: "80px" }],      // 10×8px
			"7.5xl": ["6rem", { lineHeight: "96px" }],    // 12×8px
			"8xl": ["7rem", { lineHeight: "112px" }],     // 14×8px
			"8.5xl": ["8rem", { lineHeight: "128px" }],   // 16×8px
			"9xl": ["9rem", { lineHeight: "144px" }],     // 18×8px
			"10xl": ["10rem", { lineHeight: "160px" }],   // 20×8px
			"11xl": ["11rem", { lineHeight: "176px" }],   // 22×8px
			"12xl": ["12rem", { lineHeight: "192px" }],   // 24×8px
			"15xl": ["15rem", { lineHeight: "240px" }],   // 30×8px
		},
	},
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ],
} satisfies Config
