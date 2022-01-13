import React, { useState } from 'react';
import { EditorState, convertToRaw } from 'draft-js';
import draftToHtml from 'draftjs-to-html';

import Header from "./Header";
import ArticleContent from "./ArticleContent";
import CustomDesign from "./CustomDesign";
import Music from "./Music";
import WelcomeScreen from "./WelcomeScreen";
import Preview from "./Preview";

export default function StateManager() {
  const [articleTitle, setArticleTitle] = useState("");
  const [articleBody, setArticleBody] = useState(EditorState.createEmpty());
  const articleProps = {articleTitle, setArticleTitle, setArticleBody};

  const [colorBG, setColorBG] = useState("#ffffff");
  const [colorText, setColorText] = useState("#000000");
  const [colorLink, setColorLink] = useState("#0000EE");
  const [headerFont, setHeaderFont] = useState("Open Sans");
  const [bodyFont, setBodyFont] = useState("Roboto");
  const customProps = {colorBG, setColorBG, colorText, setColorText, colorLink, setColorLink, headerFont, setHeaderFont, bodyFont, setBodyFont};

  const [welcomeTitle, setWelcomeTitle] = useState("");
  const [welcomeButton, setWelcomeButton] = useState("");
  const welcomeProps = {welcomeTitle, setWelcomeTitle, welcomeButton, setWelcomeButton};
  const [audio, setAudio] = useState([]);
  const previewProps = {articleBody: getHTML(articleBody), articleTitle, welcomeTitle, welcomeButton, colorBG, colorText, headerFont, bodyFont};

  return (
    <div>
      <Header />
      <ArticleContent {...articleProps}/>
      <CustomDesign {...customProps}/>
      <WelcomeScreen {...welcomeProps}/>
      <Music setAudio={setAudio}/>
      <Preview {...previewProps}/>
    </div>
  )
}

function getHTML(state) {
  const conv = convertToRaw(state.getCurrentContent());
  const html = draftToHtml(conv);
  return html;
}