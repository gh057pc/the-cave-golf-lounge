import Link from 'next/link';
import { useRouter } from 'next/router';
import { useUser } from '@/context/UserContext';

export default function Sidebar({ isOpen, onClose }) {
  const router = useRouter();
  const user = useUser();
  const isActive = (path) => router.pathname === path;

  const navItems = [
    { path: '/', label: 'Dashboard', icon: '🏠' },
    { path: '/book', label: 'Book Session', icon: '📅' },
    { path: '/sessions', label: 'History', icon: '📈' },
    { path: '/profile', label: 'Profile', icon: '👤' },
    { path: '/admin', label: 'Admin', icon: '⚙️' },
  ];

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-50 transition-opacity duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />

      {/* Sidebar Panel */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-cave-black/95 border-r border-zinc-800 z-50 transform transition-transform duration-300 ease-out shadow-2xl ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="p-6 flex justify-between items-center border-b border-zinc-800">
           <h2 className="text-xl font-serif text-cave-gold tracking-widest">MENU</h2>
           <button onClick={onClose} className="text-gray-400 hover:text-white">
             ✕
           </button>
        </div>

        <nav className="mt-6 px-4 space-y-2">
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              onClick={onClose}
              className={`flex items-center space-x-4 px-4 py-3 rounded-lg transition-all duration-200 group ${
                isActive(item.path)
                  ? 'bg-cave-green/20 text-cave-gold border border-cave-green/30'
                  : 'text-gray-400 hover:bg-white/5 hover:text-white'
              }`}
            >
              <span className="text-xl group-hover:scale-110 transition-transform">{item.icon}</span>
              <span className="font-medium tracking-wide">{item.label}</span>
            </Link>
          ))}
        </nav>

        <div className="absolute bottom-8 left-0 w-full px-6">
           <div className="bg-zinc-900/50 p-4 rounded-xl border border-zinc-800 flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-cave-brown flex items-center justify-center text-white font-bold text-sm">
                {user?.initials || 'MB'}
              </div>
              <div>
                <p className="text-sm text-white font-medium">{user?.name || 'Loading...'}</p>
                <p className="text-xs text-cave-gold uppercase tracking-wider">{user?.tier || 'Member'}</p>
              </div>
           </div>
        </div>
      </div>
    </>
  );
}
