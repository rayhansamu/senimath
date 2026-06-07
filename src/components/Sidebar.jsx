import React from 'react';
import { Home, BookOpen, Play, Info, ShoppingBag, Settings, User, X } from 'lucide-react';

export default function Sidebar({ isSidebarOpen, setIsSidebarOpen, currentPage, navigateTo, themeClasses }) {
  const MENU_ITEMS = [
    { id: 'home', icon: <Home size={20}/>, label: 'Home' },
    { id: 'panduan', icon: <BookOpen size={20}/>, label: 'Panduan' },
    { id: 'mulai', icon: <Play size={20}/>, label: 'Mulai Belajar' },
    { id: 'info', icon: <Info size={20}/>, label: 'Info' },
    { id: 'toko', icon: <ShoppingBag size={20}/>, label: 'Toko' },
    { id: 'pengaturan', icon: <Settings size={20}/>, label: 'Pengaturan' },
    { id: 'tentang', icon: <User size={20}/>, label: 'Tentang Kami' },
  ];

  return (
    <>
      {isSidebarOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden" onClick={() => setIsSidebarOpen(false)}></div>
      )}

      <aside className={`fixed inset-y-0 left-0 z-50 w-64 ${themeClasses.cardBg} border-r ${themeClasses.border} transform transition-transform duration-300 lg:translate-x-0 lg:static lg:block flex-shrink-0 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex items-center justify-between p-4 border-b border-slate-200 dark:border-slate-700">
          <h1 className="text-2xl font-bold tracking-tighter uppercase">SENIMATH</h1>
          <button onClick={() => setIsSidebarOpen(false)} className="lg:hidden p-1 rounded-md hover:bg-slate-200 dark:hover:bg-slate-700">
            <X size={24} />
          </button>
        </div>
        <nav className="p-4 space-y-2">
          {MENU_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => navigateTo(item.id)}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-colors ${currentPage === item.id || (currentPage === 'materi' && item.id === 'mulai') ? themeClasses.primary : 'hover:bg-slate-100 dark:hover:bg-slate-700'}`}
            >
              {item.icon}
              <span className="font-medium">{item.label}</span>
            </button>
          ))}
        </nav>
      </aside>
    </>
  );
}
