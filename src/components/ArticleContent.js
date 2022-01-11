import React from 'react';
import { Editor } from 'react-draft-wysiwyg';
import '../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

export default function ArticleContent(props) {
  const { setArticleBody, articleTitle, setArticleTitle} = props;
  const toolOptions = {
    options: ['inline', 'blockType', 'list', 'link', 'emoji', 'image', 'remove', 'history'],
  }

  const handleEditorStateChange = (editorState) => {setArticleBody(editorState)};

  return (
    <div className="article-content">
      <h3>Enter the article title:</h3>
      <input type="text" size="50" value={articleTitle} onChange={(e) => setArticleTitle(e.target.value)}></input>
      <h3>Enter the article content:</h3>
      <p>Note: If copy pasting doesn't work, try right clicking and pasting as plain text. Or pasting smaller chunks of text. For images, click the image icon on the right to LINK to an image.</p>
      <Editor 
        wrapperClassName="wrapper-class"
        editorClassName="editor-class"
        toolbarClassName="toolbar-class"
        onEditorStateChange={handleEditorStateChange}
        toolbar={toolOptions}
      />
      <hr />
    </div>
  )
}
