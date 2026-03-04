//json stringify & parse 
const employee = {
id: 101,
name: "Rakshi",
dept: "CSE",
isActive: true
};
const jsonstring = JSON.stringify(employee);
console.log(jsonstring);
console.log(employee);

//JSON parsing
const parseObject = JSON.parse(jsonstring);
   console.log(parseObject);