// src/components/BooksSection.jsx
import React from "react";

const books = [
  {
    title: "Baby Dolls & Ninja Swords: 6 True Tales of Play Therapy",
    image: "/books/book1.jpg",
    available: true,
    link: "https://amazon.com",
    formats: "Formats: Kindle & Paperback",
  },
  {
    title: "Frozen Tears: 15 Stories of Blindness & Hope after Abortion",
    image: "/books/book2.jpg",
    available: true,
    link: "https://amazon.com",
    formats: "Formats: Kindle & Paperback",
  },
  {
    title:
      "99 Devotionals: Heart Reactions and Soul Stretches from the Book of Acts",
    image: "/books/book3.jpg",
    available: true,
    link: "https://amazon.com",
    formats: "Format: Kindle format",
  },
  {
    title: "Passion with Principle: How to Turn Romance into Lifelong Love",
    image: "", // No image
    available: false,
    link: "",
    formats: "Coming Soon",
  },
];

const BooksSection = () => {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <p className="text-xs bg-yellow-200   text-yellow-800 inline-block px-2 py-1 rounded mb-2">
          Authored Works
        </p>
        <h2 className="text-3xl font-bold text-gray-800 mb-10">
          Ellie's Books
        </h2>

        <div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2
        "
        >
          {books.map((book, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col w-60 hover:shadow-2xl transition-shadow duration-300
              justify-between"
            >
              {/* Book Cover */}
              {book.image ? (
                <img
                  src={book.image}
                  alt={book.title}
                  className="w-full h-64 "
                />
              ) : (
                <div className="w-full h-64 bg-gray-200 flex items-center justify-center text-gray-500 text-sm">
                  Cover Image Coming Soon
                </div>
              )}

              {/* Content */}
              <div className="p-4">
                <h3 className="font-semibold text-md text-gray-800 mb-1">
                  {book.title}
                </h3>
                <p className="text-sm text-gray-600">
                  {book.available ? "Available on Amazon" : "Coming Soon"}
                </p>
                <p className="text-xs text-gray-500 mt-1">{book.formats}</p>
              </div>

              {/* Button */}
              <div className="px-4 pb-4">
                {book.available ? (
                  <a
                    href={book.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center bg-[#C9E8EA] text-gray-800 font-semibold py-2 rounded hover:bg-[#b1dada] transition"
                  >
                    View on Amazon
                  </a>
                ) : (
                  <>
                    <span className="absolute top-2 right-2 text-xs bg-yellow-500 text-white px-2 py-0.5 rounded-full">
                      Coming Soon
                    </span>
                    <button
                      disabled
                      className="block w-full text-center bg-gray-100 text-gray-500 font-semibold py-2 rounded cursor-not-allowed"
                    >
                      Details Coming Soon
                    </button>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BooksSection;
