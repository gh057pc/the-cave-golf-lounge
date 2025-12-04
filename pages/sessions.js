import Layout from '../components/Layout';

export default function Sessions() {
  return (
    <Layout title="Past Sessions">
       <h2 className="text-xl font-serif text-cave-gold mb-4">History</h2>
       <div className="space-y-4">
         {[1, 2].map((i) => (
           <div key={i} className="bg-zinc-900 p-4 rounded-xl border border-zinc-800">
             <div className="flex justify-between mb-2">
               <span className="text-white font-bold">Oct {20 + i}</span>
               <span className="text-gray-500">2 Hours</span>
             </div>
             <p className="text-sm text-gray-400">Focus: Driver & Irons</p>
           </div>
         ))}
       </div>
    </Layout>
  );
}
