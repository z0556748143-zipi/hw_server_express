import { Router } from "express";
import { books, borrows } from '../dbb.js';
import {isBorrow } from "../middlewars/borrows.middleware.js";
import {addBorrow} from "../controllers/borrows.controllers.js"; 
import {borrowBook} from "../controllers/borrows.controllers.js";


const router = Router();


router.post('/:id',isBorrow,addBorrow)
router.post('/',)

export default router;