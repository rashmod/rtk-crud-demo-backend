const mongoose = require('mongoose');

const todosSchema = new mongoose.Schema({
	task: String,
	status: { type: String, enum: ['COMPLETE', 'INCOMPLETE'] },
	date: { type: Date, default: new Date() },
});

module.exports = mongoose.model('Todo', todosSchema);
