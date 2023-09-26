import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import connectB from "./config/db.js";
import employeeRoute from "./routes/employeeRoute.js";
//config env
dotenv.config();

//database config
connectB();

//rest object
const app = express();

//midlewares
app.use(express.json());
app.use(morgan("dev"));

//routes
app.use("/api/v1/employee", employeeRoute);

//rest api
app.get("/", (req, res) => {
  res.send({
    message: "Epm Data Manager",
  });
});

//port
const PORT = process.env.PORT || 8080;

//run listen
app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`.bgGreen.white);
});
