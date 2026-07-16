import { books, borrows } from '../db.js';


export const getBooks= (req, res, next) => {
    const page = +req.query.page || 1;
    const limit = +req.query.limit || 5;
    const search = req.query.search || ''; 
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    const filteredBooks = books.filter(b => b.name.toLowerCase().includes(search.toLowerCase()));
    const paginatedBooks = filteredBooks.slice(startIndex, startIndex + limit);

    res.status(200).json(paginatedBooks);

}

export const getBookById =(req, res,next) => {
  const book = books.find((book) => book.code === parseInt(req.params.idd))
  if (!book) {
    next ({
      error: new Error('Book not found'),
      status: 404,
      type: 'Not Found'
    })
  }
  res.json(book)
}

export const addNewBook = (req, res) => {
  books.push(req.body)
  res.json({success: 'Book added successfully'})
}

export const deleteBook= (req, res,next) => {
  const bookIndex = books.findIndex((book) => book.code === parseInt(req.params.idd))
  if (bookIndex === -1) {
    next ({
      error: new Error('Book not found'),
      status: 404,
      type: 'Not Found'
    })
  
  }
  books.splice(bookIndex, 1)
  res.json({success: 'Book deleted successfully'})
}

export const updateBook = (req,res,next)=>{
  const bindex=books.findIndex((book) => book.code === +req.params.idd)
  if (bookIndex === -1) 
  {
    next ({
      error: new Error('Book not found'),
      status: 404,
      type: 'Not Found'
    })
  }
  books[bindex].name=req.body.name;
  books[bindex].category=req.body.category;
  books[bindex].code=req.body.code;
  books[bindex].price=req.body.price;
  res.status(200).json(books[index]);
}

export const returnBook=(req,res,next)=>{
const i=books.findIndex((book) => book.code === +req.params.idd)
if (i === -1) {
  next ({
    error: new Error('Book not found'),
    status: 404,
    type: 'Not Found'
  })   }
    books[i].isBorrowed=false;
    res.status(200).json(books[i])
}
export const pagination = (req,res,next)=>{
    const {page ,limit} =req.query;
}



