/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        fontSize: {
            xs: ["12px", "16px"],
            sm: ["14px", "20px"],
            base: ["16px", "19.5px"],
            lg: ["18px", "21.94px"],
            xl: ["20px", "24.38px"],
            "2xl": ["24px", "29.26px"],
            "3xl": ["28px", "50px"],
            "4xl": ["48px", "58px"],
            "8xl": ["96px", "106px"],
        },
        extend: {
            fontFamily: {
                palanquin: ["Palanquin", "sans-serif"],
                montserrat: ["Montserrat", "sans-serif"],
            },
            colors: {
                primary: "#F5F5F5",
                "coral-red": "#D72B2B",
                "slate-gray": "#6D6D6D",
                "pale-blue": "#F7F7F7",
                "white-400": "rgba(255, 255, 255, 0.80)",
                "gs-red": "#D72B2B",
                "gs-black": "#1A1A1A",
                "gs-gold": "#C9A84C",
            },
            boxShadow: {
                "3xl": "0 10px 40px rgba(0, 0, 0, 0.15)",
            },
            backgroundImage: {
                hero: "url('assets/images/collection-background.svg')",
                card: "url('assets/images/thumbnail-background.svg')",
            },
            screens: {
                wide: "1440px",
            },
        },
    },
    plugins: [],
};
