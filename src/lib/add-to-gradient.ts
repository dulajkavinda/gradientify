import { Gradient } from '../types/types';

function addToGradient(
  gradient: Gradient,
  index: number,
  red: number,
  green: number,
  blue: number,
  alpha: number,
  weight: number,
) {
  let idx = index;
  gradient.red[idx] += red;
  gradient.green[idx] += green;
  gradient.blue[idx] += blue;
  gradient.alpha[idx] += alpha;
  gradient.unit[idx] += weight;
}

export default addToGradient;
