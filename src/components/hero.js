import React from 'react';

const WhyAttendSection = () => {
  const features = [
    {
      title: "Knowledge and Insights",
      description: "Gain Knowledge and Insights from Top Industry Leaders and Experts from across the globe",
      icon: () => (
        <div className="text-blue-500">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"/>
            <line x1="12" y1="16" x2="12" y2="12"/>
            <line x1="12" y1="8" x2="12" y2="8"/>
          </svg>
        </div>
      )
    },
    {
      title: "Networking",
      description: "Network with Industry Peers in a solution-oriented environment",
      icon: () => (
        <div className="text-blue-500">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
            <circle cx="9" cy="7" r="4"/>
            <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
            <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
          </svg>
        </div>
      )
    },
    {
      title: "Meet Industry Leaders",
      description: "Discuss Significant Partnerships and Collaborations with Industry leaders",
      icon: () => (
        <div className="text-blue-500">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
            <circle cx="9" cy="7" r="4"/>
            <path d="M22 21v-2a4 4 0 0 0-4-4h-2"/>
            <circle cx="16" cy="11" r="4"/>
          </svg>
        </div>
      )
    },
    {
      title: "Real-time case studies",
      description: "Deep Dive into Insights derived from real-world implementations",
      icon: () => (
        <div className="text-blue-500">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
            <line x1="8" y1="21" x2="16" y2="21"/>
            <line x1="12" y1="17" x2="12" y2="21"/>
          </svg>
        </div>
      )
    },
    {
      title: "Collaboration",
      description: "Build Industry Ecosystem Collaboration to Drive Innovation",
      icon: () => (
        <div className="text-blue-500">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
            <circle cx="9" cy="7" r="4"/>
            <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
            <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
          </svg>
        </div>
      )
    },
    {
      title: "Explore global expansion",
      description: "Explore global expansion through market insights",
      icon: () => (
        <div className="text-blue-500">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"/>
            <line x1="2" y1="12" x2="22" y2="12"/>
            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
          </svg>
        </div>
      )
    }
  ];

  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-16">Why Attend?</h2>
        </div>

        {/* Hero Section */}
        <div className="mb-16">
          <div className="bg-white rounded-lg overflow-hidden shadow-lg">
            <div className="md:flex">
              <div className="md:flex-shrink-0">
                <img 
                  className="h-64 w-full object-cover md:w-96" 
                  src="https://mena.futurebanksummit.com/wp-content/uploads/2024/01/image.jpg"
                  alt="Conference discussion panel" 
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  3rd Annual Future Banks Summit MENA 2024
                </h3>
                <p className="text-gray-600">
                  Will highlight the enabling role of digitalization in reshaping the future of banking. 
                  The pandemic has forced digital acceleration at such a massive scale that banks are 
                  not just looking to transform but forced to reimagine the business. Delegates will 
                  experience a power-packed agenda consisting of presentations, panel discussions and 
                  keynotes from globally and regionally renowned speakers, panelists and moderators.
                </p>
                <button className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors">
                  Register Today
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex flex-col items-center text-center">
                <feature.icon />
                <h3 className="mt-4 text-xl font-semibold text-gray-900">
                  {feature.title}
                </h3>
                <p className="mt-2 text-gray-600">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyAttendSection;