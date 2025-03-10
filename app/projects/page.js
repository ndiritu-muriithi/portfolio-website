import Layout from '../../components/Layout';

export default function Projects() {
  return (
    <Layout>
      <h2>My Projects</h2>
      <h2 className="text-3xl font-bold mb-4">My Projects</h2>
      <ul className="list-disc list-inside">
        <li>Project 1</li>
        <li>Project 2</li>
        <li>Project 3</li>
      </ul>
    </Layout>
  );
}