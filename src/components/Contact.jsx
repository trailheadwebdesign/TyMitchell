import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="section-container">
        <h2 className="text-left text-3xl font-bold text-slate-900 border-b-4 border-blue-600 pb-2">
          Get in Touch
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          {/* Contact Info */}
          <div>
            <p className="text-slate-600 mb-8 text-left">
              I'm always open to discussing new opportunities, projects, and collaborations. Feel free to reach out!
            </p>

            <div className="space-y-6 text-left">
              {/* Phone */}
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                  <svg className="h-5 w-5 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-slate-900">Phone</h3>
                  <p className="mt-1 text-slate-600">+1 (719)-235-2255</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                  <svg className="h-5 w-5 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-slate-900">Email</h3>
                  <p className="mt-1 text-slate-600">tmitchea@gmail.com</p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                  <svg className="h-5 w-5 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-slate-900">Location</h3>
                  <p className="mt-1 text-slate-600">Colorado Springs, Colorado, USA</p>
                </div>
              </div>
            </div>

            {/* LinkedIn Link */}
            <div className="mt-8">
              <h3 className="text-lg font-medium text-slate-900 mb-4 text-left">Connect with me</h3>
              <a
                href="https://www.linkedin.com/in/ty-mitchell/"
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-full bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700 transition-colors"
              >
                <span className="sr-only">LinkedIn</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Contact Form - Using FormSubmit.co as a reliable alternative */}
          <div>
            {submitted ? (
              <div className="card p-6">
                <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded relative mb-6" role="alert">
                  <strong className="font-bold">Success! </strong>
                  <span className="block sm:inline">Your message has been sent. I'll get back to you soon!</span>
                </div>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-blue-600 hover:text-blue-800 font-medium"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form 
                action="https://formsubmit.co/tmitchea@gmail.com" 
                method="POST"
                className="card p-6 text-left"
                onSubmit={() => {
                  setSubmitting(true);
                  // FormSubmit will handle the actual submission
                  // We just need to set the UI state for visual feedback
                  setTimeout(() => {
                    setSubmitting(false);
                    setSubmitted(true);
                  }, 1000);
                }}
              >
                {/* FormSubmit configuration */}
                <input type="hidden" name="_subject" value="New contact form submission from your portfolio" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="table" />
                <input type="hidden" name="_next" value={window.location.href} />
                
                {/* Name field */}
                <div className="mb-6">
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                
                {/* Email field */}
                <div className="mb-6">
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                
                {/* Subject field */}
                <div className="mb-6">
                  <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                
                {/* Message field */}
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  disabled={submitting}
                  className={`w-full bg-blue-600 text-white font-medium py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200 ${submitting ? 'opacity-75 cursor-not-allowed' : ''}`}
                >
                  {submitting ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    'Send Message'
                  )}
                </button>
                
                <p className="text-sm text-slate-500 mt-4">
                  You can also email me directly at <a href="mailto:tmitchea@gmail.com" className="text-blue-600 hover:underline">tmitchea@gmail.com</a>
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
