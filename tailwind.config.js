module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        'calc': 'calc(100vh - 65px)',
      }
    },
  },
  plugins: [],
}
