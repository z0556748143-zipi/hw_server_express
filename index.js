import express from 'express'
import { books, borrows } from './db.js'

const app = express()
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.all('/', (req, res) => {
res.send('Hellow To All')
})

app.get('/books', (req, res) => {
  res.send(books)
})

app.get('/products/:idd', (req, res) => {
res.send(books.find((book) => book.code === parseInt(req.params.idd)))
})

app.post('/books', (req, res) => {
  books.push(req.body)
  res.send('Book added successfully')
})

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
})