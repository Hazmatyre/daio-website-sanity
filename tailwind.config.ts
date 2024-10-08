import type { Config } from "tailwindcss"
import typography from '@tailwindcss/typography';
import plugin from 'tailwindcss/plugin';

const config = {
  darkMode: ["selector"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
    './sanity/**/*.{ts,tsx}',
  ],
  prefix: "",
  presets: [require("@relume_io/relume-tailwind")],
  theme: {
    container: {
      center: true,
      // padding: "2rem",
      // screens: {
      //   "2xl": "1400px",
      // },
    },
    extend: {
      typography: ({ theme }: any) => ({
        daioGreen: {
          css: {
            '--tw-prose-body': theme('colors.brand[700]'),
            '--tw-prose-headings': theme('colors.brand[700]'),
            '--tw-prose-lead': theme('colors.brand[700]'),
            '--tw-prose-links': theme('colors.brand[800]'),
            '--tw-prose-bold': theme('colors.brand[700]'),
            '--tw-prose-counters': theme('colors.brand[600]'),
            '--tw-prose-bullets': theme('colors.brand[600]'),
            // '--tw-prose-hr': theme('colors.brand[300]'),
            '--tw-prose-hr': theme('colors.brand[400]'),
            '--tw-prose-quotes': theme('colors.brand[800]'),
            // '--tw-prose-quote-borders': theme('colors.brand[300]'),
            '--tw-prose-quote-borders': theme('colors.brand[600]'),
            '--tw-prose-captions': theme('colors.brand[700]'),
            '--tw-prose-code': theme('colors.brand[900]'),
            // '--tw-prose-pre-code': theme('colors.brand[100]'),
            '--tw-prose-pre-code': theme('colors.brand[200]'),
            '--tw-prose-pre-bg': theme('colors.brand[900]'),
            // '--tw-prose-th-borders': theme('colors.pink[300]'),
            '--tw-prose-th-borders': theme('colors.pink[200]'),
            '--tw-prose-td-borders': theme('colors.brand[200]'),
            '--tw-prose-invert-body': theme('colors.brand[200]'),
            '--tw-prose-invert-headings': theme('colors.white'),
            // '--tw-prose-invert-lead': theme('colors.brand[300]'),
            '--tw-prose-invert-lead': theme('colors.brand[400]'),
            '--tw-prose-invert-links': theme('colors.white'),
            '--tw-prose-invert-bold': theme('colors.white'),
            '--tw-prose-invert-counters': theme('colors.brand[400]'),
            '--tw-prose-invert-bullets': theme('colors.brand[600]'),
            '--tw-prose-invert-hr': theme('colors.brand[700]'),
            // '--tw-prose-invert-quotes': theme('colors.brand[100]'),
            '--tw-prose-invert-quotes': theme('colors.brand[200]'),
            '--tw-prose-invert-quote-borders': theme('colors.brand[700]'),
            '--tw-prose-invert-captions': theme('colors.brand[400]'),
            '--tw-prose-invert-code': theme('colors.white'),
            // '--tw-prose-invert-pre-code': theme('colors.brand[300]'),
            '--tw-prose-invert-pre-code': theme('colors.brand[400]'),
            '--tw-prose-invert-pre-bg': 'rgb(0 0 0 / 50%)',
            '--tw-prose-invert-th-borders': theme('colors.brand[600]'),
            '--tw-prose-invert-td-borders': theme('colors.brand[700]'),
          },
        },
      }),
      transitionDuration: {
        '2000': '10000ms',
      },
      fontFamily: {
        sans: ["var(--font-montserrat)"],
        serif: ["var(--font-eb-garamond)"]
      },
      colors: {
        brand: {
          "floralWhite": "hsl(var(--brand-floral-white))",
          "naplesYellow": "hsl(var(--brand-naples-yellow))",
          "900": "hsl(var(--brand-dark-green))",
          "800": "hsl(var(--brand-british-racing-green))",
          "700": "hsl(var(--brand-dartmouth-green))",
          "600": "hsl(var(--brand-sea-green))",
          "500": "hsl(var(--brand-jade))",
          "400": "hsl(var(--brand-spring-green))",
          "200": "hsl(var(--brand-aquamarine))",
          "50": "hsl(var(--brand-mint-green))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) / 1.618)",
        sm: "calc(var(--radius) / 3.236)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "loop-vertically": {
          // from: { transform: "translateY(40%)" },
          // to: { transform: "translateY(-100%)" }
          from: { transform: "translateY(0%)" },
          to: { transform: "translateY(-50%)" }
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "loop-vertically2": "loop-vertically 30s linear infinite"
      },
    },
  },
  plugins: [
    require('@tailwindcss/container-queries'),
    require("tailwindcss-animate"),
    typography,
    plugin(({ addUtilities }) => {
      addUtilities({
        ".no-overflow-anchoring": {
          overflowAnchor: "none",
        },
      });
    }),
    plugin(({ addComponents, addBase, }) => {
      addComponents({
        ".type-desktop-h1": {
          "@apply font-serif text-[3.5rem] leading-[120%] font-bold": ""
        },
        ".type-desktop-h2": {
          "@apply font-serif text-[3rem] leading-[130%] font-bold": ""
        },
        ".type-desktop-h3": {
          "@apply font-serif text-[2.5rem] leading-[130%] font-bold": ""
        },
        ".type-desktop-h4": {
          "@apply font-serif text-[2rem] leading-[130%] font-bold": ""
        },
        ".type-desktop-h5": {
          "@apply font-serif text-[1.5rem] leading-[140%] font-bold": ""
        },
        ".type-desktop-h6": {
          "@apply font-serif text-[1.25rem] leading-[140%] font-bold": ""
        },
        ".type-mobile-h1": {
          "@apply font-serif text-[2.5rem] leading-[120%] font-bold": ""
        },
        ".type-mobile-h2": {
          "@apply font-serif text-[2.25rem] leading-[130%] font-bold": ""
        },
        ".type-mobile-h3": {
          "@apply font-serif text-[2rem] leading-[130%] font-bold": ""
        },
        ".type-mobile-h4": {
          "@apply font-serif text-[1.5rem] leading-[140%] font-bold": ""
        },
        ".type-mobile-h5": {
          "@apply font-serif text-[1.25rem] leading-[140%] font-bold": ""
        },
        ".type-mobile-h6": {
          "@apply font-serif text-[1.125rem] leading-[140%] font-bold": ""
        },
        ".type-large": {
          "@apply font-sans text-[1.25rem] leading-[150%]": ""
        },
        ".type-medium": {
          "@apply font-sans text-[1.125rem] leading-[150%]": ""
        },
        ".type-regular": {
          "@apply font-sans text-[1rem] leading-[150%]": ""
        },
        ".type-small": {
          "@apply font-sans text-[0.875rem] leading-[150%]": ""
        },
        ".type-tiny": {
          "@apply font-sans text-[0.75rem] leading-[150%]": ""
        },
      });
    }),
  ],
} satisfies Config

export default config