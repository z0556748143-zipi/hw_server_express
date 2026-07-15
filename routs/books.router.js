import { Router } from "express";
import { books, borrows } from '..db.js';
import {getBooks, getBookById, addNewBook, deleteBook, updateBook ,addBorrow, returnBook} from "../conrollers/books.controllers.js";



const router = Router();

router.get('/',getBooks);
router.get('/:id',getBookById);
router.post('/',addNewBook);
router.delete('/:id',deleteBook);
router.patch('/:id',updateBook);
router.patch('/:id',returnBook );