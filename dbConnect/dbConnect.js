import mongoose from "mongoose";

export async function dbConnect() {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log("Connected to MongoDB");
        return conn;
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
        throw new Error("Failed to connect to MongoDB");
    }
}
