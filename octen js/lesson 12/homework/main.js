// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ об'єкти. Застилізувати, за допомоги css, щоб отримати 5 елементів в рядку.
// Для кожного елементу свій блок div.post
// Всі характеристики повинні мати свої блоки всередені div.post
// https://jsonplaceholder.typicode.com/posts

// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(item => item.json())
//     .then(item => {
//         item.forEach(item => {
//             let wrap = document.getElementsByClassName('wrap')[0];
//             let post = document.createElement("div");
//             post.classList.add('post');
//             let userId = document.createElement("div");
//             userId.classList.add('user-id');
//             let id = document.createElement("div");
//             id.classList.add('id');
//             let title = document.createElement("div");
//             title.classList.add('title');
//
//
//             userId.innerText = `user id - ${item.userId}`
//             id.innerText = `id - ${item.id}`
//             title.innerText = `title - ${item.title}`
//
//
//             post.append(userId, id, title);
//             wrap.append(post);
//
//         })
//     })




//     2.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті.
//     Для кожного елементу свій блок div.comment
// Всі характеристики повинні мати свої блоки всередені div.comment
// https://jsonplaceholder.typicode.com/comments


fetch('https://jsonplaceholder.typicode.com/comments')
    .then(item => item.json())
    .then(item => {
        item.forEach(item => {
            let wrap = document.getElementsByClassName('wrap')[0];
            let comment = document.createElement("div");
            comment.classList.add('comment');
            let id = document.createElement("p");
            id.classList.add('id');
            let name = document.createElement("h2");
            name.classList.add('name');
            let email = document.createElement("p");
            email.classList.add('email');
            let body = document.createElement("p");
            body.classList.add('bodyElement');

            id.innerText = `${item.id}`
            name.innerText = `${item.name}`
            email.innerText = `${item.email}`
            body.innerText = `${item.body}`


            comment.append(id, name, email, body);
            wrap.append(comment);

        })
    })

