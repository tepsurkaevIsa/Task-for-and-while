// 3.5
// В файле accumulator-5.js создай массив с десятью элементами числового типа.
// Создай переменную accumulatorEven и собери в ней четные числа массива.
// Для решения используй любой из циклов на своё усмотрение.

let arr = [1, -2, 3, 4, 5, 6, 7, 8, -9, -10];
let accumulatorEven = [];
for(let i = 0; i < arr.length; i++){
    if(arr[i] % 2 === 0){
        accumulatorEven.push(arr[i])
    }
};
console.log(accumulatorEven);