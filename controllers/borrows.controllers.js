import { books, borrows } from '../dbb.js';

export const addBorrow=(req,res,next)=>{
borrows.push(req.body);
res.status(201).json( req.body);
}