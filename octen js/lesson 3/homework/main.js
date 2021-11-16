// --створити масив з:
//     - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль




// let arr = [];
// let arr_str=[]
// let arr_mixed=[]
// for (let i = 0; i < 5; i++) {
//     arr[i] = i + 1 ;
//     arr_str[i] = ' ' + (i + 1);
//     arr_mixed[i] = true;
// }
//
// console.log(arr,arr_str,arr_mixed);


// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль


let arr = ['page 1', 'page 2', 'page 3', 'page 4', 'page 5', 'page 6', 'page 7'];
for (let i = 0; i < arr.length; i++) {
    console.log(arr[5]);

}











// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
        // for (let i = 0; i < 10; i++) {
        //     document.write(`<div>text</div>`);
        //
        // }




// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
        // for (let i = 0; i < 10; i++) {
        //     document.write(`<div>text${i}</div>`)
        //
        // }


// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
// let i = 0;
// while (i <= 20){
//     document.write(`<h1>home page</h1>`);
//     i++;
// }


// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
// let i = 0;
// while (i <= 20){
//     document.write(`<h1>home page${i}</h1>`);
//     i++;
// }





// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи

// let arr = ['six', 2, false, 5, true, 983272, ' ', false, 'home'];
// for (let arrElement of arr) {
//     if (typeof arrElement === "boolean"){
//         console.log(arrElement);
//     }
// }



// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
// for (const number of arr) {
//     console.log(number);
// }


// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.

// let arr = ['one', 'two', 'tree', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];
// for (const number of arr) {
//     console.log(number);
// }

// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.

// let arr = ['one', 1, 'two', 2, 'tree', 3, 'four', 4, 'five', 5, 'six', 6, 'seven', 7, 'eight', 8, 'nine', 9, 'null', 0];
// for (const number of arr) {
//     console.log(number);
// }


// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи

// let arr = [1, 2, 'one', 5, true, 983272, 212, true, 'home'];
// for (let arrElement of arr) {
//     if (typeof arrElement === "number"){
//         console.log(arrElement);
//     }
// }


// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи

// let arr = ['six', 2, 'one', 5, true, 983272, 212, true, 'home'];
// for (let arrElement of arr) {
//     if (typeof arrElement === "string"){
//         console.log(arrElement);
//     }
// }
//


// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.


// let arr = ['six', 2, 'one', 5, true, 983272, 212, true, 'home'];
// for (let arrKey in arr) {
//     console.log(arr[arrKey]);
//
// }











// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

// for (let i = 0; i < 10; i++) {
//     console.log(i);
//     document.write(i);
// }


// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

// for (let i = 0; i < 100; i++) {
//     console.log(i);
//     document.write(i);
// }



// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write

// for (let i = 0; i < 100; i+=2) {
//     console.log(i);
//     document.write(i);
// }



// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write

// for (let i = 0; i < 100; i++) {
//     if (!(i % 2)){
//         console.log(i);
//     }
// }



// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write


// for (let i = 0; i < 100; i++) {
//     if (i % 2){
//         console.log(i);
//     }
//
// }