// Всі функції повинні бути описані стрілочним типом!!!!


// - створити функцію яка обчислює та повертає площу прямокутника висотою

// let fn = (a, b) => a * b;
// console.log(fn(5, 6));


// - створити функцію яка обчислює та повертає площу кола

// let fn = (r) => Math.round(Math.PI * (r ** 2));
// console.log(fn(5));


// - створити функцію яка обчислює та повертає площу циліндру

// let areaСylinder = (h, r) => Math.round(2 * Math.PI * r * h);
// console.log(areaСylinder(6, 1));


// - створити функцію яка приймає масив та виводить кожен його елемент

// let obj = [10,20,30,40,50,60];
// let massif = (obj) => {
//     for (let i = 0; i < obj.length; i++) {
//         console.log(obj[i]);
//     }
// };
// massif(obj);


// - створити функцію яка  створює параграф з текстом. Текст задати через аргумент


// let text = (a) => document.write(`<p>${a}</p>`);
// text('octen');


// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

// let listCreator = (a) => {
//     document.write(`<ul>`)
//     document.write(`<li>${a}</li>`)
//     document.write(`<li>${a}</li>`)
//     document.write(`<li>${a}</li>`)
//     document.write(`</ul>`)
// }
// listCreator('hello');



// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

// let listCreator2 = (text, b) => {
//     document.write(`<ul>`)
//     for (let i = 0; i < b; i++) {
//         document.write(`<li>${text}</li>`)
//
//     }
//     document.write(`</ul>`)
// }
// listCreator2('hello', 3);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

// let masif = [123, 'grut', true, 343, 234, false, 'string', 'garden', 332, true, 'i did it', 'yes'];

// let list = (a) => {
//     document.write(`<ul>`)
//     for (let i = 0; i < masif.length; i++) {
//         document.write(`<li>${masif[i]}</li>`)
//
//     }
//     document.write(`</ul>`)
// }
// list(masif);


// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

// let object = [
//     {
//         id: 1,
//         name: 'ivan',
//         age: 22
//     },
//     {
//         id: 2,
//         name: 'lilia',
//         age: 21
//     },
//     {
//         id: 3,
//         name: 'nazar',
//         age: 29
//     },
//     {
//         id: 4,
//         name: 'yulia',
//         age: 28
//     },
//     {
//         id: 5,
//         name: 'oleg',
//         age: 27
//     },
//     {
//         id: 6,
//         name: 'ruslan',
//         age: 23
//     },
//     {
//         id: 7,
//         name: 'oksana',
//         age: 34
//     },
//     {
//         id: 8,
//         name: 'tamara',
//         age: 35
//     }
// ];
//
//
// let list = (a) => {
//     for (let aElement of a) {
//         document.write(`<div>${aElement.id}.${aElement.name} ${aElement.age}</div>`)
//     }
// }
// list(object);
