"use client";
import "./globals.css";
import QuoteCard from "@/components/QuoteCard"; 
import { useState, useEffect } from 'react';


export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  };

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [isDarkMode]);

  

  return (
    <div className="container">
      {/* Dark Mode Toggle Button */}
      <button
        onClick={toggleDarkMode}
        className="modeButton flex items-center justify-center p-2 bg-gray-300 dark:bg-gray-600 rounded-full shadow-md absolute top-5 right-5"
      >
        {isDarkMode ? "🌞" : "🌙"}
      </button>
      <div className="flex justify-center items-center h-screen bg-gray-100 dark:bg-gray-800">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-white">Your Daily Quote</h1>
      </div>

      {/* Quote Card Component */}
      <QuoteCard />
    </div>
  );
}
