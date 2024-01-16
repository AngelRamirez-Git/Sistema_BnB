import * as jwt from 'jsonwebtoken';

export function createAccessToken(payload) {
    return new Promise<string>((resolve, reject) => {
        jwt.sign(
            payload,
            "muajajaja",
            {
                expiresIn: '1d',
            },
            (err, token) => {
                if(err) reject(err)
                resolve(token);
            }
        )
    })
}