function Projects() {
    const projects = [
      {
        title: "Enterprise Data Pipeline",
        description: "Azure-based ETL solution processing 10TB+ of financial data daily with real-time analytics dashboards.",
        tags: ["Azure", "Python", "Power BI"],
        image: "data-pipeline.jpg" // You'll need to add these images to your assets folder
      },
      {
        title: "Healthcare Patient Portal",
        description: "HIPAA-compliant web application serving 50,000+ patients with secure data access and telemedicine capabilities.",
        tags: ["React", "Node.js", "Azure AD B2C"],
        image: "patient-portal.jpg"
      },
      {
        title: "Inventory Management System",
        description: "Microservices-based solution with real-time inventory tracking, predictive ordering, and supplier integration.",
        tags: ["Microservices", "Kubernetes", "Azure"],
        image: "inventory-system.jpg"
      }
    ];
  
    return (
      <section id="projects" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base font-semibold tracking-wide uppercase text-[#00A99D]">Projects</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Recent Work
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Enterprise solutions built with scalability, security, and performance in mind.
            </p>
          </div>
  
          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <div key={index} className="bg-white overflow-hidden shadow-lg rounded-lg hover:shadow-2xl transition-shadow duration-300">
                <div className="h-48 bg-gray-200 w-full">
                  {/* Replace with actual images */}
                  <div className="w-full h-full bg-gradient-to-r from-[#0078D4] to-[#00A99D] opacity-80 flex items-center justify-center text-white text-xl font-bold">
                    {project.title}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900">{project.title}</h3>
                  <p className="mt-2 text-gray-600">{project.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag, idx) => (
                      <span key={idx} className="px-3 py-1 text-xs font-medium bg-[#0078D4]/10 text-[#0078D4] rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="mt-6">
                    <a href="#" className="text-[#0078D4] hover:text-[#0078D4]/80 font-medium flex items-center">
                      View Project
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
  
  export default Projects