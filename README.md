<p align="center">
  <img src="https://img.shields.io/badge/QR-Studio-06b6d4?style=for-the-badge&logo=qrcode&logoColor=white" alt="QR Studio" />
  <br/>
  <strong>The free, open-source QR code generator that doesn't suck.</strong>
  <br/>
  <sub>No sign-up. No watermarks. No tracking. No BS.</sub>
</p>

<p align="center">
  <a href="https://deadboy18.github.io/qr-studio">
    <img src="https://img.shields.io/badge/🔗_Live_Demo-06b6d4?style=for-the-badge" alt="Live Demo" />
  </a>
  &nbsp;
  <img src="https://img.shields.io/badge/license-MIT-22c55e?style=for-the-badge" alt="License" />
  &nbsp;
  <img src="https://img.shields.io/github/stars/deadboy18/qr-studio?style=for-the-badge&color=f59e0b" alt="Stars" />
  &nbsp;
  <img src="https://img.shields.io/badge/dependencies-1-8b5cf6?style=for-the-badge" alt="Dependencies" />
</p>

---

## What is QR Studio?

QR Studio is a professional-grade QR code generator that runs entirely in your browser. It supports **11 data types** (including 🇲🇾 DuitNow), **ChromaCode image-blended mosaic codes**, a full **QR scanner with DuitNow EMV breakdown**, **live preview**, and exports to **PNG & SVG** — all from a single HTML file with zero backend.

Most QR generators are bloated SaaS tools that paywall basic features, plaster watermarks on your codes, or require accounts just to download a PNG. QR Studio does none of that.

---

## Features

### Standard Mode
- **11 Data Types** — URL, Text, WiFi, Email, Phone, SMS, WhatsApp, Location, Calendar Event, vCard, 🇲🇾 DuitNow
- **Live Preview** — QR code updates instantly as you type, no "Generate" button needed
- **Full Customization** — foreground/background colors, 7 presets, contrast warnings
- **Center Logo Overlay** — upload any image as a center logo with automatic padding
- **Stroke & Outline** — adjustable quiet zone and border options
- **Holiday Templates** — Christmas, Halloween, New Year, Easter, Valentine's, St. Patrick's, Birthday frames
- **WiFi Credential Display** — optionally bake SSID, password, and encryption type directly into the exported image
- **Copyable Encoded Data** — every QR type shows the raw encoded string (mailto:, tel:, geo:, etc.) with a copy button
- **180+ Country Codes** — flag emoji dropdowns on all phone fields with full international dialing codes
- **Input Validation** — real-time validation on every field with clear error messages
- **Resolution Control** — export at 256px, 512px, 1024px, or 2048px
- **SVG Export** — infinitely scalable vector output for print

