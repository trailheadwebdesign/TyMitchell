import { useState } from 'react';

function Navbar({ scrolled, bgColor = "bg-white" }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  return (
    <>
      {/* Spacer div that matches the background color */}
      <div className={`h-16 w-full ${bgColor}`}></div>
      
      {/* Fixed navbar */}
      <header className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex-shrink-0">
              <a href="#" className="flex items-center">
                <span className={`font-bold text-xl ${scrolled ? 'text-blue-600' : 'text-slate-800'}`}>
                  Ty Mitchell<span className="text-blue-600">.</span>
                </span>
              </a>
            </div>
            
            {/* Desktop navigation */}
            <nav className="hidden md:flex space-x-8">
              {['Home', 'About', 'Experience', 'Skills', 'Contact'].map((item) => (
                <a 
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className={`transition-colors duration-200 text-sm font-medium ${
                    scrolled ? 'text-slate-700 hover:text-blue-600' : 'text-slate-800 hover:text-blue-600'
                  }`}
                >
                  {item}
                </a>
              ))}
            </nav>
            
            {/* Desktop Resume Button */}
            <div className="hidden md:block">
              <a 
                href="Resume.pdf" 
                download="Ty Mitchell's Resume"
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                  scrolled ? 'bg-blue-600 text-white hover:bg-blue-700' 
                  : 'bg-blue-600 bg-opacity-90 text-white hover:bg-opacity-100'
                }`}
              >
                Download Resume
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                type="button"
                className={`inline-flex items-center justify-center p-2 rounded-md ${
                  scrolled ? 'text-slate-700 hover:text-blue-600' : 'text-slate-800 hover:text-blue-600'
                }`}
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <span className="sr-only">Open main menu</span>
                {mobileMenuOpen ? (
                  <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>
          
          {/* Mobile menu with animation */}
          <div 
            className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
              mobileMenuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg rounded-lg mt-2">
              {['Home', 'About', 'Experience', 'Skills', 'Contact'].map((item, index) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className={`block px-3 py-2 text-base font-medium text-slate-800 hover:text-blue-600
                    transform transition-all duration-300 ease-in-out
                    ${mobileMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'}
                  `}
                  style={{ transitionDelay: mobileMenuOpen ? `${index * 50}ms` : '0ms' }}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              {/* Mobile Resume Download Button */}
              <a
                href="Resume.pdf"
                download="Ty Mitchell's Resume"
                className="block w-full px-3 py-2 text-base font-medium text-white bg-blue-600 hover:bg-blue-700 text-center rounded-md transition-colors duration-200"
                onClick={() => setMobileMenuOpen(false)}
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Navbar;
