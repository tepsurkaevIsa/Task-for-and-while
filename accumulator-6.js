// 3.6
// В файле accumulator-6.js создай массив с десятью элементами числового типа.
// Создай переменную accumulatorOdd и собери в ней нечетные числа массива.
// Для решения используй любой из циклов на своё усмотрение.

let arr = [1, -2, 3, 4, 5, 6, 7, 8, -9, -10];
let accumulatorOdd = [];
for(let i = 0; i < arr.length; i++){
    if(arr[i] % 2 !== 0){
        accumulatorOdd.push(arr[i])
    }
};
console.log(accumulatorOdd);