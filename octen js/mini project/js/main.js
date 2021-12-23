// В index.html
// 1 получить массив объектов user с endpoint`а https://jsonplaceholder.typicode.com/users
// 2 Вывести id,name всех user в index.html. Отдельный блок для каждого user.
// 3 Добавить каждому блоку кнопку/ссылку , при клике на которую происходит переход на страницу
// user-details.html, которая имеет детальную информацию про объект на который кликнули

fetch('https://jsonplaceholder.typicode.com/users')
    .then(element => element.json())
    .then(users => {
    let wrap = document.getElementsByClassName('wrap')[0];
        for (const user of users) {
            let userDiv = document.createElement('div');
            userDiv.classList.add('userDiv');

            let userP = document.createElement('p');
            userP.innerText = `${user.id}`;

            let userH = document.createElement('h2');
            userH.classList.add('userH');
            userH.innerText = `${user.name}`;

            let userBtn = document.createElement('a');
            userBtn.classList.add('userBtn');
            userBtn.innerText = 'Details';
            userBtn.href = 'user-details.html?data=' + JSON.stringify(user);

            userDiv.append(userP, userH, userBtn);
            wrap.append(userDiv);
        }
})

// Стилизация проекта -
// index.html - все блоки с user - по 2 в ряд. кнопки/ссылки находяться под информацией про user.
// user-details.html - блок с информацией про user вверху страницы. Кнопка ниже, на 90% ширины страницы, по центру.
// блоки с краткой информацией про post - в ряд по 5 объектов.
// post-details.html - блок с информацией про пост вверху. Комментарии - по 4 в ряд.
// Все без исключения элементы, который характеризируют user,post,comment  визуализировать, так, что бы было видно их блоки (дать задний фон + margin. Иными словами - крайне четкая сетка)
