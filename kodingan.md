import React, { useState, useEffect, useRef } from 'react';
import { 
  Menu, X, Home, BookOpen, Play, Info, ShoppingBag, 
  Settings, User, CheckCircle, XCircle, Lightbulb, 
  ChevronRight, ArrowRight, Instagram, MessageCircle, Lock, ChevronLeft, Book, ChevronDown
} from 'lucide-react';

// --- MOCK DATA ---

const MOCK_COURSES = {
  SMP: {
    'Kelas VII - Bilangan Bulat dan Pecahan': {
      'Pengertian dan pengelompokan bilangan': { materi: "Materi sedang dalam tahap pengembangan. Pantau terus update Senimath ya!", latihan: [] },
      'Mengurutkan dan membandingkan bilangan bulat': {
        materi: "Bilangan bulat terdiri dari bilangan bulat positif, nol, dan bilangan bulat negatif. Semakin ke kanan pada garis bilangan, nilainya semakin besar. Semakin ke kiri, nilainya semakin kecil.\n\nContoh: 5 > -2, karena 5 berada di sebelah kanan -2 pada garis bilangan.",
        latihan: [
          {
            id: 1,
            type: 1,
            question: "Manakah pernyataan di bawah ini yang benar?",
            options: ["-5 > -2", "3 < -4", "-1 > -10", "0 < -5"],
            correctAnswer: 2, // index 2 ("-1 > -10")
            idea: "Gambarkan garis bilangan. Angka yang berada lebih ke kanan selalu lebih besar nilainya.",
            pembahasan: "Pada garis bilangan, -1 terletak di sebelah kanan -10. Oleh karena itu, -1 lebih besar dari -10 (-1 > -10)."
          },
          {
            id: 101,
            type: 1,
            question: "Manakah dari bilangan berikut yang paling kecil nilainya?",
            options: ["-15", "-8", "0", "2"],
            correctAnswer: 0,
            idea: "Semakin besar angka dengan tanda negatif, letaknya semakin ke kiri di garis bilangan yang berarti nilainya semakin kecil.",
            pembahasan: "-15 adalah angka dengan nilai negatif terbesar di opsi ini, sehingga ia merupakan bilangan yang paling kecil nilainya."
          },
          {
            id: 2,
            type: 2,
            question: "Buktikan bahwa hasil dari 5 - (-3) adalah 8.",
            targetAnswer: "8",
            idea: "Pengurangan dengan bilangan negatif sama dengan penjumlahan dengan bilangan positif.",
            pembahasan: "5 - (-3) = 5 + 3 = 8. Pengurangan bilangan negatif berbalik menjadi operasi penjumlahan."
          },
          {
            id: 3,
            type: 3,
            question: "Jika suhu di kota A adalah -4°C dan kota B adalah 2°C, kota mana yang lebih dingin?",
            options: ["Kota A", "Kota B", "Sama saja", "Tidak bisa ditentukan"],
            correctAnswer: 0,
            pembahasan: "Suhu yang lebih rendah menunjukkan kondisi yang lebih dingin. -4 < 2, jadi Kota A lebih dingin."
          },
          {
            id: 4,
            type: 4,
            question: "Tunjukkan langkah-langkah mengapa -10 + 15 menghasilkan 5.",
            targetAnswer: "5",
            pembahasan: "Bayangkan kamu memiliki utang 10 (-10), lalu kamu membayar 15 (+15). Maka sisa uangmu adalah 5 (positif)."
          },
          {
            id: 5,
            type: 5,
            question: "Sebuah kapal selam berada di kedalaman 50 meter di bawah permukaan laut. Kemudian kapal selam tersebut naik 20 meter. Berada di kedalaman berapakah kapal selam itu sekarang? (Gunakan tanda negatif untuk di bawah permukaan laut)",
            correctAnswer: "-30",
            pembahasan: "Posisi awal: -50. Naik berarti ditambah (+20). Maka posisinya: -50 + 20 = -30. Jadi kapal berada 30 meter di bawah permukaan laut."
          }
        ]
      },
      'Operasi hitung bilangan bulat': { materi: "Materi sedang dalam tahap pengembangan.", latihan: [] },
      'Sifat-sifat operasi hitung': { materi: "Materi sedang dalam tahap pengembangan.", latihan: [] },
      'Pangkat dan akar bilangan bulat sederhana': { materi: "Materi sedang dalam tahap pengembangan.", latihan: [] },
      'Macam-macam pecahan': { materi: "Materi sedang dalam tahap pengembangan.", latihan: [] },
      'Operasi hitung pecahan dan pengubahan bentuk': { materi: "Materi sedang dalam tahap pengembangan.", latihan: [] }
    },
    'Kelas VII - Himpunan': {
      'Pengertian himpunan dan cara menyatakannya': { materi: "Materi sedang dalam tahap pengembangan.", latihan: [] },
      'Macam-macam himpunan': { materi: "Materi sedang dalam tahap pengembangan.", latihan: [] },
      'Pembuatan dan pembacaan Diagram Venn': { materi: "Materi sedang dalam tahap pengembangan.", latihan: [] },
      'Operasi himpunan': { materi: "Materi sedang dalam tahap pengembangan.", latihan: [] },
      'Sifat-sifat operasi himpunan': { materi: "Materi sedang dalam tahap pengembangan.", latihan: [] }
    },
    'Kelas VII - Bentuk Aljabar': {
      'Pengertian unsur aljabar': { materi: "Materi sedang dalam tahap pengembangan.", latihan: [] },
      'Operasi hitung aljabar dasar': { materi: "Materi sedang dalam tahap pengembangan.", latihan: [] },
      'Pemfaktoran dasar aljabar': { materi: "Materi sedang dalam tahap pengembangan.", latihan: [] },
      'Operasi pecahan bentuk aljabar': { materi: "Materi sedang dalam tahap pengembangan.", latihan: [] }
    },
    'Kelas VII - PLSV & PtLSV': {
      'Pengertian kalimat terbuka dan tertutup': { materi: "Materi sedang dalam tahap pengembangan.", latihan: [] },
      'Bentuk umum dan penyelesaian PLSV': { materi: "Materi sedang dalam tahap pengembangan.", latihan: [] },
      'Pengertian dan lambang PtLSV': { materi: "Materi sedang dalam tahap pengembangan.", latihan: [] },
      'Penyelesaian PtLSV dan aturan garis bilangan': { materi: "Materi sedang dalam tahap pengembangan.", latihan: [] }
    },
    'Kelas VII - Perbandingan': {
      'Konsep skala pada peta': { materi: "Materi sedang dalam tahap pengembangan.", latihan: [] },
      'Perbandingan senilai': { materi: "Materi sedang dalam tahap pengembangan.", latihan: [] },
      'Perbandingan berbalik nilai': { materi: "Materi sedang dalam tahap pengembangan.", latihan: [] },
      'Faktor perbesaran dan pengecilan gambar': { materi: "Materi sedang dalam tahap pengembangan.", latihan: [] }
    },
    'Kelas VII - Aritmetika Sosial': {
      'Konsep harga jual, beli, untung, rugi': { materi: "Materi sedang dalam tahap pengembangan.", latihan: [] },
      'Menghitung Pajak dan Diskon': { materi: "Materi sedang dalam tahap pengembangan.", latihan: [] },
      'Menghitung Bruto, Tara, Neto': { materi: "Materi sedang dalam tahap pengembangan.", latihan: [] },
      'Bunga bank tunggal': { materi: "Materi sedang dalam tahap pengembangan.", latihan: [] }
    },
    'Kelas VII - Garis, Sudut, dan Bangun Datar': {
      'Kedudukan dua garis': { materi: "Materi sedang dalam tahap pengembangan.", latihan: [] },
      'Jenis-jenis sudut dan hubungan antar sudut': { materi: "Materi sedang dalam tahap pengembangan.", latihan: [] },
      'Sifat sudut pada dua garis sejajar': { materi: "Materi sedang dalam tahap pengembangan.", latihan: [] },
      'Sifat, keliling, dan luas Bangun Datar': { materi: "Materi sedang dalam tahap pengembangan.", latihan: [] }
    },
    'Kelas VIII - Pola Bilangan': {
      'Mengidentifikasi pola bilangan': { materi: "Materi sedang dalam tahap pengembangan.", latihan: [] },
      'Barisan dan deret aritmetika': { materi: "Materi sedang dalam tahap pengembangan.", latihan: [] },
      'Barisan dan deret geometri': { materi: "Materi sedang dalam tahap pengembangan.", latihan: [] }
    },
    'Kelas VIII - Sistem Koordinat Cartesius': {
      'Posisi titik terhadap sumbu-X dan sumbu-Y': { materi: "Materi sedang dalam tahap pengembangan.", latihan: [] },
      'Posisi titik terhadap titik asal dan tertentu': { materi: "Materi sedang dalam tahap pengembangan.", latihan: [] },
      'Pemahaman pembagian kuadran': { materi: "Materi sedang dalam tahap pengembangan.", latihan: [] }
    },
    'Kelas VIII - Relasi dan Fungsi': {
      'Pengertian relasi dan cara menyatakannya': { materi: "Materi sedang dalam tahap pengembangan.", latihan: [] },
      'Pengertian fungsi, domain, kodomain, range': { materi: "Materi sedang dalam tahap pengembangan.", latihan: [] },
      'Notasi dan rumus fungsi linear': { materi: "Materi sedang dalam tahap pengembangan.", latihan: [] },
      'Korespondensi satu-satu': { materi: "Materi sedang dalam tahap pengembangan.", latihan: [] }
    },
    'Kelas VIII - Persamaan Garis Lurus (PGL)': {
      'Bentuk umum persamaan garis lurus': { materi: "Materi sedang dalam tahap pengembangan.", latihan: [] },
      'Menentukan gradien garis': { materi: "Materi sedang dalam tahap pengembangan.", latihan: [] },
      'Menentukan persamaan garis lurus baru': { materi: "Materi sedang dalam tahap pengembangan.", latihan: [] },
      'Hubungan dua garis lurus': { materi: "Materi sedang dalam tahap pengembangan.", latihan: [] }
    },
    'Kelas VIII - SPLDV': {
      'Bentuk umum SPLDV': { materi: "Materi sedang dalam tahap pengembangan.", latihan: [] },
      'Penyelesaian dengan substitusi dan eliminasi': { materi: "Materi sedang dalam tahap pengembangan.", latihan: [] },
      'Penyelesaian dengan metode grafik': { materi: "Materi sedang dalam tahap pengembangan.", latihan: [] },
      'Aplikasi pemodelan soal cerita': { materi: "Materi sedang dalam tahap pengembangan.", latihan: [] }
    },
    'Kelas VIII - Teorema Pythagoras': {
      'Pembuktian Teorema Pythagoras': { materi: "Materi sedang dalam tahap pengembangan.", latihan: [] },
      'Identifikasi Tripel Pythagoras': { materi: "Materi sedang dalam tahap pengembangan.", latihan: [] },
      'Aplikasi Pythagoras': { materi: "Materi sedang dalam tahap pengembangan.", latihan: [] }
    },
    'Kelas VIII - Lingkaran': {
      'Unsur-unsur lingkaran': { materi: "Materi sedang dalam tahap pengembangan.", latihan: [] },
      'Keliling, luas, panjang busur, luas juring': { materi: "Materi sedang dalam tahap pengembangan.", latihan: [] },
      'Hubungan sudut pusat dan sudut keliling': { materi: "Materi sedang dalam tahap pengembangan.", latihan: [] },
      'Garis singgung lingkaran': { materi: "Materi sedang dalam tahap pengembangan.", latihan: [] }
    },
    'Kelas VIII - Bangun Ruang Sisi Datar': {
      'Kubus': { materi: "Materi sedang dalam tahap pengembangan.", latihan: [] },
      'Balok': { materi: "Materi sedang dalam tahap pengembangan.", latihan: [] },
      'Prisma': { materi: "Materi sedang dalam tahap pengembangan.", latihan: [] },
      'Limas': { materi: "Materi sedang dalam tahap pengembangan.", latihan: [] }
    },
    'Kelas VIII - Statistika dan Peluang': {
      'Penyajian data': { materi: "Materi sedang dalam tahap pengembangan.", latihan: [] },
      'Ukuran pemusatan data': { materi: "Materi sedang dalam tahap pengembangan.", latihan: [] },
      'Ukuran penyebaran data': { materi: "Materi sedang dalam tahap pengembangan.", latihan: [] },
      'Percobaan, ruang sampel, titik sampel': { materi: "Materi sedang dalam tahap pengembangan.", latihan: [] },
      'Peluang kejadian dan frekuensi harapan': { materi: "Materi sedang dalam tahap pengembangan.", latihan: [] }
    },
    'Kelas IX - Bilangan Berpangkat & Akar': {
      'Konsep pangkat positif, nol, dan negatif': { materi: "Materi sedang dalam tahap pengembangan.", latihan: [] },
      'Sifat perkalian, pembagian, pemangkatan eksponen': { materi: "Materi sedang dalam tahap pengembangan.", latihan: [] },
      'Operasi bentuk akar dan merasionalkan penyebut': { materi: "Materi sedang dalam tahap pengembangan.", latihan: [] }
    },
    'Kelas IX - Persamaan dan Fungsi Kuadrat': {
      'Pemfaktoran bentuk kuadrat': { materi: "Materi sedang dalam tahap pengembangan.", latihan: [] },
      'Mencari akar-akar persamaan dengan Rumus ABC': { materi: "Materi sedang dalam tahap pengembangan.", latihan: [] },
      'Nilai diskriminan dan sifat akar': { materi: "Materi sedang dalam tahap pengembangan.", latihan: [] },
      'Menggambar grafik fungsi kuadrat': { materi: "Materi sedang dalam tahap pengembangan.", latihan: [] }
    },
    'Kelas IX - Transformasi Geometri': {
      'Translasi (Pergeseran)': { materi: "Materi sedang dalam tahap pengembangan.", latihan: [] },
      'Refleksi (Pencerminan)': { materi: "Materi sedang dalam tahap pengembangan.", latihan: [] },
      'Rotasi (Perputaran)': { materi: "Materi sedang dalam tahap pengembangan.", latihan: [] },
      'Dilatasi (Perkalian ukuran)': { materi: "Materi sedang dalam tahap pengembangan.", latihan: [] }
    },
    'Kelas IX - Kesebangunan dan Kekongruenan': {
      'Syarat dan pembuktian dua bangun datar sebangun': { materi: "Materi sedang dalam tahap pengembangan.", latihan: [] },
      'Syarat dan pembuktian dua bangun datar kongruen': { materi: "Materi sedang dalam tahap pengembangan.", latihan: [] },
      'Aplikasi kesebangunan pada pemecahan masalah': { materi: "Materi sedang dalam tahap pengembangan.", latihan: [] }
    },
    'Kelas IX - Bangun Ruang Sisi Lengkung': {
      'Tabung': { materi: "Materi sedang dalam tahap pengembangan.", latihan: [] },
      'Kerucut': { materi: "Materi sedang dalam tahap pengembangan.", latihan: [] },
      'Bola': { materi: "Materi sedang dalam tahap pengembangan.", latihan: [] },
      'Penerapan pemecahan masalah melibatkan >1 bangun': { materi: "Materi sedang dalam tahap pengembangan.", latihan: [] }
    }
  },
  SMA: {
    'Fungsi Kuadrat': {
      'Grafik Fungsi': { materi: "Materi Grafik Fungsi", latihan: [] }
    }
  }
};

