import { model, Schema } from "mongoose";

const bookSchema = new Schema({
    bookName: String,
    category: String,
    description: String,
    copies: String,
    status: String,
    price: String,
    image: String,
    autherName: String,

},
    {
        timestamps: true
    }
);
export const book=model("books",bookSchema);
