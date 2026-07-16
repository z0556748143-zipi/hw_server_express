import { books, borrows } from '../db.js';

export const addBorrow=(req,res,next)=>{
borrows.push(req.body);
res.status(201).json( req.body);
}