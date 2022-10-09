var friendNames = ["bilal", "adeel", "saad"];
friendNames.forEach(Print);

function Print(value) {
  document.getElementById("P").innerHTML += value + "<br/>";
}
