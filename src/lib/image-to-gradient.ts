import gradientToCssString from './gradient-to-css-string';
import normalizeGradient from './normalize-gradient';
import reduce from './reduce';
import Jimp from 'jimp';
import { GradientOptions } from '../types/types';

async function imageToGradient(imagePath: Buffer, options?: GradientOptions | null | undefined): Promise<string> {
  let optionAngle = 0;
  let optionSteps = 16;

  if (options) {
    optionAngle = options?.angle;
    optionSteps = options?.steps;
  }

  return new Promise(async (resolve, reject) => {
    await Jimp.read(imagePath)
      .then((image) => {
        const gradient = reduce(image, optionSteps, optionAngle);
        normalizeGradient(gradient);
        const str = gradientToCssString(gradient);

        if (str) {
          resolve(str);
        } else {
          reject('Error: Gradient string is empty');
        }
      })
      .catch((err) => {
        reject(err);
      });
  });
}

export default imageToGradient;
