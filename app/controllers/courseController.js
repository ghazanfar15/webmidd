const api = require("../api/api");

exports.getSemesterCourses = async (req, res) => {
    console.log(req.query);
    const courses = await api.get(`/api/courses/${req.query.regno}/${req.query.semno}`);
    //console.log(courses.data);
    res.render("courses", { courses: courses.data });
};
