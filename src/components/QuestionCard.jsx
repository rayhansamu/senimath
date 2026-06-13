import React, { useState } from 'react';
import { Lightbulb, CheckCircle, XCircle, BookOpen, Lock } from 'lucide-react';

export default function QuestionCard({ question, themeClasses, jenjang, answerState, setAnswerState }) {
  const hasExternalState = typeof setAnswerState === 'function';

  const [localUserAnswer, setLocalUserAnswer] = useState('');
  const [localSelectedOptionIndex, setLocalSelectedOptionIndex] = useState(null);
  const [localIsSubmitted, setLocalIsSubmitted] = useState(false);
  const [localShowIdea, setLocalShowIdea] = useState(false);
  const [localShowPembahasan, setLocalShowPembahasan] = useState(false);

  const state = hasExternalState && answerState ? answerState : {
    userAnswer: hasExternalState && answerState ? answerState.userAnswer : localUserAnswer,
    selectedOptionIndex: hasExternalState && answerState ? answerState.selectedOptionIndex : localSelectedOptionIndex,
    isSubmitted: hasExternalState && answerState ? answerState.isSubmitted : localIsSubmitted,
    showIdea: hasExternalState && answerState ? answerState.showIdea : localShowIdea,
    showPembahasan: hasExternalState && answerState ? answerState.showPembahasan : localShowPembahasan
  };

  const updateState = (newFields) => {
    if (hasExternalState) {
      setAnswerState(question.id, {
        userAnswer: state.userAnswer,
        selectedOptionIndex: state.selectedOptionIndex,
        isSubmitted: state.isSubmitted,
        showIdea: state.showIdea,
        showPembahasan: state.showPembahasan,
        ...newFields
      });
    } else {
      if ('userAnswer' in newFields) setLocalUserAnswer(newFields.userAnswer);
      if ('selectedOptionIndex' in newFields) setLocalSelectedOptionIndex(newFields.selectedOptionIndex);
      if ('isSubmitted' in newFields) setLocalIsSubmitted(newFields.isSubmitted);
      if ('showIdea' in newFields) setLocalShowIdea(newFields.showIdea);
      if ('showPembahasan' in newFields) setLocalShowPembahasan(newFields.showPembahasan);
    }
  };

  const { type } = question;

  const hasIdeaBtn = type === 1 || type === 2;
  const isSelfCheck = type === 2 || type === 4;
  const isMCQ = type === 1 || type === 3;
  const isPureEssay = type === 5;
  const isSMA = jenjang === 'SMA';

  let isCorrect = null;
  if (state.isSubmitted && !isSelfCheck) {
    if (isMCQ) {
      isCorrect = state.selectedOptionIndex === question.correctAnswer;
    } else if (isPureEssay) {
      isCorrect = state.userAnswer.trim() === question.correctAnswer;
    }
  }

  const handleSubmit = () => {
    updateState({
      isSubmitted: true,
      showPembahasan: isSelfCheck ? true : state.showPembahasan
    });
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
            onClick={() => updateState({ showIdea: !state.showIdea })}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${state.showIdea ? 'bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200' : 'bg-slate-100 text-slate-700 dark:bg-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600'}`}
          >
            <Lightbulb size={16} className={state.showIdea ? "fill-current" : ""} />
            Ide Menjawab
          </button>
        )}
      </div>

      {state.showIdea && hasIdeaBtn && (
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
                className={`flex items-center gap-3 p-4 rounded-xl border cursor-pointer transition-all ${state.selectedOptionIndex === idx
                    ? (isSMA ? 'border-slate-500 bg-slate-100 dark:bg-slate-800' : 'border-blue-500 bg-blue-50 dark:bg-blue-900/20')
                    : `border-slate-200 dark:border-slate-700 ${isSMA ? 'hover:border-slate-400' : 'hover:border-blue-300'}`
                  } ${state.isSubmitted ? 'pointer-events-none opacity-80' : ''}`}
              >
                <input
                  type="radio"
                  name={`question-${question.id}`}
                  className="hidden"
                  checked={state.selectedOptionIndex === idx}
                  onChange={() => updateState({ selectedOptionIndex: idx })}
                  disabled={state.isSubmitted}
                />
                <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${state.selectedOptionIndex === idx ? (isSMA ? 'border-slate-600 dark:border-slate-300' : 'border-blue-500') : 'border-slate-400'}`}>
                  {state.selectedOptionIndex === idx && <div className={`w-2.5 h-2.5 rounded-full ${isSMA ? 'bg-slate-600 dark:bg-slate-300' : 'bg-blue-500'}`}></div>}
                </div>
                <span className="text-lg">{opt}</span>
              </label>
            ))}
          </div>
        )}

        {isSelfCheck && (
          <div className="p-4 rounded-xl bg-slate-100 dark:bg-slate-700/50 inline-block font-mono text-lg border border-slate-200 dark:border-slate-600">
            Target Jawaban: <span className={`font-bold ${isSMA ? 'text-slate-700 dark:text-slate-300' : 'text-blue-600 dark:text-blue-400'}`}>{question.targetAnswer}</span>
          </div>
        )}

        {isPureEssay && (
          <div className="flex items-center gap-4">
            <span className="font-medium">Jawaban:</span>
            <input
              type="text"
              value={state.userAnswer}
              onChange={(e) => updateState({ userAnswer: e.target.value })}
              disabled={state.isSubmitted}
              className={`flex-1 max-w-[200px] px-4 py-2 rounded-xl border ${themeClasses.border} bg-transparent focus:outline-none ${isSMA ? 'focus:border-slate-500' : 'focus:border-blue-500'} font-mono`}
              placeholder="..."
            />
          </div>
        )}
      </div>

      <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-slate-200 dark:border-slate-700">
        <div className="flex gap-4 items-center">
          {!state.isSubmitted && (
            <button
              onClick={handleSubmit}
              disabled={isMCQ && state.selectedOptionIndex === null}
              className={`px-6 py-2.5 rounded-xl font-bold transition-all ${isSMA ? 'bg-slate-600 text-white hover:bg-slate-500 dark:bg-slate-300 dark:text-slate-900 dark:hover:bg-slate-200' : themeClasses.primary} disabled:opacity-50 disabled:cursor-not-allowed`}
            >
              {isSelfCheck ? 'Lihat Pembahasan' : 'Simpan Jawaban'}
            </button>
          )}

          {state.isSubmitted && !isSelfCheck && (
            <button
              onClick={() => updateState({ showPembahasan: !state.showPembahasan })}
              className={`px-6 py-2.5 rounded-xl font-bold flex items-center gap-2 border ${themeClasses.border} hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors`}
            >
              {state.showPembahasan ? <Lock size={16} /> : null}
              {state.showPembahasan ? 'Tutup Pembahasan' : 'Buka Pembahasan'}
            </button>
          )}
        </div>

        {state.isSubmitted && !isSelfCheck && isCorrect !== null && (
          <div className={`flex items-center gap-2 font-bold text-xl animate-bounce ${isCorrect ? 'text-green-500' : 'text-red-500'}`}>
            {isCorrect ? <CheckCircle size={32} /> : <XCircle size={32} />}
            {isCorrect ? 'Benar!' : 'Kurang Tepat'}
          </div>
        )}
      </div>

      {state.showPembahasan && (
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
