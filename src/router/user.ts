import express from "express";
import { login, register } from "../controller/authentication";
import { deleteUser, getUsers, updateUser } from "../controller/usercontroller";

const router = express.Router()

router.post("/register", register);
router.post("/login", login);
router.get("/", getUsers);
router.patch("/:id", updateUser)
router.delete("/:id", deleteUser);

export default router;