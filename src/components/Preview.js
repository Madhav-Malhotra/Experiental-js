import React from 'react'

export default function Preview(props) {
  const divStyles = {
    backgroundColor: props.colorBG,
    color: props.colorText
  };

  return (
    <div className="preview">
      <h3>Article Preview</h3>
      <div className='preview-welcome' style={divStyles}>
        <h1 className='apply-font-header'>{props.welcomeTitle}</h1>
        {props.welcomeButton && <button className='apply-font-body'>{props.welcomeButton}</button>}
      </div>
      <div className='preview-body'>
        <h1 className='apply-font-header'>{props.articleTitle}</h1>
        <div dangerouslySetInnerHTML={{__html: props.articleBody}}></div>
      </div>
      <hr />
    </div>
  )
}
