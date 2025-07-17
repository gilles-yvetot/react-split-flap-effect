import React from "react";
import { Flap } from "./Flap";
import { FlapDigitProps } from "../types";

export const FlapDigit: React.FC<FlapDigitProps> = ({
  value = "",
  prevValue = "",
  final = false,
  mode,
  hinge = false,
  className = "",
}) => {
  const baseClasses = [
    "relative inline-block box-content",
    "text-white bg-black",
    "font-sans text-center leading-none",
    "h-[1em] w-[1.1ch]",
  ];

  const modeClasses = {
    words: ["w-full"],
    alphanumeric: ["w-[1.7ch]"],
    numeric: [],
  };

  const allClasses = [...baseClasses, ...modeClasses[mode], className]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={allClasses} data-mode={mode}>
      <Flap hinge={hinge}>{value}</Flap>
      <Flap bottom hinge={hinge}>
        {prevValue}
      </Flap>
      <Flap key={`top-${prevValue}`} animated final={final} hinge={hinge}>
        {prevValue}
      </Flap>
      {final && (
        <Flap key={`bottom-${value}`} bottom animated final hinge={hinge}>
          {value}
        </Flap>
      )}
    </div>
  );
};
