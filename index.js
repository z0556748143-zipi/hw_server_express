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
  const book = books.find((book) => book.code === parseInt(req.params.idd))
  if (!book) {
    return res.status(404).send('Book not found')
  }
  res.send(book)
})

app.post('/books', (req, res) => {
  books.push(req.body)
  res.send('Book added successfully')
})

app.delete('/books/:idd', (req, res) => {
  const bookIndex = books.findIndex((book) => book.code === parseInt(req.params.idd))
  if (bookIndex === -1) {
    return res.status(404).send('Book not found')
  }
  books.splice(bookIndex, 1)
  res.send('Book deleted successfully')
})

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
})