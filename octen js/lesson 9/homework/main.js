// Все робити за допомоги js.
// - створити блок,
//     - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.


// let div = document.createElement('div');
// div.classList.add('wrap');
// div.classList.add('beta');
// div.classList.add('alpha');
// div.classList.add('collapse');
// div.style.backgroundColor = 'blue';
// div.style.fontSize = '20px';
// div.style.color = 'red';
// document.body.appendChild(div);
// document.body.appendChild(div.cloneNode(true));



// - Є масив:
// let arr =  ['Main','Products','About us','Contacts'];
// Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву
// створює li та додає його до блоку .menu
// Завдання робити через цикли.
// let menu = document.getElementsByClassName('menu')[0];
// for (let item of arr) {
//     let li = document.createElement('li');
//     li.innerText = `${item}`;
//     menu.appendChild(li);
// }



// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.


// for (let element of coursesAndDurationArray) {
//     let divElement = document.createElement('div');
//     divElement.innerText = `${element.title} - ${element.monthDuration}`;
//     document.body.appendChild(divElement);
// }







// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,
// в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'>
// з monthDuration елементу.
//     Завдання робити через цикли.


// for (let element of coursesAndDurationArray) {
//     let div = document.createElement('div');
//     let h1 = document.createElement('h1');
//     let p = document.createElement('p');
//
//     h1.innerText = `${element.title}`;
//     p.innerText = `${element.monthDuration}`;
//
//
//     div.classList.add('item');
//     h1.classList.add('heading');
//     p.classList.add('description');
//     div.appendChild(h1);
//     div.appendChild(p);
//     document.body.append(div);
// }







