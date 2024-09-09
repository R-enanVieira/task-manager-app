import {Request, Response} from 'express';
import {UserService} from '../services/userService';

class UserController {
    constructor(private userService: UserService) {}

    // Get authenticated user
    async getCurrentUser(req: Request, res: Response): Promise<void> {
        if (!req.user) {
            res.status(401).json({message: 'Unauthorized'});
            return;
        }
        const userId = req.user.id;
        try {
            const user = await this.userService.getUserById(userId);
            res.json(user.toJSON());
        } catch (error) {
            if (error instanceof Error) {
                res.status(400).json({message: error.message});
            } else {
                res.status(400).json({message: 'An unknown error occurred'});
            }
        }
    }
}

export default UserController;