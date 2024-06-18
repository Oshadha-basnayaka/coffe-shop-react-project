import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config()


export default function DBConfig(){
    mongoose.connect(process.env.MONGODB_URL).then(() => {
        console.log("database is connected")
    }).catch(() => {
        console.log("can not connect to the database")
    });
}