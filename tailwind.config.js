/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js"
  ],
  darkMode: 'media',
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        'image-one' : "url('assets/background.png')",
        'image-two' : "url()"
      }),
    },
  },
  plugins: [
    require("tw-elements/dist/plugin.cjs"),
    require('@tailwindcss/forms'),
  ],
  variants: {
    extend: {
      backgroundImage: ['dark'],
    },
  },
}

