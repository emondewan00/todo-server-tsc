import { Schema, model } from "mongoose";

const userSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        select: false,
        validate: {
            validator: function (password: string) {
                return password.length >= 6
            },
            message: "Password must me 6 charecters"
        }
    },
}, { timestamps: true })



const UserModel = model("User", userSchema);

export default UserModel;