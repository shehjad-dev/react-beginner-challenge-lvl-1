import React from 'react';
import colorNames from 'colornames';

export default function ColorInput({
  colorVal,
  setColorVal,
  setHexVal,
  isDarkText,
  setIsDarkText,
}) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <input
        className="colorInput"
        placeholder="Add color Name"
        value={colorVal}
        onChange={(e) => {
          setColorVal(e.target.value);
          setHexVal(colorNames(e.target.value));
        }}
      />
      <button className="toggleBtn" onClick={() => setIsDarkText(!isDarkText)}>
        Toggle
      </button>
    </div>
  );
}
