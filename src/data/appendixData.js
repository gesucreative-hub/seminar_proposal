// ============================================================
// Appendix Data — sourced from SEMINAR PROPOSAL.md
// Lampiran I (Pedoman Wawancara), Lampiran II (Teknologi),
// Lampiran III (Linimasa & Sprint)
// ============================================================

export const timelineData = {
  months: ['April', 'Mei', 'Juni'],
  weeks: [
    { label: 'Apr W1', month: 'April', week: 1 },
    { label: 'Apr W2', month: 'April', week: 2 },
    { label: 'Apr W3', month: 'April', week: 3 },
    { label: 'Apr W4', month: 'April', week: 4 },
    { label: 'Mei W1', month: 'Mei',   week: 1 },
    { label: 'Mei W2', month: 'Mei',   week: 2 },
    { label: 'Mei W3', month: 'Mei',   week: 3 },
    { label: 'Mei W4', month: 'Mei',   week: 4 },
    { label: 'Jun W1', month: 'Juni',  week: 1 },
    { label: 'Jun W2', month: 'Juni',  week: 2 },
  ],
  phases: [
    {
      phase: 'Fase 1',
      title: 'Riset Lapangan B2B & Fondasi Sistem',
      color: '#361edb',
      tasks: [
        {
          no: 1,
          desc: 'Validasi Asumsi Awal: Wawancara Mendalam dengan Pokdarwis/KOL B2B',
          // week indices (0-based): 0=Apr W1, 1=Apr W2, 2=Apr W3, ...
          active: [0, 1],
        },
        {
          no: 2,
          desc: 'Sprint Tech 1: Pembuatan ERD & Setup Skema Database (Supabase/PostgreSQL)',
          active: [0, 1],
        },
        {
          no: 3,
          desc: 'Sprint Tech 2: Inisialisasi Proyek (Next.js), Routing, dan Pemasangan UI Library',
          active: [1, 2],
        },
      ],
    },
    {
      phase: 'Fase 2',
      title: 'Akuisisi Vendor & Pengembangan Fitur Inti',
      color: '#db991d',
      tasks: [
        {
          no: 4,
          desc: 'High-Touch Onboarding: Pendekatan langsung & pengumpulan data riil ke 10-15 Vendor B2B',
          active: [2, 3],
        },
        {
          no: 5,
          desc: 'Sprint Tech 3: Pengembangan Fitur Autentikasi & Dashboard Manajemen Vendor',
          active: [2, 3],
        },
      ],
    },
    {
      phase: 'Fase 3',
      title: 'Validasi B2C & Frontend Development',
      color: '#54c980',
      tasks: [
        {
          no: 6,
          desc: 'Survei B2C: Penilaian Niat Beli Wisatawan & Toleransi Harga Pasar',
          active: [4, 5],
        },
        {
          no: 7,
          desc: 'Sprint Tech 4: Pengembangan Frontend Storefront Konsumen (B2C) & Optimasi SEO',
          active: [4, 5],
        },
        {
          no: 8,
          desc: 'Sprint Tech 5: Input Data Riil (dari 15 Vendor Beta) ke dalam Sistem',
          active: [5, 6],
        },
      ],
    },
    {
      phase: 'Fase 4',
      title: 'Pembayaran & State Management (Krusial)',
      color: '#ed4544',
      tasks: [
        {
          no: 9,
          desc: 'Sprint Tech 6: Registrasi Akun Midtrans & Setup Logika Split Payment di Backend',
          active: [6],
        },
        {
          no: 10,
          desc: 'Sprint Tech 7: Membangun Checkout Action & Menampilkan Snap Modal di Frontend',
          active: [6, 7],
        },
        {
          no: 11,
          desc: 'Sprint Tech 8: Pengujian Webhook & Sinkronisasi Status Transaksi secara Real-time',
          active: [7],
        },
      ],
    },
    {
      phase: 'Fase 5',
      title: 'Testing, Deployment & Akademik',
      color: '#9b8fed',
      tasks: [
        {
          no: 12,
          desc: 'User Acceptance Testing (UAT) Internal & dengan Vendor Beta',
          active: [7, 8],
        },
        {
          no: 13,
          desc: 'Perbaikan Bug (Bug Fixing) & Deployment ke Production Server (Hosting/Cloud)',
          active: [8],
        },
        {
          no: 14,
          desc: 'Penyusunan Draf Hasil Business Plan & Konsultasi Bimbingan',
          active: [8, 9],
        },
        {
          no: 15,
          desc: 'SEMINAR HASIL PROYEK AKHIR',
          active: [9],
          isMilestone: true,
        },
      ],
    },
  ],
}

