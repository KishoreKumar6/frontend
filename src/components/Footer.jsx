import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#0d3c3c] text-white px-6 py-10 font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo and Contact */}
        <div>
          <img
            src="logo.jpg" // replace with real logo if available
            alt="Ellie Shumaker"
            className="mb-4"
          />
          <p>
            1287 Maplewood Drive,
            <br />
            Los Angeles, CA 90026
          </p>
          <p className="mt-2">📞 (323) 555-0192</p>
          <img
            src="psychology.jpg" // replace with Psychology Today badge
            alt="Verified by Psychology Today"
            className="mt-3"
          />
        </div>

        {/* Links */}
        <div>
          <h3 className="font-semibold mb-2">LINKS</h3>
          <ul className="space-y-1 text-sm">
            <li>Get In Touch</li>
            <li>Testimonials</li>
            <li>About Me</li>
            <li>FAQ's</li>
            <li>Therapies</li>
            <li>Blogs</li>
          </ul>
        </div>

        {/* Areas Served */}
        <div>
          <h3 className="font-semibold mb-2">AREAS SERVED</h3>
          <ul className="space-y-1 text-sm">
            <li>Richmond, VA</li>
            <li>Ashland, VA</li>
            <li>Mechanicsville, VA</li>
            <li>Lakeside, VA</li>
            <li>East Highland Park, VA</li>
            <li>Short Pump, VA</li>
            <li>Highland Springs, VA</li>
            <li>Glen Allen, VA</li>
            <li>Sandston, VA</li>
            <li>Bon Air, VA</li>
            <li>Chester, VA</li>
            <li>Midlothian, VA</li>
            <li>Moseley, VA</li>
            <li>Hopewell, VA</li>
            <li>Petersburg, VA</li>
            <li>Colonial Heights, VA</li>
            <li>New Kent, VA</li>
            <li>Powhatan, VA</li>
            <li>Goochland, VA</li>
            <li>Ruther Glen, VA</li>
            <li>Williamsburg, VA</li>
            <li>Fredericksburg, VA</li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="font-semibold mb-2">SERVICES</h3>
          <ul className="space-y-1 text-sm">
            <li>Christian Individual Counseling in Richmond, VA</li>
            <li>Christian Couples Counseling in Richmond, VA</li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center text-xs text-gray-400 mt-10 border-t border-gray-600 pt-4">
        Ellie Shumaker © Copyright 2024. All Rights Reserved.
        <br />
        Credits to Freepik for mood vector, People Illustrations by Storyset
        <br />
        <a href="/privacy-policy" className="underline">
          Privacy Policy
        </a>{" "}
        &{" "}
        <a href="/terms" className="underline">
          Terms of Service
        </a>
      </div>
    </footer>
  );
};

export default Footer;
