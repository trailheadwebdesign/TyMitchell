import React from 'react';

function OpenShiftProject() {
  return (
    <section className="py-24 bg-white">
      <div className="section-container max-w-6xl mx-auto px-6 text-left">

        {/* Title */}
        <h2 className="text-4xl font-bold text-slate-900 border-b-4 border-blue-600 pb-2">
          🔧 OpenShift Static Web Deployment
        </h2>

        {/* Overview */}
        <div className="mt-6">
            <p className="text-lg text-slate-700 leading-relaxed">
            I deployed a containerized Apache HTTP Server within the Red Hat OpenShift Developer Sandbox.
            This project showcases my ability to manage cloud-native infrastructure, container orchestration, and CLI-based deployments from scratch.
            </p>

        </div>

        {/* Flex Layout for Commands and Image */}
        <div className="flex flex-col lg:flex-row gap-10 mt-10">

          {/* Left: Commands Card */}
          <div className="flex-1 bg-slate-50 p-6 rounded-lg shadow-lg flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-semibold text-blue-600 mb-4">✅ Steps Taken & Commands</h3>
              <div className="space-y-6">
                {[
                  { step: 'Create OpenShift Project', cmd: 'oc new-project my-project' },
                  { step: 'Deploy Apache Container', cmd: 'oc new-app httpd --name=tys-web-server' },
                  { step: 'Expose Service Publicly', cmd: 'oc expose svc tys-web-server' },
                  { step: 'Check Running Pods', cmd: 'oc get pods' },
                  { step: 'Check Logs for Debugging', cmd: 'oc logs -f tys-web-server-7f84d45b4c-g9d6s' },
                  { step: 'Modify Apache Config', cmd: 'vi /etc/httpd/conf/httpd.conf' },
                  { step: 'Replace Default Web Page', cmd: 'echo "<html>Custom OpenShift Page</html>" > /temp/web/index.html' },
                  { step: 'Restart Apache Server', cmd: 'httpd -k restart' },
                ].map((item, idx) => (
                  <div key={idx}>
                    <p className="font-medium text-slate-800">{idx + 1}️⃣ {item.step}</p>
                    <pre className="bg-gray-900 text-green-300 text-sm p-3 rounded-md overflow-auto">
                      {item.cmd}
                    </pre>
                  </div>
                ))}
              </div>
            </div>

            {/* Skills Demonstrated */}
            <div className="mt-8">
              <h3 className="text-xl font-semibold text-blue-600 mb-3">🧠 Skills Demonstrated</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "OpenShift CLI", "Linux", "Containerization",
                  "Apache Web Server", "Bash", "Cloud Infrastructure",
                  "Networking", "Troubleshooting"
                ].map((skill) => (
                  <span key={skill} className="text-xs font-medium text-slate-600 bg-slate-100 px-3 py-1 rounded-full">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Screenshot */}
          <div className="flex-1 flex items-stretch">
            <div className="w-full border-2 border-slate-300 rounded-lg shadow-lg overflow-hidden">
              <img
                src="/OpenShift.jpg"
                alt="OpenShift Deployment Screenshot"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Deployment Info */}
        <div className="mt-12">
          <h3 className="text-xl font-semibold text-blue-600 mb-3">🌐 Project Deployment</h3>
          <p className="text-lg text-slate-700">
             Originally Hosted at:
            <code className="text-blue-600 font-semibold block mt-1">
              tys-web-server-tmitchea-dev.apps.rm1.0a51.p1.openshiftapps.com
              (the apache server was automatically taken down after 24 hours, due to a limited run time in the sandbox version of OpenShift )
            </code>
          </p>
          <p className="text-lg text-slate-700 mt-2">
            OpenShift Test Environment:
            <a
              href="https://console.redhat.com/openshift/sandbox/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 font-semibold hover:underline ml-1"
            >
              OpenShift Sandbox Link
            </a>
          </p>
        </div>

        {/* Back Button */}
        <div className="mt-12">
          <a
            href="/"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-md transition-colors duration-200"
          >
            Back to Home
          </a>
        </div>
      </div>
    </section>
  );
}

export default OpenShiftProject;
