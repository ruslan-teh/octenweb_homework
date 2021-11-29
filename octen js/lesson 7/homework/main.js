// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)


// function User (id, name, surname , email, phone) {
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
//
// }
// let users = [
//     new User(1, 'vasya', 'pupkin', 'pupkin@email.com', 362729190193),
//     new User(2, 'katya', 'mupkin', 'mupkin@email.com', 362729190193),
//     new User(3, 'olya', 'pinapple', 'pinapple@email.com', 362729190193),
//     new User(4, 'ruslan', 'barbos', 'barbos@email.com', 362729190193),
//     new User(5, 'banan', 'kokos', 'kokos@email.com', 362729190193),
//     new User(6, 'zebra', 'jull', 'jull@email.com', 362729190193),
//     new User(7, 'yoda', 'pull', 'pull@email.com', 362729190193),
//     new User(8, 'skay', 'abra', 'abra@email.com', 362729190193),
//     new User(9, 'leleka', 'cadabra', 'cadabra@email.com', 362729190193),
//     new User(10, 'gus', 'avada', 'avada@email.com', 362729190193),
//
// ]
// console.log(users);


// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

// let filter = users.filter(value => value.id%2 === 0);
// console.log(filter);


// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

// let sort = users.sort(({id : a}, {id : b}) => a - b);
// console.log(sort);


// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client

// class Client {
//     constructor(id, name, surname, email, phone, order) {
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.phone = phone;
//         this.order = order;
//     }
//
// }
//
// let clients = [
//     new Client(1, 'vasya', 'pupkin', 'pupkin@email.com', 362729190193, ['banan', 'ananas','kokos']),
//     new Client(2, 'katya', 'mupkin', 'mupkin@email.com', 362729190193, ['banan', 'ananas','kokos', 'abrikos']),
//     new Client(3, 'olya', 'pinapple', 'pinapple@email.com', 362729190193, ['banan', 'cookie']),
//     new Client(4, 'ruslan', 'barbos', 'barbos@email.com', 362729190193, ['banan']),
//     new Client(5, 'banan', 'kokos', 'kokos@email.com', 362729190193, ['banan', 'ananas','kokos', 'ananas','kokos']),
//     new Client(6, 'zebra', 'jull', 'jull@email.com', 362729190193, ['banan', 'ananas','kokos']),
//     new Client(7, 'yoda', 'pull', 'pull@email.com', 362729190193, ['banan', 'ananas','kokos', 'ananas','kokos', 'banan']),
//     new Client(8, 'skay', 'abra', 'abra@email.com', 362729190193, ['banan', 'ananas','kokos']),
//     new Client(9, 'leleka', 'cadabra', 'cadabra@email.com', 362729190193, ['banan', 'ananas','kokos', 'ananas']),
//     new Client(10, 'gus', 'avada', 'avada@email.com', 362729190193, ['banan', 'ananas','kokos']),
// ];
// // console.log(clients);
//
//
// // - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
//
//
// let sortClients = clients.sort(({order : a}, {order : b}) => a.length - b.length);
// console.log(sortClients);
//
