const mongoose = require("mongoose");
const { Student } = require("./Student");
const { Course } = require("./Course");
const { Registration } = require("./Registration");
const { Grade } = require("./Grade");

(async () => {
    await mongoose.connect(`mongodb://${process.env.DB_HOST}:27017/${process.env.DB_NAME}`);
})();

module.exports = {
    Student,
    Course,
    Grade,
    Registration,
};
