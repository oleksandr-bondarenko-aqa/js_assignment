const defaultB = 30;
const getDefault = c => c * 2;

function compute (a = 5, b = defaultB) {
    return a + b
}

function compute2 (a = 5, b = getDefault(10)) {
    return a + b
}

function compute3 (a = 5, b = getDefault(a)) {
    return a + b
}


console.log(compute(10));
console.log(compute(10, 50));

console.log(compute2());

console.log(compute3(20));