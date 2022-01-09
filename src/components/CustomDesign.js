import React, { useState } from 'react';
import { HexColorPicker } from "react-colorful";
import FontPicker from "font-picker-react";

const API_KEY = "AIzaSyDkVLWc30wD640m3xeyFWQgx3s-lo_S5UA";

export default function CustomDesign() {
  const [colorBG, setColorBG] = useState("#ffffff");
  const [colorText, setColorText] = useState("#000000");
  const [colorLink, setColorLink] = useState("#0000EE");
  const [headerFont, setHeaderFont] = useState("Open Sans");
  const [bodyFont, setBodyFont] = useState("Roboto");


  return (
    <div className="custom-design">
      <h3>Choose Background, Text, and Link Colours</h3>
      <p>Background Color</p>
      <HexColorPicker color={colorBG} onChange={setColorBG} />
      <input type="text" size="10" value={colorBG} onChange={(e) => setColorBG(e.target.value)}></input>
      <p>Text Color</p>
      <HexColorPicker color={colorText} onChange={setColorText} />
      <input type="text" size="10" value={colorText} onChange={(e) => setColorText(e.target.value)}></input>
      <p>Link Color</p>
      <HexColorPicker color={colorLink} onChange={setColorLink} />
      <input type="text" size="10" value={colorLink} onChange={(e) => setColorLink(e.target.value)}></input>
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
