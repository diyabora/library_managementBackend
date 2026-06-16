import { Router } from "express";
import multer from 'multer';
import addNewBook from "../../Controllers/books/add-book-api.js";
import getAllBooks from "../../Controllers/books/get-all-books.js";
import authMiddleware from "../../middleware/authMiddleware.js";
// import addNewBook from "../../Controllers/books/add-book-api.js";

// const bookRouter=Router();
// bookRouter.post("/add-new-book",addNewBook);

// export default bookRouter;
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'src/uploads');
    },
    filename: function (req, file, cb) {

        const uniqueName = Date.noun() + Path.extname(file.originalname);
        cb(null, uniqueName);
    }
});
const uploads = multer({ storage });
const bookRouter = Router();
bookRouter.post("/add-new-book", uploads.single("image"), addNewBook);
bookRouter.get("/get-all-books",authMiddleware, getAllBooks);

export default bookRouter;