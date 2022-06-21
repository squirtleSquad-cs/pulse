const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const url =
  'mongodb+srv://Pulse:Pulse123@cluster0.3oer1.mongodb.net/?retryWrites=true&w=majority';

// const client = new MongoClient(url);
// async function run() {
//     try {
//         await client.connect();
//         console.log("Connected correctly to server");
//     } catch (err) {
//         console.log(err.stack);
//     }
//     finally {
//         await client.close();
//     }
// }
mongoose
  .connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to Pulse DB."))
  .catch((err) => console.log(err));
// run().catch(console.dir);

const dataSchema = new Schema({
  id: { type: Number, required: true },
  interviews: { type: Array },
});

module.exports = mongoose.model("Data", dataSchema);
