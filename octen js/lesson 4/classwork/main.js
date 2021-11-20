// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
// function minNum(a, b, c){
//     if (a < b && a < c){
//         console.log(a);
//     }else if (b < a && b < c){
//         console.log(b);
//     }else  {
//         console.log(c);
//     }
// }
// minNum(12, 18, 4)


// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

// function maxNum(a, b, c){
//     if (a > b && a > c){
//         console.log(a);
//     }else if (b > a && b > c){
//         console.log(b);
//     }else  {
//         console.log(c);
//     }
// }
// maxNum(21, 18, 20)



// - створити функцію яка повертає найбільше число з масиву

// let nums = [ 23, 345, 567, 32, 4577, 3321, 9596, 10000];
// function maxNums (a){
//    return Math.max.apply(Math, a)
// }
// let max = maxNums(nums);
// console.log(max);



// - створити функцію яка повертає найменьше число з масиву

// let nums = [ 23, 345, 567, 32, 4577, 1, 3321, 9596, 10000];
// function maxNums (a){
//     return Math.min.apply(Math, a)
// }
// let max = maxNums(nums);
// console.log(max);

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

// let nums = [ 1, 2, 3, 3];
// function sum(a){
//     let suma = 0;
//     for (let aElement of a) {
//         suma += aElement;
//     }
//     return suma
// }
//
// console.log(sum(nums));
//

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

// let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// function sum(a){
//     let suma = 0;
//     let numbers = 0;
//     for (let aElement of a) {
//         suma += aElement;
//         numbers = suma / aElement;
//     }
//     return numbers
// }
//
// console.log(sum(nums));



// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);

// function minMax(arg){
//     let max = arguments[0];
//     let min = arguments[0];
//     for (let element of arguments) {
//         if (element > max){
//             max = element;
//         }else if (element < min){
//             min = element;
//         }
//
//     }
//     console.log('max ', max);
//     return min;
// }
// document.write('мінімальне число: ' + minMax(10,23,4678,221,335678,654322));




// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.

// function random(rand){
// let massif = [];
//     for (let i = 0; i < rand; i++) {
//         massif.push(Math.round(Math.random()*100))
//     }
//     return massif;
//
// }
//
// console.log(random(12));
//

// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.

// function random(rand, limit){
//     let massif = [];
//     for (let i = 0; i < rand; i++) {
//         massif.push(Math.round(Math.random()*limit))
//     }
//     return massif;
//
// }
//
// console.log(random(12, 10));



// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].


// let arrq=[1,2,3,4,5,6,7,8,9,0]
// function reverse(arrq) {
//
//     let arr = [];
//     for (let i = 0, ri = arrq.length-1 ;i<=arrq.length, ri>=0; i++,ri--) {
//        arr[i] = arrq[ri];
//     }
//     return arr
//
// }
// console.log(reverse(arrq));


























