import express from 'express';
const router = express.Router();
router.get('/api/users/currentuser', (req, res)=>{
    res.send('Hello from the auth container.');
});

export { router as currentuserRouter};