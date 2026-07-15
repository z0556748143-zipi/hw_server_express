import { books, borrows,users } from '..db.js';

export const getAllUsers = (req, res) => {
    res.status(200).json(users);
};

export const signUp=(req,res) =>{
const existingUser = users.find(u => u.id === req.body.id);
if (existingUser) 
        return res.status(400).json({ message: "User with this ID already exists!" });
    users.push(req.body);
    res.status(201).json({ message: "User added successfully", user: req.body });
}
export const signIn= (req,res) =>{
const user = users.find(u => u.id === req.body.id && u.password === req.body.password);
    if (!user) 
        return res.status(401).json({error: "Login failed" });

    res.status(200).json( user);
}

