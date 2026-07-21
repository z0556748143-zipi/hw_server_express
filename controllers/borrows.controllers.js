import { books, borrows } from '../dbb.js';

export const addBorrow=(req,res,next)=>{
borrows.push(req.body);
res.status(201).json( req.body);
}

export const borrowBook = async (req, res, next) => {
    try {
        const { userId, bookCode, returnDate } = req.body; 

        const user = await User.findOne({ id: userId });
        if (!user) {
            return next({ status: 404, type: 'Not Found', error: new Error('User not found') });
        }

        if (user.borrows && user.borrows.length >= 3) {
            return next({ 
                status: 400, 
                type: 'Bad Request', 
                error: new Error('User has reached the maximum limit of 3 borrowed books!') 
            });
        }

        const book = await Book.findOne({ code: bookCode });
        if (!book) {
            return next({ status: 404, type: 'Not Found', error: new Error('Book not found') });
        }

        user.borrows.push({
            code: book.code,
            bookName: book.name,
            returnDate: returnDate
        });
        await user.save();

        const newBorrow = new Borrow({
            bookId: book._id,
            userId: user._id,
            bookName: book.name,
            borrowDate: new Date(),
            returnDate: returnDate
        });
        await newBorrow.save();

        res.status(201).json({ 
            message: "Book borrowed successfully", 
            borrowDetails: newBorrow,
            userBorrowsCount: user.borrows.length 
        });

    } catch (error) {
        next({ status: 500, error: error, type: 'server error' });
    }
};
