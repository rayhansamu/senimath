import React from 'react';
import { BookOpen, CheckCircle } from 'lucide-react';
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

      <section className="space-y-12 border-t pt-8 dark:border-slate-800">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-50 dark:bg-slate-800 text-blue-600 dark:text-blue-400 rounded-full text-xl mb-1">
            🚀
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-800 dark:text-white leading-tight">
            Kuasai Matematika Lebih Mudah!<br />
            <span className="text-blue-600 dark:text-blue-400">
              Siap Naikkan Nilai Rapor & Ulangan Sekolah?
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Pilih metode belajar yang paling pas buat kamu. Mulai dari persiapan ulangan harian hingga ujian sekolah, kami bantu bedah materinya dari dasar sampai kamu benar-benar paham konsepnya!
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 items-stretch pt-4">

          {/* KARTU 1: PRIVATE ONLINE */}
          <div className={`p-6 rounded-3xl ${themeClasses.cardBg} border border-slate-200 dark:border-slate-700 border-t-4 border-t-slate-300 dark:border-t-slate-700 shadow-md hover:shadow-xl hover:-translate-y-1 transform transition-all duration-300 flex flex-col relative overflow-hidden`}>
            <div className="absolute top-0 right-0 bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 text-[10px] sm:text-xs px-3 py-1 rounded-bl-xl font-bold uppercase tracking-wider border-l border-b border-slate-200 dark:border-slate-700">
              Online
            </div>
            <div className="mb-6 mt-2">
              <h3 className="font-black text-2xl text-slate-800 dark:text-white">Private Online</h3>
              <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 mt-1">Praktis, Efektif, Belajar Intensif dari Mana Saja</p>
            </div>
            <ul className="space-y-4 mb-8 flex-1 text-slate-700 dark:text-slate-200">
              <li className="flex items-center gap-3 text-sm sm:text-base font-medium">
                <CheckCircle size={18} className="text-blue-500 dark:text-blue-400 flex-shrink-0" />
                <span>Waktu Super Fleksibel</span>
              </li>
              <li className="flex items-center gap-3 text-sm sm:text-base font-medium">
                <CheckCircle size={18} className="text-blue-500 dark:text-blue-400 flex-shrink-0" />
                <span>Fokus Materi Sekolah</span>
              </li>
              <li className="flex items-center gap-3 text-sm sm:text-base font-medium">
                <CheckCircle size={18} className="text-blue-500 dark:text-blue-400 flex-shrink-0" />
                <span>Metode Paham Konsep</span>
              </li>
              <li className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 flex items-start gap-2.5 mt-4 text-xs sm:text-sm">
                <span className="text-base flex-shrink-0 mt-0.5">🎁</span>
                <div>
                  <strong className="text-slate-800 dark:text-white block mb-0.5 font-bold">BONUS UTAMA</strong>
                  <span className="opacity-90">Free Konsultasi PR Kapan Saja!</span>
                </div>
              </li>
            </ul>
            <button className="w-full py-3 rounded-xl font-extrabold text-blue-600 hover:text-white bg-transparent hover:bg-blue-600 border border-blue-600 dark:text-blue-400 dark:hover:text-white dark:border-blue-400 dark:hover:bg-blue-600 transition-all duration-200 text-sm">
              Amankan Slot Privat Online Sekarang
            </button>
          </div>

          {/* KARTU 2: PRIVATE OFFLINE */}
          <div className={`p-6 rounded-3xl ${themeClasses.cardBg} border border-slate-200 dark:border-slate-700 border-t-4 border-t-slate-300 dark:border-t-slate-700 shadow-md hover:shadow-xl hover:-translate-y-1 transform transition-all duration-300 flex flex-col relative overflow-hidden`}>
            <div className="absolute top-0 right-0 bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 text-[10px] sm:text-xs px-3 py-1 rounded-bl-xl font-bold uppercase tracking-wider border-l border-b border-slate-200 dark:border-slate-700">
              Offline
            </div>
            <div className="mb-6 mt-2">
              <h3 className="font-black text-2xl text-slate-800 dark:text-white">Private Offline</h3>
              <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 mt-0.5">(Khusus Area Depok)</p>
              <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 mt-1">Pendampingan Langsung, Fokus Penuh Tanpa Distraksi</p>
            </div>
            <ul className="space-y-4 mb-8 flex-1 text-slate-700 dark:text-slate-200">
              <li className="flex items-center gap-3 text-sm sm:text-base font-medium">
                <CheckCircle size={18} className="text-teal-500 dark:text-teal-400 flex-shrink-0" />
                <span>Tutor Datang ke Rumah</span>
              </li>
              <li className="flex items-center gap-3 text-sm sm:text-base font-medium">
                <CheckCircle size={18} className="text-teal-500 dark:text-teal-400 flex-shrink-0" />
                <span>Evaluasi & Koreksi Real-Time</span>
              </li>
              <li className="flex items-center gap-3 text-sm sm:text-base font-medium">
                <CheckCircle size={18} className="text-teal-500 dark:text-teal-400 flex-shrink-0" />
                <span>Bebas Distraksi Gawai</span>
              </li>
              <li className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 flex items-start gap-2.5 mt-4 text-xs sm:text-sm">
                <span className="text-base flex-shrink-0 mt-0.5">🎁</span>
                <div>
                  <strong className="text-slate-800 dark:text-white block mb-0.5 font-bold">BONUS UTAMA</strong>
                  <span className="opacity-90">Free Konsultasi PR Kapan Saja!</span>
                </div>
              </li>
            </ul>
            <button className="w-full py-3 rounded-xl font-extrabold text-teal-600 hover:text-white bg-transparent hover:bg-teal-600 border border-teal-600 dark:text-teal-400 dark:hover:text-white dark:border-teal-400 dark:hover:bg-teal-600 transition-all duration-200 text-sm">
              Panggil Guru ke Rumah Sekarang
            </button>
          </div>

          {/* KARTU 3: KELAS BESAR */}
          <div className={`p-6 rounded-3xl ${themeClasses.cardBg} border border-indigo-200 dark:border-indigo-800/80 border-t-4 border-t-indigo-600 dark:border-t-indigo-400 shadow-xl shadow-indigo-600/10 dark:shadow-indigo-500/5 hover:-translate-y-1 transform scale-100 md:scale-105 z-10 transition-all duration-300 flex flex-col relative overflow-hidden group`}>
            <div className="absolute top-0 right-0 bg-amber-500 text-white text-[10px] sm:text-xs px-2.5 py-1 rounded-bl-xl font-black uppercase tracking-wider shadow-sm">
              BEST VALUE
            </div>
            <div className="mb-6 mt-2">
              <h3 className="font-black text-2xl text-slate-800 dark:text-white">Kelas Besar</h3>
              <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 mt-0.5">(Grup Online - Minimal 3 Orang)</p>
              <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 mt-1">Belajar Seru Bareng Circle, Investasi Jauh Lebih Hemat!</p>
            </div>
            <ul className="space-y-4 mb-8 flex-1 text-slate-700 dark:text-slate-200">
              <li className="flex items-center gap-3 text-sm sm:text-base font-medium">
                <CheckCircle size={18} className="text-indigo-500 dark:text-indigo-400 flex-shrink-0" />
                <span>Biaya Jauh Lebih Terjangkau</span>
              </li>
              <li className="flex items-center gap-3 text-sm sm:text-base font-medium">
                <CheckCircle size={18} className="text-indigo-500 dark:text-indigo-400 flex-shrink-0" />
                <span>Belajar Bareng Circle Terdekat</span>
              </li>
              <li className="flex items-center gap-3 text-sm sm:text-base font-medium">
                <CheckCircle size={18} className="text-indigo-500 dark:text-indigo-400 flex-shrink-0" />
                <span>Diskusi Kelompok Interaktif</span>
              </li>
              <li className="p-3 rounded-xl bg-amber-50/60 dark:bg-amber-950/20 border border-dashed border-amber-300 dark:border-amber-800/60 flex items-start gap-2.5 mt-4 text-xs sm:text-sm">
                <span className="text-base flex-shrink-0 mt-0.5">🎁</span>
                <div>
                  <strong className="text-amber-800 dark:text-amber-400 block mb-0.5 font-bold">BONUS UTAMA</strong>
                  <span className="opacity-90 text-amber-950 dark:text-amber-200">Grup Konsultasi PR Bersama!</span>
                </div>
              </li>
            </ul>
            <button className="w-full py-3 rounded-xl font-extrabold text-white bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 shadow-md shadow-indigo-600/20 active:scale-[0.98] transform transition-all duration-200 text-sm">
              Daftar Bareng Temanmu Sekarang
            </button>
          </div>

        </div>
      </section>
    </div>
  );
}
