// На странице post-details.html:
// // 7 Вывести всю, без исключения, информацию про объект post на кнопку/ссылку которого был совершен клик ранее.
// // 8 Ниже информации про пост, вывести все комментарии текущего поста
// // (эндпоинт для получения информации - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)



let urlObjPost = new URL(location.href);
let dataPost = urlObjPost.searchParams.get('data');
let oneUserPost = JSON.parse(dataPost);

// ///////////////////////////////////////////



let wrap = document.getElementsByClassName('wrap')[0];

let postTitle = document.createElement('div');
postTitle.classList.add('postTitle')

let pUserId = document.createElement('p');
pUserId.innerText = `User - ${oneUserPost.userId}`;

let id = document.createElement('h2');
id.innerText = `Post - ${oneUserPost.id}`;

let title = document.createElement('p');
title.innerText = `${oneUserPost.title}`;
let pBody = document.createElement('h3');
pBody.innerText = `${oneUserPost.body}`;


postTitle.append(pUserId, id, title, pBody)

//   //////////////////////////////////////////////////////

fetch('https://jsonplaceholder.typicode.com/comments')
    .then(comment => comment.json())
    .then(item => {
        let postElement = document.createElement('div');
        postElement.classList.add('postElement');

        for (const element of item) {
            if (oneUserPost.userId === element.postId){
                let postItem = document.createElement('div');
                postItem.classList.add('postItem');

                let postId = document.createElement('p');
                postId.innerText = `User - ${element.postId}`;


                let idPost = document.createElement('h3');
                idPost.innerText = `Comment - ${element.id}`;


                let postName = document.createElement('h2');
                postName.innerText = `${element.name}`;


                let postEmail = document.createElement('p');
                postEmail.innerText = `${element.email}`;


                let postBody = document.createElement('p');
                postBody.innerText = `${element.body}`;



                postItem.append(postId, idPost, postName, postEmail, postBody);
                postElement.append(postItem);
            }
        }

        wrap.append(postElement);

    })


wrap.append(postTitle);













