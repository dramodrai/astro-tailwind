/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode:'class',
	content: ['./src/**/*.{astro,html,md,js,jsx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
	},
	plugins: [require("daisyui")],
	daisyui: {
		
	  }
	
}
