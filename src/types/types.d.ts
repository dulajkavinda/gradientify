export type Gradient = {
  steps: number;
  red: number[];
  green: number[];
  blue: number[];
  alpha: number[];
  unit: number[];
  angle: number;
};

export type GradientOptions = {
  angle: number;
  steps: number;
};

export type GradientResponse = {
  isBase64Encoded: boolean;
  statusCode: number;
  body: string;
};
