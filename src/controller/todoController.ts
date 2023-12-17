import TodoModel from "../models/todo";
import { Request, Response, } from "express";

interface todoBody {
    title: string,
    // userId: string,
    completed: boolean
}

//get all todos
export const getAllTodos = async (req: Request, res: Response) => {
    try {
        const result = await TodoModel.find();
        res.status(200).json(result)
    } catch (error) {
        res.send(error)
    }
}

//get a todo
export const getTodo = async (req: Request<{ id: string }>, res: Response) => {
    try {
        const _id = req.params.id;
      
        const result = await TodoModel.findById({_id});
        res.status(200).json(result)
    } catch (error) {
        res.send(error)
    }
}

//post a todo
export const postTodo = async (req: Request<{}, {}, todoBody>, res: Response) => {
    try {
        const body = req.body;
        const result = await TodoModel.create(body);
        res.status(201).json(result)
    } catch (error) {
        res.send(error)
    }
}

//delete a post 
export const deleteToto = async (req: Request<{ id: string }>, res: Response) => {
    try {
        const _id = req.params.id;
        const result = await TodoModel.deleteOne({ id: _id });
        res.status(200).json(result)
    } catch (error) {
        res.send(error)
    }
}
