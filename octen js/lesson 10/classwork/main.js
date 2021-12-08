// - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку
// при кліку на яку считується та виводиться на консоль інформація
// з цих 2х форм.
// Кнопка повинна лежати за межами форм
// (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API.
// Отже дайте формі та інпутам всі необхідні атрибути.

let btn = document.getElementById('all-btn');
btn.onclick = function (){
    let form11 = document.forms.form1.f11.value;
    let form12 = document.forms.form1.f12.value;
    let form21 = document.forms.form2.f21.value;
    let form22 = document.forms.form2.f22.value;
    console.log(form11, form12, form21, form22);

}

// - Створити 3 инпута та кнопку. Один визначає кількість рядків,
// другий - кількість ячеєк, третій вмиіст ячеєк.
// При натисканні кнопки, вся ця інформація зчитується і формується
// табличка, з відповідним вмістом.



let forms = document.forms['form3'];
forms.onsubmit = function (e) {
    e.preventDefault();
    let rows = +forms.f1.value;
    let columns = +forms.f2.value;
    let content = forms.f3.value;

    let table = document.createElement("table");

    for (let i = 0; i < rows; i++) {
        let tr = document.createElement("tr");
        for (let j = 0; j < columns; j++) {
            let td = document.createElement("td");
            tr.append(td);
            td.innerText = content;
        }
        table.append(tr);
    }
    document.body.append(table);
}


// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
//     Перевірку робити при натисканні на кнопку

// let arr = ['zelenskiy', 'poroshenko', 'avakov', 'chort'];
//
// let butn = document.getElementById('checker');
// butn.addEventListener('click', function () {
//     let word = document.getElementById('word').value;
//     for (let item of arr) {
//         if (item === word){
//             alert('lol');
//         }else {
//             console.log(word);
//         }
//     }
// });


// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Потрібно перевіряти чи не містить ціле речення в собі погані слова.
//     Кинути алерт з попередженням у випадку якщо містить.
//     Перевірку робити при натисканні на кнопку

let arr = ['zelenskiy', 'poroshenko', 'avakov', 'chort'];

let butn = document.getElementById('checker');
butn.addEventListener('click', function () {
    let word = document.getElementById('word').value;
    for (let item of arr) {
        if (word.includes(item)){
            alert('lol');
        }else {
            console.log(word);
        }
    }
});
