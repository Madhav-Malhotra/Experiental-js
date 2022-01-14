import React from 'react'

export default function Generate(props) {
  function generate() {
    console.log("generate");
  }

  return (
    <div className='generate'>
      <button onClick={generate}>Generate Article</button>
      <p>Note: The article will be downloaded as a HTML document to your device.</p>
    </div>
  )
}
