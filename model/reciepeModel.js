const mongo = require("mongoose");

const reciepeSchema = new mongo.Schema({
  name: {
    type: String,
    required: true,
  },
  cuisineType: {
    type: String,
    required: true,
  },
  imageLink: {
    type: String,
    required: true,
  },
  ingredients: {
    type: String,
    required: true,
  },
  instructions: {
    type: String,
    required: true,
  },
});
const Reciepe = mongo.model("foodReciepe", reciepeSchema);
module.exports = Reciepe;
