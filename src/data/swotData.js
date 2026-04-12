// SWOT Analysis Data — Gelamang
// Source: Kumpulan Tabel Data Gelamang.md

export const ifasData = {
  strengths: [
    { code: 'S1', factor: 'Pendekatan Hyper-local', bobot: 0.20, rating: 4, skor: 0.80, justifikasi: 'Fondasi Unfair Advantage yang membedakan Gelamang dari OTA secara umum.' },
    { code: 'S2', factor: 'Zero Capital Expenditure', bobot: 0.15, rating: 3, skor: 0.45, justifikasi: 'Menurunkan hambatan masuk (barrier to entry) bagi vendor lokal.' },
    { code: 'S3', factor: 'Selaras dengan Visi Smart Tourism NTB', bobot: 0.15, rating: 3, skor: 0.45, justifikasi: 'Membuka peluang subsidi dan kemitraan strategis dengan pemerintah daerah.' },
  ],
  weaknesses: [
    { code: 'W1', factor: 'Nihil Traction (Belum ada validasi pasar)', bobot: 0.20, rating: 1, skor: 0.20, justifikasi: 'Risiko tertinggi operasional; asumsi model bisnis berpotensi meleset.' },
    { code: 'W2', factor: 'Literasi digital mitra lokal yang rendah', bobot: 0.15, rating: 2, skor: 0.30, justifikasi: 'Membutuhkan waktu & biaya ekstra untuk edukasi dan onboarding vendor.' },
    { code: 'W3', factor: 'Keterbatasan modal awal (Runway pendek)', bobot: 0.15, rating: 2, skor: 0.30, justifikasi: 'Tidak memiliki fleksibilitas untuk "bakar uang" dalam pemasaran digital.' },
  ],
  total: 2.5,
};

export const efasData = {
  opportunities: [
    { code: 'O1', factor: 'Tren seamless digital booking pasca-pandemi', bobot: 0.20, rating: 4, skor: 0.80, justifikasi: 'Gelamang didesain spesifik untuk menjadi solusi satu pintu (one-stop solution).' },
    { code: 'O2', factor: 'Momentum kampanye "NTB Mendunia"', bobot: 0.15, rating: 3, skor: 0.45, justifikasi: 'Katalis publisitas organik yang menguntungkan ekosistem wisata Lombok.' },
    { code: 'O3', factor: 'Fragmentasi inventaris Niche Market', bobot: 0.15, rating: 3, skor: 0.45, justifikasi: 'Banyak paket desa wisata spesifik yang tidak terakomodasi di OTA raksasa.' },
  ],
  threats: [
    { code: 'T1', factor: 'Dominasi pasar oleh Raksasa OTA Global', bobot: 0.20, rating: 2, skor: 0.40, justifikasi: 'Ancaman kanibalisasi jika berhadapan head-to-head di segmen pasar yang sama.' },
    { code: 'T2', factor: 'Resistensi adopsi teknologi oleh vendor lokal', bobot: 0.15, rating: 2, skor: 0.30, justifikasi: 'Hambatan langsung terhadap kelancaran akuisisi rantai pasok (supply-side).' },
    { code: 'T3', factor: 'Inkonsistensi SOP layanan vendor di lapangan', bobot: 0.15, rating: 2, skor: 0.30, justifikasi: 'Berpotensi menghancurkan kredibilitas aplikasi Gelamang akibat bad reviews.' },
  ],
  total: 2.7,
};

export const sfasData = [
  { code: 'S1', factor: 'Pendekatan Hyper-local', bobot: 0.25, rating: 4, skor: 1.00, strategi: 'Eksploitasi: Jadikan Unique Selling Proposition (USP) utama kampanye perusahaan.' },
  { code: 'O1', factor: 'Tren Seamless Digital Booking', bobot: 0.20, rating: 4, skor: 0.80, strategi: 'Tunggangi: Prioritaskan kecepatan transaksi (UI/UX) pada purwarupa aplikasi.' },
  { code: 'S3', factor: 'Keselarasan Visi Smart Tourism', bobot: 0.15, rating: 3, skor: 0.45, strategi: 'Kembangkan: Jajaki audiensi dengan Disparbud NTB untuk mengamankan dukungan legal.' },
  { code: 'T1', factor: 'Monopoli Raksasa OTA Global', bobot: 0.20, rating: 2, skor: 0.40, strategi: 'Hindari: Berlakukan embargo internal untuk tidak bersaing harga di segmen umum.' },
  { code: 'W1', factor: 'Nihil Traction', bobot: 0.20, rating: 1, skor: 0.20, strategi: 'Atasi Segera: Wajib meluncurkan MVP untuk menguji pasar.' },
];

export const sfasTotal = 2.85;

export const towsStrategies = {
  so: [
    { codes: 'S1, S3, O2', strategy: 'Bergerak cepat mengajukan MoU dengan Pemda NTB sebagai official partner desa wisata, menciptakan "parit pelindung" bisnis.' },
    { codes: 'S2, O1', strategy: 'Kampanye B2B Marketing: "Punya Sistem Booking Sendiri Tanpa Biaya IT" untuk menarik vendor konvensional secara agresif.' },
  ],
  wo: [
    { codes: 'W2, O2', strategy: 'Berkolaborasi dengan kampus/pemerintah untuk mengedukasi digitalisasi vendor secara gratis, menekan CAC.' },
    { codes: 'W1, O3', strategy: 'Segera rilis purwarupa (MVP) di 1-2 destinasi spesifik untuk membuktikan traction awal sebelum mencari pendanaan.' },
  ],
  st: [
    { codes: 'S1, T1', strategy: 'Tetap "berada di bawah radar" OTA Global dengan hanya menjual produk hiper-lokal otentik yang terlalu niche bagi korporat besar.' },
    { codes: 'S2, T2', strategy: 'Merancang interface aplikasi B2B semudah mungkin (mirip WhatsApp) untuk mendobrak gaptek vendor lokal.' },
  ],
  wt: [
    { codes: 'W3, T1', strategy: 'Bootstrapping: Hindari bakar uang di iklan berbayar; fokus pada Word of Mouth dan viralitas TikTok.' },
  ],
};

// IE Matrix: IFE = 2.5, EFE = 2.7 → Cell V ("Jaga dan Pertahankan")
export const ieMatrix = { ife: 2.5, efe: 2.7, cell: 'V', strategy: 'Jaga dan Pertahankan' };
