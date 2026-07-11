# 🟣 Portofolio Cyberpunk — Next.js + AI Chat + NachynTube

Website portofolio pribadi bertema **Dark Mode + Glassmorphism + Neon Purple + Cyberpunk/Futuristic**,
dilengkapi:

- 🤖 **AI Chat** (`/ai`) — chatbot yang dijawab lewat Anthropic API, "grounded" ke data profil kamu di `lib/data.ts`.
- 📺 **NachynTube** (`/nachyntube`) — cari & nonton video YouTube pakai YouTube Data API v3, dengan player custom (embed `youtube-nocookie.com`, tanpa rekomendasi/branding YouTube di sekitarnya).
- 🗂️ **Portfolio** (`/portfolio`) — daftar project & skill.
- 📄 **About** (`/about`) & **Contact** (`/contact`).

> ⚠️ **Catatan jujur soal "tanpa iklan":** YouTube Data API resmi tidak menyediakan cara untuk
> menghilangkan iklan 100%. Iklan diatur sepenuhnya oleh sistem YouTube di sisi pemutar video.
> NachynTube memakai mode embed privacy-enhanced (`youtube-nocookie.com`) dan UI pemutar custom
> supaya pengalaman nonton lebih bersih & minim distraksi — bukan ad-blocker.

## 🚀 Cara Menjalankan

```bash
# 1. Install dependency
npm install

# 2. Isi API key kamu di .env.local
#    (file .env.local sudah ada templatenya, tinggal isi)

# 3. Jalankan development server
npm run dev

# 4. Buka http://localhost:3000
```

## 🔑 API Key yang Dibutuhkan

Isi di file **`.env.local`** (lihat komentar di dalam file itu):

| Variable | Untuk Apa | Dapatkan Dimana |
|---|---|---|
| `ANTHROPIC_API_KEY` | Fitur AI Chat di `/ai` | https://console.anthropic.com/settings/keys |
| `YOUTUBE_API_KEY` | Fitur NachynTube di `/nachyntube` | https://console.cloud.google.com/apis/credentials |

## ✏️ Bagian yang Paling Sering Perlu Diganti

Semua sudah ditandai komentar `GANTI DI SINI` di dalam kode, tapi ini ringkasannya:

| File | Isi Apa |
|---|---|
| `lib/data.ts` | **Paling penting.** Nama, bio, foto, skill, daftar project, link sosial media. |
| `public/avatar.png` | Foto profil kamu. |
| `public/projects/*` | Gambar/thumbnail tiap project. |
| `public/logo.svg` & `public/favicon.ico` | Logo & icon tab browser. |
| `app/layout.tsx` | Judul tab browser (metadata), font global. |
| `lib/ai.ts` | Gaya bahasa/kepribadian AI chat (system prompt). |
| `tailwind.config.ts` | Warna aksen (sekarang: ungu neon), kalau mau ganti tema warna. |
| `app/about/page.tsx` | Cerita lengkap tentang kamu. |
| `app/contact/page.tsx` & `components/Footer.tsx` | Info kontak & link sosial media. |

## 🗂️ Struktur Folder

Struktur mengikuti App Router Next.js — lihat komentar di tiap file untuk penjelasan detail.
Folder `app/` berisi halaman & API routes, `components/` berisi semua komponen UI,
`lib/` berisi logika (data, AI, YouTube, utils), `hooks/` berisi custom React hooks,
dan `types/` berisi definisi TypeScript.

## 🎨 Tema Desain

- **Dark Mode** dominan hitam (`#05030A`)
- **Glassmorphism**: kartu dengan efek blur + transparansi (`backdrop-blur`, class `.glass` di `globals.css`)
- **Neon Purple Accent**: ungu (`#A855F7`) sebagai warna utama aksen & glow
- **Cyberpunk/Futuristic**: grid background, scan-line animation, font monospace di beberapa label

## 🧱 Tech Stack

- [Next.js 14](https://nextjs.org/) (App Router, TypeScript)
- [Tailwind CSS](https://tailwindcss.com/)
- [Anthropic API](https://docs.claude.com/) — AI Chat
- [YouTube Data API v3](https://developers.google.com/youtube/v3) — NachynTube
- [lucide-react](https://lucide.dev/) — icon set
