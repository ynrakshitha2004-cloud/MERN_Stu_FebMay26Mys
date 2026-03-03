//switch statement
console.log("Switch Statements");
const day = "Tuesday";
switch(day){
    case "Monday":
        console.log("Start of the week");
        break;
    case "Wednesday":
        console.log("mid of the week");
        break;
        case "Friday":
        console.log("End of the week");
        break;
    default:
        console.log("Some day in the week");
        break;
}
//Type conversion
let n=number("ABC");
console.log("n:",n," Type of n:" ,typeof n, "isNaN",isNaN(n) );