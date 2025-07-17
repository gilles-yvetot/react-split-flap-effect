# React Split-Flap Effect

A modern React component library that creates a split-flap display effect (like old airport departure boards) with smooth CSS animations.

## Features

- ✨ **Modern Stack**: Built with latest React, TypeScript, and Tailwind CSS
- 🎬 **Smooth Animations**: CSS-powered split-flap animations with customizable timing
- 🔧 **Flexible Display Modes**: Numeric, alphanumeric, and word-based displays
- 🎨 **Customizable Styling**: Full Tailwind CSS integration with custom themes
- 🧪 **Fully Tested**: Comprehensive Jest test suite
- 📱 **Responsive**: Works great on all device sizes
- ♿ **Accessible**: Proper ARIA labels and semantic HTML

## Installation

### From npm

```bash
npm install react-split-flap-effect
```

### From GitHub (latest)

Install directly from GitHub to get the latest version:

```bash
npm install github:gilles-yvetot/react-split-flap-effect
```

### From GitHub (specific release)

Install a specific tagged release:

```bash
npm install github:gilles-yvetot/react-split-flap-effect#v2.0.0
```

> **Note**: Installing from GitHub requires the repository to have built files. Our GitHub Actions automatically build and commit the `dist` folder on releases.

## Quick Start

```tsx
import React from "react";
import { FlapDisplay, Presets } from "react-split-flap-effect";

function App() {
  return (
    <div>
      {/* Basic numeric display */}
      <FlapDisplay value="123456" chars={Presets.NUM} length={6} />

      {/* Alphanumeric display with custom characters */}
      <FlapDisplay
        chars={Presets.ALPHANUM + ",."}
        length={10}
        value="HELLO WORLD"
        className="my-custom-class"
      />
    </div>
  );
}
```

## Usage Examples

### Basic Numeric Display

```tsx
<FlapDisplay value="007" chars={Presets.NUM} length={3} timing={50} />
```

### Message Display

```tsx
<FlapDisplay
  chars={Presets.ALPHANUM + ",.!?"}
  length={20}
  value="FLIGHT BOARDING NOW"
  className="text-lg font-mono"
/>
```

### Custom Character Set

```tsx
<FlapDisplay
  chars=" ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  length={8}
  value="WELCOME"
  padMode="start"
/>
```

## Development

To work on this library:

```bash
# Install dependencies
npm install

# Start development server (for testing)
npm run dev

# Build the library
npm run build

# Run tests
npm test

# Build library and watch for changes
npm run build:watch
```

## Component API

### FlapDisplay

The main component that creates a split-flap display.

```tsx
import { FlapDisplay, Presets } from './components';

// Numeric display
<FlapDisplay value="12345" />

// Alphanumeric display
<FlapDisplay
  value="HELLO"
  chars={Presets.ALPHANUM}
/>

// Word-based display
<FlapDisplay
  value="Boston"
  words={['', 'New York', 'Boston', 'Philadelphia']}
/>
```

### Props

| Prop        | Type                         | Default       | Description                      |
| ----------- | ---------------------------- | ------------- | -------------------------------- |
| `value`     | `string`                     | -             | The value to display (required)  |
| `chars`     | `string`                     | `Presets.NUM` | Characters available for display |
| `words`     | `string[]`                   | -             | Array of words for word mode     |
| `length`    | `number`                     | `6`           | Maximum length for padding       |
| `padChar`   | `string`                     | `' '`         | Character used for padding       |
| `padMode`   | `'auto' \| 'start' \| 'end'` | `'auto'`      | How to pad the value             |
| `timing`    | `number`                     | `30`          | Animation timing in milliseconds |
| `hinge`     | `boolean`                    | `true`        | Whether to show the center hinge |
| `className` | `string`                     | -             | Additional CSS classes           |
| `id`        | `string`                     | -             | HTML id attribute                |

### Presets

Pre-defined character sets for different display modes:

```tsx
import { Presets } from "./components";

Presets.NUM; // ' 0123456789'
Presets.ALPHANUM; // ' 0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'
```

## Display Modes

### Numeric Mode

- Automatically detected when using numeric characters
- Right-aligned padding by default
- Optimized for numbers and simple text

### Alphanumeric Mode

- Detected when character set includes letters
- Supports full alphabet and numbers
- Great for flight codes, license plates, etc.

### Word Mode

- Activated when `words` prop is provided
- Displays complete words instead of individual characters
- Perfect for destination displays, status messages

## Styling

The component uses Tailwind CSS for styling. You can customize the appearance by:

1. **CSS Classes**: Pass custom classes via the `className` prop
2. **Tailwind Config**: Extend the Tailwind configuration for custom animations
3. **CSS Variables**: Override the built-in CSS custom properties

### Custom Animations

The component includes custom CSS animations that you can modify:

```css
@keyframes flapDownTop {
  from {
    transform: rotateX(0deg);
  }
  50%,
  to {
    transform: rotateX(90deg);
  }
}

@keyframes flapDownBottom {
  from,
  50% {
    transform: rotateX(90deg);
  }
  90% {
    transform: rotateX(20deg);
  }
  80%,
  to {
    transform: rotateX(0deg);
  }
}
```

## Examples

### Basic Clock Display

```tsx
<FlapDisplay
  value={new Date().toTimeString().slice(0, 8)}
  chars=" 0123456789:"
  timing={50}
/>
```

### Airport Departure Board

```tsx
<FlapDisplay
  value="JFK"
  chars={Presets.ALPHANUM}
  className="text-6xl font-bold"
/>
```

### Dynamic Word Display

```tsx
const cities = ["", "New York", "Los Angeles", "Chicago", "Boston"];
<FlapDisplay value={currentCity} words={cities} timing={60} />;
```

## Architecture

The component is built with a modular architecture:

- **FlapDisplay**: Main orchestrator component
- **FlapStack**: Manages animation state for each character position
- **FlapDigit**: Renders individual flap positions with animation
- **Flap**: Basic flap component with CSS animations

## Browser Support

Works in all modern browsers that support:

- ES6+ features
- CSS Grid and Flexbox
- CSS Animations and Transforms
- React 18+

## License

MIT License - feel free to use in your projects!

## Original Project

This is a modern rewrite of [react-split-flap-effect](https://github.com/jayKayEss/react-split-flap-effect) with updated dependencies and improved TypeScript support.
