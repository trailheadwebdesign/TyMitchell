import { useState, useEffect } from 'react';

function Hero() {
  const [typed, setTyped] = useState('');
  const [typeIndex, setTypeIndex] = useState(0);
  const roles = [
    'Business Applications Admin',
    'Data Analyst',
    'IT Governance Specialist',
    'Technology Strategist'
  ];
  
  useEffect(() => {
    const typeRole = () => {
      const currentRole = roles[typeIndex];
      
      let i = 0;
      const typing = setInterval(() => {
        setTyped(currentRole.substring(0, i));
        i++;
        
        if (i > currentRole.length) {
          clearInterval(typing);
          
          // Pause before deleting
          setTimeout(() => {
            let j = currentRole.length;
            const deleting = setInterval(() => {
              setTyped(currentRole.substring(0, j));
              j--;
              
              if (j < 0) {
                clearInterval(deleting);
                setTypeIndex((prevIndex) => (prevIndex + 1) % roles.length);
              }
            }, 50);
          }, 2000);
        }
      }, 100);
    };
    
    typeRole();
  }, [typeIndex]);
  
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100">
      
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-50 rounded-full opacity-70"></div>
        <div className="absolute top-1/4 left-10 w-40 h-40 bg-blue-100 rounded-full opacity-50"></div>
        <div className="absolute bottom-20 right-1/4 w-60 h-60 bg-blue-100 rounded-full opacity-40"></div>
      </div>
      
      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <div className="text-left">
            <h2 className="text-blue-600 font-bold mb-2">Hello, I'm</h2>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-slate-900 mb-4">
              Ty Mitchell
            </h1>
            <h2 className="text-2xl sm:text-3xl font-medium text-slate-700 mb-6 h-8">
              <span>{typed}</span>
              <span className="animate-blink">|</span>
            </h2>
            <p className="text-slate-600 text-lg mb-8 max-w-lg">
              Business Applications Administrator at Colorado Springs Utilities, specializing in 
              Infor CloudSuite, IT Governance, and Data Analytics. Passionate about 
              optimizing enterprise IT operations, developing strategic solutions, and driving 
              business efficiency through technology.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#contact" className="btn-primary">
                Get in Touch
              </a>
              <a href="#experience" className="btn-secondary">
                View My Work
              </a>
            </div>
            
            {/* Social Media Links */}
            <div className="mt-12 flex items-center space-x-6">
              <a href="https://www.linkedin.com/in/ty-mitchell/" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-blue-600 transition-colors">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
            </div>
          </div>
          
          {/* Profile Image */}
          <div className="hidden lg:block">
            <div className="relative">
              <div className="absolute inset-0 bg-blue-600 rounded-lg transform rotate-3 translate-x-4 translate-y-4 opacity-20"></div>
              <div className="relative overflow-hidden rounded-lg shadow-xl">
                <img 
                  src="src/assets/pfp.jpg" 
                  alt="Ty Mitchell" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
