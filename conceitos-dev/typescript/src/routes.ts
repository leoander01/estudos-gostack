import { Request, Response } from 'express';
import createUser from './services/CreateUser';

export function helloWorld(request: Request, response: Response)  {
    const user = createUser({
        email: 'leo@teste',
        password: '12345',
        techs: [
            'Node.js', 
            'React',
            { title: 'JS', experience: 100 },
        ],
    });

    return response.json({ message: 'Hello' });
}
