// #1 - array modification using cycle

const animals = ["Cat", "Fish", "Lemur", "Komodo Dragon"];
for (let i = 0; i < animals.length; i++) {
    animals[i] = "Awesome " + animals[i]
}
console.log(animals)

// #2 - random string generator

const alphabet = "abcdefghijklmnopqrstuvwxyz";
let randomString = "";

while (randomString.length < 6) {
    randomString += alphabet[Math.floor(Math.random() * alphabet.length)];
}
console.log(randomString);

// #3 - h4ck3r sp34k

const input = "Javascript is awesome";
let output = "";

for (let i = 0; i < input.length; i++) {
    if (input[i] === "a") {
        output += "4";
    }
    else if (input[i] === "e") {
        output += "3"
    }
    else if (input[i] === "i") {
        output += "1"
    }
    else if (input[i] === "o") {
        output += "0"
    }
    else {
        output += input[i]
    }
}
console.log(output);

