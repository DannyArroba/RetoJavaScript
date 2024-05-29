/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['ui-sans-serif', 'system-ui',],
        'serif': ['ui-serif', 'Georgia',],
        'mono': ['ui-monospace', 'SFMono-Regular',],
        'source-code': ['"Source Code Pro"', 'monospace']
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
};