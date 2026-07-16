import { Router } from "express";
import { books, borrows, users } from '../db.js';
import { getAllUsers, signUp, signIn } from '../controllers/user.controllres.js';
import { validateUser } from '../middlewars/user.middleware.js';
import {validate} from '../middlewars/all.middleware.js';

const router = Router();

router.get('/', getAllUsers);
router.post('/signUp', validate(validateUser), signUp);
router.post('/signIn', signIn);


export default router;