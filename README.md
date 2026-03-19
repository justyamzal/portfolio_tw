# Yadri Amtsal — Portfolio (React + Vite 7 + Tailwind CSS v4)

## 🚀 Cara Menjalankan

```bash
npm install
npm run dev     # http://localhost:5173
npm run build   # production build
```

Taruh foto profil di: `public/images/profile_crosshanded.png`

---

## 🗂 Struktur Folder

```
portfolio/
├── public/
│   └── images/
│       └── profile_crosshanded.png
├── src/
│   ├── components/
│   │   ├── Background.jsx
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── Education.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Contact.jsx
│   │   └── ScrollToTop.jsx
│   ├── data/
│   │   └── portfolioData.js   ⭐ edit semua konten di sini
│   ├── hooks/
│   │   └── index.js
│   ├── styles/
│   │   └── globals.css        ← SATU-SATUNYA file CSS
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── vite.config.js
└── package.json
```

---

## 🎨 Strategi CSS vs Tailwind

Semua styling menggunakan **Tailwind v4 utility classes** di JSX,
kecuali beberapa hal yang memang tidak bisa atau tidak praktis:

| Apa | Alasan tetap di CSS |
|---|---|
| `@keyframes` (revealUp, heroTextReveal, dll) | Tailwind tidak bisa define keyframes baru |
| `.reveal.show` / `.hero-seq.show` | Butuh toggle class + keyframes bersamaan |
| `.background`, `.glow`, `.grid-overlay` | `filter:blur()` + `radial-gradient` kompleks di arbitrary value akan sangat panjang dan tidak readable |
| `.project-image::after` | Tailwind tidak support `::after` dengan gradient kompleks |
| `.nav-link-item::after` | Underline animasi via pseudo-element |
| `@theme {}` | Design tokens / CSS variables — ini justru fitur utama Tailwind v4 |

---

## ✏️ Update Konten

Edit `src/data/portfolioData.js` untuk mengubah:
- Nama, status, deskripsi, foto profil → `heroData`
- Pendidikan & kursus → `educationData`
- Keahlian → `skillsData`
- Proyek → `projectsData`
- Kontak → `contactData`
- Link navbar → `navLinks`
