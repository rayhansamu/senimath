import React from 'react';
import { Settings, ShoppingBag } from 'lucide-react';
import MockQuestionCard from '../components/MockQuestionCard';

export default function Panduan({ navigateTo, themeClasses }) {
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
