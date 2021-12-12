// -створити форму з інпутами для name та age.
//     При відправці форми записати об'єкт в localstorage


let name = document.forms.form1.name;
let age = document.forms.form1.age;
let btn = document.forms.form1.button;
let id = 'id';


let obj = (userName, userAge) => {
    let user = {
        name : userName,
        age : userAge
    };
    localStorage.setItem(id, JSON.stringify(user));
}

btn.onclick = () => {
    obj(name.value, age.value)
}
// -створити форму з інпутами для model,type та volume автівки.
//     при відпарвці форми об'єкти зберігаються в масиві в локальному сховищі.


let model = document.forms.form2.model;
let type = document.forms.form2.type;
let volume = document.forms.form2.volume;
let button = document.forms.form2.button2;
let key = 'key';

let arrObj = (objModel, objType, objVolume) => {
    let arr = JSON.parse(localStorage.getItem(key)) || [];

    arr.push({objModel, objType, objVolume});
    localStorage.setItem(id, JSON.stringify(arr));
};

button.onclick = () => {
    arrObj(model.value, type.value, volume.value);
}























