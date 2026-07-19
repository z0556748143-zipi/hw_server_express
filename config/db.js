import { connect } from "mongoose";

export const connectDB = async () => {
    try {
        await connect('mongodb+srv://z0556748143_db_user:WwyeAc1XdrjJ3PWr@cluster0.6a8utor.mongodb.net/?appName=Cluster0');
        console.log('mongo connected succesfully');
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};