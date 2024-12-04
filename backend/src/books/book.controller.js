import BookModel from "./book.model.js"


// ADD A BOOK
export const addBook = async (req, res) => {
    try {
        const newBook = await BookModel({ ...req.body });
        await newBook.save();
        return res.status(201).json({
            success: true,
            message: "Book added successfull.",
            book: newBook
        })
    } catch (error) {
        console.error(error.message)
        return res.status(500).send({ message: "Failed to added book." })
    }
};


// GET ALL BOOK
export const getAllBook = async (req, res) => {
    try {
        const books = await BookModel.find().sort({ createdAt: -1 });

        return res.status(200).json({
            success: true,
            books: books
        })
    } catch (error) {
        return res.status(500).send({ message: "Failed to get all book." })
    }
};


// GET SINGLE BOOK BY ID
export const getSingleBook = async (req, res) => {
    try {
        const { id } = req.params;
        const book = await BookModel.findById(id);

        if (!book) {
            return res.status(404).send("Book not found.")
        };

        return res.status(202).json({
            success: true,
            book: book
        })
    } catch (error) {
        console.error(error.message);
        return res.status(500).send({ message: "Failed to get a book." })
    }
};


// GET SINGLE BOOK BY ID
export const updateBook = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedBook = await BookModel.findByIdAndUpdate(id, req.body, { new: true });

        if (!updatedBook) {
            return res.status(404).send("Book not found.")
        };

        return res.status(202).json({
            success: true,
            message: "Updated book successfully.",
            book: updatedBook
        })
    } catch (error) {
        console.error(error.message);
        return res.status(500).send({ message: "Failed to update a book." })
    }
};


// DELETE SINGLE BOOK BY ID
export const deleteBook = async (req, res) => {
    try {
        const { id } = req.params;
        const deleteBook = await BookModel.findByIdAndDelete(id, { new: true });

        if (!deleteBook) {
            return res.status(404).send("Book not found.")
        };

        return res.status(202).json({
            success: true,
            message: "Delete book successfully.",
            book: deleteBook
        })
    } catch (error) {
        console.error(error.message);
        return res.status(500).send({ message: "Failed to delete a book." })
    }
};