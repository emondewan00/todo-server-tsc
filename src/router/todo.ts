import express from "express";
import { postTodo, deleteToto, getAllTodos, getTodo, editTodo } from "../controller/todoController";

const router = express.Router();

router.route("/").get(getAllTodos).post(postTodo);

router.route("/:id")
    .get(getTodo)
    .delete(deleteToto)
    .patch(editTodo)


export default router