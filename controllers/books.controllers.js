import { books, borrows } from '../dbb.js';

import {Book} from '../models/book.model.js'

export const getBooks= async (req, res, next) => {
    // const page = +req.query.page || 1;
    // const limit = +req.query.limit || 5;
    // const search = req.query.search || ''; 
    // const startIndex = (page - 1) * limit;
    // const endIndex = startIndex + limit;
   // const filteredBooks = books.filter(b => b.name.toLowerCase().includes(search.toLowerCase()));
   const filteredBooks = await Book.find();
   // const paginatedBooks = filteredBooks.slice(startIndex, startIndex + limit);

    res.status(200).json(filteredBooks);

}

export const getBookById =(req, res,next) => {
 try {
        const { idd } = req.params; 
        if (!isValidObjectId(idd)) {
            return next({
                error: new Error('Book not found'),
                type: 'resource not found error',
                status: 404
            });
        }
        const book = await Book.findById(idd);
        if (!book) {
            return next({
                error: new Error('Book not found'),
                status: 404,
                type: 'Not Found'
            });
        }
        res.status(200).json(book);
    } catch (error) {
        next(error);
    }
  }
export const addNewBook = async (req, res) => {
   try {
        const existingBook = await Book.findOne({ name: req.body.name });
        if (existingBook) {
            return next({
                status: 400,
                type: 'ValidationError',
                error: new Error('A book with this name already exists')
            });
        }

        const newBook = new Book(req.body);
        await newBook.save();

        res.status(201).json(newBook);
    } catch (error) {
        next(error);
    }
}

export const deleteBook= async (req, res,next) => {
          const idx = req.params.idx;
if (!isValidObjectId(idx)) {
            return next({
                error: new Error('Book not found'),
                type: 'resource not found error',
                status: 404
            });
        }
         const p = await Book.findByIdAndDelete(idx);
         if (p) {
            return res.status(204).send();
        }
         return next({
            error: new Error('Book not found'),
            type: 'resource not found error',
            status: 404
        });
}

export const updateBook =async (req,res,next)=>{
  try {
        const { id } = req.params;
        if (!isValidObjectId(id)) {
            return next({
                error: new Error('Book not found'),
                type: 'resource not found error',
                status: 404
            });
        }

        const updatedBook = await Book.findByIdAndUpdate(
            id,
            req.body, 
            { new: true } 
        );

        if (!updatedBook) {
            return next({
                error: new Error('Book not found'),
                status: 404,
                type: 'Not Found'
            });
        }

        res.status(200).json(updatedBook);
    } catch (error) {
        next(error);
    }
}

export const returnBook = async (req, res, next) => {
    try {
        const bookCode = +req.params.idd; 
        const book = await Book.findOne({ code: bookCode });
        if (!book) {
            return next({
                error: new Error('Book not found'),
                status: 404,
                type: 'Not Found'
            });
        }
        res.status(200).json(book);
    } catch (error) {
        next(error);
    }
};

export const pagination = (req,res,next)=>{
    const {page ,limit} =req.query;
}



