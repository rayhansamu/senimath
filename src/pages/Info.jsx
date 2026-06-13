import React from 'react';
import { BookOpen, Book, CheckCircle } from 'lucide-react';
import { MOCK_ARTICLES } from '../data/articles';

export default function Info({ themeClasses, navigateTo }) {
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
