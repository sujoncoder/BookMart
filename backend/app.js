import express from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser"
import createHttpError from "http-errors";
import rateLimit from "express-rate-limit";
import cors from "cors";

import bookRouter from "./src/books/book.routes.js";
import authRouter from "./src/auth/auth.routes.js";

const app = express();

// RATE LIMITER
const rateLimiter = rateLimit({
    windowMs: 1 * 60 * 1000,
    max: 20,
    message: "Too many requests from this IP. Please try again later."
});

// APPLICATION LAYER MIDDLEWARE
app.use(cookieParser());
app.use(rateLimiter);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

app.use(cors({
    origin: 'http://localhost:5173',
    optionsSuccessStatus: 200,
    credentials: true
}));


// APPLICATION LAYER MIDDLEWARE ==> ROUTING
app.use("/api/books", bookRouter);
app.use("/api/auth", authRouter);


// HANDLE CLIENT ERROR
app.use((req, res, next) => {
    next(createHttpError(500, "Route not found"))
});


// HANDLE SERVER ERROR
app.use((err, req, res, next) => {
    return errorResponse(res, {
        statusCode: err.status,
        message: err.message
    })
});


export default app;