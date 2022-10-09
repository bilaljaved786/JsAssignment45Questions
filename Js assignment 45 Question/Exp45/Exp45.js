function carInformation(manyfacturer, modelName, ...arguments) {
  let car = {
    carManyfacturer: manyfacturer,
    carModel: modelName,
    color: arguments,
  };
  return car;
}

console.log(carInformation("BMW", "X4", ["white", "silver", "black"]));
console.log(carInformation("Bugatti", "Chiron", ["white", "gold", "purple"]));