const MOCK_ARTICLES = [
  { id: 1, title: "Matematika itu Menyenangkan", snippet: "Banyak yang menganggap matematika itu momok, padahal jika kita pahami logikanya...", content: "Banyak yang menganggap matematika itu momok, padahal jika kita pahami logikanya, matematika adalah bahasa universal yang sangat indah. Dengan matematika, kita bisa memodelkan alam semesta, memprediksi cuaca, hingga membuat algoritma untuk aplikasi yang kita gunakan sehari-hari." },
  { id: 2, title: "Cara Belajar Efektif (Deliberate Learning)", snippet: "Fokus pada kelemahanmu, bukan hanya mengulang apa yang sudah kamu kuasai.", content: "Pernahkah lo merasa sudah belajar berjam-jam tapi tetep ga paham? Mungkin lo salah metode.\n\nDeliberate learning (latihan yang disengaja) adalah metode di mana lo memecah keterampilan menjadi bagian-bagian kecil, lalu secara sadar berlatih keras pada area yang paling lo rasa sulit (kelemahan lo).\n\nDalam matematika, kalau lo udah jago hitung campuran tapi lemah di aljabar, ya lo harus hajar terus soal aljabar. Berhenti mengulang soal-soal hitung campuran yang udah lo kuasai cuma demi kepuasan batin 'merasa bisa'.\n\nDi Senimath, sistem 5 Tipe Latihan Soal dirancang khusus untuk mewadahi deliberate learning ini. Lo bisa mengukur sejauh mana pemahaman lo dari Tipe 1 sampai Tipe 5, dan menambal lubang pemahaman di tempat yang tepat." },
  { id: 3, title: "Sejarah Angka Nol", snippet: "Tahukah kamu dari mana angka nol berasal dan bagaimana ia mengubah dunia?", content: "Angka nol memiliki sejarah yang panjang. Sebelum nol ditemukan, peradaban kuno kesulitan membedakan antara 1, 10, dan 100 tanpa konteks. Penemuan angka nol sebagai 'placeholder' dan kemudian sebagai angka yang berdiri sendiri merevolusi cara kita menghitung dan membuka jalan bagi aljabar serta kalkulus modern." }
];

