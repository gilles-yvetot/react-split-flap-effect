# Quick Start Example

Here's a complete example to get you started with `split-flap-lib` in 2 minutes:

## 1. Create a new React app

```bash
npx create-react-app my-flap-demo --template typescript
cd my-flap-demo
```

## 2. Install split-flap-lib

```bash
npm install split-flap-lib
```

## 3. Replace src/App.tsx

```tsx
import React, { useState, useEffect } from "react";
import { FlapDisplay, Presets } from "split-flap-lib";
import "split-flap-lib/dist/index.css"; // Required for split-flap styles
import "./App.css";

function App() {
  const [currentTime, setCurrentTime] = useState(
    new Date().toLocaleTimeString("en-US", {
      hour12: false,
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    })
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(
        new Date().toLocaleTimeString("en-US", {
          hour12: false,
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        })
      );
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="App">
      <header
        className="App-header"
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#282c34",
          color: "white",
        }}
      >
        <h1>Split Flap Display Demo</h1>

        {/* Clock Display */}
        <div style={{ marginBottom: "40px" }}>
          <h2>Clock</h2>
          <FlapDisplay value={currentTime} timing={50} fontSize="3rem" />
        </div>

        {/* Airport Style */}
        <div style={{ marginBottom: "40px" }}>
          <h2>Airport Display</h2>
          <FlapDisplay {...Presets.airport} value="GATE 42" />
        </div>

        {/* Custom Message */}
        <div>
          <h2>Custom Message</h2>
          <FlapDisplay
            value="HELLO WORLD"
            timing={100}
            fontSize="2rem"
            flapColor="#ff6b6b"
            flapTextColor="#ffffff"
          />
        </div>
      </header>
    </div>
  );
}

export default App;
```

## 4. Run the app

```bash
npm start
```

That's it! You should now see three different split-flap displays:

- A real-time clock
- An airport-style display
- A custom colored message

## Next Steps

- Check out [USAGE.md](./USAGE.md) for detailed documentation
- Explore the [types](https://github.com/gilles-yvetot/react-split-flap-effect/blob/master/src/types.ts) for all available props
- View more [examples](https://github.com/gilles-yvetot/react-split-flap-effect) on GitHub
