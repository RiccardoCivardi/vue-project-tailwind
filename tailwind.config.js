/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "var(--color-primary-50)",
          100: "var(--color-primary-100)",
          200: "var(--color-primary-200)",
          300: "var(--color-primary-300)",
          400: "var(--color-primary-400)",
          500: "var(--color-primary-500)",
          600: "var(--color-primary-600)",
          700: "var(--color-primary-700)",
          800: "var(--color-primary-800)",
          900: "var(--color-primary-900)",
        },
        secondary: {
          50: "var(--colo5-secondary-50)",
          100: "var(--colo5-secondary-100)",
          200: "var(--colo5-secondary-200)",
          300: "var(--colo5-secondary-300)",
          400: "var(--colo5-secondary-400)",
        },
        neutral: {
          50: "var(--color-neutral-50)",
          100: "var(--color-neutral-100)",
          200: "var(--color-neutral-200)",
          300: "var(--color-neutral-300)",
          400: "var(--color-neutral-400)",
          500: "var(--color-neutral-500)",
          600: "var(--color-neutral-600)",
          700: "var(--color-neutral-700)",
          800: "var(--color-neutral-800)",
          900: "var(--color-neutral-900)",
        },
        success: {
          100: "var(--color-success-100)",
          200: "var(--color-success-200)",
          300: "var(--color-success-300)",
          400: "var(--color-success-400)",
          500: "var(--color-success-500)",
        },
        warning: {
          100: "var(--color-warning-100)",
          200: "var(--color-warning-200)",
          300: "var(--color-warning-300)",
          400: "var(--color-warning-400)",
          500: "var(--color-warning-500)",
        },
        danger: {
          50: "var(--color-danger-50)",
          100: "var(--color-danger-100)",
          200: "var(--color-danger-200)",
          300: "var(--color-danger-300)",
          400: "var(--color-danger-400)",
          500: "var(--color-danger-500)",
        },
        fill: {
          DEFAULT: "var(--color-fill)",
        },
      },
      fontFamily: {
        main: ["var(--font-family-main)", "sans-serif"],
      },
      // se tutti usano lo stesso font li dichiaro direttamente qui senza passare per la var
      // fontFamily: {
      //   poppins: ["Poppins", "sans-serif"],
      //   roboto: ["Roboto", "sans-serif"],
      // },
    },
  },
  darkMode: "class",
  plugins: [],
};
