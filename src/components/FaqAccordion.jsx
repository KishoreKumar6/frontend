// src/components/FaqAccordion.jsx
import React, { useState } from "react";

const faqData = [
  {
    question: "What are your fees?",
    answer:
      "Please contact me directly for the most accurate and current information about fees.",
  },
  {
    question: "Do you take insurance?",
    answer:
      "I do not accept insurance, but I can provide documentation for reimbursement if your plan allows.",
  },
  {
    question: "Do you provide online counseling?",
    answer:
      "Yes, I offer online counseling sessions through a secure video platform.",
  },
  {
    question: "What are your office hours?",
    answer: (
      <>
        My office hours are{" "}
        <strong>Monday through Thursday, 11:00 AM to 6:30 PM</strong>.
      </>
    ),
  },
  {
    question: "What geographic areas do you serve?",
    answer:
      "I primarily serve clients in Richmond and Central Virginia, but telehealth services extend to clients throughout the state.",
  },
  {
    question: "What services do you offer?",
    answer:
      "I offer individual counseling, couples counseling, and Christian-based spiritual therapy.",
  },
];

const FaqAccordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#C5EAF1] py-16 px-4" id="faqs">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-gray-900">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div key={index} className="border-b border-gray-400">
              <button
                onClick={() => toggle(index)}
                className="w-full text-left py-4 text-lg font-semibold text-gray-900 flex justify-between items-center"
              >
                {faq.question}
                <span className="text-xl">
                  {openIndex === index ? "▴" : "▾"}
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 text-gray-800 text-sm ${
                  openIndex === index ? "max-h-40 py-2" : "max-h-0"
                }`}
              >
                {faq.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqAccordion;
