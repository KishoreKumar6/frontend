import React from "react";

const AboutSection = () => {
  return (
    <section className="bg-[#C5EAF1] py-16 px-4" id="about">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-start">
        {/* Left: Image + Tags */}
        <div className="flex flex-col items-center md:items-start">
          <img
            src="/ellie.jpg"
            alt="Ellie Shumaker"
            className="rounded-lg shadow-md mb-3 h-130 border border-gray-200 border-[16px]"
          />
          <div className="flex gap-2">
            <span className="ml-20 bg-yellow-300 text-xs px-2 py-1 rounded-full font-semibold">
              Top Rated
            </span>
            <span className="bg-pink-300 text-xs px-2 py-1 rounded-full font-semibold">
              8 years of practice, 500+ sessions
            </span>
          </div>
        </div>

        {/* Right: About Text */}
        <div>
          <p className="text-sm text-yellow-800 bg-yellow-100 inline-block px-2 py-1 mb-2 rounded">
            About Dr. Serena Blake, PsyD (Clinical Psychologist), in Los
            Angeles, CA 90026
          </p>
          <h2 className="text-2xl md:text-5xl font-bold mb-4 text-gray-800">
            Hi I’m Dr. Serena Blake
          </h2>
          <p className="mb-4 text-gray-700 text-2xl font-semibold">
            Dr. Serena Blake is a licensed clinical psychologist (PsyD) based in
            Los Angeles, CA, with eight years of experience and over 500 client
            sessions. She blends evidence-based approaches—like
            cognitive-behavioral therapy and mindfulness—with compassionate,
            personalized care to help you overcome anxiety, strengthen
            relationships, and heal from trauma. Whether you meet in her
            Maplewood Drive office or connect virtually via Zoom, Dr. Blake is
            committed to creating a safe, supportive space for you to thrive.
          </p>
          <ul className="list-disc pl-5 space-y-4 text-gray-800">
            <li className="text-2xl">
              <strong>Services & Specialties:</strong>
              <ul className="list-disc pl-5 mt-2 space-y-1 font-semibold">
                <li>Anxiety & Stress Management</li>
                <li>Relationship Counseling</li>
                <li>Trauma Recovery</li>
              </ul>
            </li>
            <li className="text-2xl">
              <strong>Session Fees:</strong>
              <ul className="list-disc pl-5 mt-2 space-y-1 font-semibold">
                <li>$200 / individual session</li>
                <li>$240 / couples session</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>

      {/* Featured In */}
      <div className="max-w-6xl mx-auto mt-12 text-center">
        <h4 className="text-3xl text-green-900 font-bold mb-4">Featured In</h4>
        <div className="flex justify-center gap-6 flex-wrap">
          <img
            src="psychology.jpg"
            alt="Psychology Today"
            className="h-15 transform transition-transform duration-300 hover:scale-110"
          />
          <img
            src="thera.jpg"
            alt="Theravive"
            className="h-15 transform transition-transform duration-300 hover:scale-110"
          />
          <img
            src="chris.jpg"
            alt="Christian Counselor Directory"
            className="h-15 transform transition-transform duration-300 hover:scale-110"
          />
          <img
            src="therap.jpg"
            alt="Therapist.com"
            className="h-15 transform transition-transform duration-300 hover:scale-110"
          />
        </div>
      </div>

      {/* Testimonials */}
      <div className="max-w-6xl mx-auto mt-16" id="testimonials">
        <div className="mb-6">
          <p className="text-lg inline-block bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full mb-2">
            Client Success Stories & Testimonials
          </p>
          <h3 className="text-5xl font-bold text-gray-800 mb-2">
            What Former Clients Say
          </h3>
          <p className="text-xl font-semibold text-gray-700 max-w-xl">
            Real experiences from individuals who have found healing and growth
            through our work together.
          </p>
        </div>

        {/* Scrolling Testimonials */}
        <div className="overflow-hidden relative mt-6">
          <div className="flex gap-6 animate-scrollX whitespace-nowrap">
            <div className="min-w-[300px] bg-gray-100 rounded-lg shadow p-4 text-gray-700 shadow-lg h-40 w-10">
              <p className="italic">
                Client testimonials are coming soon. <br></br>Those who have
                worked with Ellie<br></br> Shumaker, LCSW, share their powerful{" "}
                <br></br>healing journeys here.
              </p>
            </div>
            <div className="min-w-[300px] bg-gray-100 rounded-lg shadow p-4 text-gray-700 shadow-lg h-40 w-10">
              <p className="italic">
                Client testimonials are coming soon.<br></br> Stories from those
                who have found<br></br> peace and growth with Ellie Shumaker,
                <br></br> LCSW.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Inline animation style */}
      <style>
        {`
          @keyframes scrollX {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(100%); }
          }

          .animate-scrollX {
            animation: scrollX 20s linear infinite;
          }
        `}
      </style>
    </section>
  );
};

export default AboutSection;
