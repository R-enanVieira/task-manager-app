import Task from '../models/taskModel';

export class TaskService {
    // List all tasks of a user
    async getAllTasks(userId: number): Promise<Task[]> {
        return await Task.findAll({ where: { userId } });
    }

    // Create a new task
    async createTask(title: string, description: string, userId: number): Promise<Task> {
        return await Task.create({ title, description, userId });
    }

    // Update a task
    async updateTask(taskId: number, title: string, description: string, completed: boolean): Promise<Task> {
        const task = await Task.findByPk(taskId);
        if (!task) {
            throw new Error('Task not found');
        }

        task.title = title;
        task.description = description;
        task.completed = completed;
        await task.save();
        return task;
    }

    // Delete a task
    async deleteTask(taskId: number): Promise<void> {
        const task = await Task.findByPk(taskId);
        if (!task) {
            throw new Error('Task not found');
        }

        await task.destroy();
    }
}