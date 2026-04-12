// Lean Canvas Data — Gelamang
// Source: Kumpulan Tabel Data Gelamang.md + Seminar Proposal PDF

export const leanCanvasData = {
  problem: {
    label: 'MASALAH',
    color: '#fecbca',
    borderColor: '#ed4544',
    items: [
      'B2C: Waktu terbuang mencari & negosiasi layanan wisata secara manual (RLM stagnan di 1,5 hari).',
      'B2B: Ketiadaan modal & literasi teknis untuk membangun infrastruktur reservasi digital sendiri.',
      'Pasar: Inventaris wisata hiper-lokal terfragmentasi; tidak ada basis data ketersediaan real-time.'
    ]
  },
  solution: {
    label: 'SOLUSI',
    color: '#d4f2e3',
    borderColor: '#54c980',
    items: [
      'Dasbor B2B Asimetris: Antarmuka disederhanakan (mirip WhatsApp) untuk atur kuota & harga dinamis.',
      'Mesin Reservasi B2C: Aplikasi web responsif dengan filter parametrik & ulasan terverifikasi.',
      'Rekening Bersama (Escrow): Mencegah penipuan & risiko ketidakhadiran (no-show).'
    ]
  },
  uvp: {
    label: 'PROPOSISI NILAI UNIK (UVP)',
    color: '#fff3c4',
    borderColor: '#db991d',
    highlight: true,
    items: [
      'Hyper-Local Enabler — Platform Shopify × Airbnb khusus pariwisata akar rumput NTB.',
      'B2B: Tanpa Modal Awal (Zero Capital Expenditure) — manajemen pemesanan digital tanpa beban biaya IT.',
      'B2C: "Premi Keamanan & Kenyamanan" — reservasi 1-pintu, harga pasti, transaksi terlindungi.'
    ]
  },
  unfairAdvantage: {
    label: 'KEUNGGULAN KOMPETITIF',
    color: '#e8e4fc',
    borderColor: '#361edb',
    items: [
      'Kontrak Eksklusivitas B2B & MoU Desa: Parit pelindung dari ancaman aneksasi OTA global.',
      'Harmonisasi Birokrasi: Keselarasan dengan visi Disparbud NTB — legitimasi B2G yang sulit direplikasi.'
    ]
  },
  customerSegments: {
    label: 'SEGMEN PELANGGAN',
    color: '#dbeafe',
    borderColor: '#a0c9f3',
    items: [
      'B2B: Pokdarwis, desa wisata, UMKM pariwisata lokal yang terkendala literasi digital. Pengguna Awal: Vendor KEK (Kawasan Ekonomi Khusus) Mandalika.',
      'B2C: Wisatawan Mandiri (FIT), Milenial & Gen-Z, melek teknologi, suka pemesanan spontan.'
    ]
  },
  keyMetrics: {
    label: 'METRIK KUNCI',
    color: '#f2f2f2',
    borderColor: '#908f92',
    items: [
      'Akuisisi B2B: Vendor yang berhasil terdaftar (target: 10–15 penguji awal).',
      'Aktivasi B2C: Pengguna Aktif Harian (DAU).',
      'Konversi: Total nilai transaksi (GMV) harian & jumlah transaksi berhasil.'
    ]
  },
  channels: {
    label: 'SALURAN DISTRIBUSI',
    color: '#f2f2f2',
    borderColor: '#908f92',
    items: [
      'B2B: Penjualan langsung (door-to-door) & kemitraan birokrasi Kepala Desa/Pokdarwis.',
      'B2C: Komunitas backpacker, brosur QR code di bandara/pelabuhan, viralitas organik TikTok.'
    ]
  },
  costStructure: {
    label: 'STRUKTUR BIAYA',
    color: '#fdf2f0',
    borderColor: '#f77170',
    items: [
      'Tetap: Infrastruktur cloud (bayar sesuai pemakaian), gaji tim inti, legalitas. (Biaya dev ditekan via AI agentic).',
      'Variabel: Biaya akuisisi pelanggan (dimitigasi nilai pelanggan jangka panjang), biaya layanan pembayaran/MDR (1,5–3%) + biaya pencairan.'
    ]
  },
  revenueStreams: {
    label: 'ARUS PENDAPATAN',
    color: '#fff3c4',
    borderColor: '#db991d',
    items: [
      'Model Inti: Model agensi tanpa aset fisik (asset-light).',
      'Komisi (Take-Rate): 10% dari total nilai transaksi (GMV) per transaksi berhasil.',
      'Tanpa biaya pendaftaran & tanpa biaya langganan — tidak ada hambatan masuk bagi vendor.'
    ]
  }
};
