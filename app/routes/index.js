const router = require("express").Router();
const ctrl = require("../controllers");

router.get("/student/regno", ctrl.Student.getStudentByRegNo);
router.get("/semester/courses", ctrl.Course.getSemesterCourses);
router.post("/course/register", ctrl.Registration.registerCourses);
router.post("/registration/update", ctrl.Registration.updateRegistration);

module.exports = router;
