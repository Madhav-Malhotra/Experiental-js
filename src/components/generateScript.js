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
    <meta name="viewport" content="width=device-width, initial-scale=1.0"><title>${props.articleTitle}</title></head><body></body></html>`;
  //Add article body to html
  h.querySelector("body").innerHTML = `<div class='article-title'><h1>${props.articleTitle}</h1></div>
    <div class='article-body'>${props.articleBody}</div>`;
  h.querySelectorAll("body h1, body h2, body h3, body h4").forEach(el => addHREF(el));

  //Save file
  zip.file('index.html', h.innerHTML);
  zip.generateAsync({ type: 'blob' })
    //.then( data => FileSaver.saveAs(data, `${props.articleTitle || "download"}.zip`) );
}

function addHREF(el) {
  const id = el.innerText.replaceAll(" ", "-").replace(/[^0-9a-zA-Z-]/g, '');
  el.id = id;
}