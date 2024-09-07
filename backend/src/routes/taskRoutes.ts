import { Router } from "express";
import TaskController from "../controllers/taskController";
import { TaskService } from "../services/taskService";
import { authenticateToken } from "../middleware/authMiddleware";

const router = Router();

const taskService = new TaskService();
const taskController = new TaskController(taskService);

// Protected routes for tasks
router.get('/', authenticateToken, taskController.getAllTasks.bind(taskController));
router.post('/', authenticateToken, taskController.createTask.bind(taskController));
router.patch('/:id', authenticateToken, taskController.updateTask.bind(taskController));
router.delete('/:id', authenticateToken, taskController.deleteTask.bind(taskController));

export default router;
