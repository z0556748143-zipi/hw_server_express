import { books, borrows } from '..db.js';


export const isBorrow=(req,res,next)=>{
    const i = books.findIndex((book) => book.code === +req.params.idd)
    if (i=== -1)
        res.status(404).json({error: 'there is not such a book'})
    if (books[i].isBorrow===true)
        res.status(409).json({error: 'cant borrow it'})
    books[i].isBorrow=true;
    next();
}