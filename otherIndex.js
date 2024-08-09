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

//assignmentsInfo gets all the necessary information for later from assignments into an array of objects

let assignmentsInfo = AssignmentGroup.assignments.map((assignment) => {
    let assignmentObject = {
        assignment_id: assignment.id,
        due_at: assignment.due_at,
        points_possible: assignment.points_possible
    }
    return (assignmentObject)
})
console.log("assignmentsInfo", assignmentsInfo)

//studentGradesSorted gets all the student grade info sorted by student 

let studentGradesSorted = [];

for(let i=0; i<LearnerSubmissions.length; ++i){
    let studentGradeInfo = [];

    studentGradeInfo.push(LearnerSubmissions[i]);

    while(i < LearnerSubmissions.length-1 && LearnerSubmissions[i].learner_id === LearnerSubmissions[i+1].learner_id) {
        ++i
       studentGradeInfo.push(LearnerSubmissions[i]);
    }
    studentGradesSorted.push(studentGradeInfo)
}

console.log("studentGradessorted", studentGradesSorted)

// function avg (assignmentsInfo, studentGradesSorted) {
    studentGradesSorted.map((obj) => {
        console.log(obj)
        let gradeSum = 0 //total points for all assignments for one student 
        for (let i = 0; i <obj.length; i++) {
            gradeSum += obj[i].submission.score
        }
        console.log(gradeSum)
    })

    let assignmentPointSum = 0
        assignmentsInfo.forEach((obj) => {
            assignmentPointSum += obj.points_possible
        })
        console.log(assignmentPointSum)

    


// }



function getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions, assignmentsInfo, studentGradesSorted) {
   
    let finalStudentObject = studentGradesSorted.map((studentArray) => {
        let topnumber = studentGradesSorted.forEach(element => {
            console.log(element)
        });
        let studentArrayObject = {
            student_id: studentArray.id
        }
        console.log(finalStudentObject)
        console.log(studentArrayObject)
    })

}
