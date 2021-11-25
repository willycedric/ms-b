import express from 'express';
const router = express.Router();
router.post('/api/users/signin', (req, res)=>{
    res.send('Hello from the auth container.');
});

export { router as signinRouter};