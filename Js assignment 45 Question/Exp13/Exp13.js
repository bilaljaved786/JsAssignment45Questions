var friendNames = ["BMW", "Bugatti", "maclaren"];
friendNames.forEach(Print);

function Print(value) {
  document.getElementById("P").innerHTML += "I would like to own a " + value + "<br/>";
}
