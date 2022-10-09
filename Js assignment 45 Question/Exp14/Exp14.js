var guests = ["Asad", "Ahmed", "Ali"];
guests.forEach(Print);

function Print(value) {
  document.getElementById("P").innerHTML += "inviting " + value + "<br/>";
}
