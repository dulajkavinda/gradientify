import fs from 'fs';
import { OUTPUT_PATH, Extension } from './constants';

function writeHTMLFile(data: string) {
  var html = `
  <html>
      <head>
          <style>
              html{
                  width:100%;
                  height:100%;
                  background:${data};
              }
          </style>    
      </head>
      <body>
      </body>
  </html>`;

  fs.writeFile(`${OUTPUT_PATH}.html`, html, (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
  });
}

export default writeHTMLFile;
