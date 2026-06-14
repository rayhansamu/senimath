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

      <section className="space-y-8 border-t pt-8 dark:border-slate-800">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent flex items-center justify-center gap-2">
            🚀 Kuasai Matematika Lebih Mudah! Siap Naikkan Nilai Rapor & Ulangan Sekolah?
          </h2>
          <p className="text-base sm:text-lg opacity-85 leading-relaxed">
            Pilih metode belajar yang paling pas buat kamu. Mulai dari persiapan ulangan harian hingga ujian sekolah, kami bantu bedah materinya dari dasar sampai kamu benar-benar paham konsepnya!
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">

          {/* KARTU 1: PRIVATE ONLINE */}
          <div className={`p-6 rounded-2xl ${themeClasses.cardBg} border border-blue-200 dark:border-blue-900/60 shadow-sm hover:shadow-md transition-all flex flex-col`}>
            <div className="text-center mb-6 border-b pb-4 border-blue-100 dark:border-blue-950">
              <h3 className="font-black text-2xl text-blue-600 dark:text-blue-400">Private Online</h3>
              <p className="text-xs sm:text-sm font-medium opacity-75 mt-2">Praktis, Efektif, Belajar Intensif dari Mana Saja</p>
            </div>
            <ul className="space-y-4 mb-8 flex-1 opacity-90 text-sm leading-relaxed">
              <li className="flex items-start gap-2">
                <span className="flex-shrink-0 mt-0.5">⏱️</span>
                <span><strong>Waktu Super Fleksibel:</strong> Bebas atur jadwal belajar di sela padatnya aktivitas sekolahmu tanpa perlu buang waktu di jalan.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="flex-shrink-0 mt-0.5">🎯</span>
                <span><strong>Fokus Materi Sekolah:</strong> Pembelajaran disesuaikan persis dengan bab, tugas, dan kurikulum yang sedang kamu pelajari di sekolahmu saat ini.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="flex-shrink-0 mt-0.5">🧠</span>
                <span><strong>Metode Paham Konsep:</strong> Bukan hafalan rumus mati! Kami bongkar logika dasarnya agar kamu bisa jawab variasi soal ulangan sesulit apa pun.</span>
              </li>
              <li className="flex items-start gap-2 p-3 rounded-xl bg-blue-50 dark:bg-blue-950/40 border border-blue-100 dark:border-blue-900/40 mt-2">
                <span className="flex-shrink-0 mt-0.5">🎁</span>
                <span><strong>BONUS UTAMA: Free Konsultasi PR Kapan Saja!</strong> Ketemu soal susah saat bikin tugas malam-malam? Bebas tanya tutor via chat tanpa perlu nunggu jadwal les.</span>
              </li>
            </ul>
            <button className={`w-full py-3 rounded-xl font-bold ${themeClasses.primary} hover:opacity-90 transition-opacity`}>
              Amankan Slot Privat Online Sekarang
            </button>
          </div>

          {/* KARTU 2: PRIVATE OFFLINE */}
          <div className={`p-6 rounded-2xl ${themeClasses.cardBg} border border-indigo-200 dark:border-indigo-900/60 shadow-sm hover:shadow-md transition-all flex flex-col`}>
            <div className="text-center mb-6 border-b pb-4 border-indigo-100 dark:border-indigo-950">
              <h3 className="font-black text-2xl text-indigo-600 dark:text-indigo-400">Private Offline</h3>
              <p className="text-xs sm:text-sm font-semibold opacity-70 mt-1">(Khusus Area Depok)</p>
              <p className="text-xs sm:text-sm font-medium opacity-75 mt-1">Pendampingan Langsung, Fokus Penuh Tanpa Distraksi</p>
            </div>
            <ul className="space-y-4 mb-8 flex-1 opacity-90 text-sm leading-relaxed">
              <li className="flex items-start gap-2">
                <span className="flex-shrink-0 mt-0.5">🏠</span>
                <span><strong>Tutor Terbaik Datang ke Rumah:</strong> Orang tua tidak perlu repot antar-jemput. Biarkan pengajar kami yang hadir langsung di meja belajarmu.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="flex-shrink-0 mt-0.5">🔍</span>
                <span><strong>Evaluasi & Koreksi Real-Time:</strong> Tutor mendampingi coretan rumusmu baris demi baris, jadi salah perhitungan saat latihan soal ulangan bisa langsung dibenahi.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="flex-shrink-0 mt-0.5">📵</span>
                <span><strong>Bebas Distraksi Gawai:</strong> Suasana belajar tatap muka yang interaktif, bikin kamu jauh lebih fokus memahami materi sekolah tanpa godaan main HP.</span>
              </li>
              <li className="flex items-start gap-2 p-3 rounded-xl bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-100 dark:border-indigo-900/40 mt-2">
                <span className="flex-shrink-0 mt-0.5">🎁</span>
                <span><strong>BONUS UTAMA: Free Konsultasi PR Kapan Saja!</strong> Akses bebas tanya tugas atau persiapan ulangan via chat tetap berlaku setiap hari di luar jam pertemuan rumah.</span>
              </li>
            </ul>
            <button className={`w-full py-3 rounded-xl font-bold ${themeClasses.primary} hover:opacity-90 transition-opacity`}>
              Panggil Guru ke Rumah Sekarang
            </button>
          </div>

          {/* KARTU 3: KELAS BESAR */}
          <div className={`p-6 rounded-2xl ${themeClasses.cardBg} border border-purple-200 dark:border-purple-900/60 shadow-sm hover:shadow-md transition-all flex flex-col`}>
            <div className="text-center mb-6 border-b pb-4 border-purple-100 dark:border-purple-950">
              <h3 className="font-black text-2xl text-purple-600 dark:text-purple-400">Kelas Besar</h3>
              <p className="text-xs sm:text-sm font-semibold opacity-70 mt-1">(Minimal 3 Orang)</p>
              <p className="text-xs sm:text-sm font-medium opacity-75 mt-1">Belajar Seru Bareng Circle, Investasi Jauh Lebih Hemat!</p>
            </div>
            <ul className="space-y-4 mb-8 flex-1 opacity-90 text-sm leading-relaxed">
              <li className="flex items-start gap-2">
                <span className="flex-shrink-0 mt-0.5">💰</span>
                <span><strong>Biaya Jauh Lebih Terjangkau:</strong> Dapatkan bimbingan matematika kualitas premium dengan harga kelompok yang ramah di kantong orang tua.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="flex-shrink-0 mt-0.5">👥</span>
                <span><strong>Belajar Bareng Circle Terdekat:</strong> Ajak sahabat atau teman sekelasmu! Belajar bareng bikin persiapan ulangan harian jadi lebih seru dan tidak membosankan.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="flex-shrink-0 mt-0.5">💬</span>
                <span><strong>Diskusi Kelompok Interaktif:</strong> Hidupkan suasana belajar dengan saling tukar ide dan bedah trik cepat memecahkan soal ujian bersama teman dan tutor.</span>
              </li>
              <li className="flex items-start gap-2 p-3 rounded-xl bg-purple-50 dark:bg-purple-950/40 border border-purple-100 dark:border-purple-900/40 mt-2">
                <span className="flex-shrink-0 mt-0.5">🎁</span>
                <span><strong>BONUS UTAMA: Grup Konsultasi PR Bersama!</strong> Dapatkan grup chat khusus bareng tutor untuk bantu bedah PR sekolah dan tugas kelompokmu agar nilai tugas selalu maksimal.</span>
              </li>
            </ul>
            <button className={`w-full py-3 rounded-xl font-bold ${themeClasses.primary} hover:opacity-90 transition-opacity`}>
              Daftar Bareng Temanmu Sekarang
            </button>
          </div>

        </div>
      </section>
    </div>
  );
}
