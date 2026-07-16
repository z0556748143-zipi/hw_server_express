import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import { rateLimit } from 'express-rate-limit' //מגביל לכמות בקשות שלקוח מסוים יכול לשלוח לשרת בפרק זמן מסוים
import helmet from 'helmet'; //מוסיף הגדרות אבטחה שחוסמות התקפות נפוצות


import booksRouter from './routes/books.router.js';
import borrowsRouter from './routes/borrows.router.js';
import usersRouter from './routes/user.route.js';
import { errorHandler } from './middlewars/error.middleware.js';
import { addDate } from './middlewars/all.middleware.js';

const app = express()

app.use(cors())
app.use(addDate)

// 3. הגדרת הלימיט (למשל: עד 100 בקשות בכל 15 דקות)
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, //זה מבטא בסוף טווח של 15 דקות כי זה במילי שניות
    max: 100,  //בטווח זמן זה הכמות המקסימלית שלי
});
app.use(helmet()); // מגן על השרת מהתקפות בסיסיות
app.use(limiter);  // מגביל את מספר הבקשות מלקוח אחד

app.use(express.json())

app.use(morgan('dev'))

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

