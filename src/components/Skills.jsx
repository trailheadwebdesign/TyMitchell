function Skills() {
  const skillCategories = [
    {
      name: "Cloud & MAS Administration",
      skills: [
        { name: "IBM Maximo (9.0)", level: 3 },
        { name: "MAS Configuration & Integration", level: 3 },
        { name: "OpenShift & Containerization", level: 3 },
        { name: "Linux (Ubuntu, RHEL)", level: 5 },
        { name: "ServiceNow Ticket Management", level: 3 },
        { name: "Asset Management Lifecycle", level: 3 }
      ]
    },
    {
      name: "Programming & Scripting",
      skills: [
        { name: "Python", level: 6 },
        { name: "SQL", level: 7 },
        { name: "PowerShell", level: 4 },
        { name: "JavaScript", level: 3 },
        { name: "Java", level: 4 },
        { name: "Bash", level: 5 }
      ]
    },
    {
      name: "Data & Business Analytics",
      skills: [
        { name: "Power BI", level: 6 },
        { name: "SQL Server", level: 4 },
        { name: "Data Modeling", level: 6 },
        { name: "Excel (Advanced)", level: 6 },
        { name: "AI Querying & Automation", level: 7 }
      ]
    },
    {
      name: "Business Leadership & Project Management",
      skills: [
        { name: "Project Management", level: 4 },
        { name: "IT Strategy & Governance", level: 4 },
        { name: "Agile & Scrum", level: 3 },
        { name: "Process Optimization", level: 5 },
        { name: "Risk Management", level: 3 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-24 bg-white">
      <div className="section-container">
        <h2 className="text-left text-3xl font-bold text-slate-900 border-b-4 border-blue-600 pb-2 w-full">
          Skills & Expertise
        </h2>

        {/* Unified Skill Level Legend */}
        <div className="mt-10 mb-16">
          <h3 className="text-md font-semibold text-slate-800 mb-4 text-center">Skill Level Reference</h3>
          <div className="relative w-full md:w-2/3 lg:w-1/2 mx-auto">
            <div className="w-full h-4 rounded-full overflow-hidden shadow-md flex">
              {Array.from({ length: 7 }).map((_, idx) => {
                let bg = '';
                if (idx <= 2) bg = 'bg-blue-200';
                else if (idx <= 4) bg = 'bg-blue-500';
                else bg = 'bg-blue-800';

                return (
                  <div
                    key={idx}
                    className={`${bg} relative`}
                    style={{ width: '14.2857%' }}
                  >
                    {idx < 6 && (
                      <div className="absolute inset-y-0 right-0 w-px bg-white opacity-80"></div>
                    )}
                  </div>
                );
              })}
            </div>
            <div className="flex justify-between mt-3 text-sm text-slate-600 font-medium">
              <span className="text-left w-1/3">1–3: Familiar / Learning</span>
              <span className="text-center w-1/3">4–5: Proficient / Comfortable</span>
              <span className="text-right w-1/3">6–7: Skilled / Advanced</span>
            </div>
          </div>
        </div>

        {/* Skill Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category) => (
            <div key={category.name} className="card p-6 border border-slate-200 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-slate-900 mb-6">{category.name}</h3>
              <div className="space-y-5">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-slate-700 font-medium">{skill.name}</span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-3 relative overflow-hidden shadow-inner">
                      {Array.from({ length: 7 }).map((_, idx) => {
                        let bgColor = '';
                        if (idx < skill.level) {
                          if (idx <= 2) bgColor = 'bg-blue-200';
                          else if (idx <= 4) bgColor = 'bg-blue-500';
                          else bgColor = 'bg-blue-800';
                        }
                        return (
                          <div
                            key={idx}
                            className={`${bgColor} absolute top-0 h-full border-r border-white`}
                            style={{ width: '14.2857%', left: `${idx * 14.2857}%` }}
                          ></div>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Education Section */}
        <div className="mt-16 flex justify-center">
          <div className="w-full md:w-2/3 lg:w-1/2">
            <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">Education</h3>
            <div className="space-y-6">
              {[
                {
                  degree: "Master of Business Administration in Information Technology Management (MBA)",
                  institution: "Western Governors University (WGU)",
                  year: "2025 (In Progress)",
                  description: "Specializing in Business IT Administration and Data Analytics."
                },
                {
                  degree: "Bachelor of Science in Information Systems",
                  institution: "University of Colorado Colorado Springs",
                  year: "2024",
                  description: "Focused on Data Analytics, IT Strategy, and Project Management."
                }
              ].map((edu) => (
                <div key={edu.degree} className="card p-4 text-center border border-slate-200 rounded-lg">
                  <h4 className="font-bold text-slate-900">{edu.degree}</h4>
                  <p className="text-blue-600">{edu.institution}</p>
                  <p className="text-sm text-slate-500 mb-2">{edu.year}</p>
                  <p className="text-slate-600 text-sm">{edu.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
