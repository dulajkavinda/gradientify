import imageToGradient from './lib/image-to-gradient';
import writeHTMLFile from './lib/write-html-file';

const options = {
  angle: 0,
  steps: 6,
};

let str = imageToGradient('/Users/dulajkavinda/Desktop/untitled folder/Classic_Rainbow_Flag.png', options);

str.then((data) => {
  console.log(data);
  writeHTMLFile(data);
});
