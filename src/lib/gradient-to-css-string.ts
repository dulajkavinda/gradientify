import { Gradient } from '../types/types';

function gradientToCssString(gradient: Gradient): string {
  let str = ['linear-gradient'];
  let separator = '(';

  if (gradient.angle !== 0) {
    separator = '(' + gradient.angle + 'deg,';
  }

  for (let i = 0; i < gradient.steps; i++) {
    let red = Math.floor(gradient.red[i]);
    let green = Math.floor(gradient.green[i]);
    let blue = Math.floor(gradient.blue[i]);
    let alpha = (gradient.alpha[i] / 255.0).toPrecision(2);
    str.push(separator + 'rgba(' + red + ',' + green + ',' + blue + ',' + alpha + ')');
    separator = ',';
  }

  str.push(')');

  return str.join('');
}

export default gradientToCssString;
