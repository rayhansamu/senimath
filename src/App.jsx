import React, { useState, useRef, useEffect } from 'react';
import { Menu, ChevronRight } from 'lucide-react';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import Panduan from './pages/Panduan';
import MulaiBelajar from './pages/MulaiBelajar';
import Materi from './pages/Materi';
import Info from './pages/Info';
import Toko from './pages/Toko';
import Pengaturan from './pages/Pengaturan';
import TentangKami from './pages/TentangKami';
import Artikel from './pages/Artikel';

export default function App() {
  const [theme, setTheme] = useState('light');
  const [fontSize, setFontSize] = useState(16);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');
  const [navPath, setNavPath] = useState([]);
  
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTop = 0;
    }
  }, [currentPage, navPath]);

  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');
  const increaseFont = () => setFontSize(prev => Math.min(prev + 2, 24));
  const decreaseFont = () => setFontSize(prev => Math.max(prev - 2, 12));

  const navigateTo = (page, path = []) => {
    setCurrentPage(page);
    setNavPath(path);
    setIsSidebarOpen(false);
  };

  const themeClasses = {
    bg: theme === 'light' ? 'bg-slate-50' : 'bg-slate-900',
    text: theme === 'light' ? 'text-slate-800' : 'text-slate-200',
    cardBg: theme === 'light' ? 'bg-white' : 'bg-slate-800',
    border: theme === 'light' ? 'border-slate-200' : 'border-slate-700',
    primary: theme === 'light' ? 'bg-blue-100 text-blue-900 hover:bg-blue-200' : 'bg-blue-600 text-white hover:bg-blue-500',
    primaryGhost: theme === 'light' ? 'text-blue-700 hover:bg-blue-100' : 'text-blue-400 hover:bg-slate-700',
  };

  return (
    <div className={`min-h-screen flex transition-colors duration-300 ${themeClasses.bg} ${themeClasses.text}`} style={{ fontSize: `${fontSize}px` }}>
      
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
        .animate-marquee {
          display: inline-block;
          white-space: nowrap;
          animation: marquee 20s linear infinite;
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float 4s ease-in-out 2s infinite;
        }
      `}</style>

      <Sidebar 
        isSidebarOpen={isSidebarOpen} 
        setIsSidebarOpen={setIsSidebarOpen} 
        currentPage={currentPage} 
        navigateTo={navigateTo} 
        themeClasses={themeClasses} 
      />

      <main className="flex-1 flex flex-col h-screen overflow-hidden">
        <header className={`lg:hidden flex items-center justify-between p-4 border-b ${themeClasses.cardBg} ${themeClasses.border}`}>
          <button onClick={() => setIsSidebarOpen(true)} className="p-1">
            <Menu size={24} />
          </button>
          <h1 className="text-xl font-bold tracking-tighter uppercase">SENIMATH</h1>
          <div className="w-6"></div>
        </header>

        <div ref={scrollContainerRef} className="flex-1 overflow-y-auto p-4 md:p-8 scroll-smooth">
          
          {navPath.length > 0 && currentPage === 'materi' && (
            <div className={`flex flex-wrap items-center gap-2 mb-6 text-sm opacity-70`}>
              {navPath.map((step, idx) => (
                <React.Fragment key={idx}>
                  <span className={idx === navPath.length - 1 ? 'font-bold opacity-100' : 'cursor-pointer hover:underline'} onClick={() => {
                    if(idx < navPath.length - 1) setNavPath(navPath.slice(0, idx + 1));
                  }}>
                    {step}
                  </span>
                  {idx < navPath.length - 1 && <ChevronRight size={14} />}
                </React.Fragment>
              ))}
            </div>
          )}

          {currentPage === 'home' && <Home navigateTo={navigateTo} themeClasses={themeClasses} />}
          {currentPage === 'panduan' && <Panduan navigateTo={navigateTo} themeClasses={themeClasses} />}
          {currentPage === 'mulai' && <MulaiBelajar navigateTo={navigateTo} themeClasses={themeClasses} />}
          {currentPage === 'materi' && <Materi navPath={navPath} setNavPath={setNavPath} themeClasses={themeClasses} />}
          {currentPage === 'info' && <Info themeClasses={themeClasses} navigateTo={navigateTo} />}
          {currentPage === 'toko' && <Toko themeClasses={themeClasses} />}
          {currentPage === 'pengaturan' && <Pengaturan theme={theme} toggleTheme={toggleTheme} fontSize={fontSize} increaseFont={increaseFont} decreaseFont={decreaseFont} themeClasses={themeClasses} />}
          {currentPage === 'tentang' && <TentangKami themeClasses={themeClasses} />}
          {currentPage === 'artikel' && <Artikel navPath={navPath} navigateTo={navigateTo} themeClasses={themeClasses} />}

        </div>
      </main>
    </div>
  );
}
