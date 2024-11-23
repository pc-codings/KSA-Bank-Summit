import React, { useState, useEffect } from "react";

const MultiCardCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const topics = [
    {
      title: "VISION 2030 - EMERGENCE OF THE KINGDOM AS A GLOBAL FINANCIAL LEADER",
      image: "https://mena.futurebanksummit.com/wp-content/uploads/2024/01/6.jpg",
      alt: "Person using mobile payment",
    },
    {
      title: "DIGITAL TRANSFORMATION - THE PLATFORM FOR ACHIEVING BUSINESS AGILITY",
      image: "https://mena.futurebanksummit.com/wp-content/uploads/2024/01/4.jpg",
      alt: "Cloud computing illustration",
    },
    {
      title: "PAYMENTS TODAY & TOMORROW - THE FUTURE OF DIGITAL PAYMENTS",
      image: "https://mena.futurebanksummit.com/wp-content/uploads/2024/01/8.jpg",
      alt: "Cryptocurrency concept",
    },
    {
      title: "PROVIDING A NEXT-GEN SEAMLESS BANKING CUSTOMER EXPERIENCE",
      image: "https://mena.futurebanksummit.com/wp-content/uploads/2024/01/2.jpg",
      alt: "AI in banking",
    },
    {
      title: "DATA & ANALYTICS PROVIDING A 360° OVERVIEW TO BANKS & CUSTOMERS",
      image: "https://mena.futurebanksummit.com/wp-content/uploads/2024/01/3.jpg",
      alt: "FinTech concept",
    },
    {
        title: "OPEN BANKING - BRINGING LEGACY BANKS AND FINTECHS TOGETHER",
        image: "https://mena.futurebanksummit.com/wp-content/uploads/2024/01/6.jpg",
        alt: "Person using mobile payment",
      },
      {
        title: "CLOUD IMPERATIVE-ACHIEV AGILITY THROUGH CLOUD-POWERED TRANSFORMATION",
        image: "https://mena.futurebanksummit.com/wp-content/uploads/2024/01/4.jpg",
        alt: "Cloud computing illustration",
      },
      {
        title: "THE FUTURE OF NBFIs - REVOLUTIONIZING THE MONEY MARKET IN KSA",
        image: "https://mena.futurebanksummit.com/wp-content/uploads/2024/01/8.jpg",
        alt: "Cryptocurrency concept",
      },
      {
        title: "'DIGITAL ONLY' BANKS - THE RISE OF 'INVISIBLE BANKS' FOR GEN-Z CUSTOMERS",
        image: "https://mena.futurebanksummit.com/wp-content/uploads/2024/01/2.jpg",
        alt: "AI in banking",
      },
      {
        title: "The Role of FinTech in Modern Banking - THE THIRD WORLD BANKING",
        image: "https://mena.futurebanksummit.com/wp-content/uploads/2024/01/3.jpg",
        alt: "FinTech concept",
      },
      {
        title: "EXPERIENTIAL BANKING IN METAVERSE - THE THIRD WORLD BANKING",
        image: "https://mena.futurebanksummit.com/wp-content/uploads/2024/01/10.jpg",
        alt: "FinTech concept",
      },
      {
        title: "DATA & ANALYTICS PROVIDING A 360° OVERVIEW TO BANKS & CUSTOMERS",
        image: "https://mena.futurebanksummit.com/wp-content/uploads/2024/01/4.jpg",
        alt: "FinTech concept",
      }
  ];

  const cardsToShow = 3; // Number of cards visible at one time
  const totalSteps = Math.ceil(topics.length / cardsToShow);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === totalSteps - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(timer);
  }, [totalSteps]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === totalSteps - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalSteps - 1 : prevIndex - 1
    );
  };

  return (
    <div className="bg-slate-100">
    <div className="w-full max-w-6xl mx-auto px-4 py-8 ">
      <h1 className="text-4xl font-bold text-center text-gray-600 mb-12">
        Topics Discussed
      </h1>

      <div className="relative overflow-hidden">
        {/* Cards Container */}
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {topics.map((topic, index) => (
            <div
              key={index}
              className="flex-[0_0_33.333%] px-4 box-border"
            >
              <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                <img
                  src={topic.image}
                  alt={topic.alt}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-800">
                    {topic.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Left Arrow */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-blue-500/70 hover:bg-blue-600 text-white transition-colors"
        >
          &larr;
        </button>

        {/* Right Arrow */}
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-blue-500/70 hover:bg-blue-600 text-white transition-colors"
        >
          &rarr;
        </button>
      </div>

      {/* Navigation Dots */}
      <div className="flex justify-center mt-4 gap-2">
        {Array.from({ length: totalSteps }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentIndex ? "bg-blue-600" : "bg-blue-300"
            }`}
          />
        ))}
      </div>
    </div>
    </div>
  );
};

export default MultiCardCarousel;
