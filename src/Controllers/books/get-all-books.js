import { book } from "../../Models/books/book-schema.js";

async function getAllBooks(req, res) {
    try {
        let allBooks = await book.find();
        if (allBooks.length === 0) {
            return res.status(404).json({
                message: "no book found",
                status: 404
            })
        }
        return res.status(200).json({
            message: "books found successfully",
            status: 200,
            books: allBooks
        })
    }
    catch (error) {
        return res.status(500).json({
            message: "internal server error",
            status: 500
        })
    }
}

export default getAllBooks;