import React, { useEffect, useState } from "react";
import { FlapStack } from "./FlapStack";
import { FlapDisplayProps, DisplayMode } from "../types";
import { Presets } from "../presets";

const splitChars = (v: string): string[] =>
  String(v)
    .split("")
    .map((c) => c.toUpperCase());

const padValue = (
  v: string,
  length: number,
  padChar: string,
  padStart: boolean
): string => {
  const trimmed = v.slice(0, length);
  return padStart
    ? String(trimmed).padStart(length, padChar)
    : String(trimmed).padEnd(length, padChar);
};

export const FlapDisplay: React.FC<FlapDisplayProps> = ({
  id,
  className = "",
  value,
  chars = Presets.NUM,
  words,
  length = 6,
  padChar = " ",
  padMode = "auto",
  timing = 30,
  hinge = true,
}) => {
  const [stack, setStack] = useState<string[]>([]);
  const [mode, setMode] = useState<DisplayMode>("numeric");
  const [digits, setDigits] = useState<string[]>([]);

  useEffect(() => {
    if (words && words.length) {
      setStack(words);
      setMode("words");
    } else {
      setStack(splitChars(chars));
      setMode(chars.match(/[a-z]/i) ? "alphanumeric" : "numeric");
    }
  }, [chars, words]);

  useEffect(() => {
    if (words && words.length) {
      setDigits([value]);
    } else {
      const padStart =
        padMode === "auto"
          ? !!value.match(/^[0-9.,+-]*$/)
          : padMode === "start";
      setDigits(splitChars(padValue(value, length, padChar, padStart)));
    }
  }, [value, chars, words, length, padChar, padMode]);

  return (
    <div id={id} className={className} aria-hidden="true" aria-label={value}>
      {digits.map((digit, i) => (
        <FlapStack
          key={i}
          stack={stack}
          value={digit}
          timing={timing}
          mode={mode}
          hinge={hinge}
        />
      ))}
    </div>
  );
};
