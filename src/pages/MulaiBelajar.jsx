import React from 'react';

export default function MulaiBelajar({ navigateTo, themeClasses }) {
  return (
    <div className="max-w-4xl mx-auto text-center space-y-12 mt-12">
      <h2 className="text-4xl font-bold mb-8">Pilih Jenjang Penaklukanmu</h2>
      <div className="grid md:grid-cols-2 gap-8">
        <button onClick={() => navigateTo('materi', ['SMP'])} className={`group relative p-12 rounded-3xl ${themeClasses.cardBg} border ${themeClasses.border} hover:border-lime-500 transition-all shadow-md hover:shadow-xl`}>
          <div className="absolute inset-0 bg-lime-500 opacity-0 group-hover:opacity-5 transition-opacity rounded-3xl"></div>
          <h3 className="text-5xl font-extrabold tracking-tighter mb-4">SMP</h3>
          <p className="opacity-70 text-lg">Mulai bangun pondasi logikamu di sini.</p>
        </button>
        <button onClick={() => navigateTo('materi', ['SMA'])} className={`group relative p-12 rounded-3xl ${themeClasses.cardBg} border ${themeClasses.border} hover:border-lime-500 transition-all shadow-md hover:shadow-xl`}>
          <div className="absolute inset-0 bg-lime-500 opacity-0 group-hover:opacity-5 transition-opacity rounded-3xl"></div>
          <h3 className="text-5xl font-extrabold tracking-tighter mb-4">SMA</h3>
          <p className="opacity-70 text-lg">Bentuk simfoni pemikiran yang lebih kompleks.</p>
        </button>
      </div>
    </div>
  );
}
