const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    id: {type: Number, required: true},
    interviews: {type: Array}
});

const User = mongoose.model('User', userSchema);
module.exports = User


