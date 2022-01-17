import JSZip from 'jszip';
import FileSaver from 'file-saver';

export default function generate(props) {
  const zip = new JSZip();
  //Save Music
  for (let i = 0; i < props.audio.length; i++) {
    const file = props.audio[i];
    zip.file(`music/${file.name}`, file);
  }
  //Generate HTML page of article
  const h = document.createElement('html');
  h.innerHTML = `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0"><title>${props.articleTitle}</title><link rel="stylesheet" href="styles.css">
    </head><body></body></html>`;
  //Add article body to html
  h.querySelector("body").innerHTML = `<div class='welcome'><h1>${props.welcomeTitle}</h1><button>${props.welcomeButton}</button>
    </div><div class='article'><h1 class='title'>${props.articleTitle}</h1>${props.articleBody}</div><div class='sections'></div>`;
  //Add article sections to html
  h.querySelectorAll("body h1, body h2, body h3, body h4").forEach(el => addHREF(el));
  h.querySelector("body div.sections").innerHTML = getSections(h);
  //Add styles
  const s = getStyles(props);

  //Save file
  zip.file('index.html', h.innerHTML);
  zip.file('styles.css', s);
  zip.generateAsync({ type: 'blob' })
    .then( data => FileSaver.saveAs(data, `${props.articleTitle || "download"}.zip`) );
}

function addHREF(el) {
  const id = el.innerText.replaceAll(" ", "-").replace(/[^0-9a-zA-Z-]/g, '');
  el.id = id;
}

function getStyles(props) {
  return `
    /* ========= FONTS AND COLOURS ========== */
    @import url('https://fonts.googleapis.com/css?family=${props.headerFont.replaceAll(" ", "+")}&display=swap');
    @import url('https://fonts.googleapis.com/css?family=${props.bodyFont.replaceAll(" ", "+")}&display=swap');

    body { 
      background-color: ${props.colorBG};
      color: ${props.colorText};
    }

    h1, h2, h3, h4, h5, h6 { font-family: "${props.headerFont}"; }
    p, a, li, span, label, blockquote { font-family: "${props.bodyFont}"; }

    a {
      color: ${props.colorLink};
    }
    /* =========== SIZING AND POSITIONING ============ */
    body {
      display: flex;
      flex-direction: column;
    }

    div.article {
      padding-left: 10vw;
      padding-right: 22vw;
    }

    div.sections {
      min-width: 200px;
      position: fixed;
      z-index: 2;
      top: 4vh;
      right: 2vw;
    }
    div.sections>h5 { 
      margin-top: 0;
      margin-bottom: 1.4rem;
    }
    
    div.welcome {
      height: 99vh;
      width: 98vw;
      background-color: black;
      z-index: 10;
      text-align: center;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    p, label, span, li, pre {
      font-size: 1.2rem;
    }
    
    h6 { font-size: 1.5rem;  }
    h5 { font-size: 2rem;  }
    h1.title { font-size: 5rem;  }
    h4 { font-size: 2.4rem;  }
    h3 { font-size: 3rem;  }
    h2 { font-size: 4rem;  }
    h1 { font-size: 4.6rem;  }
    blockquote {
      font-size: 2rem;
      font-style: italic;
      border-left: solid 7px ${props.colorText};
      padding-left: 21px;
    }
  `
};

function getSections(h) {
  let links = [];
  h.querySelectorAll(".article h1, .article h2, .article h3, .article h4")
    .forEach(el => {
      if (el.className !== 'title') links.push(`<p><a href='#${el.id}'>${el.innerText}</a></p>`);
    });

  let out = "<h5>Sections</h5>";
  links.forEach(el => out += (el));
  return out;
}