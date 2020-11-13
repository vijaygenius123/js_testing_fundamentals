const sum = (a, b) => a - b;
const subtract = (a, b) => a - b;

let result, expected
result = sum(3,7);
expected = 10

if(result !== expected){
    throw new Error(`${result} is not equal to ${expected}`)
}

result = subtract(7, 4)
expected = 3
if(result !== expected){
    throw new Error(`${result} is not equal to ${expected}`)
}
