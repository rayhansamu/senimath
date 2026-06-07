import React from 'react';
import { ChevronLeft, BookOpen } from 'lucide-react';
import { MOCK_ARTICLES } from '../data/articles';

export default function Artikel({ navPath, navigateTo, themeClasses }) {
  const articleId = navPath[0];
  const article = MOCK_ARTICLES.find(a => a.id === articleId);

  if (!article) return <div className="text-center mt-12 font-bold text-xl">Artikel tidak ditemukan.</div>;

  return (
    <div className="max-w-3xl mx-auto space-y-8">
      <button 
        onClick={() => navigateTo('info')}
        className={`flex items-center gap-2 font-medium opacity-70 hover:opacity-100 transition-opacity`}
      >
        <ChevronLeft size={20} /> Kembali ke Info
      </button>

      <div className={`p-8 md:p-12 rounded-3xl ${themeClasses.cardBg} border ${themeClasses.border} shadow-sm`}>
        <div className="flex items-center gap-2 text-lime-600 dark:text-lime-400 font-bold mb-4 text-sm uppercase tracking-wider">
          <BookOpen size={16} /> Artikel Senimath
        </div>
        <h1 className="text-3xl md:text-4xl font-black mb-8 leading-tight tracking-tight">{article.title}</h1>
        <div className="leading-relaxed whitespace-pre-wrap text-lg opacity-90">
          {article.content}
        </div>
      </div>
    </div>
  );
}
