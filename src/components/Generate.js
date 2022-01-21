import React from 'react'
import generate from "./generateScript";

export default function Generate(props) {
  return (
    <div className='generate'>
      <button onClick={() => generate(props)}>Generate Article</button>
      <p>Note: The article will be downloaded as a HTML document.</p>
      <p><a target="_blank" href="https://icons8.com/icon/GH1SbXMwPs8K/vr-glasses">Vr Glasses</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a></p>
    </div>
  )
}
