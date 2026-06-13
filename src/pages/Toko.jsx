import React, { useState } from 'react';
import { ShoppingBag, ChevronDown, ChevronRight } from 'lucide-react';
import { MOCK_PRODUCTS } from '../data/products';

export default function Toko({ themeClasses }) {
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (id) => {
    setOpenDropdown(openDropdown === id ? null : id);
  };

  const smpProducts = MOCK_PRODUCTS.filter(p => p.category === 'SMP');
  const smaProducts = MOCK_PRODUCTS.filter(p => p.category === 'SMA');

  const renderSection = (title, products, colorClass, bgClass, borderClass, badgeClass) => (
    <div className="space-y-4 mb-8">
      <h3 className={`text-2xl font-bold ${colorClass} mb-6 border-b ${borderClass} pb-2`}>{title}</h3>
      <div className="flex flex-col gap-4">
        {products.map(prod => (
          <div key={prod.id} className={`rounded-2xl ${themeClasses.cardBg} border ${borderClass} overflow-hidden shadow-sm transition-all`}>
            <button
              onClick={() => toggleDropdown(prod.id)}
              className={`w-full flex items-center justify-between p-6 hover:${bgClass} transition-colors`}
            >
              <div className="flex items-center gap-4">
                <span className={`px-3 py-1 rounded-full text-xs font-bold ${badgeClass}`}>{prod.category}</span>
                <span className="font-bold text-lg text-left">{prod.title}</span>
              </div>
              <ChevronDown className={`transform transition-transform ${openDropdown === prod.id ? 'rotate-180' : ''}`} />
            </button>

            {openDropdown === prod.id && (
              <div className={`p-4 border-t ${borderClass} ${bgClass} flex flex-col md:flex-row gap-4`}>
                {prod.variants.map(v => (
                  <a
                    key={v.id}
                    href={v.link}
                    target="_blank"
                    rel="noreferrer"
                    className={`flex-1 flex items-center justify-between px-6 py-4 rounded-xl bg-white dark:bg-slate-800 border ${borderClass} hover:shadow-md transition-all group`}
                  >
                    <span className="font-bold">Paket Soal {v.type}</span>
                    <span className={`font-bold flex items-center gap-1 ${colorClass} group-hover:translate-x-1 transition-transform`}>
                      Gass Latihan <ChevronRight size={18} />
                    </span>
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="text-center mb-12 space-y-4">
        <ShoppingBag size={48} className="mx-auto opacity-20" />
        <h2 className="text-4xl font-bold">Toko Senimath</h2>
        <p className="opacity-70 text-lg">Amunisi tambahan buat lo yang mau latihan ekstra.</p>
      </div>

      {renderSection("Materi SMP", smpProducts, "text-blue-600 dark:text-blue-400", "bg-blue-50 dark:bg-blue-900/20", "border-blue-200 dark:border-blue-800", "bg-blue-600 text-white dark:bg-blue-500")}
      {renderSection("Materi SMA", smaProducts, "text-slate-600 dark:text-slate-300", "bg-slate-100 dark:bg-slate-800/40", "border-slate-300 dark:border-slate-600", "bg-slate-500 dark:bg-slate-300 text-white dark:text-slate-900")}

    </div>
  );
}
