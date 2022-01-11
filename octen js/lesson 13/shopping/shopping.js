let itemArr = localStorage.getItem('item');
let itemParse = JSON.parse(itemArr);
for (const element of itemParse) {
    let card = document.createElement("div");
    card.className = 'card';

    let cardName = document.createElement("h2");
    cardName.innerText = `${element.name}`;

    let cardAmount = document.createElement("p");
    cardAmount.innerText = `${element.amount}`;


    let cardPrice = document.createElement("p");
    cardPrice.innerText = `${element.price}`;

    let cardImg = document.createElement("img");
    cardImg.src = `${element.img}`;


    let cardBtn = document.createElement("button");
    cardBtn.innerText = 'clear';
    cardBtn.onclick = function (){

    }



    card.append(cardName, cardAmount, cardPrice, cardImg, cardBtn);
    document.body.appendChild(card);
}