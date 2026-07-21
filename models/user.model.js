import { model, Schema } from "mongoose";

const userSchema = new Schema({
    name: String,
    email: String,
    phone: String,
    password: String,
    registrationDate: Date,
    borrows: [{
        code: Number,
        bookName: String,
        returnDate: Date
    }]
});

userSchema.pre('save', async function (next) {
    // this מייצג את המשתמש הנוכחי שעומד להישמר
    if (!this.isModified('password')) {
        return next();
    }

    try {
        const saltRounds = 10;
        this.password = await bcrypt.hash(this.password, saltRounds);
        next();
    } catch (error) {
        next(error);
    }
});

userSchema.statics.matchPassword = async function (enteredPassword, storedPassword) {
    return await bcrypt.compare(enteredPassword, storedPassword);
};

export const User = model("User", userSchema);