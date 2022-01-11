import React from 'react';

export default function Music(props) {
  const { setAudio } = props;

  const handleSelect = (e) => {
    setAudio(e.target.files);
  }

  return (
    <div className='music'>
      <h3>Add music</h3>
      <p>Note: Uploaded audio will play in the background as the user reads. Leave blank for no music. If multiple audio files are uploaded, they will be looped in a random order.</p>
      <div>
        <label htmlFor="file">Choose .mp3 files:</label>
        <input type="file" id="music-file" accept=".mp3" name="file" multiple onChange={handleSelect}/>
        <br />
      </div>
      <hr />
    </div>
  )
}
