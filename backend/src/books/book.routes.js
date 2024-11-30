import express from "express";

import { addBook, getAllBook, getSingleBook, updateBook, deleteBook } from "./book.controller.js";

const bookRouter = express.Router();

bookRouter.post("/add-book", addBook);
bookRouter.get("/", getAllBook);
bookRouter.get("/:id", getSingleBook);
bookRouter.put("/edit/:id", updateBook);
bookRouter.delete("/:id", deleteBook);


export default bookRouter;