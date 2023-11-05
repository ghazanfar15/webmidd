const api = require("../api/api");

exports.registerCourses = async (req, res) => {
    //console.log(req.body);
    const courses = await api.post(`/api/courses/register`, { ...req.body });
    //console.log(courses.data);
    const data = await api.get(`/api/registrations/${req.body.regno}`);
    console.log(data.data);
    let [regs, grades, gpa] = data.data;
    gpa = gpa === null ? { GPA: 0 } : gpa;
    res.render("register", { regs, grades, gpa, register: true });
};

exports.updateRegistration = async (req, res) => {
    //console.log(req.body);
    const data = (await api.post(`/api/registrations/update`, { ...req.body })).data;

    let [regs, grades, gpa] = data;
    gpa = gpa === null ? { GPA: 0 } : gpa;

    res.render("update", { regs, grades, gpa });
};
