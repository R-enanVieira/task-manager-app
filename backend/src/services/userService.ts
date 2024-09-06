import User from '../models/userModel';

export class UserService {
    async getUserById(userId: number) {
        const user = await User.findByPk(userId);
        if (!user) {
            throw new Error('User not found');
        }
        return user;
    }
}