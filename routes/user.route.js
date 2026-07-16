import { Router } from "express";
import { books, borrows, users } from '../db.js';
import { getAllUsers, signUp, signIn } from '../controllers/user.controllres.js';
import { validateUser } from '../middlewars/user.middleware.js';

const router = Router();

router.get('/', getAllUsers);
router.post('/signUp', validateUser, signUp);
router.post('/signIn', signIn);


export default router;