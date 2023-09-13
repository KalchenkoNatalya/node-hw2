import mongoose from "mongoose";
import app from "./app.js";

const DB_HOST = "mongodb+srv://Natalia:I01N13A23@cluster0.59c5xg2.mongodb.net/my-contacts?retryWrites=true&w=majority"
mongoose.connect(DB_HOST)
.then(() => {
  app.listen(3000, () => {
  console.log("Database connection successful")
})
})
.catch(error =>{
  console.log(error.message);
  process.exit(1);
})

