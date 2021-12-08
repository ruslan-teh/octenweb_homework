// - Создать произвольный елемент с id = text.
// Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".

let buttonText = document.getElementById('off-text');
buttonText.onclick = function (){
    let text = document.getElementById('text');
    text.style.display = 'none';
}

//     - Создайте кнопку, при клике на которую, она будет скрывать сама себя.

let button = document.getElementById('buttonOff');
button.onclick = function (){
    button.style.display = 'none';
}




// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.
// При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18,
// та повідомити про це користувача


let age = document.getElementById('ageButton');
age.onclick = function (){
    let ageNum = document.getElementById('age').value;
    if (!ageNum){
        console.log('abra cadabra');
    }else if (+ageNum <= 18){
        console.log('you kid');
    }else {
        console.log('you adult');
    }
}





// - Создайте меню, которое раскрывается/сворачивается при клике

let menu = document.getElementsByClassName('menu-list')[0];
let menuText = document.getElementsByClassName('menu-text')[0];
menuText.addEventListener('click',function () {
    menu.classList.toggle('hidden');
})


// - Создать список комментариев , пример объекта коментария -
// {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
//     Вывести список комментариев в документ, каждый в своем блоке.
//     Добавьте каждому комментарию по кнопке для сворачивания его body.


let comments = [
    {name: 'Максим', body: 'Вчи English'},
    {name: 'Іван', body: 'Досить сидіти, вже пізно'},
    {name: 'Льоня', body: 'Зупка, стине, ходи додому'},
    {name: 'Іра', body: 'Воно, тобі треба?'},
];

let divFath = document.createElement("div");
for (const item of comments) {
    let div = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.innerText = item.name;
    let p = document.createElement("p");
    p.innerText = item.body;
    let button = document.createElement('button');
    button.innerText = 'save'


    button.onclick = function (){
        p.style.display = 'none';
    }

    div.append(h3, p, button);
    divFath.appendChild(div);
}
document.body.append(divFath);





