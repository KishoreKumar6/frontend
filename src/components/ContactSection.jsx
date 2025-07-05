import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

const ContactSection = () => {
  const [captchaValue, setCaptchaValue] = useState(null);
  const [captchaError, setCaptchaError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!captchaValue) {
      setCaptchaError(true);
      return;
    }

    alert("Form submitted successfully!");
    // Add your backend API call here
  };

  return (
    <section
      className="bg-[#b2d8d8] min-h-screen flex flex-col md:flex-row justify-between items-start p-6 md:p-16 font-sans"
      id="contact"
    >
      {/* Left Side - Office Info */}
      <div className="w-full md:w-1/2 mb-10 md:mb-0">
        <h2 className="text-2xl font-semibold mb-4">Our Office</h2>
        <p>
          1287 Maplewood Drive,
          <br />
          Los Angeles,
          <br />
          CA 90026
        </p>
        <button className="mt-2 px-3 py-1 bg-gray-700 text-white text-sm rounded">
          Google Maps
        </button>

        <h2 className="text-2xl font-semibold mt-10 mb-2">Hours</h2>
        <p>
          In-person: Tue & Thu, 10 AM–6 PM <br />
          Virtual via Zoom: Mon, Wed & Fri, 1 PM–5 PM
          <br></br>
          Experience: 8 years of practice, 500+ sessions
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-2">Contact</h2>
        <p>📞 (323) 555-0192</p>
      </div>

      {/* Right Side - Form */}
      <div className="bg-white shadow-md rounded p-6 w-full md:w-1/2 max-w-md">
        <h2 className="text-xl font-bold text-center mb-4">Get In Touch</h2>
        <p className="text-sm text-gray-600 mb-4 text-center">
          Simply fill out the brief fields below and Ellie will be in touch with
          you soon, usually within one business day. This form is safe, private,
          and completely free.
        </p>

        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            type="text"
            placeholder="Name"
            className="w-full border px-3 py-2 rounded"
            required
          />
          <input
            type="email"
            placeholder="you@example.com"
            className="w-full border px-3 py-2 rounded"
            required
          />
          <input
            type="text"
            placeholder="(555) 234-5678"
            className="w-full border px-3 py-2 rounded"
          />
          <textarea
            placeholder="How can I help you?"
            className="w-full border px-3 py-2 rounded h-20"
          ></textarea>

          <div className="pt-2">
            <ReCAPTCHA
              sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI" // Use your real key in production
              onChange={(value) => {
                setCaptchaValue(value);
                setCaptchaError(false);
              }}
              onExpired={() => {
                setCaptchaValue(null);
                setCaptchaError(true);
              }}
            />
            {captchaError && (
              <p className="text-xs text-red-600 mt-1">
                Captcha expired or not completed. Please try again.
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-teal-800 text-white py-2 rounded hover:bg-teal-900"
          >
            Submit
          </button>
        </form>

        <p className="text-[10px] text-gray-600 mt-2">
          ⓘ By submitting, you confirm you are 18+ and agree to our
          <a href="/privacy-policy" className="underline">
            Privacy Policy
          </a>
          and to receive emails & texts from Ellie Shumaker.
        </p>
      </div>
    </section>
  );
};

export default ContactSection;
