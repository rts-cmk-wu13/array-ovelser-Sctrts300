document.addEventListener("DOMContentLoaded", function() {
    let catsArray = ["Ollie", "Sophie", "Salem", "Tiger", "Binx", "Pumpkin", "Penny", "Lenny"];
    let dogsArray = ["Barney", "Molly", "Baxter", "Polly", "Buddy", "Suki", "Watson"];
    let fruitsArray = ["Banana", "Orange", "Pineapple", "Mango", "Plum", "Apricot"]
    let numbersArray = [12, 4, 45, 17, 2, 26, 7, 55, 48, 32, 21]

    // --- Løs opgaverne herunder --- 

// opgave 1
let newNumbers = numbersArray.filter(function(number) {
    return number > 20;
})
console.log("opgave 1",newNumbers);

// opgave 2
catsArray.push("Sniffels");
console.log("opgave 2",catsArray);


// opgave 3
let hadTrixie = dogsArray.includes("Trixie")
console.log(hadTrixie);

// opgave 3b
let hasBaxter = dogsArray.some(function(dog) {return dog == "Baxter"})
let hasBaxterArrow = dogsArray.some((dog) => dog == "Baxter")
console.log("opgave 3b",hasBaxter)
console.log("opgave 3b",hasBaxterArrow)

// opgave 4
let hasBagheera = catsArray.find((cat => cat == "Bagheera"))
console.log("opgave 4",hasBagheera);

let hasSalem = catsArray.find((cat => cat == "Salem"))
console.log("opgave 4",hasSalem);

// opgave 5
let multiplied = numbersArray.map((number) => number * 3)
console.log("opgave 5",multiplied);

// opgave 6
let dogsString = dogsArray.join("")
console.log("opgave 5",dogsString);

// opgave 7



}) // ends DOMContentLoaded