import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/userModel';

export class AuthService {
    async register(name: string, email: string, password: string) {
        const existingUser = await User.findOne({where: {email}});
        if (existingUser) {
            throw new Error('User already exists');
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await User.create({name, email, password: hashedPassword});
        return user;
    }

    async login(email: string, password: string) {
        const user = await User.findOne({where: {email}});
        if(!user) {
            throw new Error('User not found');
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            throw new Error('Invalid password');
        }

        const token = jwt.sign({id: user.id, email: user.email}, 'secretKey', {expiresIn: '1h'});

        return token;
    }
    
}


