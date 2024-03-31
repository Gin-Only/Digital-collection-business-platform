import { saveAs } from 'file-saver';

export function downloadFile(url, filename) {
  fetch(url)
    .then((response) => response.blob())
    .then((blob) => {
      saveAs(blob, filename);
    });
}

   
