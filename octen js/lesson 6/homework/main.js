// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

// let str1 = 'hello world';
// console.log(str1.length);
// let str2 = 'lorem ipsum';
// console.log(str2.length);
// let str3 = 'javascript is cool';
// console.log(str3.length);


// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

// let str1 = 'hello world';
// console.log(str1.toUpperCase());
// let str2 = 'lorem ipsum';
// console.log(str2.toUpperCase());
// let str3 = 'javascript is cool';
// console.log(str3.toUpperCase());

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

// let str1 = 'HELLO WORLD';
// console.log(str1.toLowerCase());
// let str2 = 'LOREM IPSUM';
// console.log(str2.toLowerCase());
// let str3 = 'JAVASCRIPT IS COOL';
// console.log(str3.toLowerCase());


// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

// let str = ' dirty string   ';
// console.log(str.trim());


// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
// ['Каждый', 'охотник', 'желает', 'знать']

// let str = 'Каждый охотник желает знать';
//
// let arr = (str) => {
//     console.log(str.split(' '));
// }
// arr(str);

// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
//     let str = 'Каждый охотник желает знать';
// document.writeln(delete_characters(str, 7)); // Каждый


// let str = 'Каждый охотник желает знать';
// let characters = (arg, length) => {
//     console.log(arg.slice(0, length));
// }
// characters(str,7);


// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.
// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'


// let str = "HTML JavaScript PHP";
//
// let insert_dash = (str) => {
//     console.log(str.toUpperCase().replaceAll(' ', '-'));;
// }
// insert_dash(str);


// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.

// let str = 'каждый охотник желает знать';
// let strLowercase = (str) => {
//     let arr = str.split('');
//     arr[0] = arr[0].toUpperCase();
//     console.log(arr.join(''));
// }
// strLowercase(str);


// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.

// let str = 'каждый охотник желает знать';
//
// let capitalize = (str) => {
//     let res = str.split(' ').map((e)=>e[0].toUpperCase()+e.slice(1)).join(' ')
//    console.log(res)
// }
// capitalize(str);

