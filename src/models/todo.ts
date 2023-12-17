import { Schema, model, Types } from "mongoose";

const todoSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    completed: {
        type: String,
        required: true
    },
    // userId: {
    //     type: Types.ObjectId,
    //     required: true,
    //     ref: "User"
    // }
}, { timestamps: true })



const TodoModel = model("Todo", todoSchema);

export default TodoModel;