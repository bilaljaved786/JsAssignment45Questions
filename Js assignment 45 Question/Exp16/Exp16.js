var guests = ["Asad", "Ahmed", "Ali"];
guests.forEach(Print);

function Print(value) {
  document.getElementById("P").innerHTML += "inviting " + value + "<br/>";
}

function foundBiggerTable(value) {
  document.getElementById("biggerTable").innerHTML += "inviting " + value + "<br/>";
}

guests.splice(1, 1, "Bilal");
guests.forEach(Print);

// just found a bigger table

function fun()
{
  // add new item at the start of the array
  guests.unshift("sameer");

  // add new item at the specified place
  guests.splice(2,0,"Asif","ghulam");

  // add new item at the end of the array
  guests.push("shahzad");
  guests.forEach(foundBiggerTable);
}
