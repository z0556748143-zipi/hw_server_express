import { Router } from "express";
import { books, borrows, users } from '..db.js';
import { getAllUsers, signup, login } from '../controllers/usre.controlers.js';

const router = Router();

router.get('/', getAllUsers);
router.post('/signup', signup);
router.post('/login', login);


