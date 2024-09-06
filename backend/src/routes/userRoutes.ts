import { Router } from "express";
const router = Router();

router.post('/register', (req, res) => {
    res.send('Create a user');
});

router.post('/login', (req, res) => {
    res.send('Authenticate a user');
});

router.get('/profile', (req, res) => {
    res.send('Get a authenticated user profile');
});


export default router;