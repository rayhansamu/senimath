import React from 'react';

export default function MulaiBelajar({ navigateTo, themeClasses }) {
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
