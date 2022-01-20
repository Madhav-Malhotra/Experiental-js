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
    </div><div class='article' id="article"><h1 class='title'>${props.articleTitle}</h1>${props.articleBody}</div>
    <div class='sections'></div><div class='sound'></div>`;
  //Add article sections to html
  h.querySelectorAll("body h1, body h2, body h3, body h4").forEach(el => addHREF(el));
  h.querySelector("body div.sections").innerHTML = getSections(h);
  //Add sound control
  h.querySelector("body div.sound").innerHTML = "<button id='sound-button'>Sound Off</button>";
  //Add styles
  const s = getStyles(props);
  //Add scripts
  const sc = getScripts(props);
  h.querySelector("body").appendChild(sc);

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
    p, a, li, span, label, blockquote, button { font-family: "${props.bodyFont}"; }

    a {
      color: ${props.colorLink};
    }
    /* =========== SIZING AND POSITIONING ============ */
    body {
      display: flex;
      flex-direction: column;
    }

    div.article {
      padding-left: 12vw;
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
      align-items: center;
    }

    p, label, span, li, pre, button {
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

    /* ================ FUNCTIONAL COMPONENTS =============== */
    button {
      outline: none;
      width: fit-content;
      cursor: pointer;
      border: solid 2px ${props.colorText};
      transition: 0.3s;
      background-color: ${props.colorText};
      color: ${props.colorBG};
      border-color: ${props.colorText};
    }
    button:hover {
      background-color: rgba(0,0,0,0);
      color: ${props.colorText};
      border-color: ${props.colorText};
    }

    div.welcome>button { padding: 10px 30px; }
    button#sound-button { padding: 3px 10px; }

    div.sound {
      position: fixed;
      bottom: 20px;
      left: 10px;
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

function getScripts(props) {
  const sc = document.createElement("script");
  const audioFiles = [];
  for (let i = 0; i < props.audio.length; i++) {
    const file = props.audio[i];
    audioFiles.push(`music/${file.name}`);
  }

  sc.innerHTML = `
    //Initialise variables
    const welcomeButton = document.querySelector(".welcome button");
    const soundButton = document.querySelector(".sound button");
    let currentAudio = JSON.parse(\`${JSON.stringify(audioFiles)}\`);
    let playing;

    //Welcome scroll
    welcomeButton.addEventListener("click", () => {
      const elHeight = document.querySelector("#article").offsetTop;
      const id = setInterval(() => {
        const current = window.scrollY;
        if (current < elHeight) window.scrollTo(0,current+20)
        else clearInterval(id);
      }, 1);
    });

    //Sound functions
    function loadAudio() {
      const rand = Math.floor(Math.random() * currentAudio.length);
      playing = new Audio(currentAudio[rand]);
      playing.play();
      playing.onended = () => loadAudio();
      currentAudio.splice(rand, 1);
      if (currentAudio.length == 0) currentAudio = JSON.parse(\`${JSON.stringify(audioFiles)}\`);
    }

    soundButton.addEventListener("click", (e) => {
      if (window.onloading) window.onloading = null;

      if (e.target.innerText === "Sound Off") {
        e.target.innerText = "Sound On";
        if (!playing) loadAudio();
        else playing.play();
      }
      else if (e.target.innerText === "Sound On") {
        e.target.innerText = "Sound Off";
        playing.pause();
      }
    });
    window.onclick = () => soundButton.click();
  `;
  return sc;
}