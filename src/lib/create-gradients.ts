import { Gradient } from '../types/types';

function createGradient(steps: number, angle: number): Gradient {
  const gradient: Gradient = {
    steps: steps,
    red: [],
    green: [],
    blue: [],
    alpha: [],
    unit: [],
    angle: angle,
  };

  for (let i = 0; i < gradient.steps; i++) {
    gradient.red[i] = 0;
    gradient.green[i] = 0;
    gradient.blue[i] = 0;
    gradient.alpha[i] = 0;
    gradient.unit[i] = 0;
  }

  return gradient;
}

export default createGradient;
