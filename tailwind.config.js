/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['GT Maru Mega'],
        body: ['GT Maru Shaded'],
      },
    },
  },
  plugins: [],
  darkMode: ['class', '.darkmode'],
}
