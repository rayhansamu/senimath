import React from 'react';
import { Settings } from 'lucide-react';

export default function Pengaturan({ theme, toggleTheme, fontSize, increaseFont, decreaseFont, themeClasses }) {
  return (
    <div className="max-w-2xl mx-auto space-y-8">
      <h2 className="text-3xl font-bold flex items-center gap-2 border-b pb-4"><Settings/> Pengaturan</h2>
      
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
