import mongoose from 'mongoose';

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    category: {
        type: String,
        required: true,
        trim: true
    },
    trending: {
        type: Boolean,
        default: true
    },
    coverImage: {
        type: String,
        required: true,
        trim: true
    },
    oldPrice: {
        type: Number,
        required: true,
        validate: {
            validator: (value) => value >= 0,
            message: 'Price must be a positive number'
        }
    },
    newPrice: {
        type: Number,
        required: true,
        validate: {
            validator: (value) => value >= 0,
            message: 'Price must be a positive number'
        }
    }
}, { timestamps: true });

const Book = mongoose.model('Book', bookSchema);

export default Book;
