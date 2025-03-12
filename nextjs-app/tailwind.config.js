// tailwind.config.js
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",      // ✅ Next.js の app/ ディレクトリを含める
    "./components/**/*.{js,ts,jsx,tsx}", // ✅ components/ 内のスタイルを適用
    "./styles/globals.css"             // ✅ styles/globals.css を明示的に指定
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