const MOCK_PRODUCTS = [
  { 
    id: 1, 
    category: "SMP", 
    title: "100 Latihan Soal Bilangan Bulat", 
    variants: [ { id: '1a', type: "Biasa", link: "https://lynk.id/" }, { id: '1b', type: "Cerita", link: "https://lynk.id/" } ] 
  },
  { 
    id: 2, 
    category: "SMP", 
    title: "100 Latihan Soal Aljabar Dasar", 
    variants: [ { id: '2a', type: "Biasa", link: "https://lynk.id/" }, { id: '2b', type: "Cerita", link: "https://lynk.id/" } ] 
  },
  { 
    id: 3, 
    category: "SMA", 
    title: "100 Latihan Soal Fungsi Kuadrat", 
    variants: [ { id: '3a', type: "Biasa", link: "https://lynk.id/" }, { id: '3b', type: "Cerita", link: "https://lynk.id/" } ] 
  },
  { 
    id: 4, 
    category: "SMA", 
    title: "100 Latihan Soal Trigonometri", 
    variants: [ { id: '4a', type: "Biasa", link: "https://lynk.id/" }, { id: '4b', type: "Cerita", link: "https://lynk.id/" } ] 
  }
];

// --- MAIN APP COMPONENT ---

export default function App() {
  const [theme, setTheme] = useState('light');
  const [fontSize, setFontSize] = useState(16);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');
  const [navPath, setNavPath] = useState([]);
  
  // Referensi untuk kontainer scroll
  const scrollContainerRef = useRef(null);

  // Efek untuk mengembalikan scroll ke atas setiap kali rute/halaman berubah
  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTop = 0;
    }
  }, [currentPage, navPath]);

  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');
  const increaseFont = () => setFontSize(prev => Math.min(prev + 2, 24));
  const decreaseFont = () => setFontSize(prev => Math.max(prev - 2, 12));

  const navigateTo = (page, path = []) => {
    setCurrentPage(page);
    setNavPath(path);
    setIsSidebarOpen(false);
  };

  const themeClasses = {
    bg: theme === 'light' ? 'bg-slate-50' : 'bg-slate-900',
    text: theme === 'light' ? 'text-slate-800' : 'text-slate-200',
    cardBg: theme === 'light' ? 'bg-white' : 'bg-slate-800',
    border: theme === 'light' ? 'border-slate-200' : 'border-slate-700',
    primary: theme === 'light' ? 'bg-lime-200 text-lime-900 hover:bg-lime-300' : 'bg-lime-700 text-white hover:bg-lime-600',
    primaryGhost: theme === 'light' ? 'text-lime-700 hover:bg-lime-100' : 'text-lime-400 hover:bg-slate-700',
  };

  const MENU_ITEMS = [
    { id: 'home', icon: <Home size={20}/>, label: 'Home' },
    { id: 'panduan', icon: <BookOpen size={20}/>, label: 'Panduan' },
    { id: 'mulai', icon: <Play size={20}/>, label: 'Mulai Belajar' },
    { id: 'info', icon: <Info size={20}/>, label: 'Info' },
    { id: 'toko', icon: <ShoppingBag size={20}/>, label: 'Toko' },
    { id: 'pengaturan', icon: <Settings size={20}/>, label: 'Pengaturan' },
    { id: 'tentang', icon: <User size={20}/>, label: 'Tentang Kami' },
  ];

  return (
    <div className={`min-h-screen flex transition-colors duration-300 ${themeClasses.bg} ${themeClasses.text}`} style={{ fontSize: `${fontSize}px` }}>
      
      {/* CSS for Marquee */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
        .animate-marquee {
          display: inline-block;
          white-space: nowrap;
          animation: marquee 20s linear infinite;
        }
      `}</style>

      {/* Sidebar Overlay (Mobile) */}
      {isSidebarOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden" onClick={() => setIsSidebarOpen(false)}></div>
      )}

      {/* Sidebar */}
      <aside className={`fixed inset-y-0 left-0 z-50 w-64 ${themeClasses.cardBg} border-r ${themeClasses.border} transform transition-transform duration-300 lg:translate-x-0 lg:static lg:block ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex items-center justify-between p-4 border-b border-slate-200 dark:border-slate-700">
          <h1 className="text-2xl font-bold tracking-tighter uppercase">SENIMATH</h1>
          <button onClick={() => setIsSidebarOpen(false)} className="lg:hidden p-1 rounded-md hover:bg-slate-200 dark:hover:bg-slate-700">
            <X size={24} />
          </button>
        </div>
        <nav className="p-4 space-y-2">
          {MENU_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => navigateTo(item.id)}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-colors ${currentPage === item.id || (currentPage === 'materi' && item.id === 'mulai') ? themeClasses.primary : 'hover:bg-slate-100 dark:hover:bg-slate-700'}`}
            >
              {item.icon}
              <span className="font-medium">{item.label}</span>
            </button>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col h-screen overflow-hidden">
        {/* Header (Mobile) */}
        <header className={`lg:hidden flex items-center justify-between p-4 border-b ${themeClasses.cardBg} ${themeClasses.border}`}>
          <button onClick={() => setIsSidebarOpen(true)} className="p-1">
            <Menu size={24} />
          </button>
          <h1 className="text-xl font-bold tracking-tighter uppercase">SENIMATH</h1>
          <div className="w-6"></div> {/* Spacer */}
        </header>

        {/* Content Area */}
        <div ref={scrollContainerRef} className="flex-1 overflow-y-auto p-4 md:p-8 scroll-smooth">
          
          {/* Breadcrumbs */}
          {navPath.length > 0 && currentPage === 'materi' && (
            <div className={`flex flex-wrap items-center gap-2 mb-6 text-sm opacity-70`}>
              {navPath.map((step, idx) => (
                <React.Fragment key={idx}>
                  <span className={idx === navPath.length - 1 ? 'font-bold opacity-100' : 'cursor-pointer hover:underline'} onClick={() => {
                    if(idx < navPath.length - 1) setNavPath(navPath.slice(0, idx + 1));
                  }}>
                    {step}
                  </span>
                  {idx < navPath.length - 1 && <ChevronRight size={14} />}
                </React.Fragment>
              ))}
            </div>
          )}

          {/* PAGE ROUTING */}
          {currentPage === 'home' && <PageHome navigateTo={navigateTo} themeClasses={themeClasses} />}
          {currentPage === 'panduan' && <PagePanduan navigateTo={navigateTo} themeClasses={themeClasses} />}
          {currentPage === 'mulai' && <PageMulaiBelajar navigateTo={navigateTo} themeClasses={themeClasses} />}
          {currentPage === 'materi' && <PageMateri navPath={navPath} setNavPath={setNavPath} themeClasses={themeClasses} />}
          {currentPage === 'info' && <PageInfoMaszeh themeClasses={themeClasses} navigateTo={navigateTo} />}
          {currentPage === 'toko' && <PageToko themeClasses={themeClasses} />}
          {currentPage === 'pengaturan' && <PagePengaturan theme={theme} toggleTheme={toggleTheme} fontSize={fontSize} increaseFont={increaseFont} decreaseFont={decreaseFont} themeClasses={themeClasses} />}
          {currentPage === 'tentang' && <PageTentangKami themeClasses={themeClasses} />}
          {currentPage === 'artikel' && <PageArtikel navPath={navPath} navigateTo={navigateTo} themeClasses={themeClasses} />}

        </div>
      </main>
    </div>
  );
}

// --- PAGE COMPONENTS ---

function PageHome({ navigateTo, themeClasses }) {
  return (
    <div className="max-w-4xl mx-auto space-y-12 pb-12">
      {/* Hero Section */}
      <div className="text-center space-y-6 mt-8">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter">SENIMATH</h1>
        <div className={`overflow-hidden py-4 border-y ${themeClasses.border}`}>
          <div className="animate-marquee italic font-medium opacity-80 text-lg">
            “Gunakan logikamu sebagai kuas, dan biarkan angka-angka menari membentuk simfoni pemikiran yang luar biasa. Selamat belajar dan berkarya!” - Catatan Senimath (2026)
          </div>
        </div>
        <div className="flex justify-center gap-4 pt-4">
          <span className="px-4 py-2 rounded-full border border-slate-300 dark:border-slate-600 text-sm font-semibold">Math is Art</span>
          <span className="px-4 py-2 rounded-full border border-slate-300 dark:border-slate-600 text-sm font-semibold">Math is Fun</span>
          <span className="px-4 py-2 rounded-full border border-slate-300 dark:border-slate-600 text-sm font-semibold">Math is Languange</span>
        </div>
      </div>

      <div className={`p-6 rounded-2xl ${themeClasses.cardBg} border ${themeClasses.border} shadow-sm`}>
        <p className="mb-4 text-lg">Buat lo yang baru mulai belajar, siapkan kopi lo. Ini akan sedikit membosankan, tapi gue yakin lo pasti bisa. Izinnn.... ☕</p>
        <p className="italic border-l-4 border-lime-500 pl-4 opacity-80 mb-6">"Buat lo yang baca ini, lo selangkah di depan orang yang ga belajar. Pertahankanlah."</p>
        <button onClick={() => navigateTo('panduan')} className={`px-6 py-2 rounded-xl font-medium border border-current opacity-80 hover:opacity-100 transition-opacity`}>
          Baca Panduan
        </button>
      </div>

      <div className="text-center space-y-6">
        <h2 className="text-3xl font-bold">Sudah siap belajar?</h2>
        <p className="opacity-80">Pilih jenjang lo</p>
        <div className="flex justify-center gap-6">
          <button onClick={() => navigateTo('materi', ['SMP'])} className={`w-32 h-32 rounded-3xl flex flex-col items-center justify-center text-2xl font-bold shadow-lg transition-transform hover:scale-105 ${themeClasses.primary}`}>
            SMP
          </button>
          <button onClick={() => navigateTo('materi', ['SMA'])} className={`w-32 h-32 rounded-3xl flex flex-col items-center justify-center text-2xl font-bold shadow-lg transition-transform hover:scale-105 ${themeClasses.primary}`}>
            SMA
          </button>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-2xl font-bold border-b pb-2">Kenapa harus senimath?</h3>
        <p className="leading-relaxed opacity-90 text-lg text-justify">
          Senimath merupakan sebuah website pembelajaran matematika untuk jenjang SMP-SMA. Desain pembelajaran disengaja atau bahasa kerennya <strong>deliberate learning</strong> sehingga bisa menyesuaikan kemampuan lo yang baru mulai nyemplung ke dunia matematika.
        </p>
      </div>
      
      {/* Footer / Profile Snippet */}
      <footer className="pt-12 flex flex-col gap-8 opacity-80">
         <div className="flex flex-col md:flex-row items-center justify-between gap-6 border-t border-slate-300 dark:border-slate-700 pt-8">
           <div className="flex items-center gap-4">
             <div className="w-12 h-12 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center overflow-hidden">
               <User size={24} className="text-slate-600 dark:text-slate-300" />
             </div>
             <div>
               <p className="font-bold">Rayhansamu</p>
               <p className="text-sm">Lulusan S1 Pendidikan Matematika UNJ.</p>
             </div>
           </div>
           <div className="flex flex-col md:flex-row gap-4 md:gap-6 md:items-center">
              <button onClick={() => navigateTo('info')} className="hover:underline flex items-center gap-2 text-sm font-medium">
                <Book size={16}/> Info Les Private Matematika
              </button>
              <div className="flex items-center gap-4 border-t md:border-t-0 md:border-l border-slate-300 dark:border-slate-600 pt-4 md:pt-0 md:pl-6">
                <a href="https://instagram.com/rayhansamu" target="_blank" rel="noreferrer" className="hover:underline flex items-center gap-1.5 text-sm font-medium">
                  <Instagram size={16}/> @rayhansamu
                </a>
                <a href="https://instagram.com/senimath" target="_blank" rel="noreferrer" className="hover:underline flex items-center gap-1.5 text-sm font-medium">
                  <Instagram size={16}/> @senimath
                </a>
              </div>
           </div>
         </div>

         {/* Link Donasi Banner */}
         <a href="https://saweria.co/senimath" target="_blank" rel="noreferrer" className={`block p-4 rounded-xl text-center bg-[#ffb000] text-black hover:opacity-90 transition-opacity font-medium shadow-sm`}>
            ☕ Donasi via Saweria untuk support penulis dalam pengembangan website Senimath
         </a>
      </footer>
    </div>
  );
}

function MockQuestionCard({ type, themeClasses }) {
  const hasIdeaBtn = type === 1 || type === 2;
  const isSelfCheck = type === 2 || type === 4;
  const isMCQ = type === 1 || type === 3;
  const isPureEssay = type === 5;

  return (
    <div className={`p-6 md:p-8 rounded-3xl ${themeClasses.cardBg} border ${themeClasses.border} shadow-sm relative overflow-hidden mb-6 opacity-90`}>
      <div className="absolute -top-6 -right-6 text-8xl font-black opacity-5 pointer-events-none">
        {type}
      </div>

      <div className="flex justify-between items-start mb-6">
        <h3 className="text-xl font-bold relative z-10 flex-1 pr-4">soal ini blablabla......</h3>
        {hasIdeaBtn && (
          <div className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-medium bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200 cursor-not-allowed`}>
            <Lightbulb size={16} className="fill-current" /> Ide Menjawab
          </div>
        )}
      </div>

      <div className="space-y-4 mb-8">
        {isMCQ && (
          <div className="space-y-3">
            {['opsi 1', 'opsi 2', 'opsi 3'].map((opt, idx) => (
              <div key={idx} className={`flex items-center gap-3 p-4 rounded-xl border border-slate-200 dark:border-slate-700 cursor-not-allowed opacity-80`}>
                <div className="w-5 h-5 rounded-full border-2 border-slate-400"></div>
                <span className="text-lg">{opt}</span>
              </div>
            ))}
          </div>
        )}

        {isSelfCheck && (
          <div className="flex items-center gap-4">
            <span className="font-medium">Jawaban:</span>
            <div className="px-6 py-2 rounded-xl border border-slate-300 dark:border-slate-600 font-mono font-bold text-lg">20</div>
          </div>
        )}

        {isPureEssay && (
          <div className="flex items-center gap-4">
            <span className="font-medium">Jawaban:</span>
            <div className="px-6 py-2 w-32 rounded-xl border border-slate-300 dark:border-slate-600 font-mono text-slate-400 flex items-center">
               <span className="opacity-50">........</span>
            </div>
          </div>
        )}
      </div>

      <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-slate-200 dark:border-slate-700">
        <div className="flex gap-4 items-center">
          <button className={`px-6 py-2.5 rounded-xl font-bold transition-all ${themeClasses.primary} opacity-80 cursor-not-allowed`}>
            {isSelfCheck ? 'Lihat Pembahasan' : 'Simpan Jawaban'}
          </button>

          {!isSelfCheck && (
            <button className={`px-6 py-2.5 rounded-xl font-bold flex items-center gap-2 border ${themeClasses.border} opacity-60 cursor-not-allowed`}>
              <Lock size={16} /> Pembahasan
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

function PagePanduan({ navigateTo, themeClasses }) {
  return (
    <div className="max-w-3xl mx-auto space-y-8">
      <h2 className="text-3xl font-bold">Panduan Penggunaan</h2>
      
      <div className={`p-6 rounded-2xl ${themeClasses.cardBg} border ${themeClasses.border}`}>
        <p className="text-lg leading-relaxed mb-4">
          Senimath merupakan website pembelajaran matematika. Desain pembelajaran menggunakan <strong>deliberate learning</strong> sehingga lo bisa menyesuaikan kemampuan. Saran gue, lo fokus tambel pada kelemahan yang lo miliki.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          Pada <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-700 font-bold border border-slate-300 dark:border-slate-600 shadow-sm mx-1 text-sm"><Settings size={14}/> Pengaturan</span>, lo bisa mengubah tema website menjadi gelap/terang. Lo juga bisa mengubah besar kecilnya font biar mata nggak gampang lelah.
        </p>
      </div>

      <div className="space-y-6">
        <h3 className="text-2xl font-bold border-b pb-2">5 Tipe Latihan Soal</h3>
        
        {[
          {
            type: "Tipe 1",
            typeNumber: 1,
            desc: "Lo diminta mencari jawaban yang bener dari opsi pilihan ganda yang tersedia. Kalo kesulitan, lo bisa gunain tombol 'Ide Menjawab' untuk membantu lo. Pembahasan akan terbuka ketika lo sudah menyimpan jawaban.",
            features: [
              { text: "Pilihan Ganda", active: true },
              { text: "Ada Ide Menjawab", active: true },
              { text: "Ada Indikator Benar/Salah", active: true },
              { text: "Pembahasan di Akhir", active: true }
            ]
          },
          {
            type: "Tipe 2",
            typeNumber: 2,
            desc: "Lo diminta untuk menemukan cara menjawab agar hasil akhir sesuai dengan jawaban yang tertera (pembuktian). Ada tombol 'Ide Menjawab'. Pembahasan terbuka untuk membuktikan cara yang lo gunakan.",
            features: [
              { text: "Soal Esai (Target Diberikan)", active: true },
              { text: "Ada Ide Menjawab", active: true },
              { text: "Tanpa Penilaian Sistem", active: false },
              { text: "Pembahasan Terbuka", active: true }
            ]
          },
          {
            type: "Tipe 3",
            typeNumber: 3,
            desc: "Sama seperti tipe 1 (Pilihan Ganda), tapi <strong>tanpa</strong> tombol 'Ide Menjawab'. Pembahasan terbuka setelah lo submit jawaban.",
            features: [
              { text: "Pilihan Ganda", active: true },
              { text: "Tanpa Ide Menjawab", active: false },
              { text: "Ada Indikator Benar/Salah", active: true },
              { text: "Pembahasan di Akhir", active: true }
            ]
          },
          {
            type: "Tipe 4",
            typeNumber: 4,
            desc: "Sama seperti tipe 2 (Esai Target), tapi <strong>tanpa</strong> tombol 'Ide Menjawab'. Coba buktikan sendiri sebelum melihat pembahasan.",
            features: [
              { text: "Soal Esai (Target Diberikan)", active: true },
              { text: "Tanpa Ide Menjawab", active: false },
              { text: "Tanpa Penilaian Sistem", active: false },
              { text: "Pembahasan Terbuka", active: true }
            ]
          },
          {
            type: "Tipe 5",
            typeNumber: 5,
            desc: "Tantangan penuh! Lo diminta menemukan cara dan jawaban akhir (Esai murni). Ini akumulasi konsep sebelumnya. Ketik jawaban akhir lo, submit, dan lihat pembahasannya.",
            features: [
              { text: "Soal Esai Murni", active: true },
              { text: "Tanpa Ide Menjawab", active: false },
              { text: "Ada Indikator Benar/Salah", active: true },
              { text: "Pembahasan di Akhir", active: true }
            ]
          }
        ].map((item, idx) => (
          <div key={idx} className={`p-6 md:p-8 rounded-3xl ${themeClasses.cardBg} border border-l-8 border-l-lime-500 shadow-sm`}>
            <h4 className="text-2xl font-black mb-6 uppercase tracking-wider text-lime-600 dark:text-lime-500">{item.type}</h4>
            
            <MockQuestionCard type={item.typeNumber} themeClasses={themeClasses} />

            <p className="mb-6 opacity-90 text-lg leading-relaxed" dangerouslySetInnerHTML={{__html: item.desc}}></p>
            <div className="flex flex-wrap gap-2">
              {item.features.map((feat, fidx) => (
                <span key={fidx} className={`text-xs px-2.5 py-1.5 rounded-md font-bold ${feat.active ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-300' : 'bg-rose-100 text-rose-800 dark:bg-rose-900/40 dark:text-rose-300'}`}>
                  {feat.text}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Shop Hook */}
      <div className={`mt-12 p-8 rounded-3xl bg-gradient-to-br from-lime-100 to-emerald-100 dark:from-lime-900/30 dark:to-emerald-900/30 border border-lime-300 dark:border-lime-700 text-center shadow-sm`}>
        <ShoppingBag size={40} className="mx-auto mb-4 text-emerald-600 dark:text-emerald-400" />
        <h3 className="text-2xl font-bold mb-3 text-emerald-900 dark:text-emerald-100">Merasa Masih Kurang Latihan?</h3>
        <p className="text-emerald-800 dark:text-emerald-200 mb-6 text-lg">Buat lo yang masih merasa kurang latihan soal, lo bisa kunjungi toko dan membeli paket 100 latihan soal dan jawaban pada materi yang sedang lo pelajari.</p>
        <button 
          onClick={() => navigateTo('toko')}
          className={`px-8 py-3 rounded-xl font-bold bg-emerald-600 text-white hover:bg-emerald-700 shadow-md transition-colors flex items-center justify-center gap-2 mx-auto`}
        >
          <ShoppingBag size={18} /> Kunjungi Toko
        </button>
      </div>

    </div>
  );
}

function PageMulaiBelajar({ navigateTo, themeClasses }) {
  return (
    <div className="max-w-4xl mx-auto text-center space-y-12 mt-12">
      <h2 className="text-4xl font-bold mb-8">Pilih Jenjang Penaklukanmu</h2>
      <div className="grid md:grid-cols-2 gap-8">
        <button onClick={() => navigateTo('materi', ['SMP'])} className={`group relative p-12 rounded-3xl ${themeClasses.cardBg} border ${themeClasses.border} hover:border-lime-500 transition-all shadow-md hover:shadow-xl`}>
          <div className="absolute inset-0 bg-lime-500 opacity-0 group-hover:opacity-5 transition-opacity rounded-3xl"></div>
          <h3 className="text-5xl font-extrabold tracking-tighter mb-4">SMP</h3>
          <p className="opacity-70 text-lg">Mulai bangun pondasi logikamu di sini.</p>
        </button>
        <button onClick={() => navigateTo('materi', ['SMA'])} className={`group relative p-12 rounded-3xl ${themeClasses.cardBg} border ${themeClasses.border} hover:border-lime-500 transition-all shadow-md hover:shadow-xl`}>
          <div className="absolute inset-0 bg-lime-500 opacity-0 group-hover:opacity-5 transition-opacity rounded-3xl"></div>
          <h3 className="text-5xl font-extrabold tracking-tighter mb-4">SMA</h3>
          <p className="opacity-70 text-lg">Bentuk simfoni pemikiran yang lebih kompleks.</p>
        </button>
      </div>
    </div>
  );
}

function PageMateri({ navPath, setNavPath, themeClasses }) {
  const [currentType, setCurrentType] = useState(1);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const jenjang = navPath[0];
  const bab = navPath[1];
  const subBab = navPath[2];
  const mode = navPath[3];

  if (navPath.length === 1) {
    const data = MOCK_COURSES[jenjang] || {};
    return (
      <div className="max-w-3xl mx-auto space-y-6">
        <h2 className="text-3xl font-bold mb-6">Materi {jenjang}</h2>
        {Object.keys(data).map(b => (
          <button key={b} onClick={() => setNavPath([...navPath, b])} className={`w-full text-left p-6 rounded-2xl ${themeClasses.cardBg} border ${themeClasses.border} hover:border-lime-500 shadow-sm flex justify-between items-center group`}>
            <span className="text-xl font-bold">{b}</span>
            <ChevronRight className="opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
          </button>
        ))}
      </div>
    );
  }

  if (navPath.length === 2) {
    const data = MOCK_COURSES[jenjang][bab] || {};
    return (
      <div className="max-w-3xl mx-auto space-y-6">
        <h2 className="text-3xl font-bold mb-6">{bab}</h2>
        {Object.keys(data).map(sb => (
          <button key={sb} onClick={() => setNavPath([...navPath, sb])} className={`w-full text-left p-6 rounded-2xl ${themeClasses.cardBg} border ${themeClasses.border} hover:border-lime-500 shadow-sm flex justify-between items-center group`}>
            <span className="text-xl font-medium">{sb}</span>
            <ChevronRight className="opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
          </button>
        ))}
      </div>
    );
  }

  if (navPath.length === 3) {
    return (
      <div className="max-w-3xl mx-auto text-center space-y-12 mt-12">
        <h2 className="text-4xl font-bold mb-2">{subBab}</h2>
        <p className="opacity-70 text-lg mb-8">Pilih mode belajarmu hari ini</p>
        <div className="grid md:grid-cols-2 gap-8">
          <button onClick={() => setNavPath([...navPath, 'Materi'])} className={`group relative p-8 rounded-3xl ${themeClasses.cardBg} border ${themeClasses.border} hover:border-lime-500 shadow-sm hover:shadow-md transition-all`}>
            <BookOpen size={48} className="mx-auto mb-4 opacity-80 group-hover:text-lime-500 transition-colors" />
            <h3 className="text-2xl font-bold">Materi</h3>
          </button>
          <button onClick={() => {
            setNavPath([...navPath, 'Latihan']);
            setCurrentQuestionIndex(0);
          }} className={`group relative p-8 rounded-3xl ${themeClasses.cardBg} border ${themeClasses.border} hover:border-lime-500 shadow-sm hover:shadow-md transition-all`}>
            <CheckCircle size={48} className="mx-auto mb-4 opacity-80 group-hover:text-lime-500 transition-colors" />
            <h3 className="text-2xl font-bold">Latihan Soal</h3>
          </button>
        </div>
      </div>
    );
  }

  const contentData = MOCK_COURSES[jenjang][bab][subBab];

  if (mode === 'Materi') {
    return (
      <div className="max-w-3xl mx-auto space-y-8">
        <h2 className="text-3xl font-bold border-b pb-4">{subBab} - Materi</h2>
        <div className={`p-6 md:p-8 rounded-2xl ${themeClasses.cardBg} border ${themeClasses.border} shadow-sm leading-relaxed whitespace-pre-wrap text-lg`}>
          {contentData.materi}
        </div>
        <div className="text-center pt-8">
          <p className="mb-4 opacity-80">Udah paham teorinya? Waktunya eksekusi!</p>
          <button onClick={() => {
            setNavPath([...navPath.slice(0, 3), 'Latihan']);
            setCurrentQuestionIndex(0);
          }} className={`px-8 py-4 rounded-full font-bold text-lg shadow-lg transform transition-transform hover:scale-105 flex items-center justify-center gap-2 mx-auto ${themeClasses.primary}`}>
            Gas Latihan Soal <ArrowRight size={20} />
          </button>
        </div>
      </div>
    );
  }

  if (mode === 'Latihan') {
    const questions = contentData.latihan || [];
    const questionsForCurrentType = questions.filter(q => q.type === currentType);
    const currentQuestion = questionsForCurrentType[currentQuestionIndex];

    const handleTypeChange = (e) => {
      setCurrentType(Number(e.target.value));
      setCurrentQuestionIndex(0);
    };

    const handlePrev = () => {
      if (currentQuestionIndex > 0) setCurrentQuestionIndex(prev => prev - 1);
    };

    const handleNext = () => {
      if (currentQuestionIndex < questionsForCurrentType.length - 1) setCurrentQuestionIndex(prev => prev + 1);
    };

    return (
      <div className="max-w-3xl mx-auto space-y-6">
        {/* Header Control: Dropdown & Status - (Download PDF dihapus sesuai request) */}
        <div className={`p-4 md:p-6 rounded-2xl ${themeClasses.cardBg} border ${themeClasses.border} shadow-sm flex flex-col md:flex-row justify-between items-center gap-4`}>
          <div className="flex items-center gap-3 w-full md:w-auto">
            <label className="font-bold opacity-70 uppercase tracking-wider text-sm flex-shrink-0">Pilih Tipe:</label>
            <div className="relative flex-1 md:w-48">
              <select 
                value={currentType} 
                onChange={handleTypeChange}
                className={`w-full appearance-none px-4 py-2.5 rounded-xl font-bold border ${themeClasses.border} bg-transparent focus:outline-none focus:border-lime-500 cursor-pointer`}
              >
                {[1, 2, 3, 4, 5].map(t => (
                  <option key={t} value={t} className={themeClasses.text === 'text-slate-200' ? 'text-black' : ''}>
                    Tipe {t}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 opacity-50">
                <ChevronRight className="rotate-90" size={16} />
              </div>
            </div>
          </div>
          
          <div className="flex items-center justify-end w-full md:w-auto">
            <span className="text-sm font-medium opacity-70">
              {questionsForCurrentType.length > 0 ? `Soal ${currentQuestionIndex + 1} dari ${questionsForCurrentType.length}` : '0 Soal'}
            </span>
          </div>
        </div>

        {/* Konten Latihan Soal */}
        <div className="flex-1">
          {currentQuestion ? (
            <div className="space-y-6">
              <QuestionCard 
                question={currentQuestion} 
                themeClasses={themeClasses} 
                key={`q-${currentQuestion.id}-${currentType}`} 
              />
              
              {/* Navigasi Soal */}
              {questionsForCurrentType.length > 1 && (
                <div className="flex items-center justify-between gap-4">
                  <button 
                    onClick={handlePrev}
                    disabled={currentQuestionIndex === 0}
                    className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-bold transition-all ${currentQuestionIndex === 0 ? 'opacity-50 cursor-not-allowed bg-slate-100 dark:bg-slate-800 text-slate-400' : `border ${themeClasses.border} hover:bg-slate-100 dark:hover:bg-slate-700`}`}
                  >
                    <ChevronLeft size={20} /> Sebelumnya
                  </button>
                  <button 
                    onClick={handleNext}
                    disabled={currentQuestionIndex === questionsForCurrentType.length - 1}
                    className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-bold transition-all ${currentQuestionIndex === questionsForCurrentType.length - 1 ? 'opacity-50 cursor-not-allowed bg-slate-100 dark:bg-slate-800 text-slate-400' : themeClasses.primary}`}
                  >
                    Selanjutnya <ChevronRight size={20} />
                  </button>
                </div>
              )}
            </div>
          ) : (
            <div className={`p-12 text-center rounded-3xl ${themeClasses.cardBg} border ${themeClasses.border} opacity-70 border-dashed`}>
              <CheckCircle size={48} className="mx-auto mb-4 opacity-20" />
              <p className="font-medium text-lg">Soal untuk tipe ini belum tersedia.</p>
              <p className="text-sm mt-2">Coba tipe latihan yang lain.</p>
            </div>
          )}
        </div>
      </div>
    );
  }

  return null;
}

function QuestionCard({ question, themeClasses }) {
  const [userAnswer, setUserAnswer] = useState('');
  const [selectedOptionIndex, setSelectedOptionIndex] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showIdea, setShowIdea] = useState(false);
  const [showPembahasan, setShowPembahasan] = useState(false);

  const { type } = question;
  
  const hasIdeaBtn = type === 1 || type === 2;
  const isSelfCheck = type === 2 || type === 4;
  const isMCQ = type === 1 || type === 3;
  const isPureEssay = type === 5;

  let isCorrect = null;
  if (isSubmitted && !isSelfCheck) {
    if (isMCQ) {
      isCorrect = selectedOptionIndex === question.correctAnswer;
    } else if (isPureEssay) {
      isCorrect = userAnswer.trim() === question.correctAnswer;
    }
  }

  const handleSubmit = () => {
    setIsSubmitted(true);
    if(isSelfCheck) {
      setShowPembahasan(true);
    }
  };

  return (
    <div className={`p-6 md:p-8 rounded-3xl ${themeClasses.cardBg} border ${themeClasses.border} shadow-sm relative overflow-hidden`}>
      <div className="absolute -top-6 -right-6 text-9xl font-black opacity-5 pointer-events-none">
        {type}
      </div>

      <div className="flex justify-between items-start mb-6">
        <h3 className="text-xl font-bold relative z-10 flex-1 pr-4">{question.question}</h3>
        {hasIdeaBtn && (
          <button 
            onClick={() => setShowIdea(!showIdea)}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${showIdea ? 'bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200' : 'bg-slate-100 text-slate-700 dark:bg-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600'}`}
          >
            <Lightbulb size={16} className={showIdea ? "fill-current" : ""} /> 
            Ide Menjawab
          </button>
        )}
      </div>

      {showIdea && hasIdeaBtn && (
        <div className="mb-6 p-4 rounded-xl bg-amber-50 dark:bg-amber-900/30 border border-amber-200 dark:border-amber-700 text-amber-900 dark:text-amber-100 text-sm italic">
          💡 {question.idea}
        </div>
      )}

      <div className="space-y-4 mb-8">
        {isMCQ && (
          <div className="space-y-3">
            {question.options.map((opt, idx) => (
              <label 
                key={idx} 
                className={`flex items-center gap-3 p-4 rounded-xl border cursor-pointer transition-all ${
                  selectedOptionIndex === idx 
                    ? `border-lime-500 bg-lime-50 dark:bg-lime-900/20` 
                    : `border-slate-200 dark:border-slate-700 hover:border-lime-300`
                } ${isSubmitted ? 'pointer-events-none opacity-80' : ''}`}
              >
                <input 
                  type="radio" 
                  name={`question-${question.id}`}
                  className="hidden" 
                  checked={selectedOptionIndex === idx} 
                  onChange={() => setSelectedOptionIndex(idx)} 
                  disabled={isSubmitted} 
                />
                <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${selectedOptionIndex === idx ? 'border-lime-500' : 'border-slate-400'}`}>
                  {selectedOptionIndex === idx && <div className="w-2.5 h-2.5 rounded-full bg-lime-500"></div>}
                </div>
                <span className="text-lg">{opt}</span>
              </label>
            ))}
          </div>
        )}

        {isSelfCheck && (
          <div className="p-4 rounded-xl bg-slate-100 dark:bg-slate-700/50 inline-block font-mono text-lg border border-slate-200 dark:border-slate-600">
            Target Jawaban: <span className="font-bold text-lime-600 dark:text-lime-400">{question.targetAnswer}</span>
          </div>
        )}

        {isPureEssay && (
          <div className="flex items-center gap-4">
            <span className="font-medium">Jawaban:</span>
            <input 
              type="text" 
              value={userAnswer}
              onChange={(e) => setUserAnswer(e.target.value)}
              disabled={isSubmitted}
              className={`flex-1 max-w-[200px] px-4 py-2 rounded-xl border ${themeClasses.border} bg-transparent focus:outline-none focus:border-lime-500 font-mono`}
              placeholder="..."
            />
          </div>
        )}
      </div>

      <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-slate-200 dark:border-slate-700">
        <div className="flex gap-4 items-center">
          {!isSubmitted && (
             <button 
                onClick={handleSubmit} 
                disabled={isMCQ && selectedOptionIndex === null}
                className={`px-6 py-2.5 rounded-xl font-bold transition-all ${themeClasses.primary} disabled:opacity-50 disabled:cursor-not-allowed`}
              >
                {isSelfCheck ? 'Lihat Pembahasan' : 'Simpan Jawaban'}
              </button>
          )}

          {isSubmitted && !isSelfCheck && (
            <button 
              onClick={() => setShowPembahasan(!showPembahasan)}
              className={`px-6 py-2.5 rounded-xl font-bold flex items-center gap-2 border ${themeClasses.border} hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors`}
            >
              {showPembahasan ? <Lock size={16} /> : null}
              {showPembahasan ? 'Tutup Pembahasan' : 'Buka Pembahasan'}
            </button>
          )}
        </div>

        {isSubmitted && !isSelfCheck && isCorrect !== null && (
          <div className={`flex items-center gap-2 font-bold text-xl animate-bounce ${isCorrect ? 'text-green-500' : 'text-red-500'}`}>
            {isCorrect ? <CheckCircle size={32} /> : <XCircle size={32} />}
            {isCorrect ? 'Benar!' : 'Kurang Tepat'}
          </div>
        )}
      </div>

      {showPembahasan && (
        <div className="mt-8 p-6 rounded-2xl bg-slate-100 dark:bg-slate-700/50 border border-slate-200 dark:border-slate-600 animate-fade-in">
          <h4 className="font-bold text-lg mb-3 flex items-center gap-2">
            <BookOpen size={18} /> Pembahasan
          </h4>
          <p className="leading-relaxed">{question.pembahasan}</p>
        </div>
      )}
    </div>
  );
}

