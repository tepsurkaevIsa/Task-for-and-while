//2.1
// В файле arrays-1.js создай массив с десятью элементами числового типа.
// Ниже напиши циклы for и while, которые выведут все элементы в консоль.

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for(let i = 0; i < arr.length; i++){
    console.log(arr[i])
};

let i = 0;
while(i < arr.length){
    console.log(arr[i])
    i++
}