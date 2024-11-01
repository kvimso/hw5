import React, { useState, useEffect } from "react";
import "./App.css";
import Timer from "./components/Timer";
import ThemeSwitcher from "./components/ThemeSwitcher";

const App = () => {
  const [inputText, setInputText] = useState("");
  const hiddenWord = "daviti magari kacia";
  const [displayText, setDisplayText] = useState("");
  const [coordinates, setCoordinates] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleKeyPress = (e) => {
      const newText = inputText + e.key;
      setInputText(newText);

      if (newText.includes(hiddenWord)) {
        setDisplayText(hiddenWord);
      } else {
        setDisplayText(""); 
      }
    };

    const handleMouseMove = (e) => {
      setCoordinates({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("keypress", handleKeyPress);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("keypress", handleKeyPress);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [inputText]);

  return (
    <div className="app">
      <h1>Hidden Word Typing Game</h1>
      <p>Type until you find the hidden word!</p>
      <p>
        Hidden Word Display:{""}
        <span className="display-text">{displayText || "Keep typing..."}</span>
      </p>
      <p>
        Mouse Coordinates: X: {coordinates.x}, Y: {coordinates.y}
      </p>
      <Timer />
      <ThemeSwitcher /> {}
    </div>
  );
};

export default App;