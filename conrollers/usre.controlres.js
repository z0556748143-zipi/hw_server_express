import { books, borrows,users } from '..db.js';

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
    users.push(req.body);
    res.status(201).json({ message: "User added successfully", user: req.body });
}
export const signIn= (req,res) =>{
const user = users.find(u => u.id === req.body.id && u.password === req.body.password);
    if (!user) 
        return res.status(401).json({error: "Login failed" });

    res.status(200).json( user);
}

