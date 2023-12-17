import UserModel from "../models/user";
import { Response, Request } from "express";

//get all users 
export const getUsers = async (req: Request, res: Response) => {
    try {
        const result = await UserModel.find();
        res.status(200).json(result)
    } catch (error) {
        res.send(error)
    }
}

//get a user 
export const updateUser = async (req: Request<{ id: string }>, res: Response) => {
    try {
        const _id = req.params.id;
        const body = req.body;
        const result = await UserModel.updateOne({ _id }, { $set: body });
        res.status(200).json(result)
    } catch (error) {
        res.send(error)
    }
}


export const deleteUser = async (req: Request<{ id: string }>, res: Response) => {
    try {
        const _id = req.params.id;
        const result = await UserModel.deleteOne({ _id });
        res.status(200).json(result)
    } catch (error) {
        res.send(error)
    }
}


