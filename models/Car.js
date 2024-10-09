import mongoose from "mongoose";

const CarSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  brand: { type: String, required: true },
  model: { type: String, required: true },
  year: { type: Number, required: true },
  price: { type: Number, required: true },
  phone: { type: String, required: true },
  city: {
    type: String,
    enum: ["Karachi", "Lahore", "Islamabad"], // Enum for city field
    required: true,
  },
  pictures: [{ type: String }], // Array of picture URLs
});

export const Car = mongoose.model("Car", CarSchema);
