/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "background": "rgba(var(--bg-color))",
        "foreground": "rgba(var(--text-color))",
        "card-bg": "rgba(var(--card-bg))",
        "card-border": "rgba(var(--card-border))",
        "button-bg": "rgba(var(--button-bg))",
        "button-text": "rgba(var(--button-text))",
        "skill-bg": "rgba(var(--skill-bg))",
        "code-quote": "rgba(var(--code-quote))",
        "code-keyword": "rgba(var(--code-keyword))",
        "icons": "rgba(var(--icons))",
	"lines": "rgba(var(--lines))",
	"special": "rgba(var(--special))"
      }
    },
  },
  plugins: [],
}

