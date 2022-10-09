var guests = ["Asad", "Ahmed", "Ali"];
guests.forEach(Print);

function Print(value) {
  document.getElementById("P").innerHTML += "inviting " + value + "<br/>";
}

console.log(`guest ${guests[1]} is not coming today`);

guests.splice(1,1, "Bilal")
guests.forEach(Prints);
function Prints(value) {
  document.getElementById("changeguests").innerHTML += "sdsdss " + value + "<br/>";
}

