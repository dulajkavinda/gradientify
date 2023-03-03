function fmod(a: number, b: number): number {
  return Number(a - Math.floor(a / b) * b);
}

export default fmod;
