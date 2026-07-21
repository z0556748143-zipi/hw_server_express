import { model, Schema } from "mongoose";

const borrowSchema = new Schema({
    bookId: { type: Schema.Types.ObjectId, ref: 'Book', required: true },
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    borrowDate: { type: Date, default: Date.now }
});

export const Borrow = model("Borrow", borrowSchema);

