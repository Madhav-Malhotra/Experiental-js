import React from 'react'

export default function Preview(props) {
  return (
    <div className="preview">
      <div className='preview-welcome'>
        <h1 className='apply-font-header'>{props.welcomeTitle}</h1>
        <button className='apply-font-body'>{props.welcomeButton}</button>
      </div>
      <div className='preview-body'>
        <h1 className='apply-font-header'>{props.articleTitle}</h1>
        <div dangerouslySetInnerHTML={{__html: props.articleBody}}></div>
      </div>
    </div>
  )
}
