import { useState } from 'react';
import Sidebar from './Sidebar';
import Head from 'next/head';
import Link from 'next/link';
import { useUser } from '@/context/UserContext';

export default function Layout({ children, title = "The Cave" }) {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const user = useUser();

  return (
    <div className="min-h-screen bg-cave-black text-white font-sans selection:bg-cave-gold selection:text-black overflow-x-hidden">
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
      </Head>

      <Sidebar isOpen={isSidebarOpen} onClose={() => setSidebarOpen(false)} />

      <header className="px-6 py-4 flex justify-between items-center sticky top-0 z-40 bg-cave-black/80 backdrop-blur-md border-b border-white/5">
        <button
          onClick={() => setSidebarOpen(true)}
          className="p-2 -ml-2 text-cave-gold hover:text-white transition-colors"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h7" />
          </svg>
        </button>

        <h1 className="text-xl font-serif text-white tracking-[0.2em]">THE CAVE</h1>

        <Link href="/profile">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cave-gold to-cave-brown p-[1px] cursor-pointer hover:scale-105 transition-transform">
            <div className="w-full h-full rounded-full bg-cave-black flex items-center justify-center">
               <span className="text-xs font-bold text-cave-gold">{user?.initials || 'MB'}</span>
            </div>
          </div>
        </Link>
      </header>

      <main className="p-6 pb-24 max-w-md mx-auto w-full">
        {children}
      </main>
    </div>
  );
}
