import { model, Schema } from "mongoose";

const bookSchema = new Schema({
    name: String,
    price: Number,
    category: [String],
   writer: {
        nameWriter: String,
        phone: Number,
        email: String,
    }, 
});

export const Book = model("Book", bookSchema);