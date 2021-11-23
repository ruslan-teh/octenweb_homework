// Всі функції повинні бути описані стрілочним типом!!!!


//- створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

// let minNum = (a, b, c) => {
//     if (a < b && a < c){
//         console.log(a);
//     }else if (b < a && b < c){
//         console.log(b);
//     }else  {
//         console.log(c);
//     }
// };
// minNum(12, 11, 20);




// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

// let maxNum = (a, b, c) => {
//     if (a > b && a > c){
//         console.log(a);
//     }else if (b > a && b > c){
//         console.log(b);
//     }else  {
//         console.log(c);
//     }
// };
// maxNum(21, 22, 25);



// - створити функцію яка повертає найбільше число з масиву

// let nums = [ 23, 345, 101, 38, 4677, 3, 9596, 10];
//
// let maxNums = (element) => {
//     let max = element[0]
//     for (let i = 0; i < element.length; i++) {
//         if(element[i] > max){
//             max = element[i]
//         }
//     }
//     console.log(max);
// };
// maxNums(nums);


// - створити функцію яка повертає найменьше число з масиву

// let nums = [ 23, 345, 567, 3, 4577, 3321, 9596, 10000, 45];
//
// let minNums = (element) => {
//     let min = element[0]
//     for (let i = 0; i < element.length; i++) {
//         if(element[i] < min){
//             min = element[i]
//         }
//     }
//     console.log(min);
// };
// minNums(nums);


// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13


// let nums = [ 1, 3, 3, 3];
//
// let sum = (arg) => {
//     let suma = 0;
//     for (let aElement of arg) {
//         suma += aElement;
//     }
//     console.log(suma);
// };
// sum(nums);


// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

// let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];


// let sum = (arg) => {
//     let suma = 0;
//     let numbers = 0;
//     for (let aElement of arg) {
//         suma += aElement;
//         numbers = suma / aElement;
//     }
//     console.log(numbers);
// };
// sum(nums)




// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);

// let minMax = (...arg) => {
//     let max = arg[0];
//     let min = arg[0];
//     for (let element of arg) {
//         if (element > max) {
//             max = element;
//         } else if (element < min) {
//             min = element;
//         }
//     }
//     console.log('max ', max);
//     return min;
// };
// document.write('мінімальне число: ' + minMax(10,23,4678,221,335678,654322));



// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.

// let random = (rand) => {
//     let massif = [];
//     for (let i = 0; i < rand; i++) {
//         massif.push(Math.round(Math.random()*100))
//     }
//     console.log(massif);
// };
// random(12);



// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.

// let random = (rand, limit) => {
//     let massif = [];
//     for (let i = 0; i < rand; i++) {
//         massif[i] = Math.round(Math.random()*limit);
//     }
//     console.log(massif);
// };
// random(20, 100);




// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].


// let arrq=[1,2,3,4,5,6,7,8,9,0];
//
// let reverse = (arrg) => {
//     let arr = [];
//     for (let i = 0, ri = arrq.length-1 ;i<=arrq.length, ri>=0; i++,ri--) {
//        arr[i] = arrq[ri];
//     }
//     console.log(arr);
// };
// reverse(arrq);