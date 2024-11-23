import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-r from-blue-600 via-blue-400 to-cyan-300 p-8">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center gap-8">
        {/* Initiative Section */}
        <div className="flex flex-col items-center lg:items-start">
          <p className="text-white mb-2">An Initiative By:</p>
          <div className="text-white text-2xl font-bold">
            VERVE
            <span className="text-red-600 text-3xl ml-1">+</span>
            <div className="text-lg font-normal">management</div>
          </div>
          
          {/* Social Media Icons */}
          <div className="flex gap-4 mt-4">
            {['facebook', 'twitter', 'linkedin', 'instagram'].map((social) => (
              <a
                key={social}
                href={`#${social}`}
                className="w-8 h-8 bg-white bg-opacity-20 rounded flex items-center justify-center hover:bg-opacity-30 transition-all"
              >
                <span className="text-white text-sm">
                  {social[0].toUpperCase()}
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className="flex flex-col items-center lg:items-start text-white">
          <h3 className="text-xl font-semibold mb-4">Contact</h3>
          <div className="space-y-2">
            <div className="flex items-start gap-2">
              <span className="mt-1">📍</span>
              <p className="max-w-xs">
                1702 & 1706, Mazaya Business Avenue BB2, Al Thanya Fifth, Jumeirah Lakes Towers, Dubai, UAE
              </p>
            </div>
            <div className="flex items-center gap-2">
              <span>📞</span>
              <p>+971 4 243 4677/88</p>
            </div>
            <div className="flex items-center gap-2">
              <span>✉️</span>
              <p>info@verve-management.com</p>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="flex flex-col items-center lg:items-start">
          <h3 className="text-xl font-semibold text-white mb-4">Event Venue</h3>
          <div className="w-64 h-40 bg-gray-200 rounded-lg overflow-hidden">
            <img 
              src="https://static1.anpoimages.com/wordpress/wp-content/uploads/2022/07/googleMapsTricksHero.jpg"
              alt="Location Map"
              className="w-full h-full object-cover"
            />
          </div>
          <button className="text-sm text-white underline mt-2">
            View larger map
          </button>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-white text-sm mt-8 border-t border-white border-opacity-20 pt-4">
        Copyright 2024, Verve Management. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;