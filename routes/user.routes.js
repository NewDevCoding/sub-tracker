import { Router } from "express";

const userRouter = Router();

userRouter.get('/', (req, res) => {
    res.send({
        title: 'GET all Users'
    });
})

userRouter.get('/:id', (req, res) => {
    res.send({
        title: 'GET user details'
    });
})

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