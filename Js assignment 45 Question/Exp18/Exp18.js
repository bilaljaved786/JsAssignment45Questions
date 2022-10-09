let locations = ["london", "canada", "pakistan","lahore","quetta"];

console.log("Orginal Order: " + locations);
let sortArray = locations; 

sortArray.sort();
console.log("after Sorting: " + sortArray);
console.log("Original arr: " + locations);

sortArray.reverse();
console.log("Array copy in reverse order: " + sortArray);
console.log("Original : " + locations);

locations.reverse();
console.log("Reverse order list: " + locations);

locations.reverse();
console.log("back to original: " + locations);

locations.sort();
console.log("sorted changed: " + locations);

locations.reverse();
console.log("reverse alphabetical order again: " + locations);
