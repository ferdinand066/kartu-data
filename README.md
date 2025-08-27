# Kartu Data - Kartu Percakapan untuk Setiap Momen

[![Kartu Data](https://img.shields.io/badge/Kartu%20Data-Web%20App-blue?style=for-the-badge&logo=react)](https://kartu-kata.vercel.app/)
[![React](https://img.shields.io/badge/React-18.0+-61DAFB?style=flat-square&logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-3178C6?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-5.0+-646CFF?style=flat-square&logo=vite)](https://vitejs.dev/)

Aplikasi web modern yang menyediakan berbagai kategori kartu percakapan untuk berbagai situasi dan momen. Dibuat dengan React, TypeScript, dan Vite untuk performa optimal dan pengalaman pengguna yang luar biasa.

## 🌟 Fitur Utama

- **6 Kategori Kartu**: Romantis, Humor, Masa Depan, Kenangan, Pembicaraan Mendalam, dan Semua Kartu
- **Responsive Design**: Optimal di semua perangkat (desktop, tablet, mobile)
- **Modern UI/UX**: Interface yang indah dengan animasi smooth dan transisi
- **Fast Performance**: Dibangun dengan Vite untuk loading yang cepat
- **Accessibility**: Mendukung screen reader dan navigasi keyboard
- **SEO Optimized**: Meta tags, structured data, dan sitemap untuk search engine

## 🚀 Teknologi yang Digunakan

- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite 5
- **Styling**: Tailwind CSS
- **UI Components**: Custom component library dengan shadcn/ui
- **Routing**: React Router DOM
- **Deployment**: Vercel

## 📱 Kategori Kartu

| Kategori | Deskripsi | Warna |
|----------|-----------|-------|
| **Romantis** | Cinta ada di udara | Merah |
| **Humor** | Tawa adalah obat terbaik | Kuning |
| **Masa Depan** | Masa depan cerah | Hijau |
| **Kenangan** | Nikmati setiap momen | Biru |
| **Deep Talk** | Telusuri dari hati ke hati | Ungu |
| **Semua Kartu** | Akses ke semua kategori | Abu-abu |

## 🎯 SEO Optimizations

Aplikasi ini telah dioptimasi untuk SEO dengan implementasi berikut:

### Meta Tags
- Title dan description yang optimal untuk setiap halaman
- Open Graph tags untuk social media sharing
- Twitter Card tags untuk Twitter sharing
- Keywords dan author information
- Language dan region optimization (Indonesia)

### Structured Data
- JSON-LD schema markup
- WebApplication schema type
- ItemList untuk kategori kartu
- Person schema untuk author

### Technical SEO
- Sitemap.xml untuk search engine crawling
- Robots.txt untuk crawler guidance
- Canonical URLs
- Performance hints (preconnect, DNS prefetch)
- Web app manifest untuk PWA capabilities

### Accessibility
- Semantic HTML structure
- ARIA labels dan roles
- Keyboard navigation support
- Screen reader compatibility
- Proper heading hierarchy

## 🛠️ Instalasi dan Pengembangan

### Prerequisites
- Node.js 18+ 
- npm atau yarn

### Setup
```bash
# Clone repository
git clone https://github.com/yourusername/kartu-kata.git
cd kartu-kata

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Scripts
- `npm run dev` - Development server dengan hot reload
- `npm run build` - Build production bundle
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run type-check` - TypeScript type checking

## 📁 Struktur Project

```
kartu-kata/
├── public/                 # Static assets
│   ├── sitemap.xml        # SEO sitemap
│   ├── robots.txt         # Search engine guidance
│   └── site.webmanifest   # PWA manifest
├── src/
│   ├── components/        # Reusable UI components
│   ├── pages/            # Page components
│   ├── data/             # Card data dan informasi
│   ├── types/            # TypeScript type definitions
│   └── lib/              # Utility functions
├── index.html             # Main HTML dengan SEO meta tags
└── README.md             # Project documentation
```

## 🌐 Deployment

Aplikasi ini di-deploy di Vercel dengan konfigurasi otomatis:

- **Production URL**: https://kartu-kata.vercel.app/
- **Auto-deploy** dari main branch
- **HTTPS** dengan SSL certificate
- **CDN** untuk performa global

## 📊 Performance Metrics

- **Lighthouse Score**: 95+ (Performance, Accessibility, Best Practices, SEO)
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1

## 🤝 Contributing

Kontribusi sangat diterima! Silakan buat issue atau pull request untuk:

- Bug fixes
- Feature improvements
- Documentation updates
- Performance optimizations
- Accessibility enhancements

## 📄 License

Project ini dibuat oleh [Ferdinand Gunawan](https://github.com/ferdinandgunawan) dan tersedia di bawah [MIT License](LICENSE).

## 🙏 Acknowledgments

- [shadcn/ui](https://ui.shadcn.com/) untuk component library
- [Tailwind CSS](https://tailwindcss.com/) untuk styling
- [Vite](https://vitejs.dev/) untuk build tool
- [React](https://reactjs.org/) untuk UI framework

---

**Kartu Data** - Membuat percakapan lebih bermakna, satu kartu pada satu waktu. 💬✨
