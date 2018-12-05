const mongoose = require('mongoose')

const Schema = mongoose.Shema

const TaskSchema = new Schema({
	title: String,
	description: String,
	status: {
		type: Boolean,
		default: false
	}
})

module.exports = mongoose.model('tasks', TaskSchema)
