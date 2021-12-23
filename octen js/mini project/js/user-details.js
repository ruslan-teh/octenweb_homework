// На странице user-details.html:
// 4 Вывести всю, без исключения, информацию про объект user на кнопку/ссылку которого был совершен клик ранее.
// 5 Добавить кнопку "post of current user", при клике на которую, появляются title всех постов текущего юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
// 6 Каждому посту добавить кнопку/ссылку, при клике на которую происходит переход на страницу post-details.html,
// которая имеет детальную информацию про текущий пост.

let urlObj = new URL(location.href);
let data = urlObj.searchParams.get('data');
let oneUser = JSON.parse(data);

// //////////////////////////////////////////////////////////////

let wrap = document.getElementsByClassName('wrap')[0];

let userInfo = document.createElement('div');
userInfo.classList.add('userInfo');

let pId = document.createElement('p');
pId.innerText = `User - ${oneUser.id}`;

let h2Name = document.createElement('h2');
h2Name.innerText = `${oneUser.name}`;

let pEmail = document.createElement('p');
pEmail.innerText = `${oneUser.email}`;

let phone = document.createElement('p');
phone.innerText = `Phone - ${oneUser.phone}`;


let website = document.createElement('p')
website.innerText = `Website - ${oneUser.website}`;


userInfo.append(pId, h2Name, pEmail, phone, website);


//   //////////////////////////////////////////////////////
let address = document.createElement('div');
address.classList.add('address');

let pAddress = document.createElement('h3');
pAddress.innerText = 'ADDRESS';

let adrStreet = document.createElement('p')
adrStreet.innerText = `Street - ${oneUser.address.street}`;

let adrSuit = document.createElement('p')
adrSuit.innerText = `Suit - ${oneUser.address.suite}`;

let adrCity = document.createElement('p')
adrCity.innerText = `City - ${oneUser.address.city}`;

let adrZip = document.createElement('p')
adrZip.innerText = `Zipcode - ${oneUser.address.zipcode}`;

address.append(pAddress, adrStreet, adrSuit, adrCity, adrZip)


// ////////////////////////////////////////////////////////
let geoList = document.createElement('div');
geoList.classList.add('geoList');

let geo = document.createElement('h3');
geo.innerText = 'GEO'

let lat = document.createElement('p');
lat.innerText = `lat - ${oneUser.address.geo.lat}`;


let lng = document.createElement('p');
lng.innerText = `lng - ${oneUser.address.geo.lng}`;


geoList.append(geo, lat, lng);
// ///////////////////////////////////////////////////////



// /////////////////////////////////////////////////////////
let companyList = document.createElement('div');
companyList.classList.add('companyList');

let company = document.createElement('h3')
company.innerText = 'Company';

let name = document.createElement('p')
name.innerText = `Name - ${oneUser.company.name}`;

let catchPhrase = document.createElement('p')
catchPhrase.innerText = `Catch Phrase - ${oneUser.company.catchPhrase}`;

let bs = document.createElement('p')
bs.innerText = `BS - ${oneUser.company.bs}`;


companyList.append(company, name, catchPhrase, bs)
// ///////////////////////////////////////////////////

let btn = document.createElement('button');
btn.classList.add('postBtn');
btn.innerText = 'post of current user';

btn.onclick = function (){
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(post => post.json())
        .then(item => {
            let titleDiv = document.createElement('div');
            titleDiv.classList.add('titleDiv');
            for (const element of item) {
                if (oneUser.id === element.userId){
                    let cardDiv = document.createElement('div');
                    cardDiv.classList.add('cardDiv')

                    let title = document.createElement('h3');
                    title.classList.add('title');
                    title.innerText = `${element.title}`

                    let titleBtn = document.createElement('a');
                    titleBtn.innerText = 'details';
                    titleBtn.href = 'post-details.html?data=' + JSON.stringify(element);


                    cardDiv.append(title, titleBtn);
                    titleDiv.append(cardDiv);
                }

            }


            btn.disabled = true;
            wrap.append(titleDiv);

        })

}


wrap.append(userInfo, address, geoList, companyList, btn);

















