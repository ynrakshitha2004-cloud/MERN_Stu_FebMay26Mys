//Nested object & Method
const student = {
   firstname: "ranju",
   lastname: "Rohan",
    scores:{
math:80,
social:78
    },
    hobbies:["reading","singing"],
    fullname: function(){
        return this.firstname + " "+this.lastname;
    },
    greet(){
        console.log("Hi, ",this.fullname());
    }
};
//console.log(student.scores.math);

console.log(student.scores.social);
console.log(student.fullname);