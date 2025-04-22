import { useState } from 'react';

function Experience() {
  const [activeTab, setActiveTab] = useState('work');

  const experiences = {
    work: [
      {
        title: "Business Applications Analyst (Accounting)",
        company: "Colorado Springs Utilities",
        period: "2024 - Present",
        description:
          "Managing Infor CloudSuite ERP system, IT governance, and business process automation. Working on data analytics, financial reporting, and optimizing enterprise applications to drive efficiency.",
        technologies: [
          "Infor CloudSuite",
          "Azure",
          "Python",
          "Power BI",
          "Power Automate",
          "IT Liaison",
          "SharePoint",
          "Project Management",
        ],
      },
      {
        title: "IT Systems Analyst – Data Strategy & Governance",
        company: "The Challenger Group",
        period: "2024",
        description:
          "Led IT support and system administration, providing on-the-ground technical support while coordinating IT services with Meriplex. Played a key role in modernizing IT infrastructure and processes.",
        technologies: [
          "Azure Global Admin",
          "PowerShell",
          "SharePoint",
          "IT Governance",
          "Project Management",
        ],
      },
      {
        title: "IT Service & Operations Lead",
        company: "University of Colorado Colorado Springs",
        period: "2020-2024",
        description:
          "Managed and led a team of 40 student employees, overseeing IT support operations and workflow efficiency. Improved response times and system reliability through automation, analytics and training initiatives.",
        technologies: [
          "Active Directory",
          "PowerShell",
          "System Administration",
          "IT Support",
          "Networking",
          "Project Management",
          "Telecom",
          "Cherwell",
        ],
      },
    ],
    projects: [
      {
        title: "Financial Reporting & Data Automation (Infor CloudSuite)",
        period: "2024",
        description:
          "Automated recurring financial reports and optimized SQL queries within Infor CloudSuite to support compliance, forecasting, and executive dashboards. Streamlined data pipelines and improved reporting consistency through Power BI visualizations.",
        technologies: [
          "Infor CloudSuite",
          "SQL",
          "Power BI",
          "Azure",
          "Financial Analytics",
        ],
      },
      {
        title: "Governed Document Analytics with SharePoint",
        period: "2024",
        description:
          "Redesigned SharePoint structure to enable metadata-driven file categorization and usage reporting. Created automated Power BI dashboards to analyze content lifecycle, access patterns, and storage optimization across departments.",
        technologies: [
          "SharePoint",
          "Power BI",
          "Power Automate",
          "Azure",
          "Governance Reporting",
        ],
      },
      {
        title: "Data-Driven Project Management System",
        period: "2024",
        description:
          "Built a full-stack web application to track project KPIs, team performance, and deadlines using Flask and MySQL. Integrated data visualization and analytics features to enable stakeholder insights into project health and resource efficiency.",
        technologies: [
          "Python",
          "Flask",
          "MySQL",
          "Power BI",
          "Data Visualization",
        ],
      },
    ],
  };

  const renderDescription = (text) => {
    return (
      <p className="text-slate-600 mb-4 break-words whitespace-pre-wrap">
        {text}
      </p>
    );
  };

  return (
    <section id="experience" className="py-24 bg-slate-50">
      <div className="section-container">
        <div className="relative w-full mb-8">
          <h2 className="text-left text-3xl font-bold text-slate-900 border-b-4 border-blue-600 pb-2">
            My Experience
          </h2>
        </div>
        <div className="flex border-b border-slate-200 mb-12">
          <button
            className={`py-3 px-6 font-medium text-sm transition-colors ${
              activeTab === "work"
                ? "text-blue-600 border-b-2 border-blue-600"
                : "text-slate-600 hover:text-blue-600"
            }`}
            onClick={() => setActiveTab("work")}
          >
            Work Experience
          </button>
          <button
            className={`py-3 px-6 font-medium text-sm transition-colors ${
              activeTab === "projects"
                ? "text-blue-600 border-b-2 border-blue-600"
                : "text-slate-600 hover:text-blue-600"
            }`}
            onClick={() => setActiveTab("projects")}
          >
            Key Projects
          </button>
        </div>
        <div className="relative">
          {experiences[activeTab].map((item, index) => (
            <div key={index} className="mb-12 relative">
              <div
                className={`absolute left-[11px] top-6 w-px bg-slate-200 ${
                  index === experiences[activeTab].length - 1
                    ? "h-full bottom-0"
                    : "bottom-0"
                }`}
              ></div>
              <div className="absolute left-0 w-6 h-6 rounded-full bg-white border-2 border-blue-600 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-blue-600"></div>
              </div>
              <div className="ml-12 card p-6 text-left">
                <div className="flex flex-wrap justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-slate-900">
                    {item.title}
                  </h3>
                  <span className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                    {item.period}
                  </span>
                </div>
                {activeTab === "work" && (
                  <p className="text-lg text-slate-700 mb-2">{item.company}</p>
                )}
                {renderDescription(item.description)}
                {item.links && (
                  <div className="flex flex-wrap gap-4 mb-4">
                    {item.links.map((link, idx) => (
                      <a
                        key={idx}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 font-semibold hover:underline"
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                )}
                <div className="flex flex-wrap gap-2 mt-2">
                  {item.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-medium text-slate-600 bg-slate-100 px-3 py-1 rounded-full"
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
    </section>
  );
}

export default Experience;
