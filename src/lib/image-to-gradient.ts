import gradientToCssString from './gradient-to-css-string';
import normalizeGradient from './normalize-gradient';
import reduce from './reduce';
import Jimp from 'jimp';
import { GradientOptions } from '../types/types';

async function imageToGradient(imagePath: string, options?: GradientOptions | null | undefined): Promise<string> {
  let optionAngle: number;
  let optionSteps: number;

  if (!options) {
    options = {
      angle: 0,
      steps: 16,
    };
  } else {
    optionAngle = options?.angle;
    optionSteps = options?.steps;
  }

  return new Promise(async (resolve, reject) => {
    await Jimp.read(imagePath, (err, image) => {
      if (err) {
        reject(err);
      }

      let gradient = reduce(image, optionSteps, optionAngle);
      normalizeGradient(gradient);
      let str = gradientToCssString(gradient);

      if (str) {
        resolve(str);
      } else {
        reject('Error: Gradient string is empty');
      }
    });
  });
}

export default imageToGradient;
