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