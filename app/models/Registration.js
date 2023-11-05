const mongoose = require('mongoose');
const { model, Schema } = require('mongoose');

const registrationSchema = new Schema({
	courseid: Number,
	regno: String,
	gradeid: Number
})

exports.Registration = model('Registration', registrationSchema);
