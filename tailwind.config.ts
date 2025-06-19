import type { Config } from 'tailwindcss';

const config: Config = {
    content: ['./pages/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}'],
    theme: {
        extend: {
            gridTemplateColumns: {
                '13': 'repeat(13, minmax(0, 1fr))',
            },
            fontFamily: {
                'barlow-semi-condensed': ['Barlow Semi Condensed', 'sans-serif'],
                'neue-haas-grotesk': ['Neue Haas Grotesk Text Pro', 'sans-serif'],
            },
            colors: {
                'primary-normal': {
                    DEFAULT: 'var(--primary-normal)',
                },
                'primary-accent': {
                    DEFAULT: 'var(--primary-accent)',
                },
                'primary-subdued': {
                    DEFAULT: 'var(--primary-subdued)',
                },
                secondary: {
                    DEFAULT: 'var(--secondary)',
                },
                'neutral-accent-light': {
                    DEFAULT: 'var(--neutral-accent-light)',
                },
                'neutral-subdued': {
                    DEFAULT: 'var(--neutral-subdued)',
                },
                'neutral-accent': {
                    DEFAULT: 'var(--neutral-accent)',
                },
                'neutral-invert-accent': {
                    DEFAULT: 'var(--neutral-invert-accent)',
                },
                'neutral-normal': {
                    DEFAULT: 'var(--neutral-normal)',
                },
                'neutral-invert-normal': {
                    DEFAULT: 'var(--neutral-invert-normal)',
                },
            },
        },
        animation: {
            spin: 'spin 1s linear infinite',
            'spin-slow': 'spin 3s linear infinite',
        },
        keyframes: {
            shimmer: {
                '0%': { transform: 'translateX(-100%)' },
                '100%': { transform: 'translateX(100%)' },
            },
            spin: {
                '0%': { transform: 'rotate(0deg)' },
                '100%': { transform: 'rotate(360deg)' },
            },
            'spin-reverse': {
                '0%': { transform: 'rotate(0deg)' },
                '100%': { transform: 'rotate(-360deg)' },
            },
        },
    },
};
export default config;
