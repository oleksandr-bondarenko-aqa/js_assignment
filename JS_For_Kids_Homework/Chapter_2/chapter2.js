// 1) правильный подсчет нужного кол-ва шариков

let balloonsCorrectCount = (15 + 9) * 2;
console.log(balloonsCorrectCount);

//2) операторы

let balloons = 100;
balloons *= 2;
console.log(balloons);

balloons /= 4;
console.log(balloons);

//3) проверка возраста и сопровождения

let age = 12;
let accompanied = true;

function checkIfAccessible(age, accompanied) {
    if (age >= 13 || accompanied === true) {
        console.log("Access granted")
    } else {
        console.log("Access denied")
    }
}

checkIfAccessible(age, accompanied);


