export default function About() {
  return (
    <div className="space-y-16 py-12">
      {/* Education Section */}
      <section>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Education</h2>
          <div className="space-y-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Bachelor of Science in Information Technology</h3>
              <p className="text-gray-600 mb-2">Jomo Kenyatta University of Agriculture and Technology</p>
              <p className="text-gray-500">Graduated: 2024</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Diploma in Information Technology</h3>
              <p className="text-gray-600 mb-2">The Co-operative University of Kenya</p>
              <p className="text-gray-500">Graduated: 2021</p>
            </div>
          </div>
        </div>
      </section>

      {/* Work Experience Section */}
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Work Experience</h2>
          <div className="space-y-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Freelance Software Engineer</h3>
              <p className="text-gray-500 mb-4">August 2021 - June 2024</p>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Developed and maintained scalable web applications using Python, Java, and JavaScript frameworks</li>
                <li>Built data processing pipelines and conducted statistical analysis for various clients</li>
                <li>Integrated APIs and databases to enhance data-driven applications</li>
                <li>Improved efficiency by streamlining data entry processes for clients</li>
                <li>Delivered technical support and troubleshooting for software applications</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">IT System Administrator | Regional Logistics Centre Ltd</h3>
              <p className="text-gray-500 mb-4">July 2021 - December 2021</p>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Managed and optimized IT systems to ensure smooth business operations</li>
                <li>Provided technical support and troubleshooting for hardware and software issues</li>
                <li>Implemented security measures to protect data integrity</li>
                <li>Assisted in database administration and network management</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Certifications & Courses</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Technical Certifications</h3>
              <ul className="space-y-2 text-gray-600">
                <li>Machine Learning & AI Certifications (TensorFlow, Coursera)</li>
                <li>Data Science Specialization (IBM, Coursera)</li>
                <li>Web3 & Blockchain Fundamentals (Ethereum Foundation)</li>
                <li>Advanced Database Management (PostgreSQL, Oracle)</li>
                <li>Software Development Lifecycle (Agile, Scrum)</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Professional Interests</h3>
              <ul className="space-y-2 text-gray-600">
                <li>Data Science & AI</li>
                <li>Web Development & Software Engineering</li>
                <li>Blockchain & Web3</li>
                <li>IT Security & System Administration</li>
                <li>Tech Mentorship & Community Engagement</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 