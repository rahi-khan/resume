module.exports = {
    purge: ["./src/**/*.{js,jsx,ts,tsx}"],

    //! class: Toggle dark mode manually
    //! media: Dark mode depends on OS
    darkMode: "media",
    theme: {
        extend: {},
        listStyleType: {
            none: "none",
            disc: "disc",
            decimal: "decimal",
            square: "square",
        
        },
        fontFamily: {
            pops: ["Poppins", "sans-serif"],
        },
    },
    variants: {
        extend: {
            padding: ["last"],
            margin: ["last"],
        },
    },
    plugins: [],
};
