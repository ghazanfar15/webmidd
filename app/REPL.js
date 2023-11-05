const db = require("./models");

//db.Student.find().then((students) => console.log(students));

db.Course.aggregate([
    {
        $lookup: {
            from: "registrations",
            localField: "courseid",
            foreignField: "courseid",
            pipeline: [{ $match: { regno: "1112101" } }],
            as: "reg",
        },
    },
    { $match: { semester: 1 } },
    { $unwind: { path: "$reg", preserveNullAndEmptyArrays: true } },
])
    .sort("courseid")
    .then((res) => console.log(JSON.stringify(res, null, 4)));

// reg = {
//     _id: "65352b90a476497147c7a6dd",
//     courseid: 1,
//     regno: "1112101",
//     gradeid: 5,
//     __v: 0,
// };

// Promise.all([
//     db.Registration.aggregate([
//         { $match: { $expr: { $eq: ["$_id", { $toObjectId: reg._id }] } } },
//         { $lookup: { from: "courses", localField: "courseid", foreignField: "courseid", as: "course" } },
//         { $unwind: "$course" },
//         { $lookup: { from: "grades", localField: "gradeid", foreignField: "gradeid", as: "grade" } },
//         { $unwind: { path: "$grade", preserveNullAndEmptyArrays: true } },
//     ]),
//     db.Grade.find().sort("gradeid"),
//     db.Registration.aggregate([
//         { $match: { regno: reg.regno, gradeid: { $ne: null } } },
//         { $lookup: { from: "courses", localField: "courseid", foreignField: "courseid", as: "course" } },
//         { $unwind: "$course" },
//         { $lookup: { from: "grades", localField: "gradeid", foreignField: "gradeid", as: "grade" } },
//         { $unwind: "$grade" },
//         {
//             $group: {
//                 _id: null,
//                 tcr: { $sum: "$course.crhr" },
//                 mcr: { $sum: { $multiply: ["$course.crhr", "$grade.gpa"] } },
//             },
//         },
//         { $project: { _id: 0, GPA: { $divide: ["$mcr", "$tcr"] } } },
//     ]),
// ]).then(([regs, grades, gpa]) => console.log(JSON.stringify([regs, grades, gpa], null, 4)));
