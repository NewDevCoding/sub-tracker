import jwt from 'jsonwebtoken';
import { JWT_SECRET } from '../config/env.js';
import User from '../models/user.model.js';

export const authorize = async (req, res, next) => {
    try {
        // declare a variable to hold the token
        let token;

        // check if the authorization header is present and if it starts with Bearer. This will make sure the bearer is authorized
        if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
            token = req.headers.authorization.split(' ')[1];
        }


        // if the token is not present, return a 401 status code
        if(!token) {
            return res.status(401).json({
                message: 'Unauthorized'
            })
        }

        // decode the token
        const decoded = jwt.verify(token, JWT_SECRET);

        // find the user with the decoded userId
        const user = await User.findById(decoded.userId);
    
        // if the user is not found, return a 401 status code
        if(!user) {
            return res.status(401).json({
                message: 'Unauthorized'
            })
        }   

        // set the user in the request object
        req.user = user;

        // call the next middleware/function
        next()
    
    } catch (error) {
        res.status(401).json({
            message: 'Unauthorized',
            error: error.message
        })
    }
}