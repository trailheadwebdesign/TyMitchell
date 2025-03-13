import { useState } from "react";

function About() {
  const [imageError, setImageError] = useState(false);

  return (
    <section id="about" className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center md:max-w-screen-md lg:max-w-screen-lg">

          {/* Image and Experience Metrics Container */}
          <div className="relative max-w-lg lg:max-w-none flex flex-col items-center md:items-center lg:items-center">
            
            {/* Profile Image */}
            <div className="relative rounded-lg overflow-hidden shadow-xl w-full max-w-[350px]">
              <img
                src={imageError ? "https://placehold.co/600x400?text=Profile+Image" : "pfp.jpg"}
                alt="About Me"
                className="w-full h-auto object-cover rounded-lg"
                onError={() => setImageError(true)}
              />
            </div>

            {/* Experience Metrics */}
            <div className="relative mt-6 md:mt-10 lg:mt-12 w-full max-w-[350px] text-center">
              <div className="absolute inset-0 bg-blue-600 rounded-lg transform -rotate-3 -translate-x-2 -translate-y-2 opacity-30"></div>
              <div className="relative bg-white rounded-lg shadow-xl p-6 md:p-8 w-full">
                <div className="grid grid-cols-2 gap-8">
                  <div className="text-center">
                    <p className="text-4xl md:text-5xl font-bold text-blue-600">5+</p>
                    <p className="text-sm md:text-base text-slate-600">Years in IT & Data Analytics</p>
                  </div>
                  <div className="text-center">
                    <p className="text-4xl md:text-5xl font-bold text-blue-600">25+</p>
                    <p className="text-sm md:text-base text-slate-600">Major Projects Completed</p>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* About Content */}
          <div className="text-left w-full">
            <h2 className="text-3xl font-bold text-slate-800 mb-6">About Me</h2>
            <p className="text-slate-600 mb-6">
              I'm Ty Mitchell, a Business Applications Administrator at Colorado Springs Utilities, 
              specializing in project management, data analytics, and enterprise technology solutions. 
              I bridge the gap between business strategy and technical implementation, optimizing workflows, 
              implementing scalable IT systems, and leveraging data-driven insights to enhance decision-making.
            </p>
            <p className="text-slate-600 mb-6">
              My experience includes working with Azure cloud infrastructure, enterprise applications, 
              and financial systems such as Infor CloudSuite. I focus on streamlining IT operations, ensuring 
              security & compliance, and leading digital transformation efforts. My background in 
              Python, SQL, Tableau, and Power BI enables me to develop analytical solutions that 
              improve efficiency and drive business growth.
            </p>
            <p className="text-slate-600 mb-6">
              Outside of work, technology is both my profession and my passion. I enjoy programming video games, working on automation projects, and building websites—including this one, which I developed from scratch.  
              I also love cars, mountain biking, and testing the latest advancements in AI.
            </p>
            
            {/* Key Skills */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              {[
                "IT Governance & Compliance",
                "Enterprise IT Strategy",
                "Data Analytics & Business Intelligence",
                "Process Automation & Workflow Optimization",
                "Cybersecurity & Risk Management",
                "Infor CloudSuite & ERP Systems",
                "Python & SQL for Data Processing",
                "Power BI & Tableau for Reporting"
              ].map((skill) => (
                <div key={skill} className="flex items-center">
                  <svg className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-slate-700">{skill}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-8">
              <a href="#experience" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-md transition-colors duration-200">
                View My Work
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default About;
