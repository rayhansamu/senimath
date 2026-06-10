export const MOCK_COURSES = {
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
            question: "Jika suatu bilangan berakhiran dengan angka 6 atau 8, maka bilangan tersebut masuk ke dalam kelompok bilangan ...",
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
