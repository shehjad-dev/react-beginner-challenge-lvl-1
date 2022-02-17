import React from 'react';

export default function Box({ colorVal, hexVal, isDarkText }) {
  return (
    <div>
      <div className="colorBox" style={{backgroundColor: colorVal, color: isDarkText ? 'black' : 'white'}}>
        <div>{colorVal ? colorVal : "Empty Value"}</div>
        <div>{hexVal ? hexVal : "Empty Hex Value"}</div>
        
      </div>
    </div>
  );
}
