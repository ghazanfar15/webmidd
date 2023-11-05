const api = require("../api/api");

exports.getStudentByRegNo = async (req, res) => {
    console.log(req.query);
    const student = (await api.get(`/api/students/${req.query.regno}`)).data;
    const semesters = (await api.get(`/api/courses/semesters`)).data;
    console.log(student);

    const data = await api.get(`/api/registrations/${req.query.regno}`);
    //console.log(data.data);
    let [regs, grades, gpa] = data.data;
    gpa = gpa === null ? { GPA: 0 } : gpa;

    res.render("student", { student, semesters, regs, grades, gpa });
};
