// Взяти файл template_2.html та працювати в ньому
// 1) Напишіть код, який :
// a) змінює клас тексту елемнту з ід main_header на назву групи в якій
// ви вчитесь (mon-year)

// let classElementID = document.getElementById('main_header');
// classElementID.classList.add('sept_2021');
// console.log(classElementID);


// b) робить шириниу елементу ul 400px

// let ul = document.querySelector('ul');
// ul.style.width = '400px';



// c) робить шириниу всіх елементів з класом linkList шириною 50%

// let linkList = document.getElementsByClassName('linkList');
// for (const item of linkList) {
//     item.style.width = '50%';
// };


// d) отримує текст який зберігається в елементі з класом listElement2

// let textListElement2 = document.getElementsByClassName('listElement2');
// for (let text of textListElement2) {
//     console.log(text.querySelector('a').text);
// };


// e) отримує всі елементи li та змінює ім колір фону на сірий

// let allLi = document.getElementsByTagName('li');
// for (const item of allLi) {
//     item.style.backgroundColor = 'gray';
//     item.style.marginBottom = '5px';
//
// };


// f) отримує всі елементи 'a' та додає їм клас anchor

// let allA = document.getElementsByTagName('a');
// for (let allAElement of allA) {
//     allAElement.classList.add('anchor');
// }
// console.log(allA);



// g) отримує всі елементи 'a' та у випадку, якщо текстовий контен
// елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів

// for (let allAElement of allA) {
//     if (allAElement.text === 'link3'){
//         allAElement.style.fontSize = '40px';
//     }
// }




// h) отримує всі елементи 'a' та додає їм клас element_XXX.
// Де XXX - текстовий контент елементу a

// for (let allAElement of allA) {
//     allAElement.classList.add('element_XXX');
// }
//
// let element_XXX = document.getElementsByClassName('element_XXX');
// for (let item of element_XXX) {
//     item.textContent = 'XXX';
// }


// i) отримує всі елементи 'sub-header' та змінює колір фону.
// Фон отримати з prompt()

// let subHeader = document.getElementsByClassName('sub-header');
// for (let item of subHeader) {
    // item.style.backgroundColor = prompt('');
// }





// j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку
// якщо текст елемнту = content 2 segment . Колір отримати з prompt()

// let subHeaderText = document.getElementsByClassName('sub-header');
// for (let item of subHeaderText) {
//     if (item.textContent === 'content 2 segment'){
        // item.style.color = prompt('');
    // }
// }


// k) отримує елемент з класом content_1 та заміняє  в ньому тест на
// довільний. Текст отримати з prompt()

// let content1 = document.getElementsByClassName('content_1');
// for (let element of content1) {
    // element.textContent = prompt('')
// }




// l) отримати елементи p та змінити їм padding на 20px

// let pList = document.getElementsByTagName('p');
// for (let p of pList) {
//     p.style.padding = '20px'
// }






// m) отримати елементи з класом text2 та змінити їм текст на назву групи
// (mon-year. Пример sep-2021)

let text2 = document.getElementsByClassName('text2');
for (let text2Element of text2) {
    text2Element.textContent = 'sep - 2021';
}



