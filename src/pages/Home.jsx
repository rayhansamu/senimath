import React from 'react';
import { User, BookOpen, Book, Instagram, Target, TrendingUp, Zap } from 'lucide-react';

export default function Home({ navigateTo, themeClasses }) {
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
