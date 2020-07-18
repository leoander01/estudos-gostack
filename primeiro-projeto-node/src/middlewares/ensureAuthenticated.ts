import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';

import authConfig from '../config/auth';

interface TokenPayload {
    iat: number;
    exp: number;
    sub: string;
}

export default function ensureAuthenticated(request: Request, response: Response, next: NextFunction): void {
    // Validação do token JWT
    const authHeader = request.headers.authorization;

    if (!authHeader) {
        throw new Error('JWT token is missing.');
    }

    // Não é necessário deixar o 'type'
    const [type, token] = authHeader.split(' ');

    try {
        const decoded = verify(token, authConfig.jwt.secret);

        // as = forçar um formato, decoded é do tipo TokenPayload
        const { sub } = decoded as TokenPayload;

        request.user = {
            id: sub,
        }

        console.log(decoded);
        return next();
    } catch {
        throw new Error('Invalid JWT token.');
    }


}