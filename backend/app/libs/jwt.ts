import { TOKEN_SECRET } from '../../config';
import * as jwt from 'jsonwebtoken';

export function createAccessToken(payload) {
    return new Promise<string>((resolve, reject) => {
        jwt.sign(
            payload,
            TOKEN_SECRET,
            {
                expiresIn: "1d",
            },
            (err, token) => {
                if(err) reject(err)
                resolve(token);
            }
        )
    })
}