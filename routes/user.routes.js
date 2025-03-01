import { Router } from "express";
import { getUsers, getUser } from '../controllers/user.controller.js';
import { authorize } from '../middlewares/auth.middleware.js';
const userRouter = Router();

// GET routes
userRouter.get('/', getUsers)

// we add the middleware before the main function in the specific route where we want authorization
userRouter.get('/:id', authorize, getUser)

// POST routes
userRouter.post('/', (req, res) => {
    res.send({
        title: 'Create new user'
    });
})

userRouter.put('/:id', (req, res) => {
    res.send({
        title: 'Update user details by id'
    });
})

userRouter.delete('/:id', (req, res) => {
    res.send({
        title: 'Delete a user'
    });
})

export default userRouter;