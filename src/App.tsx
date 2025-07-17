import React, { useEffect, useState, useRef } from "react";
import { FlapDisplay, Presets } from "./components";

const Words = [
  "",
  "Washington",
  "Baltimore",
  "Philadelphia",
  "Newark",
  "New York",
  "New Haven",
  "Providence",
  "Boston",
];

const Modes = {
  Numeric: 0,
  Alphanumeric: 1,
  Words: 2,
} as const;

type ModeType = (typeof Modes)[keyof typeof Modes];

function App() {
  const [mode, setMode] = useState<ModeType>(Modes.Numeric);
  const [autoplay, setAutoplay] = useState(true);
  const [chars, setChars] = useState<string>(Presets.NUM);
  const [words, setWords] = useState(Words);
  const [length, setLength] = useState(6);
  const [timing, setTiming] = useState(30);
  const [padChar, setPadChar] = useState(" ");
  const [padMode, setPadMode] = useState<"auto" | "start" | "end">("auto");
  const [value, setValue] = useState("");
  const [hinge, setHinge] = useState(true);

  const modeRef = useRef(mode);
  modeRef.current = mode;

  const lengthRef = useRef(length);
  lengthRef.current = length;

  const wordsRef = useRef(words);
  wordsRef.current = words;

  const randomNum = (min: number, max: number) =>
    Math.floor(Math.random() ** 5 * (max - min + 1) + min);

  const randomValue = () => {
    const currentMode = modeRef.current;
    const currentLength = lengthRef.current;
    const currentWords = wordsRef.current;

    if (currentMode === Modes.Numeric) {
      return String(randomNum(0, 10 ** currentLength - 1));
    } else {
      return currentWords[
        Math.floor(Math.random() * (currentWords.length - 1)) + 1
      ];
    }
  };

  useEffect(() => {
    setChars(mode === Modes.Numeric ? Presets.NUM : Presets.ALPHANUM);
    setLength(mode === Modes.Alphanumeric ? 12 : 6);
  }, [mode]);

  useEffect(() => {
    if (autoplay) {
      setValue(randomValue());
      const autoTiming = mode === Modes.Alphanumeric ? 6000 : 3000;
      const timer = setInterval(() => {
        setValue(randomValue());
      }, autoTiming);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [mode, autoplay]);

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
          Modern Split-Flap Display
        </h1>

        {/* Display */}
        <div className="flex justify-center mb-12">
          <div className="bg-black p-8 rounded-lg shadow-lg">
            <FlapDisplay
              className="text-4xl font-mono"
              value={value}
              chars={chars}
              words={mode === Modes.Words ? words : undefined}
              length={length}
              timing={timing}
              hinge={hinge}
              padChar={padChar}
              padMode={padMode}
            />
          </div>
        </div>

        {/* Controls */}
        <div className="bg-white rounded-lg shadow p-6 space-y-8">
          {/* Demo Mode */}
          <div>
            <h2 className="text-xl font-semibold mb-4 text-gray-800">
              Demo Mode
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="mode"
                    checked={mode === Modes.Numeric}
                    onChange={() => setMode(Modes.Numeric)}
                    className="text-blue-600"
                  />
                  <span>Numeric</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="mode"
                    checked={mode === Modes.Alphanumeric}
                    onChange={() => setMode(Modes.Alphanumeric)}
                    className="text-blue-600"
                  />
                  <span>Alphanumeric</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="mode"
                    checked={mode === Modes.Words}
                    onChange={() => setMode(Modes.Words)}
                    className="text-blue-600"
                  />
                  <span>Words</span>
                </label>
              </div>
              <div>
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={autoplay}
                    onChange={(e) => setAutoplay(e.target.checked)}
                    className="text-blue-600"
                  />
                  <span>Update automatically</span>
                </label>
              </div>
            </div>
          </div>

          {/* Configuration */}
          <div>
            <h2 className="text-xl font-semibold mb-4 text-gray-800">
              Configuration
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Value
                </label>
                <input
                  type="text"
                  value={value}
                  disabled={autoplay}
                  onChange={(e) => setValue(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-md disabled:bg-gray-100"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Characters
                </label>
                <input
                  type="text"
                  value={chars}
                  disabled={mode === Modes.Words}
                  onChange={(e) => setChars(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-md disabled:bg-gray-100"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Length
                </label>
                <input
                  type="number"
                  value={length}
                  min="1"
                  disabled={mode === Modes.Words}
                  onChange={(e) =>
                    setLength(Math.max(Number(e.target.value), 1))
                  }
                  className="w-full p-2 border border-gray-300 rounded-md disabled:bg-gray-100"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Timing (ms)
                </label>
                <input
                  type="number"
                  value={timing}
                  min="1"
                  onChange={(e) =>
                    setTiming(Math.max(Number(e.target.value), 1))
                  }
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Pad Character
                </label>
                <input
                  type="text"
                  value={padChar}
                  maxLength={1}
                  disabled={mode === Modes.Words}
                  onChange={(e) =>
                    setPadChar(String(e.target.value).slice(0, 1))
                  }
                  className="w-full p-2 border border-gray-300 rounded-md disabled:bg-gray-100"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Pad Mode
                </label>
                <div className="space-y-1">
                  {(["auto", "start", "end"] as const).map((mode_option) => (
                    <label
                      key={mode_option}
                      className="flex items-center space-x-2"
                    >
                      <input
                        type="radio"
                        name="padMode"
                        value={mode_option}
                        checked={padMode === mode_option}
                        disabled={mode === Modes.Words}
                        onChange={(e) =>
                          setPadMode(e.target.value as "auto" | "start" | "end")
                        }
                        className="text-blue-600"
                      />
                      <span className="capitalize">{mode_option}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-4">
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={hinge}
                  onChange={(e) => setHinge(e.target.checked)}
                  className="text-blue-600"
                />
                <span>Show hinge</span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
