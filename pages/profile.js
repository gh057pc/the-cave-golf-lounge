import Layout from '../components/Layout';
import { useUser } from '@/context/UserContext';

export default function Profile() {
  const user = useUser();

  return (
    <Layout title="My Profile">
      <div className="text-center mb-8">
        <div className="w-20 h-20 bg-cave-green rounded-full mx-auto mb-4 border-2 border-cave-gold flex items-center justify-center text-2xl font-bold text-white">
          {user?.initials || 'MB'}
        </div>
        <h2 className="text-2xl font-serif text-white">{user?.name || 'Loading...'}</h2>
        <p className="text-cave-gold uppercase tracking-widest text-sm">{user?.tier || 'Eagle Member'}</p>
      </div>

      <div className="space-y-4">
        <div className="bg-zinc-900 p-4 rounded-xl border border-zinc-800 flex justify-between items-center">
          <span>Membership</span>
          <span className="text-green-400">Active</span>
        </div>
        <div className="bg-zinc-900 p-4 rounded-xl border border-zinc-800 flex justify-between items-center">
          <span>Payment Method</span>
          <span className="text-gray-400">•••• 4242</span>
        </div>
         <div className="bg-zinc-900 p-4 rounded-xl border border-zinc-800 flex justify-between items-center">
          <span>Handicap</span>
          <span className="text-white font-bold">12.4</span>
        </div>
      </div>
    </Layout>
  );
}
