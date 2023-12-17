import UserModel from "../models/user";
import { Response, Request } from "express";
import bcrypt from "bcrypt"

//register a user 
export const register = async (req: Request, res: Response) => {
    try {
        const { email, username, password } = req.body;

        const existingUser = await UserModel.findOne({ email })
        if (existingUser) {
            return res.status(400).json({ message: "this email is already exist" })
        }

        const saltGenare = bcrypt.genSaltSync(24)
        const hashPassword = bcrypt.hashSync(password, saltGenare);
        console.log(hashPassword)
        const result = await UserModel.create({});
        res.status(200).json(result)
    } catch (error) {
        res.send(error)
    }
}


//login a user 
export const login = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body;
        const result = await UserModel.find({ email });

        res.status(200).json(result)
    } catch (error) {
        res.send(error)
    }
}
