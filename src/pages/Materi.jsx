import React, { useState } from 'react';
import { ChevronRight, ChevronLeft, BookOpen, CheckCircle } from 'lucide-react';
import { MOCK_COURSES } from '../data/courses';
import QuestionCard from '../components/QuestionCard';

export default function Materi({ navPath, setNavPath, themeClasses }) {
  const [currentType, setCurrentType] = useState(1);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answersState, setAnswersState] = useState({});

  const handleUpdateAnswerState = (questionId, newQuestionState) => {
    setAnswersState(prev => ({
      ...prev,
      [questionId]: newQuestionState
    }));
  };

  const formatInlineText = (text) => {
    if (typeof text !== 'string') return text;
    
    const parts = [];
    let currentIndex = 0;
    
    const regex = /\*\*(.*?)\*\*/g;
    let match;
    
    while ((match = regex.exec(text)) !== null) {
      if (match.index > currentIndex) {
        parts.push(text.substring(currentIndex, match.index));
      }
      parts.push(
        <strong key={match.index} className="font-extrabold text-slate-900 dark:text-white">
          {match[1]}
        </strong>
      );
      currentIndex = regex.lastIndex;
    }
    
    if (currentIndex < text.length) {
      parts.push(text.substring(currentIndex));
    }
    
    return parts.length > 0 ? parts : text;
  };

  const parseMateri = (text) => {
    if (!text) return null;

    const blocks = text.split('\n\n');

    return blocks.map((block, index) => {
      const trimmed = block.trim();
      if (!trimmed) return null;

      if (trimmed.startsWith('🕵️‍♂️ Misi Awal')) {
        const lines = trimmed.split('\n');
        const title = lines[0];
        const content = lines.slice(1).join('\n');
        return (
          <div key={index} className="p-6 md:p-8 rounded-3xl bg-amber-50/50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900/65 shadow-sm space-y-4 my-6 relative overflow-hidden group hover:shadow-md transition-shadow">
            <div className="absolute top-0 right-0 w-24 h-24 bg-amber-500/10 rounded-full blur-2xl pointer-events-none"></div>
            <div className="flex items-center gap-3 text-amber-850 dark:text-amber-400 font-extrabold text-xl md:text-2xl">
              <span>🕵️‍♂️</span>
              <span>{title.replace('🕵️‍♂️', '').trim()}</span>
            </div>
            <div className="text-slate-700 dark:text-slate-300 leading-relaxed text-base md:text-lg whitespace-pre-line">
              {formatInlineText(content)}
            </div>
          </div>
        );
      }

      if (trimmed.startsWith('🔑 Kesimpulan')) {
        const lines = trimmed.split('\n');
        const title = lines[0];
        const content = lines.slice(1).join('\n');
        return (
          <div key={index} className="p-6 md:p-8 rounded-3xl bg-emerald-50/50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-900/65 shadow-sm space-y-4 my-6 relative overflow-hidden group hover:shadow-md transition-shadow">
            <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none"></div>
            <div className="flex items-center gap-3 text-emerald-855 dark:text-emerald-400 font-extrabold text-xl md:text-2xl">
              <span>🔑</span>
              <span>{title.replace('🔑', '').trim()}</span>
            </div>
            <div className="text-slate-700 dark:text-slate-300 leading-relaxed text-base md:text-lg whitespace-pre-line">
              {formatInlineText(content)}
            </div>
          </div>
        );
      }

      if (trimmed.startsWith('🛠️ Pemodelan')) {
        const lines = trimmed.split('\n');
        const title = lines[0];
        const content = lines.slice(1).join('\n');
        return (
          <div key={index} className="p-6 md:p-8 rounded-3xl bg-sky-50/50 dark:bg-sky-950/20 border border-sky-200 dark:border-sky-900/65 shadow-sm space-y-4 my-6 relative overflow-hidden group hover:shadow-md transition-shadow">
            <div className="absolute top-0 right-0 w-24 h-24 bg-sky-500/10 rounded-full blur-2xl pointer-events-none"></div>
            <div className="flex items-center gap-3 text-sky-850 dark:text-sky-400 font-extrabold text-xl md:text-2xl">
              <span>🛠️</span>
              <span>{title.replace('🛠️', '').trim()}</span>
            </div>
            <div className="text-slate-700 dark:text-slate-300 leading-relaxed text-base md:text-lg whitespace-pre-line">
              {formatInlineText(content)}
            </div>
          </div>
        );
      }

      if (trimmed.startsWith('📚')) {
        return (
          <h3 key={index} className="text-2xl md:text-3xl font-black tracking-tight text-slate-800 dark:text-slate-100 mt-8 mb-4 flex items-center gap-3 border-b-2 border-slate-200 dark:border-slate-800 pb-2">
            <span>📚</span>
            <span>{trimmed.replace('📚', '').trim()}</span>
          </h3>
        );
      }

      if (/^\d+\./.test(trimmed)) {
        return (
          <h4 key={index} className="text-xl md:text-2xl font-black text-slate-850 dark:text-slate-200 mt-6 pb-2 border-b border-slate-100 dark:border-slate-850 flex items-center gap-2">
            <span className="w-1.5 h-6 bg-lime-500 rounded-full"></span>
            {formatInlineText(trimmed)}
          </h4>
        );
      }

      if (/^[A-Z]\./.test(trimmed)) {
        const lines = trimmed.split('\n');
        const title = lines[0];
        const content = lines.slice(1).join('\n');
        return (
          <div key={index} className={`p-6 md:p-8 rounded-2xl ${themeClasses.cardBg} border ${themeClasses.border} shadow-sm space-y-3 mt-6 hover:shadow-md hover:border-lime-500/50 dark:hover:border-lime-500/30 transition-all`}>
            <div className="text-lg md:text-xl font-extrabold text-lime-600 dark:text-lime-400 border-b border-slate-100 dark:border-slate-700/50 pb-2">
              {title}
            </div>
            {content && (
              <div className="text-slate-700 dark:text-slate-300 leading-relaxed text-base md:text-lg whitespace-pre-line">
                {formatInlineText(content)}
              </div>
            )}
          </div>
        );
      }

      const lines = trimmed.split('\n');
      const isList = lines.every(line => /^[•\-\*\d)]\s*/.test(line.trim()));

      if (isList) {
        return (
          <ul key={index} className="list-none space-y-3 my-4 pl-1">
            {lines.map((line, lIdx) => {
              const isNumbered = /^\d+\)/.test(line.trim());
              const cleanLine = line.replace(/^[•\-\*\d\)]\s*/, '');
              return (
                <li key={lIdx} className="flex items-start gap-3">
                  {isNumbered ? (
                    <span className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-lime-100 text-lime-800 dark:bg-lime-900/50 dark:text-lime-400 text-xs font-bold mt-0.5">
                      {line.trim().match(/^\d+/)[0]}
                    </span>
                  ) : (
                    <span className="flex-shrink-0 w-2.5 h-2.5 rounded-full bg-lime-500 mt-2"></span>
                  )}
                  <span className="text-slate-700 dark:text-slate-300 leading-relaxed text-base md:text-lg">
                    {formatInlineText(cleanLine)}
                  </span>
                </li>
              );
            })}
          </ul>
        );
      }

      return (
        <p key={index} className="text-slate-750 dark:text-slate-300 leading-relaxed text-base md:text-lg whitespace-pre-line">
          {formatInlineText(trimmed)}
        </p>
      );
    });
  };

  const jenjang = navPath[0];
  const bab = navPath[1];
  const subBab = navPath[2];
  const mode = navPath[3];

  if (navPath.length === 1) {
    const data = MOCK_COURSES[jenjang] || {};

    // Logika Pengelompokan (Sectioning) berdasarkan Awalan "Kelas X" atau "Modul X"
    const groups = {};
    Object.keys(data).forEach(key => {
      const parts = key.split(' - ');
      const groupName = parts.length > 1 ? parts[0] : '';
      const itemTitle = parts.length > 1 ? parts.slice(1).join(' - ') : key;
      if (!groups[groupName]) {
        groups[groupName] = [];
      }
      groups[groupName].push({ key, title: itemTitle });
    });

    return (
      <div className="max-w-4xl mx-auto space-y-12 pb-12">
        <div className="text-center space-y-4 mb-8">
          <h2 className="text-4xl md:text-5xl font-black tracking-tight">Materi {jenjang}</h2>
          <p className="opacity-70 text-lg">Pilih materi yang mau lo taklukkan!</p>
        </div>

        {Object.entries(groups).map(([groupName, items], gIdx) => (
          <div key={gIdx} className="space-y-6">
            {groupName && (
              <div className="flex items-center gap-4">
                <div className={`px-4 py-1.5 rounded-full text-sm font-bold bg-lime-100 text-lime-800 dark:bg-lime-900/50 dark:text-lime-400 border border-lime-200 dark:border-lime-800 uppercase tracking-wider`}>
                  {groupName}
                </div>
                <div className={`flex-1 h-px bg-slate-200 dark:bg-slate-700`}></div>
              </div>
            )}
            <div className="grid md:grid-cols-2 gap-4">
              {items.map(item => (
                <button key={item.key} onClick={() => setNavPath([...navPath, item.key])} className={`w-full text-left p-6 rounded-2xl ${themeClasses.cardBg} border ${themeClasses.border} hover:border-lime-500 hover:shadow-md transition-all flex justify-between items-center group`}>
                  <span className="text-lg font-bold pr-4">{item.title}</span>
                  <ChevronRight className="opacity-30 group-hover:opacity-100 group-hover:translate-x-1 transition-all flex-shrink-0 text-lime-500" />
                </button>
              ))}
            </div>
          </div>
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
        <div className="space-y-6">
          {parseMateri(contentData.materi)}
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
                key={currentQuestion.id}
                question={currentQuestion} 
                themeClasses={themeClasses} 
                answerState={answersState[currentQuestion.id]}
                setAnswerState={handleUpdateAnswerState}
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
