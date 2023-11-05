const mongoose = require('mongoose');
const { model, Schema } = require('mongoose');

const studentSchema = new Schema({
	regno: String,
	studentname: String,
	fathername: String
})

exports.Student = model('Student', studentSchema);
