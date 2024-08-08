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

    Ids = LearnerSubmissions.map(obj => obj.learner_id)
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

    // 
    let studentGrades = [];
    for (let i = 0; i < Ids.length; i++) {
        let currentStudent = Ids[i];
        if (currentStudent == LearnerSubmissions[i].learner_id) {
            let score = LearnerSubmissions[i].submission.score;
            studentGrades.push(score);
            console.log(studentGrades)
        }
    }

    let totalPossible = []; //array of all the possible points taken from AssignmentGroup
    for (let i = 0; i < AssignmentGroup.assignments.length; i++) {
        let currentGrade = AssignmentGroup.assignments[i].points_possible;
        if (currentGrade == AssignmentGroup.assignments[i].points_possible) {
            let grade = AssignmentGroup.assignments[i].points_possible;
            totalPossible.push(grade);
            console.log(totalPossible)
        }
    }

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
   
    
//   }
    // get the total weighted average of ALL assignments 
    // weighted average works like this: (score(weight)) + (score(weight)) = weighted average 
    // isolate the assignmentID and group_weight from AssignmentGroup
    // isolate the student score from Learner submissions 
    //use these to calculate the weighted average - (student_score(group_weight)) for each assignment 
    // add these together to get the weighted average 

//   const result = getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);
//   console.log(result)
//   }

//   function getLearnerData(course, ag, submissions) {
//     // here, we would process this data to achieve the desired result. -- this is an example of the result -So the return value should be an array containing object(s)
//     // want to analyze the data and return a new result based on the data provided 
//    
     //You will create a script that gathers data, processes it, 
//     // and then outputs a consistent result as described by a specification. 
//     // This is a very typical situation in industry, and this particular scenario 
//     // has been modified from a real application. 

//     //Your goal is to analyze and transform this data such that the output of your
//     // program is an array of objects, each containing the following information in 
//     //the following format:
//     //{
//         // the ID of the learner for which this data has been collected
//         //"id": number, (x)
//         // the learner’s total, weighted average, in which assignments
//         // with more points_possible should be counted for more
//         // e.g. a learner with 50/100 on one assignment and 190/200 on another
//         // would have a weighted average score of 240/300 = 80%.
//         //"avg": number,
//         // each assignment should have a key with its ID,
//         // and the value associated with it should be the percentage that
//         // the learner scored on the assignment (submission.score / points_possible)
//         //<assignment_id>: number,
//         // if an assignment is not yet due, it should not be included in either
//         // the average or the keyed dictionary of scores
//     //}

//     const result = [
//       {
//         id: 125, // <--"id": number,
//         avg: 0.985, // (47 + 150) / (50 + 150) <--the learner’s total, weighted average, in which assignments
//         // with more points_possible should be counted for more
//         // e.g. a learner with 50/100 on one assignment and 190/200 on another
//         // would have a weighted average score of 240/300 = 80%.
//         1: 0.94, // 47 / 50 <-- "avg": number,
//         // each assignment should have a key with its ID,
//         // and the value associated with it should be the percentage that
//         // the learner scored on the assignment (submission.score / points_possible)
//         2: 1.0 // 150 / 150 <-- assignment_id>: number,
//         // if an assignment is not yet due, it should not be included in either
//         // the average or the keyed dictionary of scores
//       },
//       {
//         id: 132,
//         avg: 0.82, // (39 + 125) / (50 + 150)
//         1: 0.78, // 39 / 50
//         2: 0.833 // late: (140 - 15) / 150
//       }
//     ];
  
//     return result;
//   }
  
//   const result = getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);
  
//   console.log(result);