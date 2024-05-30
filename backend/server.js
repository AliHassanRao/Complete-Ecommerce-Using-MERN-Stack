const express = require("express");
const dotenv = require("dotenv").config();
const userRoutes = require("./routes/userRoutes");
const productRoutes = require("./routes/productRoutes");
const connectionDB = require("./config/connectionDB");
const morgan = require("morgan");
const cors = require("cors");
const multer = require("multer");
const path = require("path");

// Middleware
const app = express();

app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

// Connect to the database
connectionDB();

const PORT = process.env.PORT || 5001;

// Define multer storage
const storage = multer.diskStorage({
  destination: 'upload/images',
  filename: (req, file, cb) => {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  }
});

// Image Upload
const upload = multer({ storage: storage });


// Serving Uploaded Images
app.use("/images", express.static("upload/images"));

// Routes
app.use("/user", userRoutes);
app.use("/product", productRoutes);

// Image Upload Endpoint
app.post("/upload", upload.array("product", 5), (req, res) => {
  console.log(req.files);

  const imageUrls = req.files.map(file => {
    return `http://localhost:${PORT}/images/${file.filename}`;
  });

  res.json({
    success: 1,
    image_urls: imageUrls,
  });
});


// Start the server
app.listen(PORT, () => {
  console.log("App is running on port", PORT);
});
