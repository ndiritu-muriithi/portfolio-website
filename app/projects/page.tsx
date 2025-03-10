export default function Projects() {
  const projects = [
    {
      title: "Predictive Analytics Model for Financial Forecasting",
      description: "Developed a machine learning model for financial trend analysis using Python and TensorFlow. The model helps businesses make data-driven decisions by predicting market trends and financial outcomes.",
      technologies: ["Python", "TensorFlow", "scikit-learn", "Pandas", "NumPy"],
      category: "Data Science"
    },
    {
      title: "Blockchain-Based Voting System",
      description: "Designed and implemented a decentralized voting application using Solidity and Ethereum. The system ensures secure, transparent, and tamper-proof voting processes.",
      technologies: ["Solidity", "Ethereum", "Web3.js", "React", "Node.js"],
      category: "Blockchain"
    },
    {
      title: "Customer Churn Prediction System",
      description: "Built a predictive model to identify customer retention strategies. The system analyzes customer behavior patterns to predict potential churn and suggest retention strategies.",
      technologies: ["Python", "Machine Learning", "scikit-learn", "Pandas", "Matplotlib"],
      category: "Data Science"
    },
    {
      title: "Web-Based CRM System",
      description: "Developed a comprehensive CRM tool for client data management and engagement. The system includes features for contact management, lead tracking, and sales analytics.",
      technologies: ["React", "Node.js", "MongoDB", "Express", "REST API"],
      category: "Web Development"
    }
  ];

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-12 text-center">Projects & Portfolio</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-2xl font-semibold text-gray-800">{project.title}</h2>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                    {project.category}
                  </span>
                </div>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 