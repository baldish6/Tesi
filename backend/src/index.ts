import express, { type Application } from "express";
import config from "dotenv";

// Import Routes
import employeeRoutes from "./routes/employeeRoutes.js";

const app: Application = express();

// body parsing middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//prova
// API Routes
app.use("/usr", employeeRoutes);

const PORT = 5001;

const server = app.listen(PORT, () => {
  console.log("Server running on port : " + PORT);
});
