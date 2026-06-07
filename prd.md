# PRODUCT REQUIREMENTS DOCUMENT (PRD) - SENIMATH
## 1. Ikhtisar Produk
 * **Nama Produk:** Senimath.
 * **Target Pengguna:** Siswa jenjang SMP (Kelas 7-9) dan SMA (Kelas 10-12).
 * **Tujuan Utama:** Menyediakan sebuah *website* pembelajaran matematika interaktif yang mengadaptasi pendekatan *deliberate learning* untuk membantu siswa menyesuaikan pembelajaran dari dasar hingga tingkat lanjut.
 * **Pengembang Utama:** Rayhansamu (Lulusan S1 Pendidikan Matematika UNJ).
## 2. Arsitektur dan Navigasi Utama
 * **Sistem Navigasi:** Aplikasi menggunakan komponen Sidebar berbentuk *pop-up* yang dipanggil melalui *Burger Button* di sisi kiri layar.
 * **Daftar Menu Utama:** Meliputi Home, Panduan, Mulai Belajar, Info, Toko, Pengaturan, dan Tentang Kami [cite: 36-42, 87, 142].
 * [cite_start]**Behavior Navigasi:** Website mengadopsi mekanisme *smooth scroll* (scroll-smooth) menggunakan referensi useRef dan useEffect pada React [cite: 77, 88, 143, 533-534, 538]. [cite_start]Fitur ini secara otomatis mengembalikan tampilan layar ke titik paling atas (scrollTop = 0) setiap kali pengguna berpindah halaman.
## 3. Spesifikasi Fitur dan Tampilan UI per Halaman
### A. Halaman Home (Beranda)
Gerbang pendaratan yang didesain untuk memotivasi pengguna sebelum belajar.
 * **Hero Section:** Menampilkan logo teks "SENIMATH" berukuran masif dengan teks *marquee* dinamis (seperti "Gunakan logikamu sebagai kuas...") yang bergerak dari kanan ke kiri.
 * **Pintasan Panduan:** Cuplikan kotak ajakan membaca panduan yang dilengkapi tombol "Baca selengkapnya" menuju halaman penuh.
 * **Pemilihan Jenjang:** Terdapat judul "Sudah siap belajar?" beserta dua tombol berukuran raksasa untuk memilih materi SMP atau SMA.
 * **Artikel Slider:** *Display* dinamis berbentuk slider untuk menggeser kartu-kartu artikel.
 * **Footer (Profil & Kontak):**
   * Menampilkan avatar foto profil menggunakan ikon *User* kosong.
   * Teks identitas Rayhansamu dengan keterangan "Lulusan S1 Pendidikan Matematika UNJ.".
   * Terdapat tombol bertuliskan "Info Les Private Matematika" yang disandingkan dengan logo ikon Buku.
   * Dua buah tautan (*anchor tag*) yang tersusun rapi mengarah ke Instagram @rayhansamu dan @senimath lengkap dengan ikonnya.
   * Bagian paling bawah ditutup dengan *banner* khusus (*call-to-action*) berisi tautan donasi Saweria dengan tulisan "untuk support penulis dalam pengembangan website senimath".
### B. Halaman Panduan
Pusat instruksi agar siswa dapat memaksimalkan cara kerja sistem *deliberate learning*.
 * **Teks Pembuka:** Instruksi mengatur ukuran teks dan tema layar. Kata "pengaturan" pada teks tersebut ditandai dengan latar belakang sejuk berbentuk *badge* khusus lengkap dengan ikon *Settings* agar intuitif [cite: 154, 286-287].
 * [cite_start]**Simulasi 5 Tipe Latihan Soal:** Setiap penjelasan tipe soal dilengkapi dengan komponen kartu soal tiruan (*Mock Question Card*) yang secara visual identik dengan soal asli namun bersifat *read-only* [cite: 50, 101, 155, 515-516].
 * [cite_start]**Badge Indikator Fitur:** Penanda fitur yang tersedia (seperti "Ada Ide Menjawab") menggunakan warna hijau lembut (*emerald*), dan fitur yang absen menggunakan warna merah lembut (*rose*). Keterangan lainnya menggunakan teks berwarna netral agar nyaman di mata.
 * **Banner Toko:** Disisipkan sebuah kotak (*hook*) beraksen hijau di bagian akhir halaman dengan ajakan mengunjungi toko untuk membeli paket 100 latihan soal. Banner ini dilengkapi tombol interaktif "Kunjungi Toko".
