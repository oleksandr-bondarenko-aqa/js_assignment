// #1, 2 - генератор случайных обзывательств

let humanBodyPart = ["head", "nose", "mouth", "forehead", "ear", "lip", "hand", "leg"];
let humanAdjective = ["big", "massive", "thick", "smelly", "fat"];
let animalName = ["horse", "kangaroo", "monkey", "donkey", "skunk"];
let animalBodyPart = ["face", "hair", "paws", "tail", "belly"];

let randomHumanBodyPart = humanBodyPart[Math.floor(Math.random() * humanBodyPart.length)];
let randomHumanAdjective = humanAdjective[Math.floor(Math.random() * humanAdjective.length)];
let randomAnimalName = animalName[Math.floor(Math.random() * animalName.length)];
let randomAnimalBodyPart = animalBodyPart[Math.floor(Math.random() * animalBodyPart.length)];

let randomInsult = ("Your " + randomHumanBodyPart + " is as " + randomHumanAdjective + " as " + randomAnimalName + "'s " + randomAnimalBodyPart);

console.log(randomInsult);

//#3 - тот же генератор, но через join

let randomInsultUsingJoin = ["Your", randomHumanBodyPart, "is as", randomHumanAdjective, "as", randomAnimalName + "'s", randomAnimalBodyPart].join(" ");

console.log(randomInsultUsingJoin);

//#4 - объединение чисел

let numbers = [3, 2, 1];
console.log(numbers.join(" is bigger than "));