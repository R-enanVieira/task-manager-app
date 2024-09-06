import { Router } from "express";
const router = Router();

router.get('/', (req, res) => {
    res.send('Get all tasks');
});

router.post('/', (req, res) => {
    res.send('Create a task');
});

router.patch('/:id', (req, res) => {
    res.send('Update a task');
});

router.delete('/:id', (req, res) => {
    res.send('Delete a task');
});

export default router;