### C. Pembelajaran (Materi & Latihan Soal)
 * **Hierarki & Breadcrumbs:** Penamaan bab materi diatur rapi dengan awalan nama kelas (contoh: *Kelas VII - Bilangan Bulat dan Pecahan*) [cite: 158-159, 398, 453]. [cite_start]Navigasinya runut dari Jenjang > Nama Bab > Sub Materi > Mode (Materi/Latihan).
 * **Konten Materi:** Teks disusun dengan tingkat keterbacaan (*readability*) tinggi, diakhiri dengan tombol raksasa "Gas Latihan Soal".
 * **Sistem dan UI Latihan Soal:**
   * **Header Kontrol:** Berada di baris atas, memuat menu *dropdown* untuk tipe soal yang bertuliskan "Tipe 1" hingga "Tipe 5" (tanpa kata "Latihan") dan indikator navigasi posisi soal. Tombol "Download PDF" telah dihapus sepenuhnya.
   * **Navigasi Soal:** Terdapat tombol besar "Sebelumnya" (menggunakan ikon *ChevronLeft*) dan "Selanjutnya" di bawah area kartu soal. Jika pilihan *dropdown* tipe soal diubah, sistem me-*reset* posisi kembali ke soal nomor 1.
   * **Fitur Ide Menjawab:** Menggunakan visual ikon bohlam lampu (*Lightbulb*) yang akan menyala atau terisi warna saat tombol ditekan [cite: 111, 165, 519-520].
   * [cite_start]**Klik Pilihan Ganda:** Opsi jawaban pada Pilihan Ganda ditanamkan tag <input type="radio" className="hidden" /> sehingga area kotak opsi dapat ditekan langsung untuk memilih jawaban [cite: 112, 166, 343-344].
 * **Detail Mode 5 Tipe:**
   * [cite_start]**Tipe 1 (PG):** Ide Menjawab (Tersedia), Animasi Benar/Salah (Tersedia), Pembahasan terbuka setelah klik "Simpan Jawaban".
   * **Tipe 2 (Esai Target):** Ide Menjawab (Tersedia), Indikator Benar/Salah (Tidak tersedia), Pembahasan terbuka untuk membuktikan cara siswa.
   * **Tipe 3 (PG):** Ide Menjawab (Tidak tersedia), Animasi Benar/Salah (Tersedia), Pembahasan terbuka setelah klik "Simpan Jawaban".
   * **Tipe 4 (Esai Target):** Ide Menjawab (Tidak tersedia), Indikator Benar/Salah (Tidak tersedia), Pembahasan terbuka untuk membuktikan cara siswa.
   * **Tipe 5 (Esai Murni):** Ide Menjawab (Tidak tersedia), Animasi Benar/Salah (Tersedia), Pembahasan terbuka setelah klik "Simpan Jawaban".
### D. Halaman Info
Menyediakan fitur literasi artikel dan informasi jasa pengajaran/privat.
 * **Kumpulan Artikel:** Disajikan dalam bentuk kartu-kartu yang akan melayang jika disorot kursor (*hover effect*). Kartu ini dapat ditekan untuk membuka halaman rute baru yang menampilkan bacaan penuh, yang dilengkapi dengan tombol kembali berikon *ChevronLeft* dengan teks "Info" [cite: 119, 174-175, 300, 333].
 * [cite_start]**Promo Les Private:** Terdapat tiga kartu kotak dengan desain setara (tidak ada yang terlalu menonjol): *Private Online*, *Private Offline* (khusus Depok), dan Kelas Besar (minimal 3 orang) [cite: 120-121, 176, 231, 308-309]. [cite_start]Setiap kotak penawaran dilengkapi keuntungan "Free akses ke 100 latihan soal dan pembahasan pada materi yang sedang dipelajari" dan sebuah tombol "Hubungi Sekarang" yang mengarah ke WhatsApp [cite: 122-123, 177, 232, 309].
