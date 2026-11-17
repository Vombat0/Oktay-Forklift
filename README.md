# ASN ÖZEL FORKLİFT SERVİS — Kurumsal Statik Web Sitesi

İstanbul ve Marmara Bölgesi genelinde tüm yaygın forklift markaları için 7/24 yerinde mobil arıza tespiti, periyodik bakım, motor/şanzıman revizyonu, elektronik kart onarımı ve yedek parça hizmetleri sunan bağımsız özel teknik servis web sitesi.

## Dosya Yapısı

| Dosya | Açıklama |
|---|---|
| `index.html` | Ana sayfa (7/24 talep formu, hizmetler, SSS, teknik vaka ve referans bölümleri, JSON-LD) |
| `hakkinda.html` | Kurumsal tanıtım, hizmet bölgesi, çok markalı bağımsız özel servis bildirimi |
| `garanti.html` | Garanti ve servis koşulları (6 Ay / 500 Saat işçilik, 6–12 Ay parça garantisi) |
| `kvkk.html` | KVKK aydınlatma metni |
| `404.html` | Özel 404 hata sayfası (tema uyumlu, ana sayfaya dönüş + 7/24 telefon ve WhatsApp) |
| `src/input.css` | CSS kaynağı: Tailwind direktifleri, `:root` / `html.dark` tema değişkenleri, erişilebilirlik kuralları |
| `tailwind.config.js` | Tailwind CSS v3 yapılandırması (Endüstriyel Kehribar-Turuncu & Derin Arduvaz/Lacivert paleti) |
| `assets/styles.css` | Tailwind ile yerel derlenmiş, minified CSS (CDN kullanılmaz) |
| `assets/apple-touch-icon.png` | 180×180 px iOS / dokunmatik ekran ikonu |
| `favicon.ico` | 32×32 px masaüstü tarayıcı ikonu |
| `og-gorsel.png` | 1200×630 px Open Graph / sosyal paylaşım görseli |
| `robots.txt`, `sitemap.xml` | Arama motoru tarama ve indeksleme dosyaları (`asnforkliftservis.com.tr`) |
| `netlify.toml` | Netlify güvenlik başlıkları ve statik varlık önbellek kuralları |

## Tasarım Sistemi & Renk Paleti

Site, ağır sanayi ve iş makinesi güveni veren **Endüstriyel Kehribar-Turuncu & Koyu Çelik Lacivert-Arduvaz (Industrial Amber-Orange & Deep Slate/Navy)** tasarım sistemini kullanır:

- **Birincil CTA (`brand-red`):** `#C2410C` (Koyu Endüstriyel Turuncu-Bakır — beyaz metinle WCAG AA 5.18:1 kontrast)
- **Hover / Footer (`brand-redDark` / `brand-redHover`):** `#9A3412` (Koyu Bakır-Kehribar — beyaz metinle 7.31:1 kontrast)
- **Vurgu (`brand-orange`):** `#F59E0B` (Endüstriyel Kehribar)
- **Açık Tema Yüzeyleri (`:root`):** `--bg-primary: #F8FAFC`, `--bg-surface: #FFFFFF`, `--bg-elevated: #F1F5F9`, `--text-primary: #0F172A`, `--text-secondary: #334155`, `--text-muted: #475569`, `--border-color: #E2E8F0`
- **Koyu Tema Yüzeyleri (`html.dark`):** `--bg-primary: #090D16`, `--bg-surface: #111827`, `--bg-elevated: #1E293B`, `--text-primary: #F8FAFC`, `--text-secondary: #CBD5E1`, `--text-muted: #94A3B8`, `--border-color: #1E293B`

## CSS Derleme (Tailwind CSS)

Site, harici Tailwind CDN yerine yerel olarak derlenmiş `assets/styles.css` dosyasını kullanır.

```bash
npm install        # İlk kurulum (tailwindcss 3.4.19 devDependency)
npm run build:css  # src/input.css -> assets/styles.css (--minify)
npm run watch:css  # Geliştirme sırasında değişiklikleri otomatik derler
```

> **Not:** HTML sayfalarına yeni bir Tailwind yardımcı sınıfı eklendiğinde `npm run build:css` komutu yeniden çalıştırılmalıdır.

## Tema Sistemi

- `:root` ve `html.dark` CSS değişkenleri ile `.theme-*` bileşen sınıfları `src/input.css` içinde tanımlıdır.
- Açık/koyu tema tercihi `localStorage('asn_theme')` (eski `toyo_theme` anahtarı için geriye dönük fallback ile) üzerinden saklanır ve `<head>` içindeki erken script sayesinde sayfa yüklenirken tema flaşı (FOUC) oluşmaz.

## Tamamlanan İyileştirmeler

- **Marka & Tasarım Geçişi:** `ASN Özel Forklift Servis` kimliği, yeni endüstriyel kehribar-turuncu/lacivert palet, vektörel dişli+forklift logosu, `og-gorsel.png`, `assets/apple-touch-icon.png` ve `favicon.ico`.
- **CSS Özgünlük Düzeltmesi (B7):** `.theme-surface`, `.theme-card`, `.theme-text` ve `.theme-border` sınıflarındaki `!important` zorlamaları kaldırılarak `@layer components` içine taşındı; böylece `peer-checked:*` ve form doğrulama çerçeveleri (`border-emerald-500`, `border-red-500`) sorunsuz çalışır. Radyo kartları `label:has(input[type="radio"]:checked)` ile vurgulanır.
- **Erişilebilirlik & Navigasyon (B8, C2.8):** `section[id] { scroll-margin-top: 6rem; }`, klavye odağında sol üstte beliren `.skip-link` ("İçeriğe geç") bağlantısı ve `@media (prefers-reduced-motion: reduce)` desteği eklendi.
- **SEO & Hosting Güvenliği:** `asnforkliftservis.com.tr` alan adına göre `robots.txt` ve `sitemap.xml` güncellendi; `netlify.toml` ile `X-Frame-Options`, `X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy` başlıkları ve önbellek kuralları tanımlandı; özel `404.html` eklendi.

## Yayın Öncesi Kontrol Listesi

| Öğe | Konum | Açıklama |
|---|---|---|
| Google Analytics 4 | `index.html` | Kullanılacaksa `G-XXXXXXXXXX` yerine gerçek GA4 Ölçüm Kimliği girilmelidir |
| Google Search Console | `index.html` | Meta doğrulama etiketi gerçek doğrulama koduyla güncellenmelidir |
| Gerçek Saha Fotoğrafları | `.img-placeholder` alanları | Fotoğraflar eklendiğinde `<img loading="lazy" ...>` ile değiştirilmelidir |
| CSS Derleme | `assets/styles.css` | Yayına almadan önce `npm run build:css` çalıştırılarak güncel çıktı üretilmelidir |
