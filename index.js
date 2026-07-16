import express from 'express'
import cors from 'cors'

import booksRouter from './routes/books.router.js';
import borrowsRouter from './routes/borrows.router.js';
import usersRouter from './routes/user.route.js';
import { errorHandler } from './middlewars/error.middleware.js';


const app = express()

app.use(cors())

app.use(express.json())



app.get('/', (req, res) => {
res.send('Hellow To All')
})



app.use('/books', booksRouter);
app.use('/borrows',borrowsRouter);
app.use('/users', usersRouter);


app.use(errorHandler);

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
})