### E. Halaman Toko
Etalase terintegrasi untuk membeli *bundle* soal.
 * [cite_start]**Struktur UI:** Formatnya adalah daftar memanjang secara vertikal berbentuk akordeon (*list*), bukan format *grid*, di mana seluruh baris nama materi bersifat *clickable* [cite: 64, 124, 179, 318, 321-322]. [cite_start]Saat di-*hover*, ikon panah kanan (*ChevronRight*) akan bergeser mengindikasikan interaksi.
 * **Kategorisasi Visual:** Tampilan dipisah berdasarkan jenjang dan diurutkan dari SMP terlebih dahulu, lalu SMA. SMP dibedakan dengan warna tema biru, sedangkan SMA menggunakan tema warna kuning/amber [cite: 66, 127-128, 180, 312].
 * [cite_start]**Dropdown Akordeon:** Ketika satu baris materi ditekan, ia akan memperluas diri ke bawah (*dropdown*) untuk menampilkan dua variasi sub-produk yaitu "Versi Biasa" dan "Versi Cerita" demi menghemat letak ruang layar [cite: 65, 126, 181, 326-328].
 * [cite_start]**Call-to-Action:** Tombol aksi pada masing-masing produk bertuliskan "Gass Latihan" yang terhubung langsung dan akan membuka halaman *landing page* Lynk.id melalui tab baru (target="_blank").
### F. Halaman Pengaturan & Tentang Kami
 * **Pengaturan Visual:** Terdapat menu *toggle* untuk berpindah antara tema *Light/Dark* dan tombol aritmetika (+/-) untuk penyesuaian teks agar mata pengguna tidak cepat lelah.
 * **Tentang Pengembang:** Memuat profil foto ikon *User* kosong, status kelulusan dari Universitas Negeri Jakarta (UNJ), penjelasan fokus riset bahan ajar (termasuk proyek skripsi LKPD ular tangga), serta tautan sosial media dan donasi Saweria [cite: 69, 131-133, 184-185, 236].
 * [cite_start]**Profil Penelaah:** Di bagian bawah disediakan ruang *space* profil untuk Penelaah materi yang saat ini berstatus "belum ada".
## 4. Basis Data Kurikulum (Mock Data SMP)
Seluruh materi SMP telah disusun lengkap ke dalam *database mock* aplikasi.
 * **Kelas VII:** Bilangan Bulat dan Pecahan, Himpunan, Bentuk Aljabar, Persamaan & Pertidaksamaan Linear Satu Variabel (PLSV & PtLSV), Perbandingan, Aritmetika Sosial, Garis, Sudut, dan Bangun Datar [cite: 72, 188, 346-364].
 * [cite_start]**Kelas VIII:** Pola Bilangan (Barisan dan Deret), Sistem Koordinat Cartesius, Relasi dan Fungsi, Persamaan Garis Lurus (PGL), Sistem Persamaan Linear Dua Variabel (SPLDV), Teorema Pythagoras, Lingkaran, Bangun Ruang Sisi Datar, Statistika dan Peluang [cite: 73, 189, 365-384].
 * [cite_start]**Kelas IX:** Bilangan Berpangkat & Bentuk Akar, Persamaan dan Fungsi Kuadrat, Transformasi Geometri, Kesebangunan dan Kekongruenan, Bangun Ruang Sisi Lengkung [cite: 74, 190, 385-396].
## 5. Arsitektur Teknis dan Desain Web
[cite_start]Aplikasi ini dikembangkan dalam ekosistem React Web Framework (SPA).
 * **Responsivitas & Estetika:** Tata letak antarmuka dioptimalkan secara responsif untuk layar *Desktop*, *Tablet*, dan *Mobile* (HP). Gaya visual harus terlihat bersih (*clean*), *heading* berbentuk tebal (bold), dan teks *body* pada teori materi menitikberatkan pada *readability* yang tinggi [cite: 76, 193-194, 239-240].
 * **Struktur Folder Modular:**
   1. [cite_start]**Konfigurasi Root:** Lokasi bagi file package.json, tailwind.config.js, vite.config.js.
   2. **/src/data/:** Memisahkan objek data ke courses.js, articles.js, dan products.js.
   3. **/src/components/:** Bagian UI modular interaktif seperti Sidebar.jsx dan QuestionCard.jsx.
   4. **/src/pages/:** Menyimpan komponen halaman independen: Home.jsx, Panduan.jsx, MulaiBelajar.jsx, Materi.jsx, Info.jsx, Artikel.jsx, Toko.jsx, Pengaturan.jsx, TentangKami.jsx.
   5. **/src/:** Lokasi titik masuk *rendering* utama seperti main.jsx dan komponen induk router App.jsx.