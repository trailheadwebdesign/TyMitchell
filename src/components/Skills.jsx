function Skills() {
  const skillCategories = [
    {
      name: "Cloud & IT Administration",
      skills: [
        { name: "Azure", level: 5 },
        { name: "SharePoint", level: 6 },
        { name: "IT Governance", level: 3 },
        { name: "System Administration", level: 4 },
        { name: "Networking", level: 3 }
      ]
    },
    {
      name: "Programming & Scripting",
      skills: [
        { name: "Python", level: 6 },
        { name: "SQL", level: 7 },
        { name: "PowerShell", level: 4 },
        { name: "JavaScript", level: 3 },
        { name: "Java", level: 4 }
      ]
    },
    {
      name: "Data & Business Analytics",
      skills: [
        { name: "Power BI", level: 6 },
        { name: "SQL Server", level: 5 },
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
        { name: "Risk Management", level: 2 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-24 bg-white">
      <div className="section-container">
        <h2 className="text-left text-3xl font-bold text-slate-900 border-b-4 border-blue-600 pb-2 w-full">
          Skills & Expertise
        </h2>

        {/* Skill Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {skillCategories.map((category) => (
            <div key={category.name} className="card p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-6">{category.name}</h3>

              <div className="space-y-5">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-slate-700 font-medium">{skill.name}</span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-3 relative overflow-hidden shadow-md">
                      {/* Split bar with 7 segments */}
                      {Array.from({ length: 7 }).map((_, idx) => (
                        <div 
                          key={idx}
                          className={`absolute top-0 h-full border-r border-slate-300 transition-all ${
                            idx < skill.level ? 'bg-blue-600' : ''
                          }`}
                          style={{ width: "14.2857%", left: `${idx * 14.2857}%` }}
                        ></div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Certifications (Commented Out for Now) */}
        {/*
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-slate-900 mb-6">Certifications</h3>
          <div className="space-y-4">
            {[
              { name: "Microsoft Certified: Azure Administrator Associate", year: "2024" },
              { name: "Microsoft Certified: Power BI Data Analyst Associate", year: "2023" },
              { name: "ITIL Foundation Certification", year: "2023" },
              { name: "CompTIA Security+ (In Progress)", year: "2024" }
            ].map((cert) => (
              <div key={cert.name} className="flex items-start">
                <svg className="h-6 w-6 text-blue-600 mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <h4 className="font-medium text-slate-900">{cert.name}</h4>
                  <p className="text-sm text-slate-500">Issued {cert.year}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        */}

        {/* Centered Education Section */}
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
                <div key={edu.degree} className="card p-4 text-center">
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
  )
}

export default Skills;
