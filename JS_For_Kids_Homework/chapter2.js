// 1) правильный подсчет нужного кол-ва шариков

let balloonsCorrectCount = (15 + 9) * 2;
console.log(balloonsCorrectCount);

//2) операторы

let balloons = 100;
balloons *= 2;
console.log(balloons);

let balloons = 100;
balloons /= 4;
console.log(balloons);

//3) проверка возраста и сопровождения

let isAccessGrantedCheck;
let age;
let accompanied;
let kidOne;
let kidTwo;
let kidThree;

kidOne = {
    age: 12,
    accompanied: true
};

kidTwo = {
    age: 13,
    accompanied: false
}

kidThree = {
    age: 12,
    accompanied: false
}

if (age >= 13 || accompanied === true) {
    isAccessGrantedCheck = console.log("Access granted")
}
else {
    isAccessGrantedCheck = console.log("Access denied")
};

let kids = [kidOne,kidTwo,kidThree];


kids.isAccessGrantedCheck;

