import React from "react";

import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather default="Kyiv" />
      </div>
      <div>
        <a href="/" target="_blank" className="sourcelink">
          Open-source code
        </a>
        <span className="author"> by Lesya Zubak</span>
      </div>
    </div>
  );
}

export default App;
