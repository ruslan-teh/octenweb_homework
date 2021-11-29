// - Дано список імен.
// let n1 = 'Harry..Potter'
// let n2 = 'Ron---Whisley'
// let n3 = 'Hermione_Granger'
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione_Granger'

// let func = (name) => {
//     return  name
//             .replaceAll('..', ' ')
//             .replaceAll('---', ' ')
//             .replaceAll('_', ' ');
//
// };
// console.log(func(n3));


//   - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.

// let arr = [];
// function func(random) {
//     for (let i = 0; i < random; i++) {
//         arr.push(Math.round(Math.random() * 100));
//     }
//     return arr;
// }
// console.log(func(100));


// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort

// let sort = arr.sort((a, b) => a - b);
// console.log(sort);


// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter, залишивши тільки парні числа

// let filter = arr.filter(value => value % 2 === 0);
// console.log(filter);


// - створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.

// let map = arr.map(value => value.toString());
// console.log(map);


// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
// let nums = [11,21,3];
// sortNums('ascending') // [3,11,21]
// sortNums('descending') // [21,11,3]

// let sortNums = (direction, nums) => {
//     if (direction === 'asc'){
//        return  nums.sort((a, b) => a - b);
//     }else if (direction === 'des') {
//        return  nums.sort((a, b) => b - a);
//     }else {
//         return 'nan';
//     }
// }
// console.log(sortNums('asc', arr));




// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// -- відсортувати його за спаданням за monthDuration

// let sort = coursesAndDurationArray.sort(({monthDuration : a}, {monthDuration :b}) => b - a);
// console.log(sort);


// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців

// let filter = coursesAndDurationArray.filter(value => value.monthDuration > 5);
// console.log(filter);


// - Напишите функцию cutString(str, n), которая делит строку на подстроки, состоящие из n символов.
// document.writeln(cutString('наслаждение',3)) // [нас,лаж,ден,ие]


// let cutString = (str, n) => {
//     let res = [];
//     while (str.length){
//         res.push(str.substr(0, n))
//         str = str.slice(n);
//     }
//     return res;
// };
// console.log(cutString('наслаждение', 3));






