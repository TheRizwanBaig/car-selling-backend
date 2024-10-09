import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import carRoutes from "./routes/carRoutes.js";

// Load environment variables
dotenv.config();

// Initialize Express app
const app = express();

// Connect to database
connectDB();

// Middleware to parse JSON
app.use(express.json());

// Serve the uploads folder statically
app.use("/uploads", express.static("uploads"));

// Define routes
app.use("/api/auth", authRoutes);
app.use("/api/cars", carRoutes);

app.get("/", (req, res) => res.send("Express on Vercel"));

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

export default app;