### 🇲🇾 DuitNow QR Generator
- **EMV QR String Builder** — generates structurally valid DuitNow EMV QR codes per [PayNet QR Spec v1.5](https://docs.developer.paynet.my/docs/duitNow-QR/integration/QR-generation-specification/merchant-presented-mode/qr-data-object)
- **70 Acquirers** — full dropdown of all banks, e-wallets, and payment providers from PayNet's official registry
- **Auto CRC-16** — checksum calculated per ISO/IEC 13239, verified against all 4 PayNet spec examples
- **DuitNow Branded Output** — renders in the official pink frame with "MALAYSIA NATIONAL QR" banner
- **Static / Dynamic Toggle** — choose between reusable (11) or one-time (12) QR codes
- **MCC Categories** — 25+ common merchant category codes
- **Additional Data Fields** — reference label, terminal, bill number, store label

> ⚠️ **Note:** Generated QR codes have correct EMV format and CRC but **won't process real payments** — the Merchant/QR ID must be registered with an acquirer bank through PayNet. This is useful for developers testing EMV parsers or learning how DuitNow QR is structured. See [natsu90's research](https://github.com/natsu90/emvqr/issues/1).

### ChromaCode Mode
- **Image-Blended Mosaic QR** — QR codes that visually incorporate a brand image while remaining scannable
- **Auto Favicon Fetch** — enter a URL and ChromaCode automatically pulls the site's favicon
- **Upload or Image URL** — use any image as the brand source
- **5 Version Carousel** — preview and compare QR versions 7, 10, 13, 15, and 18
- **Advanced Tuning** — dot shape (circle/rounded/square), dark dot range, ghost strength, ghost threshold
- **Auto-Tune** — intelligently adjusts parameters based on image characteristics
- **Palette Extraction** — extracts and displays the dominant colors from the source image

### 🇲🇾 Scanner — DuitNow QR Breakdown
- **Camera, File & Paste** — scan QR codes via camera, image upload, or clipboard paste
- **DuitNow EMV Decoder** — full field-by-field breakdown of DuitNow and JomPAY QR codes
- **70 Acquirer Lookup** — identifies banks/wallets by Acquirer ID from [PayNet's official list](https://docs.developer.paynet.my/docs/duitNow-QR/integration/QR-generation-specification/merchant-presented-mode/qr-data-object#acquirer-id-id-01)
- **CRC-16 Verification** — validates checksum with ✓ Valid / ✕ Invalid and expected value on mismatch
- **300+ MCC Codes** — human-readable merchant category labels
- **JomPAY Detection** — identifies JomPAY QR codes (acquirer 898989) and shows Biller Code
- **Tip & Convenience Fee** — decodes EMV IDs 55, 56, 57
- **Merchant Channel Decoding** — decodes the 3-character field (ID 62.11) into media type, transaction location, and merchant presence per PayNet Tables 3–5
- **Data Integrity Check** — displays SHA-256 hash (ID 82) when present
- **Language Template** — shows alternate language merchant name/city (ID 64)
- **Additional Data Fields** — bill number, mobile, store label, loyalty, reference, customer label, terminal, purpose, consumer data request, merchant tax ID, RRN (Ref-1/Ref-2), geo coordinates
- **22 Currency Codes** — MYR, USD, SGD, THB, IDR, CNY, GBP, EUR, JPY, AUD, HKD, KRW, and more
- **Regenerate Clean QR** — rebuild a scannable DuitNow-branded QR from decoded data with adjustable print sizes (sticker → A4) and font size controls for merchant name & bank
- **QR Safety Analysis** — flags suspicious URLs, warns on open WiFi, crypto addresses, and payment QR codes

### General
- **Dark / Light Theme** — with persistent preference
- **Mobile-First Responsive** — works perfectly on phones, tablets, and desktops
- **Share API** — native sharing on supported devices
- **Single HTML File** — the entire app is one file, no build step, no framework, no node_modules
- **Privacy-First** — everything runs client-side; your data never leaves your browser
- **Easter Eggs** — 👀 _open the console if you're curious_

---

## Quick Start

### Option 1: Just use it
Visit **[deadboy18.github.io/qr-studio](https://deadboy18.github.io/qr-studio)** — that's it.

### Option 2: Self-host
```bash
git clone https://github.com/deadboy18/qr-studio.git
cd qr-studio
# Open index.html in any browser. Done.
```

No dependencies to install. No build step. No configuration.

```
qr-studio/
├── index.html     ← the entire app (single file)
├── worker.js      ← Cloudflare Worker for ChromaCode favicon proxy (optional)
├── README.md
└── LICENSE
```

### Option 3: Deploy to GitHub Pages
1. Fork this repository
2. Go to **Settings → Pages**
3. Under **Source**, select `main` branch and `/ (root)` folder
4. Click **Save**
5. Your QR Studio is live at `https://<your-username>.github.io/qr-studio`

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| **Markup & Logic** | Vanilla HTML, CSS, JavaScript |
| **QR Engine** | [qrcode-generator](https://github.com/kazuhikoarase/qrcode-generator) (1.4.4) |
| **QR Scanner** | [jsQR](https://github.com/cozmo/jsQR) (1.4.0, lazy-loaded) |
| **ChromaCode Algorithm** | [Toms Nimanis / IT Linden](https://github.com/TomsNimanis/chromacode) |
| **DuitNow EMV Spec** | [PayNet QR Spec v1.5](https://docs.developer.paynet.my/docs/duitNow-QR/integration/QR-generation-specification/merchant-presented-mode/qr-data-object) |
| **DuitNow Research** | [natsu90](https://github.com/natsu90/duitnowqr-test) |
| **Typography** | DM Sans + JetBrains Mono (Google Fonts) |
| **Build System** | None. It's one file. |
| **Backend** | None. It's client-side. |
| **CORS Proxy** | [Cloudflare Worker](https://workers.cloudflare.com) (optional, for ChromaCode favicons) |
| **Tracking** | None. We respect your privacy. |

---

## Supported QR Types

| Type | Encoded Format | Example |
|------|---------------|---------|
| **URL** | `https://example.com` | Website links |
| **Text** | Raw text | Messages, notes |
| **WiFi** | `WIFI:T:WPA;S:MyNet;P:pass123;;` | Auto-connect to networks |
| **Email** | `mailto:hi@example.com?subject=...` | Pre-filled emails |
| **Phone** | `tel:+15551234567` | Click-to-call |
| **SMS** | `sms:+15551234567?body=...` | Pre-filled text messages |
| **WhatsApp** | `https://wa.me/15551234567?text=...` | Direct WhatsApp chats |
| **Location** | `geo:48.8584,2.2945` | Maps & coordinates |
| **Calendar** | iCalendar (`.ics`) format | Events with time, location |
| **vCard** | vCard 3.0 format | Full contact cards |
| **🇲🇾 DuitNow** | EMV QR (TLV) format | DuitNow payment QR codes |

---

## ChromaCode Favicon Proxy (Optional)

ChromaCode's **Favicon** tab auto-fetches site icons to blend into the QR code. Because browsers block cross-origin image requests (CORS), this requires a proxy. Without one, the **Upload** and **Image URL** tabs still work perfectly.

A free [Cloudflare Worker](https://workers.cloudflare.com) acts as your own personal CORS proxy (100,000 requests/day free).

### Setup (2 minutes)

1. Sign up at [workers.cloudflare.com](https://workers.cloudflare.com) (free)
2. Click **Create Worker** → **Start with Hello World!**
3. Name it `qr-proxy`
4. Click **Edit Code**, delete everything, paste the contents of [`worker.js`](worker.js)
5. Click **Deploy**
6. Test it — visit your worker URL with a test favicon:
   ```
   https://qr-proxy.YOUR-SUBDOMAIN.workers.dev/?url=https://www.google.com/favicon.ico
   ```
   You should see the Google favicon image.
7. Open `index.html`, find this line and set your worker URL:
   ```javascript
   const MY_PROXY = ''; // ← paste your worker URL here
   ```
   ```javascript
   const MY_PROXY = 'https://qr-proxy.YOUR-SUBDOMAIN.workers.dev';
   ```
8. Push to GitHub — done. ChromaCode favicon fetching now works for any site.

### Without the proxy

Public CORS proxies (`allorigins.win`, `codetabs.com`) are used as fallbacks. They work for most sites but may be slow or block certain domains. The Upload tab always works regardless.

---

## Contributing

Contributions are welcome! If you have ideas for new features, find bugs, or want to improve the code:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-thing`)
3. Commit your changes (`git commit -m 'Add amazing thing'`)
4. Push to the branch (`git push origin feature/amazing-thing`)
5. Open a Pull Request

Since the entire app is a single HTML file, contributing is as simple as editing one file — no complex project structure to navigate.

---

## Credits

**Created by [deadboy18](https://github.com/deadboy18)**

ChromaCode algorithm by [Toms Nimanis / IT Linden](https://github.com/TomsNimanis/chromacode)

DuitNow EMV research by [natsu90](https://github.com/natsu90/duitnowqr-test) · Acquirer data from [PayNet QR Spec v1.5](https://docs.developer.paynet.my/docs/duitNow-QR/integration/QR-generation-specification/merchant-presented-mode/qr-data-object) · [PayNet Developer Docs](https://docs.developer.paynet.my/docs)

Special thanks to [VenimK](https://github.com/VenimK) ❤️

---

## License

This project is open source and available under the [MIT License](LICENSE).

---

<p align="center">
  <sub>If this tool saved you from paying $15/month for a QR code generator, consider giving it a ⭐</sub>
</p>
