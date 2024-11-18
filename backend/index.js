import express from "express";

const app = express();

const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
    res.send("hello world")
});

app.listen(port, () => {
    console.log("Application lisetening on ", port)
});