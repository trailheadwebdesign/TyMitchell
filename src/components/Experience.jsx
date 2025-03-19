import { useState } from 'react';

function Experience() {
  const [activeTab, setActiveTab] = useState('work');

  const experiences = {
    work: [
      {
        title: "Business Applications Administrator",
        company: "Colorado Springs Utilities",
        period: "2024 - Present",
        description: "Managing Infor CloudSuite ERP system, IT governance, and business process automation. Working on data analytics, financial reporting, and optimizing enterprise applications to drive efficiency.",
        technologies: ["Infor CloudSuite", "Azure", "Python", "Power BI", "Power Automate", "IT Liaison", "SharePoint", "Project Management"]
      },
      {
        title: "Lead Technician",
        company: "The Challenger Group",
        period: "2024",
        description: "Led IT support and system administration, providing on-the-ground technical support while coordinating IT services with Meriplex. Played a key role in modernizing IT infrastructure and processes.",
        technologies: ["Azure Global Admin", "PowerShell", "SharePoint", "IT Governance", "Project Management"]
      },
      {
        title: "Help Desk Lead",
        company: "University of Colorado Colorado Springs",
        period: "2020-2024",
        description: "Managed and led a team of 40 student employees, overseeing IT support operations and workflow efficiency. Improved response times and system reliability through automation and training initiatives.",
        technologies: ["Active Directory", "PowerShell", "System Administration", "IT Support", "Networking", "Project Management", "Telecom", "Cherwell"]
      }
    ],
    projects: [
      {
        title: "OpenShift Static Web Deployment",
        client: "Personal Project",
        period: "2025",
        description: "Deployed and configured a static webpage inside OpenShift's free developer environment. Managed Apache HTTP Server and custom routing to expose the project externally.",
        technologies: ["OpenShift", "Apache", "Linux Administration", "Bash", "Containerization", "Web Hosting", "Kubernetes", "Networking & Routing"],
        link: "http://tys-test-dev-tmitchea-dev.apps.rm1.0a51.p1.openshiftapps.com/"
      },
      {
        title: "Infor CloudSuite Optimization",
        client: "Colorado Springs Utilities",
        period: "2024",
        description: "Led efforts in optimizing Infor CloudSuite for financial reporting and IT governance. Focused on process automation, financial system improvements, and data analytics.",
        technologies: ["Infor CloudSuite", "SQL", "Power BI", "Azure", "Business Analytics"]
      },
      {
        title: "SharePoint System Revamp",
        client: "The Challenger Group",
        period: "2024",
        description: "Revamped SharePoint for document management and team collaboration. Implemented best practices for IT governance and data security.",
        technologies: ["SharePoint", "Power Automate", "Azure", "IT Governance", "Project Management"]
      },
      {
        title: "Project Management Web App",
        client: "Oracle (College Capstone Project)",
        period: "2024",
        description: "Developed a database-driven project management system for Oracle using Flask and MySQL, integrating data analytics for tracking project efficiency.",
        technologies: ["Flask", "MySQL", "Python", "Data Analytics", "Power BI"]
      }
    ]
  };

  return (
    <section id="experience" className="py-24 bg-slate-50">
      <div className="section-container">
        
        {/* Title with full-width underline */}
        <div className="relative w-full mb-8">
          <h2 className="text-left text-3xl font-bold text-slate-900 border-b-4 border-blue-600 pb-2">
            My Experience
          </h2>
        </div>

        {/* Tabs for Work & Projects */}
        <div className="flex border-b border-slate-200 mb-12">
          <button
            className={`py-3 px-6 font-medium text-sm transition-colors ${
              activeTab === 'work' 
                ? 'text-blue-600 border-b-2 border-blue-600' 
                : 'text-slate-600 hover:text-blue-600'
            }`}
            onClick={() => setActiveTab('work')}
          >
            Work Experience
          </button>
          <button
            className={`py-3 px-6 font-medium text-sm transition-colors ${
              activeTab === 'projects' 
                ? 'text-blue-600 border-b-2 border-blue-600' 
                : 'text-slate-600 hover:text-blue-600'
            }`}
            onClick={() => setActiveTab('projects')}
          >
            Key Projects
          </button>
        </div>

        {/* Experience timeline */}
        <div className="relative">
          {experiences[activeTab].map((item, index) => (
            <div key={index} className="mb-12 relative">
              
              {/* Timeline connector (gray line) */}
              <div 
                className={`absolute left-[11px] top-6 w-px bg-slate-200 ${
                  index === experiences[activeTab].length - 1 ? "h-full bottom-0" : "bottom-0"
                }`}
              ></div>

              {/* Timeline dot */}
              <div className="absolute left-0 w-6 h-6 rounded-full bg-white border-2 border-blue-600 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-blue-600"></div>
              </div>
              
              {/* Content */}
              <div className="ml-12 card p-6 text-left">
                <div className="flex flex-wrap justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-slate-900">{item.title}</h3>
                  <span className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                    {item.period}
                  </span>
                </div>
                
                <p className="text-lg text-slate-700 mb-2">
                  {activeTab === 'work' ? item.company : `Client: ${item.client}`}
                </p>
                
                <p className="text-slate-600 mb-4">{item.description}</p>

                {/* External Link for OpenShift Project */}
                {item.link && (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 font-semibold hover:underline"
                  >
                    Click To View Static Page
                  </a>
                )}
                
                <div className="flex flex-wrap gap-2 mt-4">
                  {item.technologies.map((tech) => (
                    <span key={tech} className="text-xs font-medium text-slate-600 bg-slate-100 px-3 py-1 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Experience;
