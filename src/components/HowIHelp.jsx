import React from "react";

const helpData = [
  {
    title: "Christian Individual Counseling in Richmond, VA",
    description: "Discover Peace, Purpose, and God's Truth in Richmond, VA.",
    image: "/individual.jpg", // Place your image in /public folder
  },
  {
    title: "Christian Couples Counseling in Richmond, VA",
    description:
      "Heal Your Relationship, Grow Closer to God Together in Richmond.",
    image: "/couples.jpg",
  },
];

const HowIHelp = () => {
  return (
    <section className="bg-gray-100 py-16 px-4" id="services">
      <h2 className="text-4xl font-bold text-gray-800 mb-10 ml-30">
        How I Help
      </h2>

      {/* Horizontal scroll wrapper for small screens */}
      <div className="overflow-x-auto">
        <div className="relative min-w-[700px] max-w-lg mx-30 grid grid-cols-2 gap-4 sm:gap-6 ">
          {helpData.map((item, index) => (
            <div
              key={index}
              className="bg-[#ADD8E6] rounded-lg overflow-hidden shadow-md border border-black transition-all duration-300 hover:shadow-2xl"
            >
              <div
                className="p-6 group transition-transform duration-300 hover:translate-x-2
              "
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="p-0 h-40 w-full object-cover"
                />
                <h3 className="text-lg font-bold mb-2 text-gray-900">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-800 mb-4">{item.description}</p>
                <button className="border border-gray-900 text-gray-900 px-4 py-2 rounded hover:bg-gray-200 transition">
                  Learn More
                </button>
              </div>
            </div>
          ))}

          {/* Decorative plant image anchored to bottom-right */}
          <img
            src="/plant.png"
            alt="Decoration"
            className="hidden md:block absolute -right-90 -bottom-0 w-28 z-10 h-60 w-50"
          />
        </div>
      </div>
    </section>
  );
};

export default HowIHelp;
