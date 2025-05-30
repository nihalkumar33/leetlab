import express from "express"
import dotenv from "dotenv"
import cookieParser from "cookie-parser"
import bodyParser from "body-parser";
import authRoutes from "./routes/auth.routes.js";
import problemRoutes from "./routes/problem.routes.js";

dotenv.config()
const app = express()
const port = process.env.PORT || 3000


app.use(express.json())
app.use(cookieParser())
app.use(bodyParser.json())


app.get("/", (req, res) => {
    res.send("Hello, welcome to leet lab")
})


app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/problems", problemRoutes);

app.listen(port, () => { 
     console.log(`Listening on port ${port}`);
})

