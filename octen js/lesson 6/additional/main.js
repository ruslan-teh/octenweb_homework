// - Створити функцію-валідатор для адрес електронної пошти. Перевірка
// повинна включати в себе :данні до знака равлика(@), наявність равлика,
// крапку яка знаходиться не меньше ніж на 2 символ далі після равлика,
// функція не чутлива до регістру
// (some@email.com,SOME@EMAIL.COM,some@EMAIL.com, і тд - однакові значення)
// Протестувати на значеннях
// someemail@gmail.com
// someeMAIL@gmail.com
// someeMAIL@i.ua
// some.email@gmail.com

function validator (string){
    let str = string.toLowerCase();
    let newStr = str.split('@');
    let newStr2 = newStr[1].split('.')
    let result = newStr2[0].length >= 2 ? 'valid' : 'invalid';
    return result
}

console.log(validator('someeMAIL@i.ua'));


// Примітка
// Для тих, хто дуже розумний, та почне використовувати регулярні вирази
// одразу "ні". Своїм мозком подумайте над протоколом, з регулярками будете
// потім бавитись.





// - є масив
let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react',
        'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react',
        'angular', 'aws', 'docker', 'git', 'sass']
    }
];

//
// відсортувати його в спадаючому порядку за кількістю елементів в полі
// modules

let sort = coursesArray.sort((one, two) => two.modules.length - one.modules.length);
console.log(sort);



// - Напишіть функцію count(str, stringsearch), яка повертає кількість
// символів stringsearch у рядку str.
let symb = "о";
let str1 = "Астрономия это наука о небесных объектах";

function count (str, stringsearch){
    let newStr = str.split('');
    let newArr = [];
    for (let item of newStr) {
        if (item === stringsearch.toLowerCase()){
            newArr.push(item);
        }
    }
    console.log(newArr.length);
}
count(str1, symb) // 5



// - Напишіть функцію cutString(str, n), яка видаляє зайві слова з рядка str,
// залишивши у ній n слів.
let str = "Сила тяжести приложена к центру масс тела";
function cutString(str, n) {
    return str.split(' ').splice(0, n).join(' ');
}

console.log((cutString(str, 5))); // 'Сила тяжести приложена к центру'
