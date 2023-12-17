import express from "express";
import todoRoute from "./router/todo";
import userRouter from "./router/user"
import mongoose from "mongoose";
require("dotenv").config()
const app = express();
const PORT = 5000;

app.use(express.json());

mongoose.connect("mongodb+srv://video-streamgin:n5L0uvvxw2t3lD8P@cluster0.jmqwkqq.mongodb.net/todo")
    .then(() => console.log("server conected with mongodb"))
    .catch((error) => console.log("mongoose conection error "))


app.use("/todos", todoRoute)
app.use("/users", userRouter)

app.get("/", (req: express.Request, res: express.Response) => {
    res.json({ message: "hello typescript server!" })
});

app.listen(PORT, () => {
    console.log(`Server is running in PORT ${PORT}`)
})