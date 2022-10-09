var guests = ["Asad", "Ahmed", "Ali"];
guests.forEach(Print);

function Print(value) {
  document.getElementById("P").innerHTML += "inviting " + value + "<br/>";
}

function onlytwo(value) {
  document.getElementById("onlytwo").innerHTML +=
    " <br/> only two allowed " + value;
}

function emptyList(value) {
  document.getElementById("emptyList").innerHTML +=
    " <br/> only two allowed " + value;
}

function foundBiggerTable(value) {
  document.getElementById("biggerTable").innerHTML +=
    "inviting " + value + "<br/>";
}

guests.splice(1, 1, "Bilal");
guests.forEach(Print);

// just found a bigger table

function fun() {
  // add new item at the start of the array
  guests.unshift("sameer");

  // add new item at the specified place
  guests.splice(2, 0, "Asif", "ghulam");

  // add new item at the end of the array
  guests.push("shahzad");
  guests.forEach(foundBiggerTable);
}

// found out that space available for only 2 people's

function onlytwoPeoples() {
  // space available for only two people

  while (guests.length > 2) {
    guests.pop();
  }
  guests.forEach(onlytwo);
}

function emptyList() {
  guests.pop();

  // now empty list
  guests.forEach(emptyList);
}
