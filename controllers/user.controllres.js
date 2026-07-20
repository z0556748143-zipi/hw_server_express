import { books, borrows,users } from '../dbb.js';

export const getAllUsers = (req, res) => {
    res.status(200).json(users);
};

export const signUp=(req,res) =>{
const existingUser = users.find(u => u.id === req.body.id);
if (existingUser) {
    next({
        error: new Error('User with this ID already exists!'),
        status: 400,
        type: 'Bad Request'
    });
}
    const normalizedEmail = req.body.email.toLowerCase();

        const existingUser = await User.findOne({ email: normalizedEmail });
        if (existingUser) {
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
}


export const signIn= (req,res) =>{
const user = users.find(u => u.id === req.body.id && u.password === req.body.password);
    if (!user) 
        return res.status(401).json({error: "Login failed" });

    res.status(200).json( user);
}

