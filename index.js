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
  
//   function getLearnerData(course, ag, LearnerSubmissions) {
    //step 1 - get the learner's id 
    // let studentId = LearnerSubmissions.find[0].learner_id
    // console.log(studentId)

    // do something to get an array of just each student's id once (done - studentIds)
    //(could use arr.forEach with some kind of .map and or .filter)
    //then I need to feed that into the next step which searches by each id 
    //for the grades and then does the weighted avg for each grade 

    Ids = LearnerSubmissions.map((obj) => obj.learner_id)
    console.log(Ids)
    
    function removeDuplicates(Ids) {
        let unique = [];
        Ids.forEach(element => {
            if (!unique.includes(element)) {
                unique.push(element);
            }
        });
        return unique;
    }
    let studentIds = removeDuplicates(Ids)
    console.log(studentIds)

    LearnerSubmissions.forEach((object) => {
        let learnerGrades = [];
        if (object.learner_id === 125) {
            learnerGrades.push(object.submission.score)
        } 
    console.log(learnerGrades)
    })

    //  let learnerGrades = []; //array of all the possible points taken from AssignmentGroup
    // for (let i = 0; i < LearnerSubmissions[i].assignments.length; i++) {
    //     let currentStudent = LearnerSubmissions.learner_id[i];
    //     if (currentGrade == AssignmentGroup.assignments[i].points_possible) {
    //         let grade = AssignmentGroup.assignments[i].points_possible;
    //         totalPossible.push(grade);
    //         console.log(totalPossible)
    //     }
    // }

    // map by id to create an array of objects 

    // function studentGrades(studentIds, LearnerSubmissions) {
    //     studentIds.forEach(
            
    //     )
    // }
    // const studentGrades2 = LearnerSubmissions.filter((submission) => {
    //    if (submission.learner_id === 125) {
    //     return true 
    //    } else {
    //     return false
    //    }
    // });
    // console.log(studentGrades)

    // let studentGrades = LearnerSubmissions.map((submissions, index) => {
    //     if (submissions.learner_id === Ids){
    //         return true
    //     } else {
    //         return false
    //     }
    // })
    // console.log(studentGrades)

    // let studentGrades = studentIds.map((id, index) => {
    //     let grades = []
    //     console.log(id)
    //     if (id === LearnerSubmissions[index].learner_id){
    //         return grades.push(LearnerSubmissions[index].submission.score) 
    //     } else {
    //         return false
    //     }
    // })
    // console.log(studentGrades)

    // let studentGrades = [];
    // for (let i = 0; i < Ids.length; i++) {
    //     let currentStudent = Ids[i];
    //     if (currentStudent === LearnerSubmissions[i].learner_id) {
    //         let score = LearnerSubmissions[i].submission.score;
    //         studentGrades.push(score);
    //         console.log(currentStudent)
    //         console.log(studentGrades)
    //     }
    // }

    let totalPossible = []; //array of all the possible points taken from AssignmentGroup
    for (let i = 0; i < AssignmentGroup.assignments.length; i++) {
        let currentGrade = AssignmentGroup.assignments[i].points_possible;
        if (currentGrade == AssignmentGroup.assignments[i].points_possible) {
            let grade = AssignmentGroup.assignments[i].points_possible;
            totalPossible.push(grade);
            console.log(totalPossible)
        }
    }
   // map of student id's and list of grades key is student id - value is a list of the 
   //grades for that student 
   // takes a list of grades - student id 
   // tkae that array add in the new dstudent grade and reset that for the student id 
   // map by id to create an array of objects

   let gradesList = LearnerSubmissions.map((obj) => {
    console.log(obj)
      

   })


// these worked once 
    let scoreSum = 0 //total possible points for all assignments 
    for (let i = 0; i < totalPossible.length; i++) {
        scoreSum += totalPossible[i]
    } 
    console.log(scoreSum) // this is currently correct 

        let gradeSum = 0 //total points for all assignments for one student 
        for (let i = 0; i <studentGrades.length; i++) {
            gradeSum += studentGrades[i]
        }
        console.log(gradeSum) // right now returns 130 which is all of the grades for all the student assignments
        //it works but its recieving the wrong input from studentGrades. Once Studentgrades is fixed this will work 

    function studentWeightedAvg(scoreSum,gradeSum) {
        return gradeSum/scoreSum
        //need to learn how to turn this into a percentage 
    }
    console.log(studentWeightedAvg(scoreSum,gradeSum))


    //now I need to make something that says 
    //look through each instance, and if learner_id = x 
    //then find the submission score and multiply it by the weight 
    //(assignmentgroup.weight)
    //and then add that to other scores(weight)
    //then print out result of adding all the scores(weight)

    let weight = AssignmentGroup.group_weight
    console.log(weight)
    let score  = LearnerSubmissions[0].submission.score
    // let weightedAvg = (score * (weight/100))


    function getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions) {
        // here, we would process this data to achieve the desired result.
        learnerDataSets = [];

        // for (something) {
        //   let finalLearnerObject = {};
        //   //here's where you put the actions to add key:value pairs that 
        //   // meet the final information requirements 
        //   obj[keys[i]] = values[i];
        //   arrayOfObjects.push(obj);
        // }
        //might do something like this for above: 
          // let newObjArray = students.map((student, index) => {
              // let studentObject = {
              // student: student ,
              // school: "Per Scholas",
              // grade: grades[index]
            // }
          //return(studentObject)
          // })
         // console.log(newObjArray)

        return learnerDataSets;
    }
        // example result
        // const result = [
        //   {
        //     id: 125,
        //     avg: 0.985, // (47 + 150) / (50 + 150)
        //     1: 0.94, // 47 / 50
        //     2: 1.0 // 150 / 150
        //   },
        //   {
        //     id: 132,
        //     avg: 0.82, // (39 + 125) / (50 + 150)
        //     1: 0.78, // 39 / 50
        //     2: 0.833 // late: (140 - 15) / 150
        //   }
        // ];