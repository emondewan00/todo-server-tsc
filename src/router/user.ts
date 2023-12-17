import { Router } from "express";
import { login, register } from "../controller/authentication";

const router: Router = Router()


router.route("/")
    .post(login)
    .post(register)