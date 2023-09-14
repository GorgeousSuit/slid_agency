/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                satoshi: ["Satoshi", "sans-serif"],
                inter: ["Inter", "sans-serif"],
            },
            animation: {
                "spin-slow": "spin 8s linear infinite",
                wiggle: "wiggle 1s ease-in-out infinite",
                "scale-up": "scale-up 0.1s ease forwards",
            },
            keyframes: {
                wiggle: {
                    "0%, 100%": { transform: "rotate(-3deg)" },
                    "50%": { transform: "rotate(3deg)" },
                },
            },
            colors: {
                "primary-orange": "#FF5722",
            },
        },
    },
    plugins: [],
};
