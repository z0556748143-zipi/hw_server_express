import { Router } from "express";
import { books, borrows, users } from '../db.js';
import { getAllUsers, signUp, signIn } from '../controllers/user.controllres.js';

const router = Router();

router.get('/', getAllUsers);
router.post('/signUp', signUp);
router.post('/signIn', signIn);


export default router;