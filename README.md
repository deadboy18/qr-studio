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
  <img src="https://img.shields.io/github/license/deadboy18/qr-studio?style=for-the-badge&color=22c55e" alt="License" />
  &nbsp;
  <img src="https://img.shields.io/github/stars/deadboy18/qr-studio?style=for-the-badge&color=f59e0b" alt="Stars" />
  &nbsp;
  <img src="https://img.shields.io/badge/dependencies-1-8b5cf6?style=for-the-badge" alt="Dependencies" />
</p>

---

## What is QR Studio?

QR Studio is a professional-grade QR code generator that runs entirely in your browser. It supports **10 data types**, **ChromaCode image-blended mosaic codes**, **live preview**, and exports to **PNG & SVG** — all from a single HTML file with zero backend.

Most QR generators are bloated SaaS tools that paywall basic features, plaster watermarks on your codes, or require accounts just to download a PNG. QR Studio does none of that.

---

## Features

### Standard Mode
- **10 Data Types** — URL, Text, WiFi, Email, Phone, SMS, WhatsApp, Location, Calendar Event, vCard contact
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

### ChromaCode Mode
- **Image-Blended Mosaic QR** — QR codes that visually incorporate a brand image while remaining scannable
- **Auto Favicon Fetch** — enter a URL and ChromaCode automatically pulls the site's favicon
- **Upload or Image URL** — use any image as the brand source
- **5 Version Carousel** — preview and compare QR versions 7, 10, 13, 15, and 18
- **Advanced Tuning** — dot shape (circle/rounded/square), dark dot range, ghost strength, ghost threshold
- **Auto-Tune** — intelligently adjusts parameters based on image characteristics
- **Palette Extraction** — extracts and displays the dominant colors from the source image

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

No dependencies to install. No build step. No configuration. It's a single HTML file.

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
| **ChromaCode Algorithm** | [Toms Nimanis / IT Linden](https://github.com/TomsNimanis/chromacode) |
| **Typography** | DM Sans + JetBrains Mono (Google Fonts) |
| **Build System** | None. It's one file. |
| **Backend** | None. It's client-side. |
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

Special thanks to [VenimK](https://github.com/VenimK) ❤️

---

## License

This project is open source and available under the [MIT License](LICENSE).

---

<p align="center">
  <sub>If this tool saved you from paying $15/month for a QR code generator, consider giving it a ⭐</sub>
</p>
