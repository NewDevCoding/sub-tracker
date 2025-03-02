import { Router } from "express";
import { authorize } from '../middlewares/auth.middleware.js';
import { createSubscription } from "../controllers/subscriptions.controller.js";

const subscriptionRouter = Router();

subscriptionRouter.get('/', (req, res) => {
    res.send({
        title: 'GET all Subscriptions'
    });
})

subscriptionRouter.get('/:id', (req, res) => {
    res.send({
        title: 'GET specific Subscription details'
    });
})

subscriptionRouter.post('/', authorize, createSubscription)

subscriptionRouter.put('/:id', (req, res) => {
    res.send({
        title: 'UPDATE a subscription'
    });
})

subscriptionRouter.delete('/:id', (req, res) => {
    res.send({
        title: 'DELETE a subscription'
    });
})

subscriptionRouter.get('/user/:id', (req, res) => {
    res.send({
        title: 'GET all user subscriptions'
    });
})

subscriptionRouter.put('/:id/cancel', (req, res) => {
    res.send({
        title: 'CANCEL a subscription'
    });
})

subscriptionRouter.get('/upcoming-renewals', (req, res) => {
    res.send({
        title: 'GET upcoming renewals'
    });
})

export default subscriptionRouter;

