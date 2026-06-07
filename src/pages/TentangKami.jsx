import React from 'react';
import { User, Info, Instagram } from 'lucide-react';

export default function TentangKami({ themeClasses }) {
  return (
    <div className="max-w-4xl mx-auto space-y-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold flex items-center justify-center gap-2"><Info/> Tentang Pengembang</h2>
      </div>

      <div className={`p-8 md:p-12 rounded-3xl ${themeClasses.cardBg} border ${themeClasses.border} relative overflow-hidden`}>
        <div className="absolute top-0 right-0 w-64 h-64 bg-lime-500 opacity-5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
        
        <div className="flex flex-col md:flex-row gap-8 items-center md:items-start relative z-10">
          <div className="w-32 h-32 md:w-48 md:h-48 rounded-full bg-slate-200 dark:bg-slate-700 flex-shrink-0 flex items-center justify-center overflow-hidden border-4 border-lime-500">
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
                 <Instagram size={18}/> @rayhansamu
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
