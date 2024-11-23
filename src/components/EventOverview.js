import React from "react";
import hero1 from "../assets/images/hero1.jpg";
import hero2 from "../assets/images/hero2.jpg";

const EventOverview = () => {
  return (
    <div className="bg-white min-h-screen relative overflow-hidden">
      {/* Left Side Decorative Bars */}
      <div className="absolute left-4 top-16 z-10 hidden lg:block">
        <div className="space-y-4">
          <div className="h-2 w-24 bg-emerald-400 rounded"></div>
          <div className="h-2 w-16 bg-emerald-400 rounded"></div>
          <div className="h-2 w-32 bg-emerald-400 rounded"></div>
          <div className="h-2 w-20 bg-emerald-400 rounded"></div>
        </div>
      </div>

      {/* Right Side Decorative Dots */}
      <div className="absolute right-8 top-96 z-10 hidden lg:grid grid-cols-4 gap-4">
        {[...Array(16)].map((_, i) => (
          <div key={i} className="w-3 h-3 rounded-full bg-gray-400"></div>
        ))}
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Heading */}
        <div className="text-center py-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Event Overview
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold text-gray-700">
            The future of the financial industry in KSA
          </h2>
        </div>

        {/* First Content Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 mb-16 md:mb-24">
          <div className="md:w-1/2 lg:pr-12">
            <p className="text-lg md:text-xl text-gray-700">
              The banking industry worldwide is undergoing phenomenal change,
              giving the banks an opportunity to relook into their existing
              business models and take a huge leap towards the future. The shift
              in consumers' digital experience, adoption of next-gen
              technologies, transformation of customer service to customer
              engagement, mobile workforce with a need to 'right-size' the
              branch network are all opportunities for regional banks to seize
              and accelerate the shift to digital.
            </p>
          </div>
          <div className="md:w-1/2">
            <img
              src={hero2}
              alt="Modern architecture at sunset"
              className="w-full rounded-lg shadow-xl object-cover h-[300px] md:h-[400px]"
            />
          </div>
        </div>

        {/* Second Content Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 mb-16 md:mb-24">
          <div className="md:w-1/2">
            <img
              src={hero1}
              alt="Conference audience"
              className="w-full rounded-lg shadow-xl object-cover h-[300px] md:h-[400px]"
            />
          </div>
          <div className="md:w-1/2 lg:pl-12">
            <p className="text-lg md:text-xl text-gray-700 mb-6">
              The 4th Annual Future Banks Summit KSA 2023 will showcase the
              latest innovations and practical case studies, along with
              interactive panel discussions designed to guide the banking sector
              in KSA in identifying the right strategies to overcome
              long-standing resistance and be future-ready!
            </p>
            <p className="text-lg md:text-xl text-gray-700">
              Join us for an unprecedented experience of learning and networking.
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="text-center pb-12 relative">
          <h2 className="text-xl md:text-2xl font-bold text-white bg-blue-600 py-4 px-6 rounded-lg inline-block max-w-xs md:max-w-lg">
            Meet our keynote speakers
          </h2>
        </div>
      </div>
    </div>
  );
};

export default EventOverview;
