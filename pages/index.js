import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout title="The Cave - Dashboard">
      <div className="space-y-8">
        
        {/* Hero / Next Session */}
        <section className="relative overflow-hidden bg-gradient-to-br from-zinc-900 to-black p-6 rounded-3xl border border-white/10 shadow-2xl">
          <div className="absolute top-0 right-0 w-32 h-32 bg-cave-gold/10 rounded-full blur-3xl -mr-10 -mt-10"></div>
          
          <div className="relative z-10">
            <div className="flex justify-between items-start mb-6">
               <div>
                 <h2 className="text-zinc-400 text-xs font-medium uppercase tracking-widest mb-1">Next Session</h2>
                 <p className="text-3xl font-serif text-white">Friday, Oct 24</p>
               </div>
               <div className="bg-cave-green/20 border border-cave-green/30 px-3 py-1 rounded-full">
                 <span className="text-xs font-bold text-cave-green uppercase">Confirmed</span>
               </div>
            </div>
            
            <div className="flex items-end justify-between">
              <div>
                 <p className="text-cave-gold text-xl font-medium">8:00 PM <span className="text-zinc-500 text-sm mx-1">to</span> 10:00 PM</p>
                 <p className="text-zinc-500 text-sm mt-1">Bay 1 • Trackman iO</p>
              </div>
              <div className="text-right">
                 <p className="text-4xl font-bold text-white">2</p>
                 <p className="text-zinc-500 text-xs uppercase tracking-wider">Days Left</p>
              </div>
            </div>
          </div>
        </section>

        {/* Unlock Action */}
        <section>
          <button className="group relative w-full h-24 rounded-2xl bg-zinc-900 border border-zinc-800 overflow-hidden flex items-center justify-center transition-all active:scale-[0.98]">
             <div className="absolute inset-0 bg-gradient-to-r from-cave-red/20 to-transparent opacity-50 group-hover:opacity-70 transition-opacity"></div>
             <div className="relative flex flex-col items-center">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl group-hover:scale-110 transition-transform duration-300">🔒</span>
                  <span className="font-serif text-2xl text-white tracking-widest">UNLOCK DOOR</span>
                </div>
                <span className="text-[10px] text-zinc-500 uppercase tracking-widest mt-2 group-hover:text-zinc-400">Active 10m before booking</span>
             </div>
             <div className="absolute bottom-0 left-0 h-1 w-full bg-cave-red/50"></div>
          </button>
        </section>

        {/* Stats Grid */}
        <section className="grid grid-cols-2 gap-4">
          <div className="bg-white/5 backdrop-blur-sm p-5 rounded-2xl border border-white/5 hover:border-cave-gold/30 transition-colors">
             <h3 className="text-zinc-500 text-xs font-medium uppercase tracking-wider mb-2">Avg Drive</h3>
             <div className="flex items-baseline space-x-1">
               <p className="text-3xl font-bold text-white">245</p>
               <span className="text-sm text-cave-gold">yds</span>
             </div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm p-5 rounded-2xl border border-white/5 hover:border-cave-gold/30 transition-colors">
             <h3 className="text-zinc-500 text-xs font-medium uppercase tracking-wider mb-2">Handicap</h3>
             <div className="flex items-baseline space-x-1">
               <p className="text-3xl font-bold text-white">12.4</p>
               <span className="text-sm text-green-500">↓</span>
             </div>
          </div>
        </section>

        {/* AI Insight */}
        <section className="relative bg-cave-green/10 p-6 rounded-2xl border border-cave-green/20">
          <div className="absolute top-4 left-4 text-4xl text-cave-green/20 font-serif">“</div>
          <div className="relative z-10 pl-4">
            <h2 className="text-cave-green text-xs font-bold uppercase tracking-widest mb-3">AI Caddy Analysis</h2>
            <p className="text-lg text-zinc-300 font-light leading-relaxed italic">
              Your attack angle was too steep (-3 deg) in your last session. Try teeing the ball higher next time to encourage an upward strike.
            </p>
            <div className="mt-4 flex items-center space-x-2">
               <div className="w-6 h-6 rounded-full bg-cave-green/20 flex items-center justify-center text-[10px] text-cave-green">AI</div>
               <span className="text-xs text-zinc-500">Generated 2h ago</span>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
