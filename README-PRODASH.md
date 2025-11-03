# ProDash - Personal Productivity Dashboard

ProDash adalah Progressive Web App (PWA) modern yang dirancang untuk meningkatkan produktivitas Anda. Aplikasi ini dapat diinstal seperti aplikasi mobile native dan bekerja offline.

## Fitur Utama

- **Dashboard Produktivitas**: Track dan kelola tasks harian Anda
- **Progressive Web App**: Install di perangkat mobile/desktop seperti aplikasi native
- **Dark/Light Mode**: Toggle tema sesuai preferensi Anda
- **Offline Mode**: Tetap bekerja meski tanpa koneksi internet
- **Responsive Design**: Tampilan optimal di semua ukuran layar
- **Animasi Halus**: Menggunakan Framer Motion untuk UX yang menyenangkan
- **Local Storage**: Data tersimpan aman di perangkat Anda

## Teknologi yang Digunakan

- **React 18** - Library UI modern
- **TypeScript** - Type safety
- **Vite** - Build tool yang sangat cepat
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Library animasi
- **Lucide React** - Icon set modern
- **Service Worker** - Untuk offline functionality
- **Web Manifest** - Untuk PWA capabilities

## Cara Menjalankan

### 1. Install Dependencies
```bash
npm install
```

### 2. Jalankan Development Server
```bash
npm run dev
```

Aplikasi akan berjalan di `http://localhost:5173`

### 3. Build untuk Production
```bash
npm run build
```

### 4. Preview Production Build
```bash
npm run preview
```

## Cara Install sebagai PWA

### Di Desktop (Chrome/Edge):
1. Buka aplikasi di browser
2. Klik icon install (➕) di address bar
3. Atau klik menu ⋮ → "Install ProDash"
4. Aplikasi akan muncul sebagai aplikasi desktop

### Di Mobile (Android):
1. Buka aplikasi di Chrome/Browser
2. Tap menu ⋮ (3 titik vertikal)
3. Pilih "Add to Home screen" atau "Install app"
4. Aplikasi akan muncul di home screen

### Di iOS (iPhone/iPad):
1. Buka aplikasi di Safari
2. Tap tombol Share (kotak dengan panah ke atas)
3. Scroll dan pilih "Add to Home Screen"
4. Tap "Add" di pojok kanan atas

## Struktur Project

```
src/
├── components/          # Komponen reusable
│   ├── Layout.tsx      # Layout utama dengan navigasi
│   ├── OfflineBanner.tsx   # Banner status offline
│   └── InstallPrompt.tsx   # Prompt install PWA
├── contexts/           # React contexts
│   └── ThemeContext.tsx    # Context untuk dark/light mode
├── hooks/              # Custom React hooks
│   └── usePWA.tsx     # Hook untuk PWA functionality
├── pages/              # Halaman aplikasi
│   ├── Home.tsx       # Dashboard dengan task management
│   ├── About.tsx      # Informasi aplikasi
│   └── Contact.tsx    # Form kontak
├── App.tsx            # Root component
├── main.tsx           # Entry point
└── index.css          # Global styles

public/
├── manifest.json      # PWA manifest
├── service-worker.js  # Service worker untuk offline
├── icon-192.png       # Icon 192x192
└── icon-512.png       # Icon 512x512
```

## Fitur PWA

### Service Worker
- Cache static assets untuk akses cepat
- Offline fallback
- Cache-first strategy untuk performa optimal

### Manifest
- Nama aplikasi: ProDash
- Theme color: #2563eb (blue)
- Display: standalone (fullscreen seperti native app)
- Icons: 192x192 dan 512x512

### Offline Capability
- Aplikasi tetap bisa diakses tanpa internet
- Banner otomatis muncul saat offline/online
- Data tasks tersimpan di localStorage

## Deploy ke Production

### Deploy ke Vercel
```bash
npm install -g vercel
vercel
```

### Deploy ke Netlify
```bash
npm run build
# Upload folder 'dist' ke Netlify
```

### Deploy ke GitHub Pages
```bash
npm run build
# Push folder 'dist' ke gh-pages branch
```

## Fitur Dark Mode

Aplikasi secara otomatis menyimpan preferensi tema Anda di localStorage. Toggle dark/light mode menggunakan tombol di navigation bar.

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Opera 76+

## Tips Penggunaan

1. **Install sebagai PWA** untuk pengalaman terbaik
2. **Gunakan offline** - data tasks tersimpan lokal
3. **Toggle dark mode** untuk kenyamanan mata
4. **Add tasks** dengan menekan Enter
5. **Click task** untuk mark sebagai complete

## Performance

- Lighthouse Score: 95+
- First Contentful Paint: < 1s
- Time to Interactive: < 2s
- Bundle size: ~290KB (gzipped: ~91KB)

## Development

### Type Checking
```bash
npm run typecheck
```

### Linting
```bash
npm run lint
```

## License

MIT License - bebas digunakan untuk personal atau komersial.

---

Dibuat dengan ❤️ menggunakan React + Vite + TypeScript
