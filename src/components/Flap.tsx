import React from "react";
import { FlapProps } from "../types";

export const Flap: React.FC<FlapProps> = ({
  bottom = false,
  animated = false,
  final = false,
  hinge = false,
  children,
  className = "",
}) => {
  const baseClasses = [
    "absolute h-full w-full bg-inherit",
    "transform-gpu origin-center",
    "border-inherit rounded-inherit box-border",
    "z-[1]",
  ];

  const positionClasses = bottom ? ["clip-path-bottom"] : ["clip-path-top"];

  const animationClasses = [];
  if (animated) {
    animationClasses.push("z-[2]", "duration-300", "fill-mode-forwards");

    if (bottom) {
      if (final) {
        animationClasses.push("animate-flap-down-bottom", "ease-out");
      }
    } else {
      if (final) {
        animationClasses.push(
          "animate-flap-down-top",
          "ease-in",
          "opacity-100"
        );
      } else {
        animationClasses.push("rotate-x-50", "opacity-40");
      }
    }
  }

  const allClasses = [
    ...baseClasses,
    ...positionClasses,
    ...animationClasses,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={allClasses}>
      {children}
      {hinge && (
        <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-full h-[0.04em] bg-inherit z-[3] box-border" />
      )}
    </div>
  );
};
