// 2.5
// В файле arrays-5.js создай массив с десятью элементами строкового типа.
// Перечисли в них имена (без фамилий) своих одногруппников и преподавателей.
// Ниже напиши цикл for, который выводит в консоль имена начинающиеся на букву "а".
let arr = ['Ibragim', 'Movsar', 'Djabrail', 'Adam', 'Alvi', 'Ayub', 'Zelim', 'Suliman', 'Ismail', 'Surho'];
for(let i = 0; i < arr.length; i++){
    if(arr[i][0].toLowerCase() === 'a'){
      console.log(arr[i])
    }
}