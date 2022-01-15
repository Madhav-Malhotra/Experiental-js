import React from 'react'
import generate from "./generateScript";

export default function Generate(props) {
  return (
    <div className='generate'>
      <button onClick={() => generate(props)}>Generate Article</button>
      <p>Note: The article will be downloaded as a HTML document to your device.</p>
    </div>
  )
}
