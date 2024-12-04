import mongoose from "mongoose";

// EMAIL REGEX
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;


const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        trim: true,
        lowercase: true,
        unique: true,
        validate: {
            validator: function (v) {
                return emailRegex.test(v)
            },
            message: "Please enter a valid email"
        }
    },
    password: {
        type: String,
        required: [true, "Password is required."],
        minLength: [6, "The length of user password can be minimum 6 characters"],
    },
    confirmPassword: {
        type: String,
        minLength: [6, "The length of user password can be minimum 6 characters"],
    },
}, { timestamps: true });


const User = mongoose.model("User", userSchema);

export default User;