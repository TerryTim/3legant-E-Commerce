/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", 'node_modules/flowbite-react/lib/esm/**/*.js'],
	theme: {
		extend: {},
		colors: {
			primary: "#000000",
			Blue: "#377DFF",
			green: "#38CB89",
			orange: "#FFAB00",
			red: "#FF5630",
			"chinese-black": "#141718",
			"dark-gunmetal": "#232627",
			onyx: "#343839",
			nickel: "#6C7275",
			"bright-gray": "#E8ECEF",
			cultured: "#F3F5F7",
			white: "#ffff",
		},
		fontFamily: {
			poppins: ["Poppins", "sans-serif"],
			inter: ["Inter", "sans-serif"],
			"space-grotesk": ["Space Grotesk", "sans-serif"],
		},
	},
	plugins: [
		plugin(function ({ addBase }) {
			addBase({
				h1: { fontSize: "80px", fontWeight: "500", fontFamily: "Poppins" },
				h2: { fontSize: "72px", fontWeight: "500", fontFamily: "Poppins" },
				h3: { fontSize: "54px", fontWeight: "500", fontFamily: "Poppins" },
				h4: { fontSize: "40px", fontWeight: "500", fontFamily: "Poppins" },
				h5: { fontSize: "34px", fontWeight: "500", fontFamily: "Poppins" },
				h6: { fontSize: "28px", fontWeight: "500", fontFamily: "Poppins" },
			});
		}),
		require('flowbite/plugin'),
	],
};
