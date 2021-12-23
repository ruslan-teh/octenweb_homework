// -створити форму з інпутами для name та age.
//     При відправці форми записати об'єкт в localstorage

let name = document.getElementById('name');
let age = document.getElementById('age');
let button = document.getElementById('button');
button.onclick = () => {
    let obj = {name: name, age: age};
    localStorage.setItem('key', obj);
}







// -створити форму з інпутами для model,type та volume автівки.
//     при відпарвці форми об'єкти зберігаються в масиві в локальному сховищі.


// let model = document.forms.form2.model;
// let type = document.forms.form2.type;
// let volume = document.forms.form2.volume;
// let button = document.forms.form2.button2;
// let key = 'key';
//
// let arrObj = (objModel, objType, objVolume) => {
//     let arr = JSON.parse(localStorage.getItem(key)) || [];
//
//     arr.push({objModel, objType, objVolume});
//     localStorage.setItem(id, JSON.stringify(arr));
// };
//
// button.onclick = () => {
//     arrObj(model.value, type.value, volume.value);
// }
//






















