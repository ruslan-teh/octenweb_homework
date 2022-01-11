// - Імітуємо наповнення інтернет магазину товарами :
//     Створити форму з наступними полями :
//     - назва товару
// - кількість товару
// - ціна товару
// - картинка товару (посилання з інтернету)
// Зберігати товари в масив в локалсорадж. При збережені товару з форми, action не повинно відбуватись
// (preventDefault)
// створити елемент <a href='list.html'> На сторінку товарів</a>, та list.html, при переході на який
// відобразити на сторінці всі товари.
// На сторінці  list.html побудувати кнопку яка видаляє всі товари з корзини та локалстораджа.
// До кожного товару додати кнопку, при кліку на яку з лс видаляється конкретний обраний  товар

let name = document.getElementById('name');
let amount = document.getElementById('amount');
let price = document.getElementById('price');
let img = document.getElementById('img');
let object={};
let arr = [];
function generateObject(name,amount,price,img){
    return {name:name,amount:amount,price:price,img:img}
}
let btn = document.getElementById('btn');
btn.addEventListener('click', ev => {
    ev.preventDefault();
    arr.push(new  generateObject(name.value, amount.value, price.value, img.value));
    localStorage.setItem('item', JSON.stringify(arr));
})



























