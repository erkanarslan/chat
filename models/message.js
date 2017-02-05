var mongoose = require('mongoose');

var messageSchema = new mongoose.Schema({
	user : String,
	content : String,
	date :  { type: Date, default: Date.now }
});

var Message = mongoose.model('Message', messageSchema);

module.exports = Message;
