import { Gradient } from '../types/types';

function gradientToCssString(gradient: Gradient): string {
  const str = ['linear-gradient'];
  let separator = '(';

  if (gradient.angle !== 0) {
    separator = '(' + gradient.angle + 'deg,';
  }

  for (let i = 0; i < gradient.steps; i++) {
    const red = Math.floor(gradient.red[i]);
    const green = Math.floor(gradient.green[i]);
    const blue = Math.floor(gradient.blue[i]);
    const alpha = (gradient.alpha[i] / 255.0).toPrecision(2);
    str.push(separator + 'rgba(' + red + ',' + green + ',' + blue + ',' + alpha + ')');
    separator = ',';
  }

  str.push(')');

  return str.join('');
}

export default gradientToCssString;
