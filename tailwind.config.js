/**
 * Tailwind CSS v3 yapılandırması — index.html içindeki inline tailwind.config
 * bloğunun birebir karşılığı (B1: CDN'den yerel derlemeye geçiş).
 *
 * NOT (B1/B4): Font yığını sadeleştirildi — iki eski ek Google fontu siteden
 * kaldırıldı. display/brand => Montserrat, mono => sistem monospace yığını.
 *
 * Yeni bir HTML sayfası eklenirse content dizisine ekleyin ve
 * `npm run build:css` ile yeniden derleyin.
 */
module.exports = {
  darkMode: 'class',
  content: [
    './index.html',
    './kvkk.html',
    './garanti.html',
    './hakkinda.html',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Montserrat', 'sans-serif'],
        brand: ['Montserrat', 'sans-serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Consolas', 'monospace'],
      },
      colors: {
        toyo: {
          red: '#C8102E',
          redHover: '#A00D25',
          redDark: '#FF4D5E',
          silver: '#9BA1A6',
          silverLight: '#D8DCE0',
          graphite: '#15181B',
          darkBg: '#0F1114',
          darkCard: '#1B1F23',
          darkSurface: '#171A1E',
          darkBorder: '#2E3439',
        },
      },
    },
  },
  plugins: [],
};
