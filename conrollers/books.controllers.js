import { books, borrows } from '..db.js';



export const getBooks= (req, res, next) => {
  res.status(200).json(books)
}

export const getBookById =(req, res,next) => {
  const book = books.find((book) => book.code === parseInt(req.params.idd))
  if (!book) {
    return res.status(404).send('Book not found')
  }
  res.send(book)
}

export const addNewBook = (req, res) => {
  books.push(req.body)
  res.json({error: 'Book added successfully'})
}

export const deleteBook= (req, res,next) => {
  const bookIndex = books.findIndex((book) => book.code === parseInt(req.params.idd))
  if (bookIndex === -1) {
     res.status(404).send('Book not found')
  }
  books.splice(bookIndex, 1)
  res.send('Book deleted successfully')
}

export const updateBook = (req,res,next)=>{
  const bindex=books.findIndex((book) => book.code === +req.params.idd)
  if (bookIndex === -1) 
   res.status(404).json({erroe: 'Book not found'})
  books[bindex].name=req.body.name;
  books[bindex].category=req.body.category;
  books[bindex].code=req.body.code;
  books[bindex].price=req.body.price;
  res.status(200).json(books[index]);
}

export const returnBook=(req,res,next)=>{
const i=books.findIndex((book) => book.code === +req.params.idd)
if (i === -1) {
     res.status(404).send('Book not found') }
    books[i].isBorrowed=false;
    res.status(200).json(books[i])
}