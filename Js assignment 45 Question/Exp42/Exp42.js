let magicianName = ["Apollo", "Blaine", "Copperfield ", "Devant"];

function showMagicians(magicianName){
    console.log(magicianName);
}

function makeGreat(array){
    for(let i = 0; i < array.length; i++){
        array[i] = "The Great " + array[i];
    }
    return array;
}

makeGreat(magicianName);
showMagicians(magicianName);
