import Layout from '../components/Layout';

export default function Book() {
  return (
    <Layout title="Book Session">
      <div className="text-center mt-10">
        <h2 className="text-2xl font-serif text-cave-gold mb-4">Select Time</h2>
        <div className="bg-zinc-900 p-6 rounded-xl border border-zinc-800">
          <p className="text-gray-400 mb-4">Calendar Placeholder</p>
          {/* Calendar component would go here */}
          <div className="grid grid-cols-3 gap-2">
            {[18, 19, 20, 21, 22].map(hour => (
              <button key={hour} className="p-2 border border-cave-green rounded text-white hover:bg-cave-green/20">
                {hour}:00
              </button>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
