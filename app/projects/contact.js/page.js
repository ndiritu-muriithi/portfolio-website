import Layout from '../../components/Layout';

export default function Contact() {
  return (
    <Layout>
      <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
      <form className="space-y-4">
        <div>
          <label className="block text-lg">Name:</label>
          <input type="text" name="name" className="w-full p-2 border border-gray-300 rounded" />
        </div>
        <div>
          <label className="block text-lg">Email:</label>
          <input type="email" name="email" className="w-full p-2 border border-gray-300 rounded" />
        </div>
        <div>
          <label className="block text-lg">Message:</label>
          <textarea name="message" className="w-full p-2 border border-gray-300 rounded"></textarea>
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Send
        </button>
      </form>
    </Layout>
  );
}