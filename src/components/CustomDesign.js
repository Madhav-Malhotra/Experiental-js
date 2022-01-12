import React from 'react';
import { HexColorPicker } from "react-colorful";
import FontPicker from "font-picker-react";

const API_KEY = "AIzaSyDkVLWc30wD640m3xeyFWQgx3s-lo_S5UA";

export default function CustomDesign(props) {
  const {colorBG, setColorBG, colorText, setColorText, colorLink, setColorLink, headerFont, setHeaderFont, bodyFont, setBodyFont} = props;

  return (
    <div className="custom-design">
      <h3>Choose Background, Text, and Link Colours</h3>
      <div className='color-pickers'>
        <div className='picker'>
          <p>Background Color</p>
          <HexColorPicker color={colorBG} onChange={setColorBG} />
          <input type="text" size="10" value={colorBG} onChange={(e) => setColorBG(e.target.value)}></input>
        </div>
        <div className='picker'>
          <p>Text Color</p>
          <HexColorPicker color={colorText} onChange={setColorText} />
          <input type="text" size="10" value={colorText} onChange={(e) => setColorText(e.target.value)}></input>
        </div>
        <div className='picker'>
          <p>Link Color</p>
          <HexColorPicker color={colorLink} onChange={setColorLink} />
          <input type="text" size="10" value={colorLink} onChange={(e) => setColorLink(e.target.value)}></input>      
        </div>
      </div>
      <hr />
      <h3>Choose Header and Body Font</h3>
      <p className='apply-font-header'>Select a header font from the dropdown</p>
      <FontPicker
        apiKey={API_KEY}
        activeFontFamily={headerFont}
        onChange={(nextFont) => setHeaderFont(nextFont.family)}
        pickerId='header'
      />
      <p className='apply-font-body'>Select a body font from the dropdown</p>
      <FontPicker
        apiKey={API_KEY}
        activeFontFamily={bodyFont}
        onChange={(nextFont) => setBodyFont(nextFont.family)}
        pickerId='body'
      />
      <hr />
    </div>
  )
}
