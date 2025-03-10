import Link from 'next/link';

export default function Home() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Charles Ndiritu</h1>
            <h2 className="text-2xl text-gray-300 mb-8">Data Scientist | Software Engineer | IT Professional</h2>
            <p className="text-xl text-gray-400 mb-8">Nairobi, Kenya</p>
            <div className="flex justify-center space-x-4">
              <a href="mailto:cnderitumuriithi@gmail.com" className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg">
                Contact Me
              </a>
              <a href="https://www.linkedin.com/in/charles-muriithi-b9bb731a4" target="_blank" rel="noopener noreferrer" 
                className="bg-gray-700 hover:bg-gray-600 px-6 py-3 rounded-lg">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Professional Summary</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto text-center">
            Innovative and results-driven Data Scientist and Software Engineer with a strong background in data analytics, 
            machine learning, and software development. Passionate about leveraging technology to extract valuable insights 
            from data, build scalable applications, and enhance business efficiency.
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Technical Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Programming</h3>
              <ul className="space-y-2 text-gray-600">
                <li>Python (Django, Flask, TensorFlow, PyTorch)</li>
                <li>R, Java, C++</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Data Science & Analytics</h3>
              <ul className="space-y-2 text-gray-600">
                <li>Machine Learning, Deep Learning</li>
                <li>NLP, Predictive Modeling</li>
                <li>Statistical Analysis</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Web Development</h3>
              <ul className="space-y-2 text-gray-600">
                <li>HTML, CSS, JavaScript</li>
                <li>React, Angular, Node.js</li>
                <li>RESTful APIs</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Ready to Work Together?</h2>
          <p className="text-xl mb-8">Let's discuss how I can help with your next project</p>
          <Link href="/contact" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100">
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
}