// - створити функцію, яка якщо приймає один аргумент, просто вивдоить його, якщо два аргументи - складає або конкатенує їх між собою.

// function types(a, b) {
//     if (b === undefined){
//         console.log(a);
//     }else{
//         console.log(a + b);
//     }
//
// }
// types('lol', 'lol')



// - створити функцію  яка приймає два масиви та скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//     EXAMPLE:
// [1,2,3,4]
//     [2,3,4,5]
// результат
//     [3,5,7,9]

// let numb1 = [1,2,3,4];
// let numb2 = [2,3,4,5];
// function sumMassif(a,b){
//     let arrRes=[]
//     for (let i = 0; i < a.length; i++) {
//         arrRes[i]=a[i]+b[i]
//     }
//
//     return arrRes
//
// }
// console.log(sumMassif(numb1,numb2))




// - Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// EXAMPLE:


// let object = [{name: 'Dima', age: 13}, {model: 'Camry'}];  /*===> [ name, age, model ]*/
//
// function objectKey(arg){
//     let key = [];
//     let j = 0;
//     for (let i = 0; i < arg.length; i++) {
//         for (const keyKey in arg[i]) {
//             key[j] = keyKey;
//             j++
//         }
//     }
//     return key
// }
//
// console.log(objectKey(object))
//


//     - Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// EXAMPLE:


// let obj = [{name: 'Dima', age: 13}, {model: 'Camry'}];/*[ Dima, 13, Camry ]*/
//
// function name (arg) {
//     let array=[]
//     let i = 0;
//     for (let argElement of arg) {
//         for (let item in argElement) {
//             array[i] = argElement[item];
//             i++
//         }
//     }
//     return array
// }
// console.log(name (obj));

