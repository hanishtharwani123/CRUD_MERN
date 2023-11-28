const express = require("express");
const cors = require("cors");
const app = express();
const userModel = require("./models/schema");
require("./db/connect");
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get("/show", async (req, res) => {
  try {
    const users = await userModel.find();
    res.send(users);
  } catch (err) {
    res.send("Error");
  }
});

app.get("/getUser/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const user = await userModel.findById({ _id: id });
    res.send(user);
  } catch (err) {
    res.send("Error");
  }
});

app.put("/updateUser/:id", (req, res) => {
  const id = req.params.id;
  userModel
    .findByIdAndUpdate(
      { _id: id },
      {
        name: req.body.name,
        email: req.body.email,
        age: req.body.age,
      }
    )
    .then(() => {
      res.json("Updated");
    })
    .catch((error) => {
      console.log("Error: ", error);
    });
});

app.delete("/deleteUser/:id", (req, res) => {
  const id = req.params.id;
  userModel
    .findByIdAndDelete({ _id: id })
    .then(() => {
      res.json("Deleted");
    })
    .catch((error) => {
      console.log("Error: ", error);
    });
});

app.post("/createUser", async (req, res) => {
  try {
    const user = new userModel({
      name: req.body.name,
      email: req.body.email,
      age: req.body.age,
    });
    const createUser = await user.save();
    console.log(createUser);
    res.send(createUser);
  } catch (err) {
    res.send("Error");
  }
});

app.listen(port, () => {
  console.log(`server is running on ${port}`);
});
