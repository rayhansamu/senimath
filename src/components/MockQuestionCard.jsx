import React from 'react';
import { Lightbulb, Lock } from 'lucide-react';

export default function MockQuestionCard({ type, themeClasses }) {
  const hasIdeaBtn = type === 1 || type === 2;
  const isSelfCheck = type === 2 || type === 4;
  const isMCQ = type === 1 || type === 3;
  const isPureEssay = type === 5;

  return (
    <div className={`p-6 md:p-8 rounded-3xl ${themeClasses.cardBg} border ${themeClasses.border} shadow-sm relative overflow-hidden mb-6 opacity-90`}>
      <div className="absolute -top-6 -right-6 text-8xl font-black opacity-5 pointer-events-none">
        {type}
      </div>

      <div className="flex justify-between items-start mb-6">
        <h3 className="text-xl font-bold relative z-10 flex-1 pr-4">soal ini blablabla......</h3>
        {hasIdeaBtn && (
          <div className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-medium bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200 cursor-not-allowed`}>
            <Lightbulb size={16} className="fill-current" /> Ide Menjawab
          </div>
        )}
      </div>

      <div className="space-y-4 mb-8">
        {isMCQ && (
          <div className="space-y-3">
            {['opsi 1', 'opsi 2', 'opsi 3'].map((opt, idx) => (
              <div key={idx} className={`flex items-center gap-3 p-4 rounded-xl border border-slate-200 dark:border-slate-700 cursor-not-allowed opacity-80`}>
                <div className="w-5 h-5 rounded-full border-2 border-slate-400"></div>
                <span className="text-lg">{opt}</span>
              </div>
            ))}
          </div>
        )}

        {isSelfCheck && (
          <div className="flex items-center gap-4">
            <span className="font-medium">Jawaban:</span>
            <div className="px-6 py-2 rounded-xl border border-slate-300 dark:border-slate-600 font-mono font-bold text-lg">20</div>
          </div>
        )}

        {isPureEssay && (
          <div className="flex items-center gap-4">
            <span className="font-medium">Jawaban:</span>
            <div className="px-6 py-2 w-32 rounded-xl border border-slate-300 dark:border-slate-600 font-mono text-slate-400 flex items-center">
              <span className="opacity-50">........</span>
            </div>
          </div>
        )}
      </div>

      <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-slate-200 dark:border-slate-700">
        <div className="flex gap-4 items-center">
          <button className={`px-6 py-2.5 rounded-xl font-bold transition-all ${themeClasses.primary} opacity-80 cursor-not-allowed`}>
            {isSelfCheck ? 'Lihat Pembahasan' : 'Simpan Jawaban'}
          </button>

          {!isSelfCheck && (
            <button className={`px-6 py-2.5 rounded-xl font-bold flex items-center gap-2 border ${themeClasses.border} opacity-60 cursor-not-allowed`}>
              <Lock size={16} /> Pembahasan
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
