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
    'Fungsi Kuadrat': {
      'Grafik Fungsi': { materi: "Materi Grafik Fungsi", latihan: [] }
    }
  }
};
