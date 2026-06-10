export const MOCK_COURSES = {
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
    'Modul 1: Aljabar & Sistem Persamaan - Sistem Persamaan Linier': {
      'Persamaan dan Fungsi Linier': { materi: "Materi sedang dalam tahap pengembangan.", latihan: [] },
      'Sistem Persamaan Linier dengan Dua Variabel': { materi: "Materi sedang dalam tahap pengembangan.", latihan: [] },
      'Sistem Persamaan Linier dengan Tiga Variabel': { materi: "Materi sedang dalam tahap pengembangan.", latihan: [] },
      'Penerapan Sistem Persamaan Linier': { materi: "Materi sedang dalam tahap pengembangan.", latihan: [] }
    },
    'Modul 1: Aljabar & Sistem Persamaan - Persamaan dan Fungsi Kuadrat': {
      'Menyelesaikan Persamaan Kuadrat': { materi: "Materi sedang dalam tahap pengembangan.", latihan: [] },
      'Sifat-Sifat Akar Persamaan Kuadrat': { materi: "Materi sedang dalam tahap pengembangan.", latihan: [] },
      'Grafik Fungsi Kuadrat': { materi: "Materi sedang dalam tahap pengembangan.", latihan: [] },
      'Sistem Persamaan Linier dan Kuadrat': { materi: "Materi sedang dalam tahap pengembangan.", latihan: [] },
      'Penerapan Persamaan dan Fungsi Kuadrat': { materi: "Materi sedang dalam tahap pengembangan.", latihan: [] }
    },
    'Modul 1: Aljabar & Sistem Persamaan - Pertidaksamaan Satu Variabel': {
      'Pertidaksamaan Linier': { materi: "Materi sedang dalam tahap pengembangan.", latihan: [] },
      'Pertidaksamaan Kuadrat': { materi: "Materi sedang dalam tahap pengembangan.", latihan: [] },
      'Pertidaksamaan Pecahan (Rasional)': { materi: "Materi sedang dalam tahap pengembangan.", latihan: [] },
      'Pertidaksamaan Bentuk Akar (Irrasional)': { materi: "Materi sedang dalam tahap pengembangan.", latihan: [] },
      'Pertidaksamaan Pangkat Tinggi': { materi: "Materi sedang dalam tahap pengembangan.", latihan: [] }
    },
    'Modul 1: Aljabar & Sistem Persamaan - Persamaan dan Pertidaksamaan Nilai Mutlak': {
      'Persamaan Nilai mutlak': { materi: "Materi sedang dalam tahap pengembangan.", latihan: [] },
      'Pertidaksamaan Nilai mutlak': { materi: "Materi sedang dalam tahap pengembangan.", latihan: [] },
      'Fungsi Nilai mutlak': { materi: "Materi sedang dalam tahap pengembangan.", latihan: [] }
    },
    'Modul 1: Aljabar & Sistem Persamaan - Sistem Pertidaksamaan Linier dan Kuadrat': {
      'Sistem Pertidaksamaan Linier': { materi: "Materi sedang dalam tahap pengembangan.", latihan: [] },
      'Sistem Pertidaksamaan Linier dan Kuadrat': { materi: "Materi sedang dalam tahap pengembangan.", latihan: [] },
      'Sistem Pertidaksamaan Kuadrat': { materi: "Materi sedang dalam tahap pengembangan.", latihan: [] }
    },
    'Modul 1: Aljabar & Sistem Persamaan - Program Linier': {
      'Sistem Pertidaksamaan Linier dua Variabel': { materi: "Materi sedang dalam tahap pengembangan.", latihan: [] },
      'Fungsi Sasaran dan Kendala dalam Prog Linier': { materi: "Materi sedang dalam tahap pengembangan.", latihan: [] },
      'Nilai Optimum Suatu Fungsi Sasaran': { materi: "Materi sedang dalam tahap pengembangan.", latihan: [] },
      'Menafsirkan Nilai Optimum dalam Program Linier': { materi: "Materi sedang dalam tahap pengembangan.", latihan: [] }
    },
    'Modul 1: Aljabar & Sistem Persamaan - Polinomial': {
      'Pengertian Polinomial': { materi: "Materi sedang dalam tahap pengembangan.", latihan: [] },
      'Operasi Aljabar pada Polinomial': { materi: "Materi sedang dalam tahap pengembangan.", latihan: [] },
      'Operasi Pembagian pada Polinomial': { materi: "Materi sedang dalam tahap pengembangan.", latihan: [] },
      'Teorema Sisa': { materi: "Materi sedang dalam tahap pengembangan.", latihan: [] },
      'Teorema Faktor': { materi: "Materi sedang dalam tahap pengembangan.", latihan: [] }
    },
    'Modul 2: Fungsi, Eksponen & Logaritma - Relasi dan Fungsi': {
      'Pengertian Relasi dan Fungsi': { materi: "Materi sedang dalam tahap pengembangan.", latihan: [] },
      'Macam-Macam Fungsi (Fungsi Linier)': { materi: "Materi sedang dalam tahap pengembangan.", latihan: [] },
      'Macam-Macam Fungsi (Fungsi Kuadrat)': { materi: "Materi sedang dalam tahap pengembangan.", latihan: [] },
      'Macam-Macam Fungsi (Fungsi Pecahan)': { materi: "Materi sedang dalam tahap pengembangan.", latihan: [] },
      'Operasi Aljabar Fungsi': { materi: "Materi sedang dalam tahap pengembangan.", latihan: [] }
    },
    'Modul 2: Fungsi, Eksponen & Logaritma - Komposisi Fungsi dan Invers Fungsi': {
      'Komposisi Fungsi': { materi: "Materi sedang dalam tahap pengembangan.", latihan: [] },
      'Invers Fungsi': { materi: "Materi sedang dalam tahap pengembangan.", latihan: [] }
    },
    'Modul 2: Fungsi, Eksponen & Logaritma - Eksponen dan Logaritma': {
      'Bentuk Eksponen dengan Pangkat Bulat': { materi: "Materi sedang dalam tahap pengembangan.", latihan: [] },
      'Bentuk Akar': { materi: "Materi sedang dalam tahap pengembangan.", latihan: [] },
      'Bentuk Eksponen dengan Pangkat Pecahan': { materi: "Materi sedang dalam tahap pengembangan.", latihan: [] },
      'Logaritma': { materi: "Materi sedang dalam tahap pengembangan.", latihan: [] }
    },
    'Modul 2: Fungsi, Eksponen & Logaritma - Persamaan dan Fungsi Eksponen Serta Logaritma': {
      'Persamaan Eksponen': { materi: "Materi sedang dalam tahap pengembangan.", latihan: [] },
      'Fungsi Eksponen': { materi: "Materi sedang dalam tahap pengembangan.", latihan: [] },
      'Persamaan Logaritma': { materi: "Materi sedang dalam tahap pengembangan.", latihan: [] },
      'Fungsi Logaritma': { materi: "Materi sedang dalam tahap pengembangan.", latihan: [] },
      'Pertidaksamaan Eksponen': { materi: "Materi sedang dalam tahap pengembangan.", latihan: [] },
      'Pertidaksamaan Logaritma': { materi: "Materi sedang dalam tahap pengembangan.", latihan: [] }
    },
    'Modul 3: Geometri, Transformasi & Vektor - Vektor': {
      'Tinjauan Geometris Vektor': { materi: "Materi sedang dalam tahap pengembangan.", latihan: [] },
      'Tinjauan Analitis Vektor': { materi: "Materi sedang dalam tahap pengembangan.", latihan: [] },
      'Perbandingan Vektor': { materi: "Materi sedang dalam tahap pengembangan.", latihan: [] },
      'Perkalian Skalar Dua Vektor': { materi: "Materi sedang dalam tahap pengembangan.", latihan: [] },
      'Proyeksi Ortogonal Suatu Vektor': { materi: "Materi sedang dalam tahap pengembangan.", latihan: [] },
      'Penerapan Vektor pada Geometri Bidang': { materi: "Materi sedang dalam tahap pengembangan.", latihan: [] }
    },
    'Modul 3: Geometri, Transformasi & Vektor - Geometri Bidang': {
      'Garis dan Sudut': { materi: "Materi sedang dalam tahap pengembangan.", latihan: [] },
      'Dalil Segmen Garis': { materi: "Materi sedang dalam tahap pengembangan.", latihan: [] },
      'Dalil-Dalil Pada Segitiga': { materi: "Materi sedang dalam tahap pengembangan.", latihan: [] },
      'Bangun-bangun pada Geometri Bidang': { materi: "Materi sedang dalam tahap pengembangan.", latihan: [] },
      'Lingkaran': { materi: "Materi sedang dalam tahap pengembangan.", latihan: [] },
      'Sifat-Sifat Pada Lingkaran': { materi: "Materi sedang dalam tahap pengembangan.", latihan: [] }
    },
    'Modul 3: Geometri, Transformasi & Vektor - Lingkaran': {
      'Persamaan-persamaan Lingkaran': { materi: "Materi sedang dalam tahap pengembangan.", latihan: [] },
      'Kedudukan Titik dan Garis Terhadap Lingkaran': { materi: "Materi sedang dalam tahap pengembangan.", latihan: [] },
      'Persamaan Garis Singgung Lingkaran': { materi: "Materi sedang dalam tahap pengembangan.", latihan: [] },
      'Kedudukan Dua Lingkaran': { materi: "Materi sedang dalam tahap pengembangan.", latihan: [] }
    },
    'Modul 3: Geometri, Transformasi & Vektor - Irisan Kerucut': {
      'Rencana Pembelajaran': { materi: "Materi sedang dalam tahap pengembangan.", latihan: [] },
      'Parabola': { materi: "Materi sedang dalam tahap pengembangan.", latihan: [] },
      'Elips': { materi: "Materi sedang dalam tahap pengembangan.", latihan: [] },
      'Hiperbola': { materi: "Materi sedang dalam tahap pengembangan.", latihan: [] }
    },
    'Modul 3: Geometri, Transformasi & Vektor - Geometri Ruang': {
      'Beberapa Benda Ruang': { materi: "Materi sedang dalam tahap pengembangan.", latihan: [] },
      'Kedudukan titik, garis dan bidang dalam ruang': { materi: "Materi sedang dalam tahap pengembangan.", latihan: [] },
      'Menggambar dan Menghitung Jarak': { materi: "Materi sedang dalam tahap pengembangan.", latihan: [] },
      'Menggambar dan Menghitung Sudut': { materi: "Materi sedang dalam tahap pengembangan.", latihan: [] },
      'Menggambar Kubus dan Balok': { materi: "Materi sedang dalam tahap pengembangan.", latihan: [] },
      'Menggambar Bidang Irisan': { materi: "Materi sedang dalam tahap pengembangan.", latihan: [] }
    },
    'Modul 3: Geometri, Transformasi & Vektor - Transformasi': {
      'Rencana Pembelajaran': { materi: "Materi sedang dalam tahap pengembangan.", latihan: [] },
      'Translasi dan Rotasi': { materi: "Materi sedang dalam tahap pengembangan.", latihan: [] },
      'Refleksi dan Dilatasi': { materi: "Materi sedang dalam tahap pengembangan.", latihan: [] },
      'Komposisi Transformasi': { materi: "Materi sedang dalam tahap pengembangan.", latihan: [] },
      'Transformasi pada Garis dan Kurva': { materi: "Materi sedang dalam tahap pengembangan.", latihan: [] }
    },
    'Modul 4: Trigonometri - Perbandingan dan Fungsi Trigonometri': {
      'Ukuran Sudut': { materi: "Materi sedang dalam tahap pengembangan.", latihan: [] },
      'Perbandingan-perbandingan trigonometri': { materi: "Materi sedang dalam tahap pengembangan.", latihan: [] },
      'Perbandingan Trigonometri Sudut Istimewa': { materi: "Materi sedang dalam tahap pengembangan.", latihan: [] },
      'Perbandingan Trigonometri di Semua Kuadran': { materi: "Materi sedang dalam tahap pengembangan.", latihan: [] },
      'Identitas Trigonometri': { materi: "Materi sedang dalam tahap pengembangan.", latihan: [] },
      'Fungsi Trigonometri': { materi: "Materi sedang dalam tahap pengembangan.", latihan: [] }
    },
    'Modul 4: Trigonometri - Rumus-Rumus Segitiga': {
      'Aturan Sinus': { materi: "Materi sedang dalam tahap pengembangan.", latihan: [] },
      'Aturan Cosinus': { materi: "Materi sedang dalam tahap pengembangan.", latihan: [] },
      'Luas Segitiga': { materi: "Materi sedang dalam tahap pengembangan.", latihan: [] },
      'Garis-Garis pada Segitiga': { materi: "Materi sedang dalam tahap pengembangan.", latihan: [] }
    },
    'Modul 4: Trigonometri - Rumus-Rumus Trigonometri': {
      'Rumus Jumlah dan Selisih Dua Sudut': { materi: "Materi sedang dalam tahap pengembangan.", latihan: [] },
      'Rumus Sudut Ganda dan Sudut Tengahan': { materi: "Materi sedang dalam tahap pengembangan.", latihan: [] },
      'Rumus Hasil Kali Sinus dan Cosinus': { materi: "Materi sedang dalam tahap pengembangan.", latihan: [] },
      'Rumus Jumlah dan Selisih Sinus dan Cosinus': { materi: "Materi sedang dalam tahap pengembangan.", latihan: [] },
      'Persamaan Trigonometri': { materi: "Materi sedang dalam tahap pengembangan.", latihan: [] }
    },
    'Modul 5: Kalkulus - Limit Fungsi': {
      'Limit berhingga fungsi Aljabar': { materi: "Materi sedang dalam tahap pengembangan.", latihan: [] },
      'Teorema Limit': { materi: "Materi sedang dalam tahap pengembangan.", latihan: [] },
      'Limit Fungsi Aljabar di Tak Berhingga': { materi: "Materi sedang dalam tahap pengembangan.", latihan: [] },
      'Limit Fungsi Trigonometri': { materi: "Materi sedang dalam tahap pengembangan.", latihan: [] },
      'Asimptot Datar dan Tegak Suatu Fungsi': { materi: "Materi sedang dalam tahap pengembangan.", latihan: [] }
    },
    'Modul 5: Kalkulus - Turunan Fungsi': {
      'Aturan Dasar Turunan fungsi Aljabar': { materi: "Materi sedang dalam tahap pengembangan.", latihan: [] },
      'Pengembangan Rumus Turunan Fungsi Aljabar': { materi: "Materi sedang dalam tahap pengembangan.", latihan: [] },
      'Persamaan Garis Singgung Kurva': { materi: "Materi sedang dalam tahap pengembangan.", latihan: [] },
      'Turunan Fungsi Trigonometri': { materi: "Materi sedang dalam tahap pengembangan.", latihan: [] },
      'Fungsi Naik dan Fungsi Turun': { materi: "Materi sedang dalam tahap pengembangan.", latihan: [] },
      'Menggambar Grafik Fungsi Polinom': { materi: "Materi sedang dalam tahap pengembangan.", latihan: [] },
      'Aplikasi Turunan': { materi: "Materi sedang dalam tahap pengembangan.", latihan: [] }
    },
    'Modul 5: Kalkulus - Integral Fungsi': {
      'Integral Tak Tentu Fungsi Aljabar': { materi: "Materi sedang dalam tahap pengembangan.", latihan: [] },
      'Penerapan Integral Tak Tentu': { materi: "Materi sedang dalam tahap pengembangan.", latihan: [] },
      'Integral Tentu Fungsi Aljabar': { materi: "Materi sedang dalam tahap pengembangan.", latihan: [] },
      'Integral Fungsi Trigonometri': { materi: "Materi sedang dalam tahap pengembangan.", latihan: [] },
      'Pengintegralan dengan Aturan Substitusi': { materi: "Materi sedang dalam tahap pengembangan.", latihan: [] },
      'Pengintegralan dengan Aturan Parsial': { materi: "Materi sedang dalam tahap pengembangan.", latihan: [] },
      'Menghitung Luas suatu Daerah': { materi: "Materi sedang dalam tahap pengembangan.", latihan: [] },
      'Menghitung Volume Benda Putar': { materi: "Materi sedang dalam tahap pengembangan.", latihan: [] },
      'Integral Fungsi Eksponen dan Logaritma': { materi: "Materi sedang dalam tahap pengembangan.", latihan: [] },
      'Menentukan Panjang Lintasam Suatu Kurva': { materi: "Materi sedang dalam tahap pengembangan.", latihan: [] }
    },
    'Modul 6: Matriks, Diskrit & Keuangan - Matriks': {
      'Mengenal Matriks': { materi: "Materi sedang dalam tahap pengembangan.", latihan: [] },
      'Penjumlahan dan Pengurangan Matriks': { materi: "Materi sedang dalam tahap pengembangan.", latihan: [] },
      'Perkalian Matriks': { materi: "Materi sedang dalam tahap pengembangan.", latihan: [] },
      'Invers Perkalian Matriks Ordo 2x2': { materi: "Materi sedang dalam tahap pengembangan.", latihan: [] },
      'Invers Perkalian Matriks Ordo (3x3)': { materi: "Materi sedang dalam tahap pengembangan.", latihan: [] },
      'Menyelesaikan Persamaan Matriks': { materi: "Materi sedang dalam tahap pengembangan.", latihan: [] }
    },
    'Modul 6: Matriks, Diskrit & Keuangan - Matematika Keuangan': {
      'Rencana Pembelajaran': { materi: "Materi sedang dalam tahap pengembangan.", latihan: [] },
      'Bunga Majemuk': { materi: "Materi sedang dalam tahap pengembangan.", latihan: [] },
      'Angsuran dan Anuitas': { materi: "Materi sedang dalam tahap pengembangan.", latihan: [] },
      'Obligasi': { materi: "Materi sedang dalam tahap pengembangan.", latihan: [] }
    },
    'Modul 6: Matriks, Diskrit & Keuangan - Induksi Matematika': {
      'Induksi Matematika Pada Pembuktian Rumus': { materi: "Materi sedang dalam tahap pengembangan.", latihan: [] },
      'Induksi Matematika pada Barisan dan deret': { materi: "Materi sedang dalam tahap pengembangan.", latihan: [] }
    },
    'Modul 6: Matriks, Diskrit & Keuangan - Barisan dan Deret': {
      'Pola Bilangan sebagai Barisan dan Deret': { materi: "Materi sedang dalam tahap pengembangan.", latihan: [] },
      'Barisan dan Deret Aritmatika': { materi: "Materi sedang dalam tahap pengembangan.", latihan: [] },
      'Barisan dan Deret Geometri': { materi: "Materi sedang dalam tahap pengembangan.", latihan: [] },
      'Deret Geometri Tak Hingga': { materi: "Materi sedang dalam tahap pengembangan.", latihan: [] },
      'Aplikasi Barisan dan Deret': { materi: "Materi sedang dalam tahap pengembangan.", latihan: [] },
      'Notasi Sigma': { materi: "Materi sedang dalam tahap pengembangan.", latihan: [] }
    },
    'Modul 6: Matriks, Diskrit & Keuangan - Logika Matematika': {
      'Pernyataan, Kalimat terbuka dan negasinya': { materi: "Materi sedang dalam tahap pengembangan.", latihan: [] },
      'Pernyataan majemuk': { materi: "Materi sedang dalam tahap pengembangan.", latihan: [] },
      'Ekivalensi, Tautologi dan Kontradiksi': { materi: "Materi sedang dalam tahap pengembangan.", latihan: [] },
      'Konvers, invers dan Kontraposisi': { materi: "Materi sedang dalam tahap pengembangan.", latihan: [] },
      'Pernyataan Berkuantor': { materi: "Materi sedang dalam tahap pengembangan.", latihan: [] },
      'Penarikan Kesimpulan': { materi: "Materi sedang dalam tahap pengembangan.", latihan: [] }
    },
    'Modul 6: Matriks, Diskrit & Keuangan - Teori Bilangan': {
      'Macam-Macam Bilangan': { materi: "Materi sedang dalam tahap pengembangan.", latihan: [] },
      'Keterbagian pada Bilangan': { materi: "Materi sedang dalam tahap pengembangan.", latihan: [] },
      'Aritmatika Modulo': { materi: "Materi sedang dalam tahap pengembangan.", latihan: [] },
      'Bilangan Basis': { materi: "Materi sedang dalam tahap pengembangan.", latihan: [] },
      'Bilangan Kompleks': { materi: "Materi sedang dalam tahap pengembangan.", latihan: [] },
      'Operasi Aljabar pada Bilangan Kompleks': { materi: "Materi sedang dalam tahap pengembangan.", latihan: [] }
    },
    'Modul 7: Statistika & Peluang - Statistika': {
      'Ukuran Pemusatan Data': { materi: "Materi sedang dalam tahap pengembangan.", latihan: [] },
      'Ukuran Letak Data': { materi: "Materi sedang dalam tahap pengembangan.", latihan: [] },
      'Ukuran Penyebaran Data': { materi: "Materi sedang dalam tahap pengembangan.", latihan: [] },
      'Menghitung Ukuran Data Berkelompok': { materi: "Materi sedang dalam tahap pengembangan.", latihan: [] },
      'Menyajikan Data dalam Bentuk Diagram': { materi: "Materi sedang dalam tahap pengembangan.", latihan: [] },
      'Ukuran Kemiringan dan Keruncingan Data': { materi: "Materi sedang dalam tahap pengembangan.", latihan: [] },
      'Statistik Regresi': { materi: "Materi sedang dalam tahap pengembangan.", latihan: [] }
    },
    'Modul 7: Statistika & Peluang - Peluang': {
      'Rencana Pembelajaran (Mat Umum)': { materi: "Materi sedang dalam tahap pengembangan.", latihan: [] },
      'Rencana Pembelajaran (Mat Lanjut)': { materi: "Materi sedang dalam tahap pengembangan.", latihan: [] },
      'Aturan Pengisian Tempat': { materi: "Materi sedang dalam tahap pengembangan.", latihan: [] },
      'Aturan permutasi': { materi: "Materi sedang dalam tahap pengembangan.", latihan: [] },
      'Aturan Kombinasi': { materi: "Materi sedang dalam tahap pengembangan.", latihan: [] },
      'Peluang Suatu Kejadian': { materi: "Materi sedang dalam tahap pengembangan.", latihan: [] },
      'Peluang Kejadian Majemuk': { materi: "Materi sedang dalam tahap pengembangan.", latihan: [] },
      'Fungsi Distribusi Peluang': { materi: "Materi sedang dalam tahap pengembangan.", latihan: [] },
      'Distribusi Binomial': { materi: "Materi sedang dalam tahap pengembangan.", latihan: [] },
      'Distribusi Normal': { materi: "Materi sedang dalam tahap pengembangan.", latihan: [] }
    }
  }
};
