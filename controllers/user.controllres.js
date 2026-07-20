import { books, borrows,users } from '../dbb.js';

export const getAllUsers =async (req, res) => {
    try {
        const allUsers = await User.find();
        res.status(200).json(allUsers);
    } catch (error) {
       next({ status: 500, error: err, type: 'server error' });
    }
};

export const signUp = async (req, res, next) => {
    try {
        const existingIdUser = await User.findOne({ id: req.body.id });
        if (existingIdUser) {
            return next({
                status: 400,
                type: 'Bad Request',
                error: new Error('User with this ID already exists!')
            });
        }

        const normalizedEmail = req.body.email.toLowerCase();

        const existingEmailUser = await User.findOne({ email: normalizedEmail });
        if (existingEmailUser) {
            return next({
                status: 400,
                type: 'ValidationError',
                error: new Error('Email already exists in the system')
            });
        }

        const newUser = await User.create({
            ...req.body,
            email: normalizedEmail,
            registrationDate: new Date()
        });

        res.status(201).json({ message: "User added successfully", user: newUser });
        
    } catch (error) {
        next(error);
    }
};


export const signIn=async (req,res,next) =>{
try {
const user = await User.findOne({ id: req.body.id, password: req.body.password });
    if (!user) 
        return res.status(401).json({error: "Login failed" });

    res.status(200).json( user);
}
catch (error) {
     next({ status: 500, error: err, type: 'server error' });}
}

