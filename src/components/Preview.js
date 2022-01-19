import React from 'react'

export default function Preview(props) {
  const divStyles = {
    backgroundColor: props.colorBG,
    color: props.colorText
  };
  const buttonStyles = {
    backgroundColor: props.colorText,
    color: props.colorBG,
    borderColor: props.colorText,
  }
  const insert = getStyled(props.articleBody, props.colorLink);

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
            <div className="body-content" dangerouslySetInnerHTML={{__html: insert}}></div>
          </div>
          {props.articleBody && <div className="side-headings">
            <h5>Sections</h5>
            <p><a style={{color: props.colorLink}} href='#preview'>Real Headings</a></p>
            <p><a style={{color: props.colorLink}} href='#preview'>Will Be Added</a></p>
            <p><a style={{color: props.colorLink}} href='#preview'>In this Sidebar</a></p>
          </div>}
        </div>
      </div>
      <hr />
    </div>
  )
}


function getStyled(str, linkColor) {
  str = str.replaceAll("<h1>", "<h1 class='apply-font-header'>");
  str = str.replaceAll("<h2>", "<h2 class='apply-font-header'>");
  str = str.replaceAll("<h3>", "<h3 class='apply-font-header'>");
  str = str.replaceAll("<h4>", "<h4 class='apply-font-header'>");
  str = str.replaceAll("<h5>", "<h5 class='apply-font-header'>");
  str = str.replaceAll("<h6>", "<h6 class='apply-font-header'>");

  str = str.replaceAll("<p>", "<p class='apply-font-body'>");
  str = str.replaceAll("<label>", "<label class='apply-font-body'>");
  str = str.replaceAll("<span>", "<span class='apply-font-body'>");
  str = str.replaceAll("<a", `<a class='apply-font-body' style='color: ${linkColor};'`);
  return str;
}