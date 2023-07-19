import { APIGatewayProxyEvent, APIGatewayProxyHandler } from 'aws-lambda';
import imageToGradient from './src/lib/image-to-gradient';
import { GradientResponse } from './src/types/types';

export const handler: APIGatewayProxyHandler = async (event: APIGatewayProxyEvent): Promise<GradientResponse> => {
  const response: GradientResponse = {
    headers: {
      'Access-Control-Allow-Origin': 'https://gradientify.dulaj.dev',
      'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
      'Access-Control-Allow-Methods': 'OPTIONS,POST,GET',
    },
    isBase64Encoded: false,
    statusCode: 200,
    body: JSON.stringify({ type: 'SUCCESS', message: 'Successfully uploaded file to S3 storage' }),
  };

  try {
    try {
      const parsedBody = JSON.parse(event.body);

      const angle = parsedBody?.rotation || 0;
      const steps = parsedBody?.bluriness || 6;

      const options = {
        angle,
        steps,
      };

      const base64File = parsedBody.file;
      const decodedFile: Buffer = Buffer.from(base64File.replace(/^data:image\/\w+;base64,/, ''), 'base64');

      let str: string;

      if (decodedFile) {
        str = await imageToGradient(decodedFile, options);
        // to upload to S3: import uploadFile from './src/lib/s3'; and then uploadFile(decodedFile);
      }

      if (str) {
        response.body = JSON.stringify({ type: 'SUCCESS', data: str });
      }
    } catch (error) {
      response.statusCode = 500;
      response.body = JSON.stringify({ type: 'ERROR', data: error });
    }
  } catch (error) {
    response.statusCode = 500;
    response.body = JSON.stringify({ type: 'ERROR', data: error });
  }

  return response;
};
