const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const url =
  'mongodb+srv://Pulse:Pulse123@cluster0.3oer1.mongodb.net/?retryWrites=true&w=majority';
mongoose
  .connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to Pulse DB."))
  .catch((err) => console.log(err));


const dataSchema = new Schema({
  username: { type: varchar, required: true },
  events: { type: Array },
});

module.exports = mongoose.model("Data", dataSchema);

//mongodb+srv://Pulse:Pulse123@cluster0.3oer1.mongodb.net/test