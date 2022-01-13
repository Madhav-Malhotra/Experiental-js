import React from 'react'

export default function Preview(props) {
  const divStyles = {
    backgroundColor: props.colorBG,
    color: props.colorText
  };
  const buttonStyles = {
    color: props.colorText,
    borderColor: props.colorText,
  }
  
  const style = document.createElement('style');
  style.innerHTML =  `div.body-inner h1, div.body-inner h2, div.body-inner h3, div.body-inner h4, div.body-inner h5, div.body-inner h6 {font-family: ${props.headerFont};} div.body-inner p, div.body-inner li, div.body-inner label, div.body-inner span, div.body-inner a {font-family: ${props.bodyFont};}`;
  document.getElementsByTagName('head')[0].appendChild(style);

  return (
    <div className="preview">
      <h3>Article Preview</h3>
      <div className='preview-wrapper'>
        <div className='preview-welcome' style={divStyles}>
          <h1 className='apply-font-header'>{props.welcomeTitle}</h1>
          {props.welcomeButton && <button className='apply-font-body' style={buttonStyles}>{props.welcomeButton}</button>}
        </div>
        <div className='preview-body' style={divStyles}>
          <div className='body-inner'>
            <h1 className='apply-font-header'>{props.articleTitle}</h1>
            <div className="body-content" dangerouslySetInnerHTML={{__html: props.articleBody}}></div>
          </div>
        </div>
      </div>
      <hr />
    </div>
  )
}
