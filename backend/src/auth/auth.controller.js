import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import User from "./user.model.js";
import { JWT_SECRET } from "../config/constant.js";


// USER REGISTER
export const register = async (req, res) => {
    try {
        const { name, email, password, confirmPassword } = req.body;

        if (!name || !email || !password || !confirmPassword) {
            return res.status(400).send("All fields are required.")
        };

        const existUser = await User.findOne({ email });
        if (existUser) {
            return res.status(400).send("User email already exist.")
        };

        if (password !== confirmPassword) {
            return res.status(400).send("Password doesn,t match.")
        };

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = await User.create({
            name,
            email,
            password: hashedPassword,
        });

        return res.status(201).json({
            success: true,
            message: "User account create successfully.",
            user: newUser,
        });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};


// USER LOGIN
export const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).send("Email and Password fields are required.")
        };

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).send("User not found.")
        };

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).send("Failed to match user password.")
        };

        return res.status(200).json({
            success: true,
            message: "User login successfully.",
            user: user,
        })
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};