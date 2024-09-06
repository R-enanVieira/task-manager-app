import { Request, Response } from 'express';
import { AuthService } from '../services/authService';

class AuthController {
    constructor(private authService: AuthService) {}

    // User registration
    async register(req: Request, res: Response): Promise<void> {
        const { name, email, password } = req.body;
        try {
            const user = await this.authService.register(name, email, password);
            res.status(201).json(user);
        } catch (error) {
            if (error instanceof Error) {
                res.status(400).json({ message: error.message });
            } else {
                res.status(400).json({ message: 'An unknown error occurred' });
            }
        }
    }

    // User login
    async login(req: Request, res: Response): Promise<void> {
        const { email, password } = req.body;
        try {
            const token = await this.authService.login(email, password);
            res.status(200).json(token);
        } catch (error) {
            if (error instanceof Error) {
                res.status(400).json({ message: error.message });
            } else {
                res.status(400).json({ message: 'An unknown error occurred' });
            }
        }
    }
}

export default AuthController;