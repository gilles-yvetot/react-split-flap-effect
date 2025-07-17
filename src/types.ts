export interface FlapProps {
  bottom?: boolean;
  animated?: boolean;
  final?: boolean;
  hinge?: boolean;
  children: React.ReactNode;
  className?: string;
}

export interface FlapDigitProps {
  value: string;
  prevValue: string;
  final: boolean;
  mode: DisplayMode;
  hinge?: boolean;
  className?: string;
}

export interface FlapStackProps {
  stack: string[];
  value: string;
  timing: number;
  mode: DisplayMode;
  hinge?: boolean;
}

export interface FlapDisplayProps {
  value: string;
  chars?: string;
  words?: string[];
  length?: number;
  padChar?: string;
  padMode?: "auto" | "start" | "end";
  timing?: number;
  hinge?: boolean;
  className?: string;
  id?: string;
}

export type DisplayMode = "numeric" | "alphanumeric" | "words";

export interface CursorState {
  current: number;
  previous: number;
  target: number;
}
