const mongoose = require('mongoose');
const { MongoClient } = require("mongodb");
const Schema = mongoose.Schema;
const url = "mongodb+srv://Pulse:Pulse123@cluster0.3oer1.mongodb.net/?retryWrites=true&w=majority"

const client = new MongoClient(url);
async function run() {
    try {
        await client.connect();
        console.log("Connected correctly to server");
    } catch (err) {
        console.log(err.stack);
    }
    finally {
        await client.close();
    }
}
run().catch(console.dir);

const userSchema = new Schema({
    id: {type: Number, required: true},
    interviews: {type: Array}
});

const User = mongoose.model('User', userSchema);
module.exports = User


