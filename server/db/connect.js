const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1:27017/userDatabase")
  .then(() => {
    console.log("Connected to the Database successfully");
  })
  .catch((err) => {
    console.log("Error connecting to the Database");
  });
