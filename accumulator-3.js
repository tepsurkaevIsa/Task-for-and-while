// 3.3
// В файле accumulator-3.js создай массив с десятью элементами строкового типа. 
// Перечисли в них известные тебе названия языков программирования.
// Создай переменную accumulator и собери в ней только те названия, которые длиннее трёх символов.
// (accumulator будет массивом, вспомни про .push()).
// Для решения используй любой из циклов на своё усмотрение.

let arr = ['JavaScript', 'Python', 'Java', 'Typescript', 'C#', 'PHP', 'C++', 'C', 'Shell', 'Ruby'];
let accumulator = [];
let i = 0; 
while(i < arr.length){
    if(arr[i].length > 3){
        accumulator.push(arr[i])
    }
    i++
};
console.log(accumulator);