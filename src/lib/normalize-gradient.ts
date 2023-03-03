import { Gradient } from '../types/types';

function normalizeGradient(gradient: Gradient) {
  for (let i = 0; i < gradient.steps; i++) {
    let unit = gradient.unit[i];
    gradient.red[i] /= unit;
    gradient.green[i] /= unit;
    gradient.blue[i] /= unit;
    gradient.alpha[i] /= unit;
    gradient.unit[i] = 1;
  }
}

export default normalizeGradient;
