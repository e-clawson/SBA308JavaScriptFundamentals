// The provided course information.
const CourseInfo = {
    id: 451,
    name: "Introduction to JavaScript"
};
  
  // The provided assignment group.
const AssignmentGroup = {
    id: 12345,
    name: "Fundamentals of JavaScript",
    course_id: 451,
    group_weight: 25,
    assignments: [
      {
        id: 1,
        name: "Declare a Variable",
        due_at: "2023-01-25",
        points_possible: 50
      },
      {
        id: 2,
        name: "Write a Function",
        due_at: "2023-02-27",
        points_possible: 150
      },
      {
        id: 3,
        name: "Code the World",
        due_at: "3156-11-15",
        points_possible: 500
      }
    ]
};
console.log(AssignmentGroup)
  
  // The provided learner submission data.
const LearnerSubmissions = [
    {
      learner_id: 125,
      assignment_id: 1,
      submission: {
        submitted_at: "2023-01-25",
        score: 47
      }
    },
    {
      learner_id: 125,
      assignment_id: 2,
      submission: {
        submitted_at: "2023-02-12",
        score: 150
      }
    },
    {
      learner_id: 125,
      assignment_id: 3,
      submission: {
        submitted_at: "2023-01-25",
        score: 400
      }
    },
    {
      learner_id: 132,
      assignment_id: 1,
      submission: {
        submitted_at: "2023-01-24",
        score: 39
      }
    },
    {
      learner_id: 132,
      assignment_id: 2,
      submission: {
        submitted_at: "2023-03-07",
        score: 140
      }
    }
];
console.log(LearnerSubmissions)

let assignmentsInfo = AssignmentGroup.assignments.map((assignment) => {
    let assignmentObject = {
        assignment_id: assignment.id,
        due_at: assignment.due_at,
        points_possible: assignment.points_possible
    }
    return (assignmentObject)
})
console.log("assignmentsInfo", assignmentsInfo)

// let gradesInfo = LearnerSubmissions.map((submissionObj) => {
//         (submissionObj.learner_id === 125){
//                let newObj =
//         })
//     })

let studentGradesSorted = [];

for(let i=0; i<LearnerSubmissions.length; ++i){
    let studentGradeInfo = [];

    studentGradeInfo.push(LearnerSubmissions[i]);

    while(i < LearnerSubmissions.length-1 && LearnerSubmissions[i].learner_id === LearnerSubmissions[i+1].learner_id) {
        ++i
        dataItem.push(LearnerSubmissions[i]);
    }
    studentGradesSorted.push(studentGradeInfo)
}

console.log("newDataArr", studentGradesSorted)

//     let submissionObject = {
//         learner_id: submission.learner_id,
//         // learner_submissions: 
//     }
//     return (submissionObject)
// })
console.log("submissionObject", gradesInfo)



 



function getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions) {
    function createStudentObjects(Ids) {
        let students = {};
        Ids.forEach(id => {
            object = {
                student_id: id,
            }
        console.log(object)
        })
        return students

    }

}
