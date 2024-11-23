import React, { useState, useEffect } from "react";

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);

  // Check screen size on mount and resize
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  return (
    <div className="relative w-full min-h-screen bg-white overflow-hidden">
      {/* Video container with aspect ratio maintenance */}
      <div className="relative w-full h-full min-h-screen">
        <iframe
          className={`absolute inset-0 w-full h-full object-cover ${
            isMobile ? 'object-contain' : 'object-cover'
          }`}
          src="https://www.youtube.com/embed/Kqf7-pCyWG4?autoplay=1&mute=1&loop=1&playlist=Kqf7-pCyWG4&controls=0&modestbranding=1&showinfo=0&rel=0&disablekb=1"
          allow="autoplay; encrypted-media"
          allowFullScreen
        ></iframe>
        
        {/* Semi-transparent overlay */}
        <div className="absolute inset-0 bg-black/50 z-10"></div>

        {/* Content overlay */}
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-white p-4 md:p-8">
          <div className="max-w-4xl w-full text-center space-y-4">
            {/* Main tagline */}
            <h2 className="text-xl md:text-3xl lg:text-4xl font-bold inline-block bg-orange-500/80 px-4 py-2">
              The top event for Bank Industry
            </h2>

            {/* Event details */}
            <div className="space-y-4 mt-6">
              <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold">
                4th Annual Future Banks Summit & Awards
              </h1>
              
              <h2 className="text-lg md:text-2xl lg:text-3xl font-semibold bg-black/70 inline-block px-4 py-2">
                September 11th - 12th, 2023 | Riyadh Marriott Hotel
              </h2>
              
              <p className="text-base md:text-lg lg:text-xl bg-black/70 inline-block px-4 py-2">
                Digital Innovations Transforming the Kingdom's Banking Landscape
              </p>

              <a
                href="https://www.ksa.futurebanksummit.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-6 bg-orange-500 hover:bg-orange-600 transition-colors text-white font-bold py-3 px-6 rounded-lg text-lg"
              >
                Visit Official Website
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;