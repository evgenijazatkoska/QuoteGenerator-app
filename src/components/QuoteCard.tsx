import { useState } from "react";

export default function QuoteCard() {
  const [quote, setQuote] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const generateQuote = async () => {
    setIsLoading(true);
    setError(""); 

    try {
     
      const response = await fetch('https://dummyjson.com/quotes/random', {
        method: "GET", 
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${process.env.NEXT_APP_API_KEY}`,
        },
      });

    
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log("Data received:", data); 

  
      setQuote(data.quote);
    } catch (error) {
      setError("Failed to fetch a quote. Please try again later.");
      console.error("Error fetching quote:", error); 
    }

    setIsLoading(false);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg mt-6">
      {/* Quote Text */}
      <p className="text-lg text-gray-700" style={{ color: "#401c40" }}>
        {isLoading ? "Loading..." : quote || "Click 'New Quote' to get a quote"}
      </p>

      {/* Error Message */}
      {error && <p className="text-red-500 mt-2">{error}</p>}

      {/* Button to Generate New Quote */}
      <button
        onClick={generateQuote}
        className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
      >
        New Quote
      </button>
    </div>
  );
}




