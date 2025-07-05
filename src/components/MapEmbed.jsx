import React from "react";

const MapEmbed = () => {
  return (
    <div className="w-full bg-[#e0f2f2] py-4">
      <div className="max-w-7xl mx-auto px-4">
        <iframe
          title="Ellie Shumaker Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3165.199446897793!2d-77.49675182406583!3d37.5804002252876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b1125cd56f9243%3A0x2a935ad8d2694d49!2sEllie%20Shumaker%2C%20LCSW%20Counseling!5e0!3m2!1sen!2sin!4v1720170355004!5m2!1sen!2sin"
          width="100%"
          height="300"
          allowFullScreen=""
          loading="lazy"
          style={{ border: 0 }}
          referrerPolicy="no-referrer-when-downgrade"
          className="rounded shadow"
        ></iframe>
      </div>
    </div>
  );
};

export default MapEmbed;
