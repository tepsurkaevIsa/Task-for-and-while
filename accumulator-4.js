// 3.4
// В файле accumulator-4.js создай массив с десятью элементами строкового типа. 
// Перечисли в них имена (без фамилий) своих одногруппников и преподавателей.
// Создай переменную accumulator и собери в ней все имена, которые начинаются на букву "а".
// Для решения используй любой из циклов на своё усмотрение.
let arr = ['Ibragim', 'Movsar', 'Djabrail', 'Adam', 'Alvi', 'Ayub', 'Zelim', 'Suliman', 'Ismail', 'Surho'];
let accumulator = [];
for(let i = 0; i < arr.length; i++){
    if(arr[i][0].toLowerCase() === 'a'){
      accumulator.push(arr[i])
    }
}
console.log(accumulator);