/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				display: ['Archivo', 'sans-serif'],
				serif: ['"Source Serif 4"', 'serif'],
			},
			colors: {
				ink: { DEFAULT: '#121a2b', soft: '#333c4d' },
				muted: '#5d6577',
				line: '#e2e5eb',
				navy: {
					DEFAULT: '#0e1b33',
					line: '#2a3d63',
					dim: '#5c6f94',
					text: '#c9d3e6',
					body: '#dfe5f1',
				},
				navy2: '#16284a',
				accent: { DEFAULT: '#c8102e', hover: '#a50d26' },
				soft: '#f3f5f8',
			},
		},
	},
	plugins: [],
}
