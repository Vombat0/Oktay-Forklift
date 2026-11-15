# TOYO FORKLIFT SERVİS — Statik Site

7/24 forklift bakım, onarım ve yedek parça hizmetleri için tek sayfalık tanıtım
sitesi ve üç yasal alt sayfa. Bağımlılıksız statik HTML: derleme çıktısı (`assets/styles.css`)
bir kez üretilip sunucuya olduğu gibi yüklenir.

## Dosya Listesi

| Dosya | Açıklama |
|---|---|
| `index.html` | Ana sayfa (7/24 talep formu, hizmetler, SSS, referanslar, JSON-LD) |
| `kvkk.html` | KVKK aydınlatma metni |
| `garanti.html` | Garanti ve servis koşulları |
| `hakkinda.html` | Kurumsal tanıtım sayfası |
| `assets/styles.css` | Tailwind ile derlenmiş, minified CSS (CDN KULLANILMAZ) |
| `src/input.css` | CSS kaynağı: Tailwind direktifleri + tema değişkenleri |
| `tailwind.config.js` | Tailwind yapılandırması (renk paleti, font yığınları) |
| `og-gorsel.png` | Open Graph paylaşım görseli |
| `robots.txt`, `sitemap.xml` | Arama motoru dosyaları |

## CSS Derleme (Tailwind)

Site, Tailwind CDN yerine **yerel derlenmiş** `assets/styles.css` ile çalışır.

```bash
npm install        # bir kez: tailwindcss 3.4.19 (devDependency) kurulumu
npm run build:css  # src/input.css -> assets/styles.css (minified)
npm run watch:css  # geliştirmede otomatik derleme
```

> ⚠️ **UYARI:** HTML'e yeni bir Tailwind sınıfı (`text-[11px]`, `lg:col-span-5`,
> `dark:bg-*` vb.) her eklendiğinde `npm run build:css` yeniden çalıştırılmalıdır.
> Derlenmezse yeni sınıfın stilli görünmez (CDN dönemindeki otomatik üretim bitti).
> Özel yardımcı sınıflar (`.theme-*`, `.img-placeholder`, `.todo-placeholder`,
> `.svg-*`, `.bg-technical-grid`) `src/input.css` içindedir ve her derlemede
> çıktıya aynen taşınır.

## Tema Sistemi

- `:root` / `html.dark` CSS değişkenleri + `.theme-*` yardımcı sınıfları (`src/input.css`).
- Açık/koyu geçişi `localStorage('toyo_theme')` ve `darkMode: 'class'` ile; tema
  flaşını önleyen erken script her sayfanın `<head>`'indedir.

## Doldurulacak Yer Tutucular (yayın öncesi)

| Yer tutucu | Nerede | Ne yapılacak |
|---|---|---|
| `[AÇIK ADRES]` | index.html adres bilgi satırları | Gerçek açık adres yazılacak |
| `G-XXXXXXXXXX` | index.html GA4 script'i | Gerçek GA4 Measurement ID girilecek (girilene kadar GA4 pasif) |
| `ornek-alan-adi.com` | canonical, og:url, robots.txt, sitemap.xml | Gerçek alan adıyla değiştirilecek |
| `TODO-SEARCH-CONSOLE-KODUNUZU-BURAYA-GIRIN` | index.html meta | Search Console doğrulama kodu |
| `.todo-placeholder` içerikleri | çeşitli bölümler | Telefon/e-posta/vergi vb. kurumsal bilgiler |
| `.img-placeholder` kutuları | garanti.html, index referans kartları | Gerçek fotoğraf eklenirken `<img loading="lazy" ...>` ile değiştirilecek |

## Notlar

- Görsel yer tutuculara gerçek `<img>` eklenirken **`loading="lazy"`** kullanılmalıdır.
- `node_modules/` yalnızca derleme içindir, repoya girmez (`.gitignore`).
- Fontlar: yalnızca Inter + Montserrat (Google Fonts, `display=swap` + preconnect).
