/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        navy: {
          950: "#060f1f",
          900: "#0a1628",
          800: "#0f1f3a",
          700: "#162a4a",
          600: "#1f3a66",
        },
        accent: {
          DEFAULT: "#22d3ee",
          dim: "#0891b2",
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      maxWidth: {
        prose: '65ch',
      },
    },
  },
  plugins: [],
};
