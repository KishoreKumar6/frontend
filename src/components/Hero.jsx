import React, { useEffect, useState } from "react";

const phrases = [
  "💙 Greater Love in Your Relationships",
  "💙 Greater Peace in Your Heart",
  "💙 Greater Clarity in Your Mind",
  "💙 Greater Strength in Your Journey",
];

const Hero = () => {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % phrases.length);
        setFade(true);
      }, 300);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="relative bg-cover bg-center h-screen text-white flex flex-col items-center justify-center px-4 text-center"
      style={{ backgroundImage: "url('/bg.jpg')" }}
    >
      <div className="bg-black/40 absolute inset-0"></div>
      <div className="relative z-10 max-w-3xl">
        <h3 className="text-lg mb-2">
          Christian Counseling Services in Richmond & Central Virginia
        </h3>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Professional Counseling for Christian Healing and Growth
        </h1>
        <p className="text-xl mb-4">
          Begin your journey today towards spiritual growth, deeper
          relationships, and lasting inner peace.
        </p>
        <p className="mb-4 font-bold text-white">
          I want to work with you for…
        </p>

        {/* Animated Phrase */}
        <p
          className={`text-blue-200 font-semibold mb-6 text-lg transition-opacity duration-500 ${
            fade ? "opacity-100" : "opacity-0"
          }`}
        >
          {phrases[index]}
        </p>

        <p className="text-sm text-white font-bold mb-5">
          ⭐ Top Rated • 40+ Years Experience • Testimonials • Media Mentions
        </p>
        <button className="bg-gradient-to-r from-pink-200 via-yellow-200 to-blue-200 text-blue-900 px-6 py-2 rounded-lg shadow-md text-lg font-bold cursor-pointer transition duration-300 hover:brightness-105">
          Start Healing Today
        </button>
      </div>
    </div>
  );
};

export default Hero;
