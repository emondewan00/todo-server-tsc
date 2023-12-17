import UserModel from "../models/user";
import { Response, Request } from "express";
import bcrypt from "bcrypt"

interface user {
    username?: string,
    email: string,
    password: string
}


//register a user 
export const register = async (req: Request<{}, {}, user>, res: Response) => {
    try {
        const { email, username, password } = req.body;

        const existingUser = await UserModel.findOne({ email })
        if (existingUser) {
            return res.status(400).json({ message: "this email is already exist" })
        }

        if (password.length <= 5) {
            return res.status(500).json({ message: "password must be at least 6 charecters long" })
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
export const login = async (req: Request<{}, {}, user>, res: Response) => {
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
