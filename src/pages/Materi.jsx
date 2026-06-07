import React, { useState } from 'react';
import { ChevronRight, ChevronLeft, BookOpen, CheckCircle } from 'lucide-react';
import { MOCK_COURSES } from '../data/courses';
import QuestionCard from '../components/QuestionCard';

export default function Materi({ navPath, setNavPath, themeClasses }) {
  const [currentType, setCurrentType] = useState(1);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const jenjang = navPath[0];
  const bab = navPath[1];
  const subBab = navPath[2];
  const mode = navPath[3];

  if (navPath.length === 1) {
    const data = MOCK_COURSES[jenjang] || {};
    return (
      <div className="max-w-3xl mx-auto space-y-6">
        <h2 className="text-3xl font-bold mb-6">Materi {jenjang}</h2>
        {Object.keys(data).map(b => (
          <button key={b} onClick={() => setNavPath([...navPath, b])} className={`w-full text-left p-6 rounded-2xl ${themeClasses.cardBg} border ${themeClasses.border} hover:border-lime-500 shadow-sm flex justify-between items-center group`}>
            <span className="text-xl font-bold">{b}</span>
            <ChevronRight className="opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
          </button>
        ))}
      </div>
    );
  }

  if (navPath.length === 2) {
    const data = MOCK_COURSES[jenjang][bab] || {};
    return (
      <div className="max-w-3xl mx-auto space-y-6">
        <h2 className="text-3xl font-bold mb-6">{bab}</h2>
        {Object.keys(data).map(sb => (
          <button key={sb} onClick={() => setNavPath([...navPath, sb])} className={`w-full text-left p-6 rounded-2xl ${themeClasses.cardBg} border ${themeClasses.border} hover:border-lime-500 shadow-sm flex justify-between items-center group`}>
            <span className="text-xl font-medium">{sb}</span>
            <ChevronRight className="opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
          </button>
        ))}
      </div>
    );
  }

  if (navPath.length === 3) {
    return (
      <div className="max-w-3xl mx-auto text-center space-y-12 mt-12">
        <h2 className="text-4xl font-bold mb-2">{subBab}</h2>
        <p className="opacity-70 text-lg mb-8">Pilih mode belajarmu hari ini</p>
        <div className="grid md:grid-cols-2 gap-8">
          <button onClick={() => setNavPath([...navPath, 'Materi'])} className={`group relative p-8 rounded-3xl ${themeClasses.cardBg} border ${themeClasses.border} hover:border-lime-500 shadow-sm hover:shadow-md transition-all`}>
            <BookOpen size={48} className="mx-auto mb-4 opacity-80 group-hover:text-lime-500 transition-colors" />
            <h3 className="text-2xl font-bold">Materi</h3>
          </button>
          <button onClick={() => {
            setNavPath([...navPath, 'Latihan']);
            setCurrentQuestionIndex(0);
          }} className={`group relative p-8 rounded-3xl ${themeClasses.cardBg} border ${themeClasses.border} hover:border-lime-500 shadow-sm hover:shadow-md transition-all`}>
            <CheckCircle size={48} className="mx-auto mb-4 opacity-80 group-hover:text-lime-500 transition-colors" />
            <h3 className="text-2xl font-bold">Latihan Soal</h3>
          </button>
        </div>
      </div>
    );
  }

  const contentData = MOCK_COURSES[jenjang][bab][subBab];

  if (mode === 'Materi') {
    return (
      <div className="max-w-3xl mx-auto space-y-8">
        <h2 className="text-3xl font-bold border-b pb-4">{subBab} - Materi</h2>
        <div className={`p-6 md:p-8 rounded-2xl ${themeClasses.cardBg} border ${themeClasses.border} shadow-sm leading-relaxed whitespace-pre-wrap text-lg`}>
          {contentData.materi}
        </div>
        <div className="text-center pt-8">
          <p className="mb-4 opacity-80">Udah paham teorinya? Waktunya eksekusi!</p>
          <button onClick={() => {
            setNavPath([...navPath.slice(0, 3), 'Latihan']);
            setCurrentQuestionIndex(0);
          }} className={`px-8 py-4 rounded-full font-bold text-lg shadow-lg transform transition-transform hover:scale-105 flex items-center justify-center gap-2 mx-auto ${themeClasses.primary}`}>
            Gas Latihan Soal <ChevronRight size={20} />
          </button>
        </div>
      </div>
    );
  }

  if (mode === 'Latihan') {
    const questions = contentData.latihan || [];
    const questionsForCurrentType = questions.filter(q => q.type === currentType);
    const currentQuestion = questionsForCurrentType[currentQuestionIndex];

    const handleTypeChange = (e) => {
      setCurrentType(Number(e.target.value));
      setCurrentQuestionIndex(0);
    };

    const handlePrev = () => {
      if (currentQuestionIndex > 0) setCurrentQuestionIndex(prev => prev - 1);
    };

    const handleNext = () => {
      if (currentQuestionIndex < questionsForCurrentType.length - 1) setCurrentQuestionIndex(prev => prev + 1);
    };

    return (
      <div className="max-w-3xl mx-auto space-y-6">
        <div className={`p-4 md:p-6 rounded-2xl ${themeClasses.cardBg} border ${themeClasses.border} shadow-sm flex flex-col md:flex-row justify-between items-center gap-4`}>
          <div className="flex items-center gap-3 w-full md:w-auto">
            <label className="font-bold opacity-70 uppercase tracking-wider text-sm flex-shrink-0">Pilih Tipe:</label>
            <div className="relative flex-1 md:w-48">
              <select 
                value={currentType} 
                onChange={handleTypeChange}
                className={`w-full appearance-none px-4 py-2.5 rounded-xl font-bold border ${themeClasses.border} bg-transparent focus:outline-none focus:border-lime-500 cursor-pointer`}
              >
                {[1, 2, 3, 4, 5].map(t => (
                  <option key={t} value={t} className={themeClasses.text === 'text-slate-200' ? 'text-black' : ''}>
                    Tipe {t}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 opacity-50">
                <ChevronRight className="rotate-90" size={16} />
              </div>
            </div>
          </div>
        
          <div className="font-bold bg-slate-100 dark:bg-slate-800 px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-700">
            Soal {questionsForCurrentType.length > 0 ? currentQuestionIndex + 1 : 0} dari {questionsForCurrentType.length}
          </div>
        </div>

        <div className="mt-8">
          {currentQuestion ? (
            <div className="space-y-6">
              <QuestionCard 
                key={currentQuestion.id} // force remount on new question
                question={currentQuestion} 
                themeClasses={themeClasses} 
              />
              
              {questionsForCurrentType.length > 1 && (
                <div className="flex justify-between gap-4 pt-4">
                  <button 
                    onClick={handlePrev}
                    disabled={currentQuestionIndex === 0}
                    className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-bold transition-all ${currentQuestionIndex === 0 ? 'opacity-50 cursor-not-allowed bg-slate-100 dark:bg-slate-800 text-slate-400' : 'bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600'}`}
                  >
                    <ChevronLeft size={20} /> Sebelumnya
                  </button>
                  <button 
                    onClick={handleNext}
                    disabled={currentQuestionIndex === questionsForCurrentType.length - 1}
                    className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-bold transition-all ${currentQuestionIndex === questionsForCurrentType.length - 1 ? 'opacity-50 cursor-not-allowed bg-slate-100 dark:bg-slate-800 text-slate-400' : themeClasses.primary}`}
                  >
                    Selanjutnya <ChevronRight size={20} />
                  </button>
                </div>
              )}
            </div>
          ) : (
            <div className={`p-12 text-center rounded-3xl ${themeClasses.cardBg} border ${themeClasses.border} opacity-70 border-dashed`}>
              <CheckCircle size={48} className="mx-auto mb-4 opacity-20" />
              <p className="font-medium text-lg">Soal untuk tipe ini belum tersedia.</p>
              <p className="text-sm mt-2">Coba tipe latihan yang lain.</p>
            </div>
          )}
        </div>
      </div>
    );
  }

  return null;
}
