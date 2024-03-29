import Jimp from 'jimp';
import { Gradient } from '../types/types';
import addToGradient from './add-to-gradient';
import createGradient from './create-gradients';
import fmod from './fmod';

function reduce(image: Jimp, steps: number, angle: number): Gradient {
  const gradient = createGradient(steps, angle);
  const resized = image.resize(steps, steps);
  const cos = Math.cos((angle / 180.0) * Math.PI);
  const sin = Math.sin((angle / 180.0) * Math.PI);
  const fsteps = gradient.steps;
  const hsteps = fsteps * 0.5;

  resized.scan(0, 0, resized.bitmap.width, resized.bitmap.height, (x: number, y: number, idx: number) => {
    for (let i = 0; i < gradient.steps; i++) {
      let weight = fmod(sin * x + cos * y - i + hsteps, fsteps) - hsteps;
      weight = 1.0 - Math.abs(weight);
      if (weight <= 0) continue;
      addToGradient(
        gradient,
        i,
        resized.bitmap.data[idx] * weight,
        resized.bitmap.data[idx + 1] * weight,
        resized.bitmap.data[idx + 2] * weight,
        resized.bitmap.data[idx + 3] * weight,
        weight,
      );
    }
  });

  return gradient;
}

export default reduce;
