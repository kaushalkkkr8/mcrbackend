require("dotenv").config();

const { data } = require("./db.connect");
const express = require("express");
const app = express();
const cors = require("cors");
const Reciepe = require("./model/reciepeModel");
const corsOptions = {
  origin: "*",
  credentials: true,
  optionSuccessStatus: 200,
};

data();
app.use(express.json());
app.use(cors(corsOptions));

app.get("/", (req, res) => {
  res.send("Welcome to express");
});

app.post("/addreciepe", async (req, res) => {
  const reciepe = req.body;
  
  try {
    const addReciepe = await Reciepe(reciepe);
 addReciepe.save();


    res.status(201).json({ message: "Add successfully", addReciepe });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.get("/reciepe", async (req, res) => {
  try {
    const allReciepe = await Reciepe.find();
    if (allReciepe.length > 0) {
      res.status(201).json( allReciepe );
    }
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" })
  }
});

app.delete("/reciepe/:id", async (req, res) => {
  const reciepeId = req.params.id;
  try {
    const deleteReciepe = await Reciepe.findByIdAndDelete(reciepeId);
    if (!deleteReciepe) {
      return res.status(404).json({ error: "reciepe not found" });
    }
    res.status(200).json({ message: "Reciepe deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

const PORT = 8080;

app.listen(PORT, () => {
  console.log("App is running on port", PORT);
});
