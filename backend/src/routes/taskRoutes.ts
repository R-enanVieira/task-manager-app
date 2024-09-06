import { Router } from "express";
const router = Router();

router.get('/tasks', (req, res) => {
    res.send('Get all tasks');
});

router.post('/tasks', (req, res) => {
    res.send('Create a task');
});

router.patch('/tasks/:id', (req, res) => {
    res.send('Update a task');
});

router.delete('/tasks/:id', (req, res) => {
    res.send('Delete a task');
});

export default router;
