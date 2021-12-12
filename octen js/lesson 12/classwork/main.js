// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/posts
//     зробити кнопку до кожного поста. при кліку на яку виводяться в окремий блок всі коментарі
//     поточного поста


fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(itemElement => {
        for (let item of itemElement) {
            let wrap = document.getElementsByClassName('wrap')[0];
            let post = document.createElement('div');
            post.classList.add('post');
            post.innerHTML = `
            <h3>${item.id}</h3>
            <h2>${item.title}</h2>
            <p>${item.body}</p>
            `;

            let btn = document.createElement('button');
            btn.classList.add('btnStyle')
            btn.innerText = 'comments';
            btn.onclick = () => {
                    fetch('https://jsonplaceholder.typicode.com/comments')
                        .then((arr) => arr.json())
                        .then((comments) => {
                            for (const comment of comments) {
                                if (item.userId === comment.postId){
                                    let commentsDiv = document.createElement('div');
                                    commentsDiv.classList.add('commentsDiv');
                                    commentsDiv.innerHTML = `
                                    <p>${comment.id}</p>
                                    <h2>${comment.name}</h2>
                                    <h3>${comment.email}</h3>
                                    <p>${comment.body}</p>
                                    `;
                                    post.append(commentsDiv);
                                }
                            }
                        });
                    btn.disabled = true;
            }

            post.append(btn);
            wrap.append(post);

        }





    });