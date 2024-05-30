const mongoose = require("mongoose");

const connectionDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/Career");
    console.log("Connected to database");
  } catch (error) {
    console.error("Error while connecting to database:", error);
  }
};

module.exports = connectionDB;
