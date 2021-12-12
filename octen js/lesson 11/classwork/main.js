// є масив -
let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];
// створити під кожен об'єкт свій блок з конопкою "додати до улюблених"
// при натисканні на яку об'єкт потрапляє до масиву favorites улюблених
// обраних об'єктів в локальному сховищі.

let favorites = 'favorite';
localStorage.setItem(favorites, JSON.stringify([]));
let allUser = document.getElementById('all_users');
users.forEach(user => {
    let userDiv = document.createElement('div');
    userDiv.className = 'user';
    let content = document.createElement('div');
    content.innerText = `Name : ${user.name}\n Age : ${user.age}\n Status : ${user.status}`;
    let btn = document.createElement('button');
    btn.innerText = 'favorite';
    btn.onclick = () => {
        let favoriteArr = JSON.parse(localStorage.getItem(favorites));
        favoriteArr.push(content);
        localStorage.setItem(favorites, JSON.stringify(favoriteArr));
        btn.disabled = true;
    };
    userDiv.append(content, btn);
    allUser.append(userDiv);
})


// Створити сторніку favorites.html при переході на яку потрібно вивест
// в документ всіх обраних на попередньому етапі.












