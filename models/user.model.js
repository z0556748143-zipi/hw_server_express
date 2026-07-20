import { model, Schema } from "mongoose";

const userSchema = new Schema({
    name: String,
    email: String,
    phone: String,
    password: String,
    registrationDate: Date,
    borrows: [{
        code: Number,
        bookName: String
    }]
});

export const User = model("User", userSchema);