# Usage Guide

This guide provides detailed instructions on how to use the React Split-Flap Effect library in your projects.

## Installation

```bash
npm install split-flap-lib
# or
yarn add split-flap-lib
```

## CSS Import (Required!)

The library requires CSS to be imported for proper styling. After building with the updated configuration, you need to import the CSS file:

```javascript
// Import the CSS along with the component
import "split-flap-lib/dist/index.css";
import { FlapDisplay } from "split-flap-lib";
```

If the CSS is not loading, here are some solutions:

### Solution 1: Direct CSS Import

Make sure you're importing the CSS file from the dist folder:

```javascript
import "split-flap-lib/dist/index.css";
```

### Solution 2: Copy CSS to Your Project

If the above doesn't work, you can copy the CSS directly into your project:

1. Copy the contents of `node_modules/split-flap-lib/dist/index.css`
2. Add it to your project's CSS file or create a new CSS file
3. Import that CSS file in your application

### Solution 3: If Using Tailwind CSS

If your project uses Tailwind CSS, you can add the library to your Tailwind content configuration to ensure the classes are included:

```javascript
// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/split-flap-lib/dist/**/*.js",
  ],
  // ... rest of your config
};
```

## Basic Usage

### 1. Import the Components

```tsx
import { FlapDisplay } from "split-flap-lib";
import "split-flap-lib/dist/index.css"; // Required for styles!
```

### 2. Use in Your React App

```tsx
import React from "react";
import { FlapDisplay } from "split-flap-lib";

function App() {
  return (
    <div className="App">
      <h1>My Split Flap Display</h1>
      <FlapDisplay value="HELLO WORLD" timing={100} fontSize="2rem" />
    </div>
  );
}

export default App;
```

## Available Components

### FlapDisplay

The main component for creating split-flap displays.

```tsx
<FlapDisplay
  value="YOUR TEXT" // Text to display
  timing={100} // Animation timing in ms
  fontSize="2rem" // Font size
  flapColor="#333" // Flap background color
  flapTextColor="#fff" // Flap text color
  flapWidth={50} // Width of each flap
  flapHeight={80} // Height of each flap
/>
```

### Individual Components (Advanced Usage)

```tsx
import { Flap, FlapDigit, FlapStack } from "split-flap-lib";
```

## TypeScript Support

The library is written in TypeScript and includes type definitions. You'll get full IntelliSense support in VS Code and other IDEs.

```tsx
import { FlapDisplay, FlapDisplayProps } from "split-flap-lib";

const myProps: FlapDisplayProps = {
  value: "TYPED",
  timing: 150,
  fontSize: "3rem",
};
```

## Styling

### Using with Tailwind CSS

If your project uses Tailwind CSS, the components will integrate seamlessly:

```tsx
<div className="flex items-center justify-center min-h-screen bg-gray-100">
  <FlapDisplay value="TAILWIND" className="shadow-lg" />
</div>
```

### Custom Styling

You can override default styles using CSS:

```css
/* Override flap styles */
.flap-display {
  /* Your custom styles */
}

.flap {
  /* Custom flap styles */
}
```

## Common Use Cases

### Clock Display

```tsx
function Clock() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return <FlapDisplay value={time} timing={50} />;
}
```

### Counter

```tsx
function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <FlapDisplay value={count.toString().padStart(4, "0")} />
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```

### Status Board

```tsx
function StatusBoard() {
  const [status, setStatus] = useState("LOADING");

  return (
    <FlapDisplay
      value={status}
      flapColor={status === "ERROR" ? "#ff0000" : "#333"}
    />
  );
}
```

## Presets

The library includes preset configurations:

```tsx
import { FlapDisplay, presets } from 'split-flap-lib';

// Use airport display preset
<FlapDisplay {...presets.airport} value="GATE 42" />

// Use train station preset
<FlapDisplay {...presets.trainStation} value="PLATFORM 3" />
```

## Troubleshooting

### CSS not working

Make sure you've imported the CSS file:

```javascript
import "split-flap-lib/dist/index.css";
```

If styles are still not loading, see the "CSS Import (Required!)" section above for additional solutions.

### TypeScript errors

Ensure your TypeScript version is compatible (>= 4.0).

### React version

This library requires React 16.8 or higher (hooks support).

## Example Project Structure

```
my-app/
├── src/
│   ├── App.tsx
│   ├── index.tsx
│   └── components/
│       └── MyDisplay.tsx
├── package.json
└── ...
```

`MyDisplay.tsx`:

```tsx
import React from "react";
import { FlapDisplay } from "split-flap-lib";

export const MyDisplay: React.FC = () => {
  return <FlapDisplay value="SPLIT FLAP" timing={100} fontSize="3rem" />;
};
```

## Links

- [npm Package](https://www.npmjs.com/package/split-flap-lib)
- [GitHub Repository](https://github.com/gilles-yvetot/react-split-flap-effect)
- [Demo](https://github.com/gilles-yvetot/react-split-flap-effect#demo)