function PageInfoMaszeh({ themeClasses, navigateTo }) {
  return (
    <div className="max-w-5xl mx-auto space-y-12">
      
      <section>
        <h2 className="text-3xl font-bold mb-6 border-b pb-2 flex items-center gap-2"><BookOpen/> Artikel Senimath</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {MOCK_ARTICLES.map(art => (
            <div 
              key={art.id} 
              onClick={() => navigateTo('artikel', [art.id])}
              className={`p-6 rounded-2xl ${themeClasses.cardBg} border ${themeClasses.border} hover:border-lime-500 transition-all cursor-pointer flex flex-col h-full hover:shadow-md transform hover:-translate-y-1`}
            >
              <h3 className="font-bold text-lg mb-2">{art.title}</h3>
              <p className="opacity-70 text-sm mb-4 flex-1">{art.snippet}</p>
              <span className={`text-sm font-medium ${themeClasses.primaryGhost} self-start`}>Baca selengkapnya &rarr;</span>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-6 border-b pb-2 flex items-center gap-2"><Book/> Info Les Private Matematika</h2>
        <div className="grid md:grid-cols-3 gap-6">
          
          <div className={`p-6 rounded-2xl ${themeClasses.cardBg} border border-lime-200 dark:border-lime-900 shadow-sm flex flex-col`}>
            <h3 className="font-black text-2xl mb-4 text-center">Private Online</h3>
            <ul className="space-y-3 mb-8 flex-1 opacity-90">
              <li className="flex items-start gap-2"><CheckCircle size={18} className="text-lime-500 flex-shrink-0 mt-0.5"/> Waktu fleksibel</li>
              <li className="flex items-start gap-2"><CheckCircle size={18} className="text-lime-500 flex-shrink-0 mt-0.5"/> Modul khusus PDF</li>
              <li className="flex items-start gap-2"><CheckCircle size={18} className="text-lime-500 flex-shrink-0 mt-0.5"/> Tanya PR kapan saja</li>
              <li className="flex items-start gap-2"><CheckCircle size={18} className="text-lime-500 flex-shrink-0 mt-0.5"/> Free akses ke 100 latihan soal dan pembahasan pada materi yang sedang dipelajari</li>
            </ul>
            <button className={`w-full py-3 rounded-xl font-bold ${themeClasses.primary}`}>Hubungi Sekarang</button>
          </div>

          <div className={`p-6 rounded-2xl ${themeClasses.cardBg} border border-lime-200 dark:border-lime-900 shadow-sm flex flex-col`}>
            <h3 className="font-black text-2xl mb-2 text-center">Private Offline</h3>
            <p className="text-center text-sm opacity-70 mb-4">(Khusus Depok)</p>
            <ul className="space-y-3 mb-8 flex-1 opacity-90">
              <li className="flex items-start gap-2"><CheckCircle size={18} className="text-lime-500 flex-shrink-0 mt-0.5"/> Guru datang ke rumah</li>
              <li className="flex items-start gap-2"><CheckCircle size={18} className="text-lime-500 flex-shrink-0 mt-0.5"/> Evaluasi tatap muka</li>
              <li className="flex items-start gap-2"><CheckCircle size={18} className="text-lime-500 flex-shrink-0 mt-0.5"/> Bonding lebih kuat</li>
              <li className="flex items-start gap-2"><CheckCircle size={18} className="text-lime-500 flex-shrink-0 mt-0.5"/> Free akses ke 100 latihan soal dan pembahasan pada materi yang sedang dipelajari</li>
            </ul>
            <button className={`w-full py-3 rounded-xl font-bold ${themeClasses.primary}`}>Hubungi Sekarang</button>
          </div>

          <div className={`p-6 rounded-2xl ${themeClasses.cardBg} border border-lime-200 dark:border-lime-900 shadow-sm flex flex-col`}>
            <h3 className="font-black text-2xl mb-2 text-center">Kelas Besar</h3>
            <p className="text-center text-sm opacity-70 mb-4">(Minimal 3 orang)</p>
            <ul className="space-y-3 mb-8 flex-1 opacity-90">
              <li className="flex items-start gap-2"><CheckCircle size={18} className="text-lime-500 flex-shrink-0 mt-0.5"/> Harga lebih terjangkau</li>
              <li className="flex items-start gap-2"><CheckCircle size={18} className="text-lime-500 flex-shrink-0 mt-0.5"/> Belajar bareng circle</li>
              <li className="flex items-start gap-2"><CheckCircle size={18} className="text-lime-500 flex-shrink-0 mt-0.5"/> Diskusi interaktif</li>
              <li className="flex items-start gap-2"><CheckCircle size={18} className="text-lime-500 flex-shrink-0 mt-0.5"/> Free akses ke 100 latihan soal dan pembahasan pada materi yang sedang dipelajari</li>
            </ul>
            <button className={`w-full py-3 rounded-xl font-bold ${themeClasses.primary}`}>Hubungi Sekarang</button>
          </div>

        </div>
      </section>
    </div>
  );
}

function PageToko({ themeClasses }) {
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (id) => {
    setOpenDropdown(openDropdown === id ? null : id);
  };

  const smpProducts = MOCK_PRODUCTS.filter(p => p.category === 'SMP');
  const smaProducts = MOCK_PRODUCTS.filter(p => p.category === 'SMA');

  const renderSection = (title, products, colorClass, bgClass, borderClass) => (
    <div className="space-y-4 mb-8">
       <h3 className={`text-2xl font-bold ${colorClass} mb-6 border-b ${borderClass} pb-2`}>{title}</h3>
       <div className="flex flex-col gap-4">
          {products.map(prod => (
            <div key={prod.id} className={`rounded-2xl ${themeClasses.cardBg} border ${borderClass} overflow-hidden shadow-sm transition-all`}>
              <button 
                onClick={() => toggleDropdown(prod.id)}
                className={`w-full flex items-center justify-between p-6 hover:${bgClass} transition-colors`}
              >
                 <div className="flex items-center gap-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold text-white ${colorClass.replace('text-', 'bg-')}`}>{prod.category}</span>
                    <span className="font-bold text-lg text-left">{prod.title}</span>
                 </div>
                 <ChevronDown className={`transform transition-transform ${openDropdown === prod.id ? 'rotate-180' : ''}`} />
              </button>
              
              {openDropdown === prod.id && (
                <div className={`p-4 border-t ${borderClass} ${bgClass} flex flex-col md:flex-row gap-4`}>
                   {prod.variants.map(v => (
                     <a 
                       key={v.id} 
                       href={v.link} 
                       target="_blank" 
                       rel="noreferrer" 
                       className={`flex-1 flex items-center justify-between px-6 py-4 rounded-xl bg-white dark:bg-slate-800 border ${borderClass} hover:shadow-md transition-all group`}
                     >
                       <span className="font-bold">Paket Soal {v.type}</span>
                       <span className={`font-bold flex items-center gap-1 ${colorClass} group-hover:translate-x-1 transition-transform`}>
                         Gass Latihan <ChevronRight size={18}/>
                       </span>
                     </a>
                   ))}
                </div>
              )}
            </div>
          ))}
       </div>
    </div>
  );

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="text-center mb-12 space-y-4">
        <ShoppingBag size={48} className="mx-auto opacity-20" />
        <h2 className="text-4xl font-bold">Toko Senimath</h2>
        <p className="opacity-70 text-lg">Amunisi tambahan buat lo yang mau latihan ekstra.</p>
      </div>

      {renderSection("Materi SMP", smpProducts, "text-blue-600 dark:text-blue-400", "bg-blue-50 dark:bg-blue-900/20", "border-blue-200 dark:border-blue-800")}
      {renderSection("Materi SMA", smaProducts, "text-amber-600 dark:text-amber-400", "bg-amber-50 dark:bg-amber-900/20", "border-amber-200 dark:border-amber-800")}

    </div>
  );
}

function PagePengaturan({ theme, toggleTheme, fontSize, increaseFont, decreaseFont, themeClasses }) {
  return (
    <div className="max-w-2xl mx-auto space-y-8">
      <h2 className="text-3xl font-bold flex items-center gap-2 border-b pb-4"><Settings/> Pengaturan</h2>
      
      <div className={`p-6 rounded-2xl ${themeClasses.cardBg} border ${themeClasses.border} space-y-8`}>
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-bold text-lg">Tema Visual</h3>
            <p className="opacity-70 text-sm">Sesuaikan kenyamanan mata lo</p>
          </div>
          <div className="flex bg-slate-200 dark:bg-slate-700 p-1 rounded-xl">
            <button 
              onClick={() => theme !== 'light' && toggleTheme()}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${theme === 'light' ? 'bg-white text-black shadow' : 'text-slate-400 hover:text-white'}`}
            >
              Terang
            </button>
            <button 
              onClick={() => theme !== 'dark' && toggleTheme()}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${theme === 'dark' ? 'bg-slate-900 text-white shadow' : 'text-slate-600 hover:text-black'}`}
            >
              Gelap
            </button>
          </div>
        </div>

        <hr className={`border-${themeClasses.border}`} />

        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-bold text-lg">Ukuran Font</h3>
            <p className="opacity-70 text-sm">Ukuran saat ini: {fontSize}px</p>
          </div>
          <div className="flex items-center gap-4">
            <button onClick={decreaseFont} className="w-10 h-10 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center font-bold text-xl hover:opacity-80">-</button>
            <span className="font-mono text-lg">{fontSize}</span>
            <button onClick={increaseFont} className="w-10 h-10 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center font-bold text-xl hover:opacity-80">+</button>
          </div>
        </div>
      </div>
    </div>
  );
}

function PageTentangKami({ themeClasses }) {
  return (
    <div className="max-w-4xl mx-auto space-y-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold flex items-center justify-center gap-2"><Info/> Tentang Pengembang</h2>
      </div>

      <div className={`p-8 md:p-12 rounded-3xl ${themeClasses.cardBg} border ${themeClasses.border} relative overflow-hidden`}>
        <div className="absolute top-0 right-0 w-64 h-64 bg-lime-500 opacity-5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
        
        <div className="flex flex-col md:flex-row gap-8 items-center md:items-start relative z-10">
          <div className="w-32 h-32 md:w-48 md:h-48 rounded-full bg-slate-200 dark:bg-slate-700 flex-shrink-0 flex items-center justify-center overflow-hidden border-4 border-lime-500">
             <User size={64} className="opacity-20 text-slate-800 dark:text-slate-200" />
          </div>
          <div className="space-y-4 text-center md:text-left">
            <h3 className="text-3xl font-black tracking-tight">Rayhansamu</h3>
            <p className="text-lg opacity-90 leading-relaxed font-medium">
              Lulusan S1 Pendidikan Matematika UNJ.
            </p>
            <p className="opacity-80 leading-relaxed">
              Fokus penelitian pada metode pengembangan bahan atau perangkat pembelajaran. Dibuktikan dengan skripsinya yang mengembangkan LKPD terintegrasi dengan permainan ular tangga.
            </p>
            <div className="pt-4 flex flex-wrap gap-4 justify-center md:justify-start">
               <a href="https://saweria.co/senimath" target="_blank" rel="noreferrer" className={`px-6 py-2.5 rounded-full font-bold flex items-center gap-2 bg-[#ffb000] text-black hover:opacity-90 transition-opacity`}>
                 ☕ Donasi Saweria
               </a>
               <button className={`px-6 py-2.5 rounded-full font-bold flex items-center gap-2 border ${themeClasses.border} hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors`}>
                 <Instagram size={18}/> @rayhansamu
               </button>
            </div>
          </div>
        </div>
      </div>

      <div className={`p-8 rounded-3xl ${themeClasses.cardBg} border ${themeClasses.border} border-dashed text-center opacity-70`}>
         <h3 className="text-xl font-bold mb-2">Profile Penelaah</h3>
         <div className="w-20 h-20 mx-auto bg-slate-200 dark:bg-slate-700 rounded-full flex items-center justify-center mb-4">
           <User size={32} className="opacity-20" />
         </div>
         <p className="italic">Belum ada... yesss, belum ada.</p>
      </div>

    </div>
  );
}

function PageArtikel({ navPath, navigateTo, themeClasses }) {
  const articleId = navPath[0];
  const article = MOCK_ARTICLES.find(a => a.id === articleId);

  if (!article) return <div className="text-center mt-12 font-bold text-xl">Artikel tidak ditemukan.</div>;

  return (
    <div className="max-w-3xl mx-auto space-y-8">
      <button 
        onClick={() => navigateTo('info')}
        className={`flex items-center gap-2 font-medium opacity-70 hover:opacity-100 transition-opacity`}
      >
        <ChevronLeft size={20} /> Kembali ke Info
      </button>

      <div className={`p-8 md:p-12 rounded-3xl ${themeClasses.cardBg} border ${themeClasses.border} shadow-sm`}>
        <div className="flex items-center gap-2 text-lime-600 dark:text-lime-400 font-bold mb-4 text-sm uppercase tracking-wider">
          <BookOpen size={16} /> Artikel Senimath
        </div>
        <h1 className="text-3xl md:text-4xl font-black mb-8 leading-tight tracking-tight">{article.title}</h1>
        <div className="leading-relaxed whitespace-pre-wrap text-lg opacity-90">
          {article.content}
        </div>
      </div>
    </div>
  );
}