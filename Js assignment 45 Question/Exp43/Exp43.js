let magicianName = ["Apollo", "Blaine", "Copperfield ", "Devant"];
let magicianNameCopy = [];

function show_magicians(array) {
  console.log(array);
}

function make_great(magician_name) {
  for (let i = 0; i < magician_name.length; i++) {
    magicianNameCopy.push("The Great " + magician_name[i]);
  }
  return magicianNameCopy;
}

make_great(magicianName);
show_magicians("Original Arrays: " + magicianName);
show_magicians("Copy Arrays: " + magicianNameCopy);
