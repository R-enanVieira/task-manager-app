import { Router } from "express";
import AuthController from "../controllers/authController"; 
import UserController from "../controllers/userController";
import { authenticateToken } from "../middleware/authMiddleware";
import { AuthService } from "../services/authService";
import { UserService } from "../services/userService";

const router = Router();

const authService = new AuthService();
const authController = new AuthController(authService);

const userService = new UserService();
const userController = new UserController(userService);

// register and login public routes
router.post('/register', authController.register.bind(authController));
router.post('/login', authController.login.bind(authController));

// protected route for get authenticated user profile
router.get('/me', authenticateToken, userController.getCurrentUser.bind(userController));


export default router;