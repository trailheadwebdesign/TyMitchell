function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-16">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-left">
          
          {/* Name & Overview */}
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-xl font-bold mb-4">Ty Mitchell<span className="text-blue-400">.</span></h2>
            <p className="text-slate-300 mb-6 max-w-md">
              Business Applications Administrator specializing in IT governance, 
              data analytics, and enterprise technology solutions. Passionate about 
              improving business processes and driving innovation.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-medium mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'About', 'Experience', 'Skills', 'Contact'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`}
                    className="text-slate-300 hover:text-white transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="text-lg font-medium mb-4">Contact</h3>
            <ul className="space-y-3 text-slate-300">
              <li className="flex items-start">
                <svg className="h-5 w-5 text-blue-400 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>tmitchea@gmail.com</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-blue-400 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>+1 (719)-235-2255</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-blue-400 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Colorado Springs, CO, USA</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-start text-left">
          <p className="text-slate-400 text-sm">
            &copy; {new Date().getFullYear()} Ty Mitchell. All rights reserved.
          </p>
          <p className="text-slate-400 text-sm mt-2 md:mt-0">
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
