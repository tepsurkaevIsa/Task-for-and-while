// 2.4
// В файле arrays-4.js создай массив с десятью элементами строкового типа. 
// Перечисли в них известные тебе названия языков программирования.
// Ниже напиши цикл while, который выводит в консоль все названия длиннее трёх символов.
let arr = ['JavaScript', 'Python', 'Java', 'Typescript', 'C#', 'PHP', 'C++', 'C', 'Shell', 'Ruby'];
let i = 0; 
while(i < arr.length){
    if(arr[i].length > 3){
        console.log(arr[i])
    }
    i++
}