import React, { useState } from 'react';
import { Lightbulb, CheckCircle, XCircle, BookOpen, Lock } from 'lucide-react';

export default function QuestionCard({ question, themeClasses }) {
  const [userAnswer, setUserAnswer] = useState('');
  const [selectedOptionIndex, setSelectedOptionIndex] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showIdea, setShowIdea] = useState(false);
  const [showPembahasan, setShowPembahasan] = useState(false);

  const { type } = question;
  
  const hasIdeaBtn = type === 1 || type === 2;
  const isSelfCheck = type === 2 || type === 4;
  const isMCQ = type === 1 || type === 3;
  const isPureEssay = type === 5;

  let isCorrect = null;
  if (isSubmitted && !isSelfCheck) {
    if (isMCQ) {
      isCorrect = selectedOptionIndex === question.correctAnswer;
    } else if (isPureEssay) {
      isCorrect = userAnswer.trim() === question.correctAnswer;
    }
  }

  const handleSubmit = () => {
    setIsSubmitted(true);
    if(isSelfCheck) {
      setShowPembahasan(true);
    }
  };

  return (
    <div className={`p-6 md:p-8 rounded-3xl ${themeClasses.cardBg} border ${themeClasses.border} shadow-sm relative overflow-hidden`}>
      <div className="absolute -top-6 -right-6 text-9xl font-black opacity-5 pointer-events-none">
        {type}
      </div>

      <div className="flex justify-between items-start mb-6">
        <h3 className="text-xl font-bold relative z-10 flex-1 pr-4">{question.question}</h3>
        {hasIdeaBtn && (
          <button 
            onClick={() => setShowIdea(!showIdea)}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${showIdea ? 'bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200' : 'bg-slate-100 text-slate-700 dark:bg-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600'}`}
          >
            <Lightbulb size={16} className={showIdea ? "fill-current" : ""} /> 
            Ide Menjawab
          </button>
        )}
      </div>

      {showIdea && hasIdeaBtn && (
        <div className="mb-6 p-4 rounded-xl bg-amber-50 dark:bg-amber-900/30 border border-amber-200 dark:border-amber-700 text-amber-900 dark:text-amber-100 text-sm italic">
          💡 {question.idea}
        </div>
      )}

      <div className="space-y-4 mb-8">
        {isMCQ && (
          <div className="space-y-3">
            {question.options.map((opt, idx) => (
              <label 
                key={idx} 
                className={`flex items-center gap-3 p-4 rounded-xl border cursor-pointer transition-all ${
                  selectedOptionIndex === idx 
                    ? `border-lime-500 bg-lime-50 dark:bg-lime-900/20` 
                    : `border-slate-200 dark:border-slate-700 hover:border-lime-300`
                } ${isSubmitted ? 'pointer-events-none opacity-80' : ''}`}
              >
                <input 
                  type="radio" 
                  name={`question-${question.id}`}
                  className="hidden" 
                  checked={selectedOptionIndex === idx} 
                  onChange={() => setSelectedOptionIndex(idx)} 
                  disabled={isSubmitted} 
                />
                <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${selectedOptionIndex === idx ? 'border-lime-500' : 'border-slate-400'}`}>
                  {selectedOptionIndex === idx && <div className="w-2.5 h-2.5 rounded-full bg-lime-500"></div>}
                </div>
                <span className="text-lg">{opt}</span>
              </label>
            ))}
          </div>
        )}

        {isSelfCheck && (
          <div className="p-4 rounded-xl bg-slate-100 dark:bg-slate-700/50 inline-block font-mono text-lg border border-slate-200 dark:border-slate-600">
            Target Jawaban: <span className="font-bold text-lime-600 dark:text-lime-400">{question.targetAnswer}</span>
          </div>
        )}

        {isPureEssay && (
          <div className="flex items-center gap-4">
            <span className="font-medium">Jawaban:</span>
            <input 
              type="text" 
              value={userAnswer}
              onChange={(e) => setUserAnswer(e.target.value)}
              disabled={isSubmitted}
              className={`flex-1 max-w-[200px] px-4 py-2 rounded-xl border ${themeClasses.border} bg-transparent focus:outline-none focus:border-lime-500 font-mono`}
              placeholder="..."
            />
          </div>
        )}
      </div>

      <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-slate-200 dark:border-slate-700">
        <div className="flex gap-4 items-center">
          {!isSubmitted && (
             <button 
                onClick={handleSubmit} 
                disabled={isMCQ && selectedOptionIndex === null}
                className={`px-6 py-2.5 rounded-xl font-bold transition-all ${themeClasses.primary} disabled:opacity-50 disabled:cursor-not-allowed`}
              >
                {isSelfCheck ? 'Lihat Pembahasan' : 'Simpan Jawaban'}
              </button>
          )}

          {isSubmitted && !isSelfCheck && (
            <button 
              onClick={() => setShowPembahasan(!showPembahasan)}
              className={`px-6 py-2.5 rounded-xl font-bold flex items-center gap-2 border ${themeClasses.border} hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors`}
            >
              {showPembahasan ? <Lock size={16} /> : null}
              {showPembahasan ? 'Tutup Pembahasan' : 'Buka Pembahasan'}
            </button>
          )}
        </div>

        {isSubmitted && !isSelfCheck && isCorrect !== null && (
          <div className={`flex items-center gap-2 font-bold text-xl animate-bounce ${isCorrect ? 'text-green-500' : 'text-red-500'}`}>
            {isCorrect ? <CheckCircle size={32} /> : <XCircle size={32} />}
            {isCorrect ? 'Benar!' : 'Kurang Tepat'}
          </div>
        )}
      </div>

      {showPembahasan && (
        <div className="mt-8 p-6 rounded-2xl bg-slate-100 dark:bg-slate-700/50 border border-slate-200 dark:border-slate-600 animate-fade-in">
          <h4 className="font-bold text-lg mb-3 flex items-center gap-2">
            <BookOpen size={18} /> Pembahasan
          </h4>
          <p className="leading-relaxed">{question.pembahasan}</p>
        </div>
      )}
    </div>
  );
}
