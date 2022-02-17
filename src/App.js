import React, { useState }  from "react";
import "./style.css";
import Box from "./components/Box.js";
import ColorInput from "./components/ColorInput.js";

export default function App() {
  const [colorVal, setColorVal] = useState('');
  const [hexVal, setHexVal] = useState('');
  const [isDarkText, setIsDarkText] = useState(true);
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <Box colorVal={colorVal} hexVal={hexVal} isDarkText={isDarkText}/>
      <ColorInput colorVal={colorVal} setColorVal={setColorVal} setHexVal={setHexVal} isDarkText={isDarkText} setIsDarkText={setIsDarkText}/>
    </div>
  );
}
