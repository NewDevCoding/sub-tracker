import User from '../models/user.model.js'

export const getUsers = async (req, res, next) => {
    try {
        const users = await User.find();

        res.status(200).json({
            success: true,
            data: users
        })
        
    } catch (error) {
        next(error)
    }
}

export const getUser = async (req, res, next) => {


    try {
        // changed the params in the .find method to an object, {_id: req.params.id} from just being req.params.id
        const user = await User.find({_id: req.params.id}).select('-password');

        if(!user) {
            const error = new Error('User not found');
            error.statusCode = 404;
            throw error;
        }

        res.status(200).json({
            success: true,
            data: user
        })
        
    } catch (error) {
        next(error)
    }
}