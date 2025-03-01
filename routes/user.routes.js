import { Router } from "express";
import { getUsers } from '../controllers/user.controller.js';
import { getUser } from '../controllers/user.controller.js';
const userRouter = Router();

userRouter.get('/', getUsers)

userRouter.get('/:id', getUser)

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