// Example usage of react-split-flap-effect
import React, { useState, useEffect } from "react";
import { FlapDisplay, Presets } from "react-split-flap-effect";

const LETTERS_COUNT = 15;

function ExampleApp() {
  const [message, setMessage] = useState("HELLO WORLD");

  useEffect(() => {
    const messages = [
      "HELLO WORLD",
      "WELCOME ABOARD",
      "FLIGHT BOARDING",
      "NEXT STOP NYC",
      "THANK YOU",
    ];

    let index = 0;
    const interval = setInterval(() => {
      index = (index + 1) % messages.length;
      setMessage(messages[index]);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-white text-2xl mb-8">React Split-Flap Effect</h1>

        {/* Main display with custom styling */}
        <FlapDisplay
          chars={Presets.ALPHANUM + ",."}
          length={LETTERS_COUNT}
          value={message}
          className="text-4xl font-mono bg-black text-amber-400 border-2 border-amber-400 rounded-lg p-4"
          timing={30}
        />

        {/* Numeric counter */}
        <div className="mt-8">
          <FlapDisplay
            chars={Presets.NUM}
            length={6}
            value={Date.now().toString().slice(-6)}
            className="text-2xl font-mono bg-green-900 text-green-400 border border-green-400 rounded p-2"
            timing={50}
          />
        </div>
      </div>
    </div>
  );
}

export default ExampleApp;
