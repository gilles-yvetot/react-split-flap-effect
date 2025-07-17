import React, { useEffect, useState } from "react";
import { FlapDigit } from "./FlapDigit";
import { FlapStackProps, CursorState } from "../types";

const InitialCursor: CursorState = {
  current: -1,
  previous: -1,
  target: 0,
};

export const FlapStack: React.FC<FlapStackProps> = ({
  stack,
  value,
  timing,
  mode,
  hinge = true,
}) => {
  const [cursor, setCursor] = useState<CursorState>(InitialCursor);

  useEffect(() => {
    setCursor(InitialCursor);
  }, [stack]);

  useEffect(() => {
    let { current, previous } = cursor;
    const target = Math.max(stack.indexOf(value), 0);

    const increment = () => {
      previous = current;
      if (current >= stack.length - 1) {
        current = 0;
      } else {
        current = current + 1;
      }

      setCursor({
        current,
        previous,
        target,
      });
    };

    increment();

    const timer = setInterval(() => {
      if (current === target) {
        clearInterval(timer);
      } else {
        increment();
      }
    }, timing);

    return () => clearInterval(timer);
  }, [stack, value, timing]);

  const { current, previous, target } = cursor;

  return (
    <FlapDigit
      value={stack[current] || ""}
      prevValue={stack[previous] || ""}
      final={current === target}
      mode={mode}
      hinge={hinge}
    />
  );
};
