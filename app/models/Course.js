const mongoose = require('mongoose');
const { model, Schema } = require('mongoose');

const courseSchema = new Schema({
	courseid: Number,
	code: String,
	title: String,
	crhr: Number,
	semester: Number
})

exports.Course = model('Course', courseSchema);
