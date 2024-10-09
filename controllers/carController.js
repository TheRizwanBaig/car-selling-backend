import { Car } from "../models/Car.js";

export const addCar = async (req, res) => {
  const { brand, model, year, price, phone, city } = req.body;
  const pictures = req.files.map((file) => file.path);

  try {
    const car = new Car({
      user: req.user.id,
      brand,
      model,
      year,
      price,
      phone,
      city,
      pictures,
    });
    await car.save();
    res.status(201).json(car);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
