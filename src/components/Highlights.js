import React from "react";
import speaker1 from "../assets/images/speaker1.jpg";

const SpeakersSection = () => {
  const speakers = [
    {
      name: "Finali Fernando",
      title: "Managing Director, Regional Head of Products, CCO and Business Management, Global Payments Solutions",
      description:
        "Discover how AI and machine learning are revolutionizing fraud prevention in banking. In this demo, Finali Fernando will showcase cutting-edge tools that identify fraudulent transactions in real-time, reducing risks and enhancing trust for customers. Learn about scalable solutions that protect assets while maintaining seamless user experiences.",
      image:"https://mena.futurebanksummit.com/wp-content/uploads/2024/03/Finali-Fernando-1.jpg"
    },
    {
      name: "Amit Malhotra",
      title:
        "Global Head of Retail Banking - ADIB – Abu Dhabi Islamic Bank",
      description:
        "Explore the next level of customer engagement with [Name] as they demonstrate how advanced analytics and a 360-degree view can transform client relationships. This session highlights tools for delivering hyper-personalized financial services, improving retention rates, and increasing cross-sell opportunities.",
      image:"https://mena.futurebanksummit.com/wp-content/uploads/2024/03/Amit-Malhotra.jpg"
    },
    {
      name: "Antony Burrows",
      title: "SVP and Head of Innovation RAKBANK",
      description:
        "See how automation reshapes loan application workflows. Antony Burrows will present an intuitive AI-powered platform that simplifies credit assessments, accelerates approvals, and ensures compliance. Experience firsthand how modern technology enhances efficiency while maintaining rigorous standards.",
      image:"https://mena.futurebanksummit.com/wp-content/uploads/2024/03/Antony-Burrows-.jpg"
    },
    {
      name: "Abhishek Pratap Singh",
      title: "Head of Information Security (CISO)",
      description:
        "Dive into the evolution of payments technology with [Name]. This demo will unveil innovative tools for real-time, cross-border transactions, ensuring security and speed. Gain insights into digital wallet integrations and how they meet the demands of today’s connected consumers.",
      image:"https://mena.futurebanksummit.com/wp-content/uploads/2024/03/Abhishek-Pratap-Singh.jpg"
    },
  ];

  return (
    <section className="w-full bg-blue-600 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-white mb-12 text-center">
        FEATURED SPEAKERS
        </h1>

        <div className="space-y-8">
          {speakers.map((speaker, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="flex flex-col md:flex-row items-center gap-6 p-6">
                <div className="w-48 h-48 flex-shrink-0">
                  <img
                    src={speaker.image}
                    // alt="Modern architecture at sunset"
                  />
                </div>

                <div className="flex-1 space-y-4 text-center md:text-left">
                  <h2 className="text-2xl font-bold text-gray-900">
                    {speaker.name}
                  </h2>
                  <p className="text-lg font-medium text-gray-700">
                    {speaker.title}
                  </p>
                  <p className="text-gray-600">{speaker.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpeakersSection;
