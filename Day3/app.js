// Declaring a variable
//keyword identifier/variableName= value
var firstName="Simon";
let lastName="Boateng";
let age= 27;
let isMarried= true;
let children = ["Bright","Simon", "Patrick"];
let other= {
    favoriteColor: "Blue",
    favoriteSport: "Soccer",
    favoriteFruit: "Mango",
}
const fullName= firstName + " " + lastName;//concatenation
const myself =`My name is ${firstName} ${lastName}.`;//string interpolation
console.log(myself);

//STRINGS
let sentence = "This is my story"
console.log(sentence.length);
console.log(sentence.split("Simon"));
console.log(sentence.replace("Simlon", "Patrick"));
console.log(sentence.toLowerCase());
console.log(sentence.toUpperCase());
console.log(sentence.startsWith("The"));
console.log(sentence.endsWith("mySelf"));
console.log(sentence.includes("my"));

//ARRAY
let days=["Monday", "Tuesday","Wednesday"];
console.log(days.length);
days.push("Friday");
console.log(days);
console.log(days.pop());//removes from the back
console.log(days.unshift("Monday")); //removes from the front
console.log(days.push)//adds from the back
console.log(days.indexOf("Tuesday"));
console.log(days[3]); //retrieving data in the array
days[0] = "Sunday"; //change data in the array
console.log(days);


//oOBJECT
let person ={
    firstName: "Simon",
    lastName:  "Boateng",
    age: 25,
};

 console.log(person["firstName"]);
 console.log(person.firstName);
 console.log(Object.keys(person));
 console.log(Object.values(person));
 console.log(Object.entries(person));

