import e, {Request, Response} from 'express';
import {TaskService} from '../services/taskService';

class TaskController {
    constructor(private taskService: TaskService) {}

    // List all tasks of the authenticated user
    async getAllTasks(req: Request, res: Response): Promise<void> {
        if (!req.user) {
            res.status(401).json({message: 'Unauthorized'});
            return;
        }
        const userId = req.user.id;
        try {
            const tasks = await this.taskService.getAllTasks(userId);
            res.json(tasks);
        } catch (error) {
            if (error instanceof Error) {
                res.status(500).json({message: error.message});
            } else {
                res.status(500).json({message: 'An unknown error occurred'});
            }
        }
    }

    // Create a new task
    async createTask(req: Request, res: Response): Promise<void> {
        if (!req.user) {
            res.status(401).json({message: 'Unauthorized'});
            return;
        }
        const userId = req.user.id;
        const {title, description} = req.body;
        try {
            const task = await this.taskService.createTask(title, description, userId);
            res.status(201).json(task);
        } catch (error) {
            if (error instanceof Error) {
                res.status(500).json({message: error.message});
            } else {
                res.status(500).json({message: 'An unknown error occurred'});
            }
        }
    }

    // Update a task
    async updateTask(req: Request, res: Response): Promise<void> {
        if (!req.user) {
            res.status(401).json({message: 'Unauthorized'});
            return;
        }
        const userId = req.user.id;
        const taskId = parseInt(req.params.id);
        const {title, description, completed} = req.body;
        try {
            const task = await this.taskService.updateTask(taskId, title, description, completed);
            res.json(task);
        } catch (error) {
            if (error instanceof Error) {
                res.status(500).json({message: error.message});
            } else {
                res.status(500).json({message: 'An unknown error occurred'});
            }
        }
    }

    // Delete a task 
    async deleteTask(req: Request, res: Response): Promise<void> {
        if (!req.user) {
            res.status(401).json({message: 'Unauthorized'});
            return;
        }
        const userId = req.user.id;
        const taskId = parseInt(req.params.id);
        try {
            await this.taskService.deleteTask(taskId);
            res.status(204).end();
        } catch (error) {
            if (error instanceof Error) {
                res.status(500).json({message: error.message});
            } else {
                res.status(500).json({message: 'An unknown error occurred'});
            }
        }
    }
}

export default TaskController;