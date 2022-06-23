const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const url =
  // 'mongodb+srv://Pulse:Pulse123@cluster0.3oer1.mongodb.net/?retryWrites=true&w=majority';
  'mongodb+srv://pulse:pulse123@cluster0.pbjmr.mongodb.net/?retryWrites=true&w=majority'
mongoose
  .connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'Pulse',
  })
  .then(() => console.log("Connected to Pulse DB."))
  .catch((err) => console.log(err));


const dataSchema = new Schema({
  username: { type: String },
  events: { type: Array },
});

const User = mongoose.model("User", dataSchema);

module.exports = { User };

//mongodb+srv://Pulse:Pulse123@cluster0.3oer1.mongodb.net/test