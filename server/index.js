const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");
const FormDataModel = require("./models/FormData");
const bcrypt = require("bcrypt");
const app = express();
app.use(express.json());
app.use(cors());
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");

mongoose.connect("mongodb://127.0.0.1:27017/practice_mern");
const fs = require("fs");
const uploadDir = "uploads";
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // Save files in the 'uploads' folder
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

app.post("/register", upload.single("profilePhoto"), async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Check if the email is already registered
    const existingUser = await FormDataModel.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already registered" });
    }

    // Hash the password before saving
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // Get the profile photo path (if uploaded)
    const profilePhotoPath = req.file ? req.file.path : null;

    // Create new user
    const newUser = new FormDataModel({
      name,
      email,
      password: hashedPassword,
      profilePhoto: profilePhotoPath,
    });

    await newUser.save();
    res
      .status(201)
      .json({ message: "User registered successfully", user: newUser });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
});

app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find user in DB
    const user = await FormDataModel.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "No records found!" });
    }

    // Check password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Wrong password" });
    }

    // Generate JWT Token
    const token = jwt.sign(
      { id: user._id, email: user.email },
      "your_secret_key",
      {
        expiresIn: "1h", // Token expires in 1 hour
      }
    );

    // Send token in response
    res
      .status(200)
      .json({ message: "Success", token, user: { email: user.email } });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
});

app.listen(3001, () => {
  console.log("Server listining on http://127.0.0.1:3001");
});
