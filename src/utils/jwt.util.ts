import jwt from 'jsonwebtoken';
import config from 'config';

const privateKey: string = config.get('privateKey');
const publicKey: string = config.get('publicKey');

export function signJwt(object: Object, options?: jwt.SignOptions | undefined) {
  return jwt.sign(object, privateKey, {
    ...(options && options),
    algorithm: 'RS256',
    allowInsecureKeySizes: true,
  });
}

export function verifyJwt(token: string) {
  try {
    const decodedPayload = jwt.verify(token, publicKey);
    return {
      valid: true,
      expired: false,
      decodedPayload,
    };
  } catch (error: any) {
    return {
      valid: false,
      expired: error.message === 'jwt expired',
      decoded: null,
    };
  }
}
