// src/App.jsx
import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import HowIHelp from "./components/HowIHelp";
import AboutSection from "./components/AboutSection";
import BooksSection from "./components/BooksSection";
import FaqAccordion from "./components/FaqAccordion";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import MapEmbed from "./components/MapEmbed";

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Stats />
      <HowIHelp />
      <AboutSection />
      <BooksSection />
      <FaqAccordion />
      <MapEmbed />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
