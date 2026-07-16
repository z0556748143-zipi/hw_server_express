import express from 'express'
import booksRouter from './routs/books.router.js';
import borrowsRouter from './routs/borrows.router.js';
import usersRouter from './routes/user.route.js';
import { errorHandler } from './middlewares/error.middleware.js';


const app = express()
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

