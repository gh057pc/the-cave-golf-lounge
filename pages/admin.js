import Layout from '../components/Layout';

export default function Admin() {
  return (
    <Layout title="Admin">
      <h1 className="text-2xl text-red-500 mb-4">Restricted Area</h1>
      <p>Admin controls for door override and booking management.</p>
    </Layout>
  );
}
