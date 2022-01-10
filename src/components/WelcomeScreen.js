import React, { useState } from 'react'

export default function WelcomeScreen() {
  const [welcomeTitle, setWelcomeTitle] = useState("");
  const [welcomeButton, setWelcomeButton] = useState("");

  return (
    <div className='welcome'>
      <h3>Add Welcome Screen</h3>
      <p>Set Welcome Screen Title</p>
      <input type="text" value={welcomeTitle} onChange={(e) => setWelcomeTitle(e.target.value)} />
      <p>Set Start Button Text</p>
      <input type="text" value={welcomeButton} onChange={(e) => setWelcomeButton(e.target.value)} />
      <hr />
    </div>
  )
}
