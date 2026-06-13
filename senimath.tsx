import React, { useState, useEffect, useRef } from 'react';
import {
  Menu, X, Home, BookOpen, Play, Info, ShoppingBag,
  Settings, User, CheckCircle, XCircle, Lightbulb,
  ChevronRight, ArrowRight, Instagram, MessageCircle, Lock, ChevronLeft, Book, ChevronDown,
  Sparkles, Target, TrendingUp, Zap
} from 'lucide-react';

// --- MOCK DATA ---

const MOCK_COURSES = {
  SMP: {
    'Kelas VII - Bilangan Bulat dan Pecahan': {
      'Pengertian dan pengelompokan bilangan': {
        materi: "🕵️‍♂️ Misi Awal: Memecahkan Kode Brankas\n\nBayangkan kamu menemukan sebuah brankas rahasia milik seorang detektif. Di pintunya terdapat secarik kertas berisi petunjuk sandi 3 digit untuk membukanya:\n• Digit Pertama: Bilangan prima pertama yang bernilai genap.\n• Digit Kedua: Angka pertama dari himpunan bilangan cacah.\n• Digit Ketiga: Bilangan ganjil terkecil setelah angka 5.\n\nKira-kira, berapa ya PIN brankas tersebut? Untuk bisa memecahkannya, kita harus paham dulu apa itu bilangan prima, cacah, dan ganjil. Mari kita eksplorasi materinya!\n\n📚 Eksplorasi Materi: Pengelompokan Bilangan\n\n1. Pengantar: Apa itu Bilangan Bulat?\nSebelum masuk ke pengelompokan, kita perlu tahu dulu bahwa kumpulan bilangan ini umumnya merupakan bagian dari Bilangan Bulat.\n• Bilangan bulat adalah himpunan bilangan yang utuh (tidak memiliki pecahan atau desimal).\n• Bilangan bulat terdiri dari bilangan bulat negatif (..., -3, -2, -1), nol (0), dan bilangan bulat positif (1, 2, 3, ...).\nDari himpunan bilangan bulat inilah kita bisa mengelompokkan bilangan ke dalam kelompok-kelompok yang lebih spesifik.\n\n2. Pengelompokan Bilangan\n\nA. Bilangan Asli (Natural Numbers)\n• Pengertian: Bilangan asli adalah bilangan yang biasa kita gunakan sehari-hari untuk menghitung benda (mulai dari angka 1 dan terus bertambah 1).\n• Bilangan asli tidak mencakup angka nol (0) dan bilangan negatif.\n• Anggota Himpunan: {1, 2, 3, 4, 5, 6, 7, ...}.\n\nB. Bilangan Cacah (Whole Numbers)\n• Pengertian: Bilangan cacah adalah gabungan dari himpunan bilangan asli ditambah dengan angka nol (0).\n• Bilangan ini bernilai positif dan tidak memiliki pecahan/desimal.\n• Anggota Himpunan: {0, 1, 2, 3, 4, 5, 6, ...}.\n\nC. Bilangan Genap\n• Pengertian: Bilangan genap adalah bilangan bulat yang habis dibagi 2.\n• Artinya, jika bilangan ini dibagi 2, tidak akan ada sisa.\n• Bilangan genap selalu memiliki angka satuan 0, 2, 4, 6, atau 8.\n\nD. Bilangan Ganjil\n• Pengertian: Bilangan ganjil adalah bilangan bulat yang tidak habis dibagi 2.\n• Jika dibagi 2, bilangan ini akan selalu memiliki sisa 1.\n• Bilangan ganjil selalu memiliki angka satuan 1, 3, 5, 7, atau 9.\n\nE. Bilangan Prima\n• Pengertian: Bilangan prima adalah bilangan asli lebih besar dari 1 yang hanya bisa dibagi habis oleh dua bilangan bulat positif, yaitu angka 1 dan bilangan itu sendiri.\n• Anggota Himpunan: {2, 3, 5, 7, 11, 13, 17, 19, 23, 29, ...}.\n\nFakta Penting Bilangan Prima:\n1) Angka 1 bukan bilangan prima karena hanya memiliki satu faktor pembagi (yaitu angka 1 itu sendiri).\n2) Angka 2 adalah satu-satunya bilangan prima yang bernilai genap.\n3) Semua bilangan prima lainnya (seperti 3, 5, 7, 11) adalah bilangan ganjil.\n4) Angka 9 bukan bilangan prima karena bisa dibagi 1, 3, dan 9.\n\n🛠️ Pemodelan: Menguji Sebuah Angka\nAgar lebih mudah membedakan sebuah angka, mari kita uji dengan angka 7:\n• Apakah 7 bilangan bulat? Ya (karena utuh tanpa desimal).\n• Apakah 7 bilangan asli? Ya (karena digunakan untuk menghitung benda mulai dari 1).\n• Apakah 7 bilangan cacah? Ya (karena masuk ke dalam kumpulan 0, 1, 2, 3...).\n• Apakah 7 bilangan genap atau ganjil? Ganjil (karena jika dibagi 2 bersisa 1).\n• Apakah 7 bilangan prima? Ya (karena 7 hanya bisa dibagi habis oleh 1 dan 7).\n\n🔑 Kesimpulan: Menjawab Misi Awal\nSekarang, mari kita gunakan ilmu yang sudah kita pelajari untuk memecahkan sandi brankas detektif tadi!\n• Digit Pertama (Bilangan prima pertama yang bernilai genap): Berdasarkan materi, satu-satunya bilangan prima genap adalah angka 2.\n• Digit Kedua (Angka pertama dari himpunan bilangan cacah): Titik awal himpunan bilangan cacah selalu dimulai dari angka 0.\n• Digit Ketiga (Bilangan ganjil terkecil setelah angka 5): Bilangan ganjil setelah angka 5 adalah angka 7.\n\nJadi, password brankas rahasia tersebut adalah 207!",
        latihan: [
          {
            id: 1001,
            type: 1,
            question: "Manakah dari angka berikut yang merupakan satu-satunya bilangan prima yang bernilai genap?",
            options: ["0", "1", "2", "4"],
            correctAnswer: 2,
            idea: "Ingat kembali bahwa sebagian besar bilangan prima adalah ganjil, kecuali angka terkecilnya.",
            pembahasan: "Angka 2 adalah satu-satunya bilangan prima yang bernilai genap. Bilangan prima lainnya selalu ganjil."
          },
          {
            id: 1002,
            type: 1,
            question: "Himpunan bilangan asli tidak mencakup angka nol dan bilangan negatif. Jika kita diminta menyebutkan bilangan asli yang kurang dari 5, maka anggotanya adalah...",
            options: ["0, 1, 2, 3, 4", "1, 2, 3, 4", "1, 3, 5", "-1, 0, 1, 2, 3, 4"],
            correctAnswer: 1,
            idea: "Titik awal berhitung bilangan asli sama seperti saat pertama kali kamu belajar menghitung benda menggunakan jari.",
            pembahasan: "Bilangan asli digunakan untuk menghitung benda mulai dari angka 1 dan terus bertambah 1. Karena diminta kurang dari 5, maka jawabannya 1, 2, 3, 4."
          },
          {
            id: 1003,
            type: 1,
            question: "Bilangan ganjil adalah bilangan yang tidak habis dibagi 2. Di antara kelompok bilangan berikut, manakah yang semuanya merupakan bilangan ganjil?",
            options: ["11, 13, 15, 17", "7, 9, 12, 15", "2, 3, 5, 7", "21, 23, 24, 25"],
            correctAnswer: 0,
            idea: "Perhatikan angka satuannya. Bilangan ganjil selalu memiliki satuan 1, 3, 5, 7, atau 9.",
            pembahasan: "Bilangan ganjil adalah bilangan yang tidak habis dibagi 2, dan satuan angkanya adalah 1, 3, 5, 7, 9. Opsi A semuanya ganjil."
          },
          {
            id: 1004,
            type: 1,
            question: "Angka 9 bukan merupakan bilangan prima. Alasan yang paling tepat adalah...",
            options: ["Karena 9 adalah bilangan ganjil", "Karena 9 bisa dibagi habis oleh 1, 3, dan 9", "Karena 9 bukan bilangan genap", "Karena 9 lebih besar dari 2"],
            correctAnswer: 1,
            idea: "Bilangan prima hanya memiliki dua faktor pembagi. Coba cari angka berapa saja yang bisa membagi habis angka 9.",
            pembahasan: "Syarat bilangan prima hanya bisa dibagi 1 dan angka itu sendiri. Karena 9 memiliki 3 faktor pembagi, maka 9 bukan prima."
          },
          {
            id: 1005,
            type: 1,
            question: "Jika kita menggabungkan angka nol (0) ke dalam himpunan bilangan asli, maka himpunan baru tersebut dinamakan...",
            options: ["Bilangan Prima", "Bilangan Ganjil", "Bilangan Cacah", "Bilangan Genap"],
            correctAnswer: 2,
            idea: "Perhatikan kata kunci \"tambahan angka nol\".",
            pembahasan: "Gabungan bilangan asli dengan angka nol (0) dinamakan bilangan cacah."
          },
          {
            id: 1006,
            type: 2,
            question: "Sebutkan bilangan prima terkecil yang lebih besar dari 10!",
            targetAnswer: "11",
            idea: "Uji satu per satu angka setelah 10 (yaitu 11, 12, 13). Manakah yang hanya bisa dibagi angka 1 dan angka itu sendiri?",
            pembahasan: "Angka setelah 10 adalah 11, 12, 13. Angka 12 bisa dibagi 2. Angka 11 hanya bisa dibagi 1 and 11. Jadi prima terkecil setelah 10 adalah 11."
          },
          {
            id: 1007,
            type: 2,
            question: "Berapakah selisih antara angka pertama pada himpunan bilangan cacah dan angka pertama pada himpunan bilangan asli?",
            targetAnswer: "1",
            idea: "Tentukan dulu titik awal (angka pertama) bilangan cacah, lalu tentukan angka pertama bilangan asli. Kurangkan angka yang besar dengan yang kecil.",
            pembahasan: "Angka pertama bilangan cacah adalah 0. Angka pertama bilangan asli adalah 1. Selisihnya adalah 1 - 0 = 1."
          },
          {
            id: 1008,
            type: 2,
            question: "Sebutkan semua bilangan genap yang ada di antara angka 7 dan 13!",
            targetAnswer: "8, 10, 12",
            idea: "Bilangan genap harus habis dibagi 2. Urutkan angka 8, 9, 10, 11, 12 dan pilih yang genap.",
            pembahasan: "Urutan angka antara 7 dan 13 adalah 8, 9, 10, 11, 12. Angka yang habis dibagi 2 dari deret tersebut adalah 8, 10, 12."
          },
          {
            id: 1009,
            type: 2,
            question: "Angka 15 merupakan bilangan ganjil sekaligus bilangan... (Sebutkan himpunan lain yang memuat angka 15)",
            targetAnswer: "Bilangan Bulat, Asli, dan Cacah",
            idea: "Ingat pengelompokan secara luas. Apakah 15 bernilai positif tanpa desimal? Apakah lebih dari 0?",
            pembahasan: "Angka 15 utuh tanpa desimal (Bulat), digunakan untuk menghitung/lebih dari 0 (Asli), termasuk dalam kelompok mulai dari 0 (Cacah)."
          },
          {
            id: 1010,
            type: 2,
            question: "Berapakah jumlah dari 3 bilangan prima pertama?",
            targetAnswer: "10",
            idea: "Sebutkan tiga anggota pertama himpunan bilangan prima (jangan masukkan angka 1), kemudian jumlahkan ketiganya.",
            pembahasan: "Tiga bilangan prima pertama adalah 2, 3, dan 5. Jumlahnya: 2 + 3 + 5 = 10."
          },
          {
            id: 1011,
            type: 3,
            question: "Bilangan bulat terdiri dari elemen-elemen berikut, KECUALI...",
            options: ["Bilangan bulat negatif", "Angka nol (0)", "Bilangan desimal/pecahan", "Bilangan bulat positif"],
            correctAnswer: 2,
            pembahasan: "Bilangan bulat adalah bilangan yang utuh dan tidak memiliki pecahan atau desimal."
          },
          {
            id: 1012,
            type: 3,
            question: "Himpunan {2, 3, 5, 7, 11, 13} merupakan anggota kelompok himpunan...",
            options: ["Bilangan Cacah", "Bilangan Asli", "Bilangan Ganjil", "Bilangan Prima"],
            correctAnswer: 3,
            pembahasan: "Kumpulan angka tersebut hanya bisa dibagi oleh 1 dan bilangan itu sendiri."
          },
          {
            id: 1013,
            type: 3,
            question: "Suatu bilangan selalu memiliki sisa 1 jika dibagi dengan 2. Bilangan tersebut dipastikan adalah...",
            options: ["Bilangan Ganjil", "Bilangan Genap", "Bilangan Prima", "Bilangan Cacah"],
            correctAnswer: 0,
            pembahasan: "Definisi bilangan ganjil adalah bilangan bulat yang bersisa 1 jika dibagi 2."
          },
          {
            id: 1014,
            type: 3,
            question: "Bilangan cacah yang kurang dari 3 adalah...",
            options: ["1, 2", "0, 1, 2", "1, 2, 3", "0, 1, 2, 3"],
            correctAnswer: 1,
            pembahasan: "Bilangan cacah dimulai dari 0, yang kurang dari 3 adalah 0, 1, dan 2."
          },
          {
            id: 1015,
            type: 3,
            question: "Pernyataan di bawah ini yang salah adalah...",
            options: ["Angka 1 bukan bilangan prima", "Semua bilangan ganjil adalah bilangan prima", "Semua bilangan prima lebih besar dari 1", "Angka 0 termasuk bilangan bulat"],
            correctAnswer: 1,
            pembahasan: "Pernyataan ini salah karena angka 9 atau 15 adalah ganjil tetapi bukan prima (bisa dibagi 3)."
          },
          {
            id: 1016,
            type: 4,
            question: "Himpunan bilangan cacah yang juga merupakan bilangan bulat positif dimulai dari angka ...",
            targetAnswer: "1",
            pembahasan: "Bilangan cacah positif berarti mengecualikan 0, sehingga sama dengan bilangan asli yang dimulai dari 1."
          },
          {
            id: 1017,
            type: 4,
            question: "Jika suatu bilangan berakhiran dengan angka 6 or 8, maka bilangan tersebut masuk ke dalam kelompok bilangan ...",
            targetAnswer: "Bilangan Genap",
            pembahasan: "Angka satuan genap menunjukkan bilangan genap."
          },
          {
            id: 1018,
            type: 4,
            question: "Bilangan prima yang terletak di antara angka 15 dan 20 adalah ... dan ... (Pisahkan dengan kata 'dan')",
            targetAnswer: "17 dan 19",
            pembahasan: "Angka antara 15-20 adalah 16, 17, 18, 19. Yang hanya punya dua faktor adalah 17 dan 19."
          },
          {
            id: 1019,
            type: 4,
            question: "Bilangan bulat yang posisinya berada tepat di tengah-tengah antara bilangan bulat positif and bilangan bulat negatif adalah angka ...",
            targetAnswer: "0",
            pembahasan: "Nol memisahkan bilangan bulat negatif dan positif."
          },
          {
            id: 1020,
            type: 4,
            question: "Angka 1 tidak termasuk ke dalam bilangan prima karena ...",
            targetAnswer: "Hanya memiliki satu faktor pembagi yaitu angka 1 itu sendiri",
            pembahasan: "Faktor bilangan prima harus ada tepat 2 faktor, sedangkan 1 hanya punya 1 faktor."
          },
          {
            id: 1021,
            type: 5,
            question: "Tuliskan semua anggota himpunan bilangan prima yang kurang dari 15! (Urutkan dari yang terkecil dan pisahkan dengan koma dan spasi, contoh: 2, 3, 5, ...)",
            correctAnswer: "2, 3, 5, 7, 11, 13",
            pembahasan: "Angka-angka tersebut adalah 2, 3, 5, 7, 11, dan 13. Angka tersebut adalah bilangan asli > 1 yang hanya bisa dibagi 1 dan bilangan itu sendiri."
          },
          {
            id: 1022,
            type: 5,
            question: "Jelaskan perbedaan mendasar antara himpunan bilangan cacah dan himpunan bilangan asli! Dari angka berapakah bilangan cacah dimulai?",
            correctAnswer: "0",
            pembahasan: "Perbedaan mendasarnya terletak pada titik awal bilangannya. Bilangan asli dimulai dari angka 1, sedangkan bilangan cacah dimulai dari angka 0."
          },
          {
            id: 1023,
            type: 5,
            question: "Budi mengatakan bahwa 21 adalah bilangan prima karena 21 adalah bilangan ganjil. Apakah pernyataan Budi benar? (Benar/Salah)",
            correctAnswer: "Salah",
            pembahasan: "Pernyataan Budi salah. Memang benar 21 adalah bilangan ganjil, namun syarat bilangan prima adalah hanya bisa dibagi oleh 1 dan angka itu sendiri. Angka 21 bisa dibagi oleh 1, 3, 7, dan 21. Karena memiliki lebih dari 2 faktor, 21 bukan bilangan prima."
          },
          {
            id: 1024,
            type: 5,
            question: "Berapakah hasil kali dari bilangan cacah pertama dengan bilangan prima genap?",
            correctAnswer: "0",
            pembahasan: "Bilangan cacah pertama adalah 0. Bilangan prima genap adalah 2. Hasil kalinya adalah 0 × 2 = 0."
          },
          {
            id: 1025,
            type: 5,
            question: "Tuliskan 3 bilangan genap berurutan yang jika dijumlahkan hasilnya adalah 30! (Urutkan dari yang terkecil, pisahkan dengan koma dan spasi, contoh: 2, 4, 6)",
            correctAnswer: "8, 10, 12",
            pembahasan: "Misal bilangannya x, x+2, x+4. (x) + (x+2) + (x+4) = 30 -> 3x + 6 = 30 -> 3x = 24 -> x = 8. Angkanya adalah 8, 10, 12. Semuanya bilangan genap."
          }
        ]
      },
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
      'Persamaan dan Fungsi Linier': {
        materi: "🕵️‍♂️ Misi Awal: Menemukan Kemiringan Tebing\n\nSebuah tim penyelamat harus mengevakuasi korban di atas tebing. Koordinat awal korban adalah di P(2, -4) dan helikopter penyelamat bergerak dari titik asal (0, 0). Jalur lintasan helikopter harus mengikuti garis lurus dengan kemiringan (gradien) sebesar 3.\nApakah lintasan helikopter tersebut akan melewati posisi korban di tebing tersebut?\nMari kita temukan jawabannya setelah memahami konsep persamaan dan fungsi linier!\n\n📚 Eksplorasi Materi: Persamaan dan Fungsi Linier\n\n1. Bentuk Umum Persamaan dan Fungsi Linier\nSuatu persamaan linier dapat dinyatakan sebagai:\n**ax + by = c**\ndi mana a, b, dan c adalah konstanta, serta x dan y adalah variabel riil.\nJika persamaan tersebut diubah menjadi fungsi linier, bentuk umumnya adalah:\n**y = mx + c**\ndi mana:\n• **x** adalah variabel bebas, anggota daerah asal (domain).\n• **y** adalah variabel terikat, anggota daerah hasil (range).\n• **m** adalah gradien (kemiringan) garis.\n\n2. Konsep Gradien (Kemiringan Garis)\nGradien (m) adalah nilai kemiringan suatu garis lurus. Rumus gradien bergantung pada informasi yang diketahui:\n• Jika diketahui persamaan **ax + by = c**, maka gradiennya:\n  **m = -a/b**\n• Jika garis melalui titik **A(x1, y1)** dan **B(x2, y2)**, maka:\n  **m = (y2 - y1) / (x2 - x1) = Δy / Δx = tan α**\n\nFakta Penting tentang Gradien:\n1) Garis horizontal (sejajar sumbu-X) memiliki gradien **0**.\n2) Garis vertikal (sejajar sumbu-Y) memiliki gradien **∞ (tak terhingga)**.\n3) Jika gradien bernilai positif, arah garis naik ke kanan (semakin besar x, semakin besar y).\n4) Jika gradien bernilai negatif, arah garis turun ke kanan (semakin besar x, semakin kecil y).\n\n3. Menentukan Persamaan Garis\nKita bisa menentukan persamaan garis dengan dua cara utama:\n\nA. Melalui satu titik A(x1, y1) dengan gradien m\n• Rumus:\n  **y - y1 = m(x - x1)**\n\nB. Melalui dua titik A(x1, y1) dan B(x2, y2)\n• Rumus:\n  **(y - y1) / (y2 - y1) = (x - x1) / (x2 - x1)**\n\n4. Kedudukan Dua Garis Lurus\nDua garis y = m1 * x + c1 dan y = m2 * x + c2 memiliki hubungan kedudukan sebagai berikut:\n\nA. Dua Garis Sejajar\n• Kedua garis sejajar jika gradiennya sama:\n  **m1 = m2**\n\nB. Dua Garis Berpotongan Tegak Lurus\n• Kedua garis berpotongan tegak lurus jika hasil kali gradiennya bernilai -1:\n  **m1 * m2 = -1** (atau m2 = -1/m1)\n\nC. Dua Garis Berpotongan Biasa\n• Kedua garis berpotongan jika gradiennya tidak sama:\n  **m1 ≠ m2**\n\n🛠️ Pemodelan: Penerapan dalam Kehidupan Sehari-hari\nMari kita lihat penerapan konsep ini dalam pemodelan kecepatan mobil:\nSebuah mobil diuji kelayakannya. Pada 4 jam pertama menempuh jarak 242 km. Setelah 6 jam menempuh 362 km. Jika kecepatannya konstan, mari kita buat persamaan kecepatannya:\n• Waktu (x) dan Jarak (y) menghasilkan dua titik: (4, 242) dan (6, 362).\n• Gradien (kecepatan): m = (362 - 242) / (6 - 4) = 120 / 2 = 60 km/jam.\n• Persamaan garisnya: y - 242 = 60(x - 4) => y = 60x + 2.\nPersamaan ini menggambarkan posisi mobil (y) pada waktu (x) dengan kecepatan konstan 60 km/jam.\n\n🔑 Kesimpulan: Memecahkan Misi Awal\nKembali ke misi awal tim penyelamat:\n• Titik korban: P(2, -4).\n• Gradien helikopter: m = 3. Melalui titik asal (0, 0).\n• Persamaan lintasan helikopter: y - 0 = 3(x - 0) => y = 3x.\n• Kita uji apakah titik P(2, -4) dilewati lintasan y = 3x:\n  y = 3(2) = 6 (sedangkan koordinat y korban adalah -4, bukan 6).\nJadi, lintasan helikopter tersebut tidak melewati posisi korban di tebing (korban berada di y = -4, sedangkan lintasan berada di y = 6). Tim harus mengubah rute helikopter!",
        latihan: [
          {
            id: 2001,
            type: 1,
            question: "Besar gradien garis 2x + 6y = 5 adalah ...",
            options: ["-3", "-1/3", "1/3", "3", "5"],
            correctAnswer: 1,
            idea: "Ubah persamaan ke bentuk y = mx + c atau gunakan rumus cepat m = -a/b.",
            pembahasan: "Persamaan garis 2x + 6y = 5 memiliki koefisien a = 2 dan b = 6. Rumus gradiennya adalah m = -a/b = -2/6 = -1/3."
          },
          {
            id: 2002,
            type: 1,
            question: "Sebuah garis melalui titik A(–2, –3) dan B(6, –5). Besar gradien garis itu adalah ...",
            options: ["-4", "-1/4", "1/4", "2", "4"],
            correctAnswer: 1,
            idea: "Gunakan rumus gradien melalui dua titik m = (y2 - y1) / (x2 - x1).",
            pembahasan: "m = (y2 - y1) / (x2 - x1) = (-5 - (-3)) / (6 - (-2)) = -2 / 8 = -1/4."
          },
          {
            id: 2003,
            type: 1,
            question: "Persamaan suatu garis dengan gradien 3 dan melalui titik P(2, –4) adalah ...",
            options: ["y = 3x – 2", "y = 3x + 2", "y = 3x – 6", "y = 3x – 10", "y = 3x + 10"],
            correctAnswer: 3,
            idea: "Gunakan rumus persamaan garis melalui satu titik dengan gradien m: y - y1 = m(x - x1).",
            pembahasan: "y - (-4) = 3(x - 2) => y + 4 = 3x - 6 => y = 3x - 10."
          },
          {
            id: 2004,
            type: 1,
            question: "Persamaan suatu garis yang melalui titik P(–2, 3) dan titik Q(2, –5) adalah ...",
            options: ["y = -2x - 6", "y = -2x - 4", "y = -2x - 1", "y = -2x + 1", "y = -2x + 6"],
            correctAnswer: 2,
            idea: "Gunakan rumus persamaan garis melalui dua titik: (y - y1)/(y2 - y1) = (x - x1)/(x2 - x1).",
            pembahasan: "(y - 3) / (-5 - 3) = (x - (-2)) / (2 - (-2)) => (y - 3) / -8 = (x + 2) / 4 => 4(y - 3) = -8(x + 2) => y - 3 = -2x - 4 => y = -2x - 1."
          },
          {
            id: 2005,
            type: 2,
            question: "Gambarlah persamaan garis y = 4x – 2 kedalam grafik Cartesius. Tentukan titik potong sumbu-X dan sumbu-Y!",
            targetAnswer: "Titik potong sumbu-X di (1/2, 0) dan sumbu-Y di (0, -2)",
            idea: "Titik potong sumbu-X terjadi saat y = 0, sedangkan titik potong sumbu-Y terjadi saat x = 0.",
            pembahasan: "Untuk x = 0, y = 4(0) - 2 = -2. Diperoleh titik (0, -2).\nUntuk y = 0, 0 = 4x - 2 => 4x = 2 => x = 1/2. Diperoleh titik (1/2, 0).\nHubungkan kedua titik ini pada koordinat Cartesius."
          },
          {
            id: 2006,
            type: 3,
            question: "Tim peneliti mengamati penurunan populasi harimau Sumatera mengikuti pola linier. Jika pada tahun ke-tiga jumlah populasi harimau sebanyak 182 ekor dan pada tahun ke-lima menjadi 170 ekor, berapakah perkiraan populasi harimau sumatera pada tahun ke-9?",
            options: ["164 ekor", "158 ekor", "152 ekor", "146 ekor", "140 ekor"],
            correctAnswer: 3,
            pembahasan: "Diperoleh titik (3, 182) and (5, 170).\nGradien (laju penurunan): m = (170 - 182) / (5 - 3) = -12 / 2 = -6 ekor per tahun.\nPersamaan garis: y - 170 = -6(x - 5) => y = -6x + 200.\nUntuk tahun ke-9 (x = 9): y = -6(9) + 200 = -54 + 200 = 146 ekor."
          },
          {
            id: 2007,
            type: 3,
            question: "Sebuah garis g melalui titik A(4, –2). Jika garis g sejajar dengan garis 3x + 2y = 6 maka persamaan garis g tersebut adalah ...",
            options: ["3x + 2y = 8", "3x + 2y = 4", "2x + 3y = 8", "2x + 3y = 4", "3x – 2y = 8"],
            correctAnswer: 0,
            pembahasan: "Gradien garis 3x + 2y = 6 adalah m = -3/2. Karena sejajar, gradien garis g juga m_g = -3/2.\nPersamaan garis g: y - (-2) = -3/2(x - 4) => 2y + 4 = -3x + 12 => 3x + 2y = 8."
          },
          {
            id: 2008,
            type: 3,
            question: "Sebuah garis melalui titik A(–3, 4). Jika garis tersebut tegak lurus dengan garis 2x – 5y = 8 maka persamaan garis itu adalah ...",
            options: ["5x + 2y - 7 = 0", "5x - 2y + 7 = 0", "5x + 2y + 7 = 0", "2x + 5y - 7 = 0", "2x - 5y + 7 = 0"],
            correctAnswer: 2,
            pembahasan: "Gradien garis 2x - 5y = 8 adalah m1 = 2/5. Karena tegak lurus, m2 = -5/2.\nPersamaan garis: y - 4 = -5/2(x - (-3)) => 2y - 8 = -5x - 15 => 5x + 2y + 7 = 0."
          },
          {
            id: 2009,
            type: 3,
            question: "Sebuah garis ax + by = c. Jika garis tersebut tegak lurus dengan garis 3x – 2y = 8 dan melalui titik (6, –2) maka persamaan garis itu adalah ...",
            options: ["2x + 3y = 6", "2x - 3y = 6", "3x + 2y = 6", "3x - 2y = 6", "2x + 3y = -6"],
            correctAnswer: 0,
            pembahasan: "Gradien 3x - 2y = 8 adalah m1 = 3/2. Karena tegak lurus, gradiennya m2 = -2/3.\nPersamaan garis: y - (-2) = -2/3(x - 6) => 3y + 6 = -2x + 12 => 2x + 3y = 6."
          },
          {
            id: 2010,
            type: 3,
            question: "Garis yang melalui titik (2, –3) dan tegak lurus dengan garis x + 2y = 14 memotong sumbu-Y di titik ...",
            options: ["(0, -14)", "(0, 7/2)", "(0, -7)", "(0, 7)", "(11, -7/2)"],
            correctAnswer: 2,
            pembahasan: "Gradien x + 2y = 14 adalah m1 = -1/2. Karena tegak lurus, gradiennya m2 = 2.\nPersamaan garis: y - (-3) = 2(x - 2) => y + 3 = 2x - 4 => y = 2x - 7.\nMemotong sumbu-Y saat x = 0 => y = -7, sehingga diperoleh titik (0, -7)."
          },
          {
            id: 2011,
            type: 3,
            question: "Jika garis g melalui titik (3, 5) dan juga melalui titik potong garis x + 5y = 0 dengan garis 3x + 7y = 8, maka persamaan garis g itu adalah ...",
            options: ["3x + 2y - 19 = 0", "3x + 2y - 14 = 0", "3x - y - 4 = 0", "3x + y + 14 = 0", "3x + y - 14 = 0"],
            correctAnswer: 4,
            pembahasan: "Substitusi x = -5y ke 3x + 7y = 8 => 3(-5y) + 7y = 8 => -8y = 8 => y = -1, x = 5. Titik potongnya (5, -1).\nPersamaan garis g melalui (3, 5) dan (5, -1): y - 5 = [(-1-5)/(5-3)] * (x - 3) => y - 5 = -3(x - 3) => 3x + y - 14 = 0."
          },
          {
            id: 2012,
            type: 3,
            question: "Sudut yang dibentuk oleh garis 3x + y = 6 dan 2x – y = 6 adalah ...",
            options: ["135°", "90°", "60°", "45°", "30°"],
            correctAnswer: 3,
            pembahasan: "Gradien garis 1: m1 = -3. Gradien garis 2: m2 = 2.\ntan θ = |(m2 - m1) / (1 + m1*m2)| = |(2 - (-3)) / (1 + 2(-3))| = |5 / -5| = 1.\nKarena tan θ = 1, maka sudut θ = 45°."
          },
          {
            id: 2013,
            type: 3,
            question: "Persamaan garis yang melalui titik potong garis 4x + 7y - 15 = 0 dan 9x – 14y – 4 = 0 serta tegak lurus pada garis 21x + 5y = 3 adalah ...",
            options: ["21x - 5y = -11", "11x - 21y = 5", "5x - 21y = -11", "5x + 21y = -11", "5x - 21y = 11"],
            correctAnswer: 2,
            pembahasan: "Eliminasi 4x + 7y = 15 dan 9x - 14y = 4. Kalikan garis 1 dengan 2 => 8x + 14y = 30. Jumlahkan => 17x = 34 => x = 2, y = 1. Titik potong (2, 1).\nGradien 21x + 5y = 3 adalah m1 = -21/5. Karena tegak lurus, gradiennya m2 = 5/21.\nPersamaan garis: y - 1 = 5/21(x - 2) => 21y - 21 = 5x - 10 => 5x - 21y = -11."
          },
          {
            id: 2014,
            type: 3,
            question: "Diketahui titik P(–1, 2), Q(3, 4) dan R(1, –1). Persamaan garis yang melalui titik tengah PQ dan sejajar QR adalah ...",
            options: ["2y – 5x + 8 = 0", "5y – 2x – 1 = 0", "5y – 2x – 13 = 0", "5y + 2x – 11 = 0", "2y – 5x – 1 = 0"],
            correctAnswer: 4,
            pembahasan: "Titik tengah PQ: M = ((-1+3)/2, (2+4)/2) = (1, 3).\nGradien QR: m = (-1-4)/(1-3) = 5/2. Karena sejajar, gradiennya juga 5/2.\nPersamaan garis: y - 3 = 5/2(x - 1) => 2y - 6 = 5x - 5 => 2y - 5x - 1 = 0."
          },
          {
            id: 2015,
            type: 3,
            question: "Garis yang melalui titik (2, 1) and (8, 4) berpotongan dengan garis yang melalui titik (1, 5) dan (5, 1) di titik ...",
            options: ["(3, 3)", "(1, 3)", "(4, 2)", "(7, 2)", "(6, 2)"],
            correctAnswer: 2,
            pembahasan: "Garis 1 melalui (2, 1) dan (8, 4): y - 1 = [(4-1)/(8-2)](x - 2) => y = 1/2 x.\nGaris 2 melalui (1, 5) dan (5, 1): y - 5 = [(1-5)/(5-1)](x - 1) => y = -x + 6.\nTitik potong: 1/2 x = -x + 6 => 3/2 x = 6 => x = 4, y = 2. Diperoleh titik (4, 2)."
          },
          {
            id: 2016,
            type: 3,
            question: "Grafik hasil produksi suatu pabrik per tahun merupakan suatu garis lurus. Jika produksi pada tahun pertama 110 unit dan pada tahun ketiga 150 unit, maka produksi tahun ke-15 adalah ...",
            options: ["370 unit", "390 unit", "410 unit", "430 unit", "670 unit"],
            correctAnswer: 1,
            pembahasan: "Diperoleh titik (1, 110) dan (3, 150).\nGradien m = (150 - 110)/(3 - 1) = 20.\nPersamaan garis: y - 110 = 20(x - 1) => y = 20x + 90.\nUntuk tahun ke-15 (x = 15): y = 20(15) + 90 = 390 unit."
          },
          {
            id: 2017,
            type: 4,
            question: "Gambarlah persamaan garis 3x + 2y = 12 kedalam grafik Cartesius. Tentukan titik potong dengan sumbu-X dan sumbu-Y!",
            targetAnswer: "Garis memotong sumbu-X di (4, 0) dan sumbu-Y di (0, 6)",
            pembahasan: "Titik potong sumbu-X (y = 0): 3x = 12 => x = 4, diperoleh titik (4, 0).\nTitik potong sumbu-Y (x = 0): 2y = 12 => y = 6, diperoleh titik (0, 6).\nHubungkan titik (4, 0) dan (0, 6) dengan garis lurus."
          },
          {
            id: 2018,
            type: 4,
            question: "Tentukan kedudukan (apakah sejajar, berimpit, atau berpotongan di titik tertentu) antara garis 2x + 3y = -5 dan 3x + 4y = -6!",
            targetAnswer: "Berpotongan di titik (2, -3)",
            pembahasan: "Gradien m1 = -2/3 dan m2 = -3/4. Karena m1 ≠ m2, kedua garis berpotongan.\nEliminasi: 3*(2x + 3y = -5) => 6x + 9y = -15.\n2*(3x + 4y = -6) => 6x + 8y = -12.\nKurangkan => y = -3. Substitusi => 2x - 9 = -5 => x = 2. Titik potong (2, -3)."
          },
          {
            id: 2019,
            type: 5,
            question: "Tentukanlah persamaan garis yang memotong sumbu-X di titik (-6, 0) dan memotong sumbu-Y di titik (0, 8)! Tuliskan dalam bentuk ax - by = c (contoh: 4x - 3y = -24)!",
            correctAnswer: "4x - 3y = -24",
            pembahasan: "Garis melalui (-6, 0) dan (0, 8). Maka (y - 0) / (8 - 0) = (x - (-6)) / (0 - (-6)) => y / 8 = (x + 6) / 6 => 6y = 8x + 48 => 8x - 6y = -48 => 4x - 3y = -24."
          },
          {
            id: 2020,
            type: 5,
            question: "Sebuah garis y = 3x - p melalui titik A(2, q) dan B(4, 5q + 2). Tentukan nilai p!",
            correctAnswer: "5",
            pembahasan: "Substitusi A(2, q) => q = 3(2) - p => p = 6 - q.\nSubstitusi B(4, 5q + 2) => 5q + 2 = 3(4) - p => p = 10 - 5q.\nSamakan p: 6 - q = 10 - 5q => 4q = 4 => q = 1.\nMaka p = 6 - 1 = 5."
          },
          {
            id: 2021,
            type: 5,
            question: "Suatu garis y = 2x + p berpotongan dengan garis y = 3x + q di titik (4, -2). Tentukan nilai p + q!",
            correctAnswer: "-24",
            pembahasan: "Substitusi (4, -2) ke y = 2x + p => -2 = 8 + p => p = -10.\nSubstitusi (4, -2) ke y = 3x + q => -2 = 12 + q => q = -14.\nMaka p + q = -10 + (-14) = -24."
          },
          {
            id: 2022,
            type: 5,
            question: "Jarak titik P(3, 6) ke garis 12x + 5y – 40 = 0 sama dengan jarak P ke titik Q(a, 4). Tentukan nilai a yang bernilai positif!",
            correctAnswer: "3",
            pembahasan: "Jarak P ke garis: d = |12(3) + 5(6) - 40| / sqrt(12^2+5^2) = |36+30-40| / 13 = 26/13 = 2.\nJarak P ke Q: sqrt((a-3)^2 + (4-6)^2) = 2 => (a-3)^2 + 4 = 4 => (a-3)^2 = 0 => a = 3."
          },
          {
            id: 2023,
            type: 5,
            question: "Jika dua garis yang disajikan dengan persamaan 2x + ay = 5 dan bx + 6y = 7 adalah sejajar, tentukan nilai ab!",
            correctAnswer: "12",
            pembahasan: "m1 = -2/a, m2 = -b/6. Karena sejajar: -2/a = -b/6 => ab = 12."
          }
        ]
      },
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
    variants: [{ id: '1a', type: "Biasa", link: "https://lynk.id/" }, { id: '1b', type: "Cerita", link: "https://lynk.id/" }]
  },
  {
    id: 2,
    category: "SMP",
    title: "100 Latihan Soal Aljabar Dasar",
    variants: [{ id: '2a', type: "Biasa", link: "https://lynk.id/" }, { id: '2b', type: "Cerita", link: "https://lynk.id/" }]
  },
  {
    id: 3,
    category: "SMA",
    title: "100 Latihan Soal Fungsi Kuadrat",
    variants: [{ id: '3a', type: "Biasa", link: "https://lynk.id/" }, { id: '3b', type: "Cerita", link: "https://lynk.id/" }]
  },
  {
    id: 4,
    category: "SMA",
    title: "100 Latihan Soal Trigonometri",
    variants: [{ id: '4a', type: "Biasa", link: "https://lynk.id/" }, { id: '4b', type: "Cerita", link: "https://lynk.id/" }]
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
    primary: theme === 'light' ? 'bg-blue-100 text-blue-900 hover:bg-blue-200' : 'bg-blue-600 text-white hover:bg-blue-500',
    primaryGhost: theme === 'light' ? 'text-blue-700 hover:bg-blue-100' : 'text-blue-400 hover:bg-slate-700',
  };

  const MENU_ITEMS = [
    { id: 'home', icon: <Home size={20} />, label: 'Home' },
    { id: 'panduan', icon: <BookOpen size={20} />, label: 'Panduan' },
    { id: 'mulai', icon: <Play size={20} />, label: 'Mulai Belajar' },
    { id: 'info', icon: <Info size={20} />, label: 'Info' },
    { id: 'toko', icon: <ShoppingBag size={20} />, label: 'Toko' },
    { id: 'pengaturan', icon: <Settings size={20} />, label: 'Pengaturan' },
    { id: 'tentang', icon: <User size={20} />, label: 'Tentang Kami' },
  ];

  return (
    <div className={`min-h-screen flex transition-colors duration-300 ${themeClasses.bg} ${themeClasses.text}`} style={{ fontSize: `${fontSize}px` }}>

      {/* CSS for Animations */}
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
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float 4s ease-in-out 2s infinite;
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
                    if (idx < navPath.length - 1) setNavPath(navPath.slice(0, idx + 1));
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
    <div className="max-w-5xl mx-auto space-y-20 pb-16 px-2 md:px-4">

      {/* Hero Section */}
      <div className="relative text-center space-y-6 pt-12 md:pt-16 pb-8">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[150%] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-500/15 via-transparent to-transparent blur-3xl -z-10 rounded-full pointer-events-none"></div>

        <h1 className="text-6xl md:text-8xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-600 dark:from-white dark:to-slate-400 pb-2">
          SENIMATH
        </h1>

        <div className={`overflow-hidden py-4 border-y ${themeClasses.border} relative bg-slate-50/50 dark:bg-slate-900/50 backdrop-blur-sm`}>
          <div className="animate-marquee italic font-medium opacity-80 text-lg md:text-xl">
            “Gunakan logikamu sebagai kuas, dan biarkan angka-angka menari membentuk simfoni pemikiran yang luar biasa. Selamat belajar dan berkarya!” - Catatan Senimath (2026)
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 md:gap-6 pt-6 text-sm md:text-base font-black uppercase tracking-widest text-blue-600 dark:text-blue-500 opacity-90">
          <span>Math is Art</span>
          <span className="w-1.5 h-1.5 rounded-full bg-current opacity-50"></span>
          <span>Math is Fun</span>
          <span className="w-1.5 h-1.5 rounded-full bg-current opacity-50"></span>
          <span>Math is Language</span>
        </div>
      </div>

      {/* Welcome Card */}
      <div className={`relative p-8 md:p-10 rounded-3xl ${themeClasses.cardBg} border ${themeClasses.border} shadow-lg overflow-hidden group`}>
        <div className="absolute top-0 right-0 w-48 h-48 bg-blue-500/5 rounded-bl-full -z-10 group-hover:scale-110 transition-transform"></div>
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 relative z-10">
          {/* Placeholder PP Kosong untuk Foto Anda */}
          <div className="w-20 h-20 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center flex-shrink-0 border-2 border-blue-500 shadow-sm overflow-hidden">
            <User size={40} className="text-slate-400 dark:text-slate-500" />
          </div>
          <div className="flex-1 space-y-5 text-center md:text-left">
            <p className="text-xl md:text-2xl font-medium leading-relaxed">
              Buat lo yang baru mulai belajar, siapkan kopi lo. Ini akan sedikit membosankan, tapi gue yakin lo pasti bisa. <span className="font-bold text-blue-600 dark:text-blue-400">Izinnn.... ☕</span>
            </p>
            <div className="p-4 md:p-5 rounded-2xl bg-slate-100 dark:bg-slate-800/50 border-l-4 border-l-blue-500 italic opacity-90 text-lg">
              "Buat lo yang baca ini, lo selangkah di depan orang yang ga belajar. Pertahankanlah."
            </div>
            <div className="pt-2">
              <button onClick={() => navigateTo('panduan')} className={`px-6 py-3 rounded-xl font-bold border-2 border-slate-300 dark:border-slate-600 hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 transition-all flex items-center gap-2 mx-auto md:mx-0 shadow-sm hover:shadow-md`}>
                <BookOpen size={18} /> Baca Panduan Penggunaan
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* CTA: Pemilihan Jenjang */}
      <div className="text-center space-y-8 py-8">
        <div className="space-y-3">
          <h2 className="text-4xl md:text-5xl font-black tracking-tight">Sudah siap tempur?</h2>
          <p className="opacity-80 text-lg">Pilih jenjang penaklukan lo di bawah ini</p>
        </div>
        <div className="flex justify-center gap-6 md:gap-10">
          <div className="animate-float">
            <button onClick={() => navigateTo('materi', ['SMP'])} className={`group relative overflow-hidden w-40 h-40 md:w-48 md:h-48 rounded-[2rem] flex flex-col items-center justify-center shadow-lg transition-all hover:scale-105 hover:shadow-2xl bg-blue-600 dark:bg-blue-700 text-white hover:bg-blue-500 dark:hover:bg-blue-600`}>
              <div className="absolute -top-2 -right-2 text-7xl md:text-8xl font-serif opacity-10 group-hover:scale-110 transition-transform pointer-events-none">π</div>
              <div className="absolute -bottom-2 -left-2 text-7xl md:text-8xl font-serif opacity-10 group-hover:scale-110 transition-transform pointer-events-none">÷</div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-6xl md:text-7xl font-serif italic font-bold opacity-10 group-hover:scale-110 transition-transform pointer-events-none w-full text-center">a² + b²</div>
              <span className="text-4xl md:text-5xl font-black tracking-tight relative z-10">SMP</span>
            </button>
          </div>
          <div className="animate-float-delayed">
            <button onClick={() => navigateTo('materi', ['SMA'])} className={`group relative overflow-hidden w-40 h-40 md:w-48 md:h-48 rounded-[2rem] flex flex-col items-center justify-center shadow-lg transition-all hover:scale-105 hover:shadow-2xl bg-slate-500 dark:bg-slate-300 text-white dark:text-slate-900 hover:bg-slate-400 dark:hover:bg-slate-200`}>
              <div className="absolute -top-2 -left-2 text-7xl md:text-8xl font-serif opacity-10 group-hover:scale-110 transition-transform pointer-events-none">∑</div>
              <div className="absolute -bottom-2 -right-2 text-7xl md:text-8xl font-serif opacity-10 group-hover:scale-110 transition-transform pointer-events-none">∞</div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-7xl md:text-8xl font-serif italic font-bold opacity-10 group-hover:scale-110 transition-transform pointer-events-none w-full text-center">∫ <span className="text-4xl md:text-5xl font-medium">dx</span></div>
              <span className="text-4xl md:text-5xl font-black tracking-tight relative z-10">SMA</span>
            </button>
          </div>
        </div>
      </div>

      {/* Keunggulan Section */}
      <div className="space-y-10 py-4">
        <div className="text-center space-y-4">
          <h3 className="text-3xl md:text-4xl font-black tracking-tight">Kenapa harus Senimath?</h3>
          <p className="opacity-70 text-lg md:text-xl max-w-2xl mx-auto">
            Senimath bukan cuma web baca teori. Kita pakai metode <strong className="text-blue-600 dark:text-blue-400">deliberate learning</strong> biar lo bisa belajar dengan efisien.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className={`p-8 rounded-3xl ${themeClasses.cardBg} border ${themeClasses.border} shadow-sm hover:shadow-xl transition-all hover:-translate-y-1 group`}>
            <div className="w-14 h-14 rounded-2xl bg-blue-100 text-blue-600 dark:bg-blue-900/50 dark:text-blue-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Target size={28} />
            </div>
            <h4 className="text-xl font-bold mb-3">Tepat Sasaran</h4>
            <p className="opacity-80 leading-relaxed">Fokus nambal materi yang jadi kelemahan lo. Gausah buang waktu ngulang materi yang udah lo kuasain di luar kepala.</p>
          </div>
          <div className={`p-8 rounded-3xl ${themeClasses.cardBg} border ${themeClasses.border} shadow-sm hover:shadow-xl transition-all hover:-translate-y-1 group`}>
            <div className="w-14 h-14 rounded-2xl bg-amber-100 text-amber-600 dark:bg-amber-900/50 dark:text-amber-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <TrendingUp size={28} />
            </div>
            <h4 className="text-xl font-bold mb-3">5 Level Latihan</h4>
            <p className="opacity-80 leading-relaxed">Dari soal pilihan ganda pakai "Ide Menjawab", sampai tantangan esai murni buat ngetes seberapa jauh nalar lo jalan.</p>
          </div>
          <div className={`p-8 rounded-3xl ${themeClasses.cardBg} border ${themeClasses.border} shadow-sm hover:shadow-xl transition-all hover:-translate-y-1 group`}>
            <div className="w-14 h-14 rounded-2xl bg-emerald-100 text-emerald-600 dark:bg-emerald-900/50 dark:text-emerald-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Zap size={28} />
            </div>
            <h4 className="text-xl font-bold mb-3">Langsung Praktek</h4>
            <p className="opacity-80 leading-relaxed">Teori ringkas, sisanya eksekusi. Matematika itu soal kebiasaan ngerjain masalah, bukan sekadar dibaca doang.</p>
          </div>
        </div>
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
              <Book size={16} /> Info Les Private Matematika
            </button>
            <div className="flex items-center gap-4 border-t md:border-t-0 md:border-l border-slate-300 dark:border-slate-600 pt-4 md:pt-0 md:pl-6">
              <a href="https://instagram.com/rayhansamu" target="_blank" rel="noreferrer" className="hover:underline flex items-center gap-1.5 text-sm font-medium">
                <Instagram size={16} /> @rayhansamu
              </a>
              <a href="https://instagram.com/senimath" target="_blank" rel="noreferrer" className="hover:underline flex items-center gap-1.5 text-sm font-medium">
                <Instagram size={16} /> @senimath
              </a>
            </div>
          </div>
        </div>

        {/* Link Donasi Banner */}
        <div className="flex flex-col items-center justify-center gap-2 pt-2">
          <a href="https://saweria.co/senimath" target="_blank" rel="noreferrer" className={`w-full md:w-auto px-8 py-3.5 rounded-2xl text-center bg-[#ffb000] text-black hover:opacity-90 transition-transform hover:scale-105 shadow-sm font-bold text-lg`}>
            ☕ Donasi via Saweria
          </a>
          <p className="text-sm opacity-70 font-medium text-center">
            Untuk support penulis dalam pengembangan website Senimath
          </p>
        </div>
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
          Pada <button onClick={() => navigateTo('pengaturan')} className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-300 border border-blue-200 dark:border-blue-800 shadow-sm mx-1 text-sm cursor-pointer hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors"><Settings size={14} /> Pengaturan</button>, lo bisa mengubah tema website menjadi gelap/terang. Lo juga bisa mengubah besar kecilnya font biar mata nggak gampang lelah.
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
          <div key={idx} className={`p-6 md:p-8 rounded-3xl ${themeClasses.cardBg} border border-l-8 border-l-blue-500 shadow-sm`}>
            <h4 className="text-2xl font-black mb-6 uppercase tracking-wider text-blue-600 dark:text-blue-500">{item.type}</h4>

            <MockQuestionCard type={item.typeNumber} themeClasses={themeClasses} />

            <p className="mb-6 opacity-90 text-lg leading-relaxed" dangerouslySetInnerHTML={{ __html: item.desc }}></p>
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
      <div className={`mt-12 p-8 rounded-3xl bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30 border border-blue-300 dark:border-blue-700 text-center shadow-sm`}>
        <ShoppingBag size={40} className="mx-auto mb-4 text-indigo-600 dark:text-indigo-400" />
        <h3 className="text-2xl font-bold mb-3 text-indigo-900 dark:text-indigo-100">Merasa Masih Kurang Latihan?</h3>
        <p className="text-indigo-800 dark:text-indigo-200 mb-6 text-lg">Buat lo yang masih merasa kurang latihan soal, lo bisa kunjungi toko dan membeli paket 100 latihan soal dan jawaban pada materi yang sedang lo pelajari.</p>
        <button
          onClick={() => navigateTo('toko')}
          className={`px-8 py-3 rounded-xl font-bold bg-indigo-600 text-white hover:bg-indigo-700 shadow-md transition-colors flex items-center justify-center gap-2 mx-auto`}
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
        <div className="animate-float h-full">
          <button onClick={() => navigateTo('materi', ['SMP'])} className={`w-full h-full group relative overflow-hidden p-12 rounded-3xl shadow-lg transition-all hover:scale-105 hover:shadow-2xl bg-blue-600 dark:bg-blue-700 text-white hover:bg-blue-500 dark:hover:bg-blue-600 flex flex-col items-center justify-center text-center`}>
            <div className="absolute -top-4 -right-4 text-9xl font-serif opacity-10 group-hover:scale-110 transition-transform pointer-events-none">π</div>
            <div className="absolute -bottom-4 -left-4 text-9xl font-serif opacity-10 group-hover:scale-110 transition-transform pointer-events-none">÷</div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-8xl md:text-9xl font-serif italic font-bold opacity-10 group-hover:scale-110 transition-transform pointer-events-none w-full text-center">a² + b²</div>
            <h3 className="text-6xl font-extrabold tracking-tighter mb-2 relative z-10">SMP</h3>
            <p className="opacity-90 text-lg relative z-10">Mulai bangun pondasi logikamu di sini.</p>
          </button>
        </div>
        <div className="animate-float-delayed h-full">
          <button onClick={() => navigateTo('materi', ['SMA'])} className={`w-full h-full group relative overflow-hidden p-12 rounded-3xl shadow-lg transition-all hover:scale-105 hover:shadow-2xl bg-slate-500 dark:bg-slate-300 text-white dark:text-slate-900 hover:bg-slate-400 dark:hover:bg-slate-200 flex flex-col items-center justify-center text-center`}>
            <div className="absolute -top-4 -left-4 text-9xl font-serif opacity-10 group-hover:scale-110 transition-transform pointer-events-none">∑</div>
            <div className="absolute -bottom-4 -right-4 text-9xl font-serif opacity-10 group-hover:scale-110 transition-transform pointer-events-none">∞</div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-9xl font-serif italic font-bold opacity-10 group-hover:scale-110 transition-transform pointer-events-none w-full text-center">∫ <span className="text-5xl font-medium">dx</span></div>
            <h3 className="text-6xl font-extrabold tracking-tighter mb-2 relative z-10">SMA</h3>
            <p className="opacity-90 text-lg relative z-10">Bentuk simfoni pemikiran yang lebih kompleks.</p>
          </button>
        </div>
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

  const isSMA = jenjang === 'SMA';

  if (navPath.length === 1) {
    const data = MOCK_COURSES[jenjang] || {};

    // Logika Pengelompokan (Sectioning) berdasarkan Awalan "Kelas X" atau "Modul X"
    const groups = {};
    Object.keys(data).forEach(key => {
      const parts = key.split(' - ');
      const groupName = parts.length > 1 ? parts[0] : '';
      const itemTitle = parts.length > 1 ? parts.slice(1).join(' - ') : key;
      if (!groups[groupName]) {
        groups[groupName] = [];
      }
      groups[groupName].push({ key, title: itemTitle });
    });

    return (
      <div className="max-w-4xl mx-auto space-y-12 pb-12">
        <div className="text-center space-y-4 mb-8">
          <h2 className="text-4xl md:text-5xl font-black tracking-tight">Materi {jenjang}</h2>
          <p className="opacity-70 text-lg">Pilih materi yang mau lo taklukkan!</p>
        </div>

        {Object.entries(groups).map(([groupName, items], gIdx) => (
          <div key={gIdx} className="space-y-6">
            {groupName && (
              <div className="flex items-center gap-4">
                <div className={`px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wider ${isSMA ? 'bg-slate-200 text-slate-800 dark:bg-slate-800 dark:text-slate-300 border border-slate-300 dark:border-slate-700' : 'bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-400 border border-blue-200 dark:border-blue-800'}`}>
                  {groupName}
                </div>
                <div className={`flex-1 h-px bg-slate-200 dark:bg-slate-700`}></div>
              </div>
            )}
            <div className="grid md:grid-cols-2 gap-4">
              {items.map(item => (
                <button key={item.key} onClick={() => setNavPath([...navPath, item.key])} className={`w-full text-left p-6 rounded-2xl ${themeClasses.cardBg} border ${themeClasses.border} hover:shadow-md transition-all flex justify-between items-center group ${isSMA ? 'hover:border-slate-500 dark:hover:border-slate-400' : 'hover:border-blue-500'}`}>
                  <span className="text-lg font-bold pr-4">{item.title}</span>
                  <ChevronRight className={`opacity-30 group-hover:opacity-100 group-hover:translate-x-1 transition-all flex-shrink-0 ${isSMA ? 'text-slate-600 dark:text-slate-400' : 'text-blue-500'}`} />
                </button>
              ))}
            </div>
          </div>
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
          <button key={sb} onClick={() => setNavPath([...navPath, sb])} className={`w-full text-left p-6 rounded-2xl ${themeClasses.cardBg} border ${themeClasses.border} shadow-sm flex justify-between items-center group ${isSMA ? 'hover:border-slate-500 dark:hover:border-slate-400' : 'hover:border-blue-500'}`}>
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
          <button onClick={() => setNavPath([...navPath, 'Materi'])} className={`group relative p-8 rounded-3xl ${themeClasses.cardBg} border ${themeClasses.border} shadow-sm hover:shadow-md transition-all ${isSMA ? 'hover:border-slate-500 dark:hover:border-slate-400' : 'hover:border-blue-500'}`}>
            <BookOpen size={48} className={`mx-auto mb-4 opacity-80 transition-colors ${isSMA ? 'group-hover:text-slate-500 dark:group-hover:text-slate-300' : 'group-hover:text-blue-500'}`} />
            <h3 className="text-2xl font-bold">Materi</h3>
          </button>
          <button onClick={() => {
            setNavPath([...navPath, 'Latihan']);
            setCurrentQuestionIndex(0);
          }} className={`group relative p-8 rounded-3xl ${themeClasses.cardBg} border ${themeClasses.border} shadow-sm hover:shadow-md transition-all ${isSMA ? 'hover:border-slate-500 dark:hover:border-slate-400' : 'hover:border-blue-500'}`}>
            <CheckCircle size={48} className={`mx-auto mb-4 opacity-80 transition-colors ${isSMA ? 'group-hover:text-slate-500 dark:group-hover:text-slate-300' : 'group-hover:text-blue-500'}`} />
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
          }} className={`px-8 py-4 rounded-full font-bold text-lg shadow-lg transform transition-transform hover:scale-105 flex items-center justify-center gap-2 mx-auto ${isSMA ? 'bg-slate-600 text-white hover:bg-slate-500 dark:bg-slate-300 dark:text-slate-900 dark:hover:bg-slate-200' : themeClasses.primary}`}>
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
        {/* Header Control: Dropdown & Status */}
        <div className={`p-4 md:p-6 rounded-2xl ${themeClasses.cardBg} border ${themeClasses.border} shadow-sm flex flex-col md:flex-row justify-between items-center gap-4`}>
          <div className="flex items-center gap-3 w-full md:w-auto">
            <label className="font-bold opacity-70 uppercase tracking-wider text-sm flex-shrink-0">Pilih Tipe:</label>
            <div className="relative flex-1 md:w-48">
              <select
                value={currentType}
                onChange={handleTypeChange}
                className={`w-full appearance-none px-4 py-2.5 rounded-xl font-bold border ${themeClasses.border} bg-transparent focus:outline-none cursor-pointer ${isSMA ? 'focus:border-slate-500' : 'focus:border-blue-500'}`}
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
                jenjang={jenjang}
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
                    className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-bold transition-all ${currentQuestionIndex === questionsForCurrentType.length - 1 ? 'opacity-50 cursor-not-allowed bg-slate-100 dark:bg-slate-800 text-slate-400' : (isSMA ? 'bg-slate-600 text-white hover:bg-slate-500 dark:bg-slate-300 dark:text-slate-900 dark:hover:bg-slate-200' : themeClasses.primary)}`}
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

function QuestionCard({ question, themeClasses, jenjang }) {
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
  const isSMA = jenjang === 'SMA';

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
    if (isSelfCheck) {
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
                className={`flex items-center gap-3 p-4 rounded-xl border cursor-pointer transition-all ${selectedOptionIndex === idx
                    ? (isSMA ? 'border-slate-500 bg-slate-100 dark:bg-slate-800' : 'border-blue-500 bg-blue-50 dark:bg-blue-900/20')
                    : `border-slate-200 dark:border-slate-700 ${isSMA ? 'hover:border-slate-400' : 'hover:border-blue-300'}`
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
                <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${selectedOptionIndex === idx ? (isSMA ? 'border-slate-600 dark:border-slate-300' : 'border-blue-500') : 'border-slate-400'}`}>
                  {selectedOptionIndex === idx && <div className={`w-2.5 h-2.5 rounded-full ${isSMA ? 'bg-slate-600 dark:bg-slate-300' : 'bg-blue-500'}`}></div>}
                </div>
                <span className="text-lg">{opt}</span>
              </label>
            ))}
          </div>
        )}

        {isSelfCheck && (
          <div className="p-4 rounded-xl bg-slate-100 dark:bg-slate-700/50 inline-block font-mono text-lg border border-slate-200 dark:border-slate-600">
            Target Jawaban: <span className={`font-bold ${isSMA ? 'text-slate-700 dark:text-slate-300' : 'text-blue-600 dark:text-blue-400'}`}>{question.targetAnswer}</span>
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
              className={`flex-1 max-w-[200px] px-4 py-2 rounded-xl border ${themeClasses.border} bg-transparent focus:outline-none ${isSMA ? 'focus:border-slate-500' : 'focus:border-blue-500'} font-mono`}
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
              className={`px-6 py-2.5 rounded-xl font-bold transition-all ${isSMA ? 'bg-slate-600 text-white hover:bg-slate-500 dark:bg-slate-300 dark:text-slate-900 dark:hover:bg-slate-200' : themeClasses.primary} disabled:opacity-50 disabled:cursor-not-allowed`}
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
        <h2 className="text-3xl font-bold mb-6 border-b pb-2 flex items-center gap-2"><BookOpen /> Artikel Senimath</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {MOCK_ARTICLES.map(art => (
            <div
              key={art.id}
              onClick={() => navigateTo('artikel', [art.id])}
              className={`p-6 rounded-2xl ${themeClasses.cardBg} border ${themeClasses.border} hover:border-blue-500 transition-all cursor-pointer flex flex-col h-full hover:shadow-md transform hover:-translate-y-1`}
            >
              <h3 className="font-bold text-lg mb-2">{art.title}</h3>
              <p className="opacity-70 text-sm mb-4 flex-1">{art.snippet}</p>
              <span className={`text-sm font-medium ${themeClasses.primaryGhost} self-start`}>Baca selengkapnya &rarr;</span>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-6 border-b pb-2 flex items-center gap-2"><Book /> Info Les Private Matematika</h2>
        <div className="grid md:grid-cols-3 gap-6">

          <div className={`p-6 rounded-2xl ${themeClasses.cardBg} border border-blue-200 dark:border-blue-900 shadow-sm flex flex-col`}>
            <h3 className="font-black text-2xl mb-4 text-center">Private Online</h3>
            <ul className="space-y-3 mb-8 flex-1 opacity-90">
              <li className="flex items-start gap-2"><CheckCircle size={18} className="text-blue-500 flex-shrink-0 mt-0.5" /> Waktu fleksibel</li>
              <li className="flex items-start gap-2"><CheckCircle size={18} className="text-blue-500 flex-shrink-0 mt-0.5" /> Modul khusus PDF</li>
              <li className="flex items-start gap-2"><CheckCircle size={18} className="text-blue-500 flex-shrink-0 mt-0.5" /> Tanya PR kapan saja</li>
              <li className="flex items-start gap-2"><CheckCircle size={18} className="text-blue-500 flex-shrink-0 mt-0.5" /> Free akses ke 100 latihan soal dan pembahasan pada materi yang sedang dipelajari</li>
            </ul>
            <button className={`w-full py-3 rounded-xl font-bold ${themeClasses.primary}`}>Hubungi Sekarang</button>
          </div>

          <div className={`p-6 rounded-2xl ${themeClasses.cardBg} border border-blue-200 dark:border-blue-900 shadow-sm flex flex-col`}>
            <h3 className="font-black text-2xl mb-2 text-center">Private Offline</h3>
            <p className="text-center text-sm opacity-70 mb-4">(Khusus Depok)</p>
            <ul className="space-y-3 mb-8 flex-1 opacity-90">
              <li className="flex items-start gap-2"><CheckCircle size={18} className="text-blue-500 flex-shrink-0 mt-0.5" /> Guru datang ke rumah</li>
              <li className="flex items-start gap-2"><CheckCircle size={18} className="text-blue-500 flex-shrink-0 mt-0.5" /> Evaluasi tatap muka</li>
              <li className="flex items-start gap-2"><CheckCircle size={18} className="text-blue-500 flex-shrink-0 mt-0.5" /> Bonding lebih kuat</li>
              <li className="flex items-start gap-2"><CheckCircle size={18} className="text-blue-500 flex-shrink-0 mt-0.5" /> Free akses ke 100 latihan soal dan pembahasan pada materi yang sedang dipelajari</li>
            </ul>
            <button className={`w-full py-3 rounded-xl font-bold ${themeClasses.primary}`}>Hubungi Sekarang</button>
          </div>

          <div className={`p-6 rounded-2xl ${themeClasses.cardBg} border border-blue-200 dark:border-blue-900 shadow-sm flex flex-col`}>
            <h3 className="font-black text-2xl mb-2 text-center">Kelas Besar</h3>
            <p className="text-center text-sm opacity-70 mb-4">(Minimal 3 orang)</p>
            <ul className="space-y-3 mb-8 flex-1 opacity-90">
              <li className="flex items-start gap-2"><CheckCircle size={18} className="text-blue-500 flex-shrink-0 mt-0.5" /> Harga lebih terjangkau</li>
              <li className="flex items-start gap-2"><CheckCircle size={18} className="text-blue-500 flex-shrink-0 mt-0.5" /> Belajar bareng circle</li>
              <li className="flex items-start gap-2"><CheckCircle size={18} className="text-blue-500 flex-shrink-0 mt-0.5" /> Diskusi interaktif</li>
              <li className="flex items-start gap-2"><CheckCircle size={18} className="text-blue-500 flex-shrink-0 mt-0.5" /> Free akses ke 100 latihan soal dan pembahasan pada materi yang sedang dipelajari</li>
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

  const renderSection = (title, products, colorClass, bgClass, borderClass, badgeClass) => (
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
                <span className={`px-3 py-1 rounded-full text-xs font-bold ${badgeClass}`}>{prod.category}</span>
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
                      Gass Latihan <ChevronRight size={18} />
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

      {renderSection("Materi SMP", smpProducts, "text-blue-600 dark:text-blue-400", "bg-blue-50 dark:bg-blue-900/20", "border-blue-200 dark:border-blue-800", "bg-blue-600 text-white dark:bg-blue-500")}
      {renderSection("Materi SMA", smaProducts, "text-slate-600 dark:text-slate-300", "bg-slate-100 dark:bg-slate-800/40", "border-slate-300 dark:border-slate-600", "bg-slate-500 dark:bg-slate-300 text-white dark:text-slate-900")}

    </div>
  );
}

function PagePengaturan({ theme, toggleTheme, fontSize, increaseFont, decreaseFont, themeClasses }) {
  return (
    <div className="max-w-2xl mx-auto space-y-8">
      <h2 className="text-3xl font-bold flex items-center gap-2 border-b pb-4"><Settings /> Pengaturan</h2>

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
        <h2 className="text-3xl font-bold flex items-center justify-center gap-2"><Info /> Tentang Pengembang</h2>
      </div>

      <div className={`p-8 md:p-12 rounded-3xl ${themeClasses.cardBg} border ${themeClasses.border} relative overflow-hidden`}>
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500 opacity-5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>

        <div className="flex flex-col md:flex-row gap-8 items-center md:items-start relative z-10">
          <div className="w-32 h-32 md:w-48 md:h-48 rounded-full bg-slate-200 dark:bg-slate-700 flex-shrink-0 flex items-center justify-center overflow-hidden border-4 border-blue-500">
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
                <Instagram size={18} /> @rayhansamu
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
        <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-bold mb-4 text-sm uppercase tracking-wider">
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