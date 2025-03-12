// tailwind.config.js
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // ✅ app/ の全てのファイルを対象
    "./app/globals.css", // ✅ Tailwind CSS を globals.css に適用
    "./src/components/**/*.{js,ts,jsx,tsx}" // ✅ components/ も含める
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
