/**
 * ASN ÖZEL FORKLİFT SERVİS — Tailwind CSS v3 yapılandırması.
 *
 * Tasarım sistemi: Endüstriyel Kehribar-Turuncu & Derin Arduvaz/Lacivert.
 * - brand-red / brand-redDark  : birincil CTA (#C2410C) ve hover/footer koyu bakır
 *                                tonu (#9A3412); beyaz metinle WCAG AA (>= 4.5:1)
 *                                kontrast sağlar (eski sınıf adları korundu).
 * - brand-orange / brand-amber : vurgu kehribarı (#F59E0B / #D97706)
 * - brand-navy / brand-signal  : lacivert-arduvaz zemin ve uyarı/sinyal tonları
 * - surface-*, text-*, border-*: tema değişkenlerine (src/input.css) bağlıdır;
 *                                açık/koyu geçişi otomatik olur.
 * - toyo.*                     : geriye dönük uyumluluk takma adları (yeni palete eşlenir)
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
    './404.html',
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
        brand: {
          red: '#C2410C',       // birincil CTA (beyaz metin 5.18:1 WCAG AA)
          redHover: '#9A3412',  // hover (beyaz metin 7.31:1)
          redDark: '#9A3412',   // hover & footer arka planı koyu bakır-kehribar (beyaz metin 7.31:1)
          orange: '#F59E0B',    // vurgu kehribarı
          amber: '#D97706',
          amberHover: '#B45309', // beyaz metin 5.02:1
          amberLight: '#FBBF24',
          navy: '#0F172A',
          navyDeep: '#090D16',
          navySoft: '#1E293B',
          signal: '#EF4444',    // yalnızca acil durum / hata sinyali
          signalSoft: '#FEE2E2',
        },
        surface: {
          bg: 'var(--bg-body)',
          DEFAULT: 'var(--bg-surface)',
          card: 'var(--bg-card)',
          elevated: 'var(--bg-elevated)',
        },
        text: {
          primary: 'var(--text-primary)',
          secondary: 'var(--text-secondary)',
          muted: 'var(--text-muted)',
        },
        border: {
          DEFAULT: 'var(--border-color)',
          strong: 'var(--border-strong)',
        },
        toyo: {
          red: '#C2410C',
          redHover: '#9A3412',
          redDark: '#9A3412',
          silver: '#94A3B8',
          silverLight: '#CBD5E1',
          graphite: '#0F172A',
          darkBg: '#090D16',
          darkCard: '#111827',
          darkSurface: '#0F172A',
          darkBorder: '#334155',
        },
      },
    },
  },
  plugins: [],
};