// ============================================================
// Lampiran II — Spesifikasi Teknologi Pengembangan
// ============================================================
export const techStackData = [
  {
    tech: 'Next.js 16 (App Router) & next-intl',
    category: 'Framework',
    color: '#212125',
    reason: 'SEO organik & rendering cepat (SSR). Dukungan multibahasa terintegrasi tanpa membebani bundle size pengguna.',
  },
  {
    tech: 'Tailwind CSS, shadcn/ui & Framer Motion',
    category: 'Styling & UI',
    color: '#361edb',
    reason: 'Utility-first CSS. Komponen siap pakai (shadcn) sangat efisien, animasi Framer Motion meningkatkan trust pada interaksi mikro.',
  },
  {
    tech: 'Supabase (PostgreSQL)',
    category: 'Backend & DB',
    color: '#3ecf8e',
    reason: 'BaaS praktis: autentikasi instan, penyimpanan file (CDN), dan keamanan level baris (RLS) tanpa membangun server dari nol.',
  },
  {
    tech: 'Midtrans (Snap & Webhooks)',
    category: 'Payment',
    color: '#00a8e6',
    reason: 'Payment gateway paling andal di Indonesia. Mendukung logika Escrow & split payment untuk keamanan dana dari penipuan.',
  },
  {
    tech: 'Vercel & Cloudflare',
    category: 'Deployment',
    color: '#000000',
    reason: 'Serverless deployment ultra-cepat. Otomasi CI/CD tanpa kerumitan DevOps — rilis tanpa downtime.',
  },
  {
    tech: 'PostHog & Google Analytics 4',
    category: 'Analytics',
    color: '#f54e00',
    reason: 'Mengukur konversi transaksi & memantau layar interaksi vendor via Session Replay untuk deteksi friction.',
  },
]

// ============================================================
// Lampiran I — Pedoman Wawancara Semi-Terstruktur B2B
// ============================================================
export const interviewGuideData = {
  target: 'Vendor: Pokdarwis, Penyewa Kendaraan/Alat, Pengelola DTW Lokal',
  fields: ['Nama vendor', 'Nama pemilik', 'Kategori layanan', 'Lokasi', 'Kontak'],
  sections: [
    {
      title: 'Pengantar',
      color: '#361edb',
      isIntro: true,
      questions: [
        {
          no: '—',
          q: '"Halo Bapak/Ibu, saya Surya. Saat ini saya sedang melakukan riset terkait pengembangan pariwisata digital di Lombok. Kami ingin belajar dari pengalaman Bapak/Ibu dalam mengelola [Daya Tarik Wisata / Usaha Jasa Sewa] di sini."',
        },
      ],
    },
    {
      title: 'Bagian 1: Profil & Operasional Saat Ini',
      color: '#db991d',
      questions: [
        { no: 1, q: 'Bisa diceritakan secara singkat, apa saja paket wisata atau jenis unit sewa yang Bapak/Ibu tawarkan?' },
        { no: 2, q: '(Khusus Jasa Sewa) Berapa jumlah total unit yang dimiliki? Apakah penyewa biasanya harian atau jam-jaman?' },
        { no: 3, q: 'Dalam sebulan atau musim liburan, berapa rata-rata jumlah pemesanan? Darimana mayoritas tamu berasal?' },
      ],
    },
    {
      title: 'Bagian 2: Validasi Masalah (Pemesanan & Pembayaran)',
      color: '#ed4544',
      questions: [
        { no: 4, q: 'Bagaimana cara tamu biasanya memesan tiket atau menyewa unit? (go-show, WhatsApp, atau Travel Agent?)' },
        { no: 5, q: 'Bagaimana proses pembayarannya? Bagaimana sistem jaminan keamanan (deposit/tahan KTP) untuk barang yang disewa?' },
        { no: 6, q: 'Pernahkah ada kendala: tamu batal mendadak, sulit melacak unit yang belum dikembalikan, atau double-booking?' },
        { no: 7, q: 'Bagian mana dari pengelolaan harian (promosi → catat ketersediaan → tamu pulang) yang paling merepotkan?' },
      ],
    },
    {
      title: 'Bagian 3: Validasi Solusi & Kesiapan Teknologi',
      color: '#54c980',
      questions: [
        { no: 8, q: 'Jika ada platform online yang membantu pesanan, pembayaran otomatis, & ketersediaan real-time, apakah itu akan membantu? Mengapa?' },
        { no: 9, q: 'Bagaimana kebiasaan tim menggunakan smartphone? (Lebih suka cek email, atau notifikasi langsung via WhatsApp?)' },
        { no: 10, q: 'Apakah Bapak/Ibu bersedia mempelajari dashboard di HP untuk mengatur ketersediaan harian, atau butuh pendampingan khusus?' },
      ],
    },
    {
      title: 'Bagian 4: Model Bisnis & Ekspektasi',
      color: '#9b8fed',
      questions: [
        { no: 11, q: 'Apakah Bapak/Ibu keberatan jika ada sistem komisi atau biaya admin untuk setiap transaksi yang berhasil melalui platform kami?' },
        { no: 12, q: 'Menurut pengalaman Bapak/Ibu, berapa persentase komisi yang dianggap wajar dan menguntungkan kedua belah pihak?' },
        { no: 13, q: 'Seberapa sering pencairan dana ke rekening yang diharapkan? (Harian, mingguan, atau setelah sewa selesai?)' },
      ],
    },
    {
      title: 'Penutup & Akuisisi',
      color: '#db991d',
      isOutro: true,
      questions: [
        {
          no: '—',
          q: '"Terima kasih banyak atas waktunya. Saat ini kami sedang membangun prototipe platform bernama Gelamang. Jika sistem ini sudah siap diuji coba akhir bulan depan, apakah Bapak/Ibu bersedia menjadi mitra pertama kami untuk mencobanya secara gratis?"',
        },
      ],
    },
  ],
}
