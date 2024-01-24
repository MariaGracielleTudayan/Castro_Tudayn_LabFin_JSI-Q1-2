//Array Destructuring
const courses = ["BSCS", "BSM", "BAEL", "BSEd", "BEEd", "BCAEd"];

const[courses1, courses2, courses3] = courses;
console.log(courses1, courses2, courses3);

const[courses4, courses5, courses6] = courses;
console.log("Other Courses includes..." + courses4, courses5, courses6);
