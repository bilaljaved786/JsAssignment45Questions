var person = "bilal javed";

// upper case
console.log(person.toUpperCase());

//lower case
console.log(person.toLowerCase());

//title case
let str = person.toLowerCase().split(" ");

for (let i = 0; i < str.length; i++) {
  str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
}

document.getElementById("p").innerHTML = str.join(" "); 
