import React from 'react';
import { User, Book, Instagram } from 'lucide-react';

export default function Home({ navigateTo, themeClasses }) {
  return (
    <div className="max-w-4xl mx-auto space-y-12 pb-12">
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
          <span className="px-4 py-2 rounded-full border border-slate-300 dark:border-slate-600 text-sm font-semibold">Math is Language</span>
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

         <a href="https://saweria.co/senimath" target="_blank" rel="noreferrer" className={`block p-4 rounded-xl text-center bg-[#ffb000] text-black hover:opacity-90 transition-opacity font-medium shadow-sm`}>
            ☕ Donasi via Saweria untuk support penulis dalam pengembangan website Senimath
         </a>
      </footer>
    </div>
  );
}
