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
        const saltRounds = 10;
        const salt = bcrypt.genSaltSync(saltRounds);
        const hashPassword = bcrypt.hashSync(password, salt);
        const result = await UserModel.create({ email, username, password: hashPassword });
        res.status(200).json(result)
    } catch (error) {
        console.log("hello register error ", error);
        res.send(error)
    }
}


//login a user 
export const login = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body;
        const result = await UserModel.findOne({ email }).select("+password");

        if (!result) {
            return res.status(404).json({ message: "user is not found!" });
        }

        const checkPass = bcrypt.compareSync(password, result.password);
        console.log(checkPass, "pass")
        res.status(200).json(result);
    } catch (error) {
        console.log("hello login error ", error);
        res.send(error)
    }
}
