import { Router } from "express";
import { books, borrows } from '..db.js';
import {isBorrow } from "../middlewars/simple.js";
import {addBorrow} from "../conrollers/borrows.controllers.js"; 



const router = Router();


router.post('/:id',isBorrow,addBorrow)

