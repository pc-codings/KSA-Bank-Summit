import React from "react";

const CheckIcon = () => (
  <svg
    viewBox="0 0 24 24"
    width="24"
    height="24"
    stroke="currentColor"
    strokeWidth="2"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const BankingTopics = () => {
  const topics = [
    { title: "CHIEF EXECUTIVE OFFICERS, MANAGING DIRECTORS", category: "leadership" },
    { title: "CIOS, CTOS, HEADS OF TECHNOLOGY", category: "technology" },
    { title: "HEADS OF CORPORATE BANKING", category: "banking" },
    { title: "HEADS OF CUSTOMER EXPERIENCE", category: "customer" },
    { title: "HEADS OF DATA & ANALYTICS", category: "analytics" },
    { title: "CHIEF DIGITAL OFFICERS, HEADS OF DIGITAL TRANSFORMATION", category: "digital" },
    { title: "CHIEF MARKETING OFFICERS, HEADS OF MARKETING", category: "marketing" },
    { title: "HEADS OF RETAIL BANKING", category: "retail" },
    { title: "HEADS OF CARDS & PAYMENTS", category: "payments" },
    { title: "HEADS OF GOVERNANCE, RISK & COMPLIANCE", category: "compliance" },
  ];

  return (
    <div className="bg-gradient-to-br from-yellow-400 via-blue-700 to-blue-900 py-10 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-white text-center mb-8">
          Who Will You Meet?
        </h1>

        {/* Image */}
        <div className="flex justify-center mb-12">
          <img
            src="https://mena.futurebanksummit.com/wp-content/uploads/2024/01/why-attend-image.jpg"
            alt="Conference audience"
            className="rounded-lg shadow-lg object-cover w-full max-w-md md:max-w-lg lg:max-w-2xl h-64 md:h-80"
          />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {topics.map((topic, index) => (
            <div
              key={index}
              className="flex items-center gap-4 p-4 bg-blue-600 rounded-lg hover:scale-105 transform transition duration-200 cursor-pointer shadow-lg"
            >
              {/* Icon */}
              <div className="text-yellow-400">
                <CheckIcon />
              </div>
              {/* Text */}
              <span className="text-white font-medium text-sm sm:text-base">
                {topic.title}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BankingTopics;
