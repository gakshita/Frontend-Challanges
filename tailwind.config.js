/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            gridTemplateColumns: {
                pins: "repeat(auto-fill, 300px)"
            }
        }
    },
    plugins: []
};
