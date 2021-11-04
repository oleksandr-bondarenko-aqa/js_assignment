// #1 Счётчик очков

let scores = {
    vovan: 0,
    nick: 0,
    andrew: 0,
    kindrat: 0,
    onotoley: 0
}

scores.nick += 2;
scores.kindrat ++;
scores.andrew --;
scores.onotoley -= 3;
scores.vovan = 6;

console.log(scores);

// #2 Добываем нужный элемент из объекта

let myCrazyObject = {
    "name": "A ridiculous object",
    "some array": [7, 9, { purpose: "confusion", number: 123 }, 3.3],
    "random animal": "Banana Shark"
};

console.log(myCrazyObject["some array"][2].number);
