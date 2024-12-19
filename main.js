// script.js


document.addEventListener('DOMContentLoaded', () => {
    const loadMoreButton = document.createElement('button');
    loadMoreButton.textContent = "실시간 새로운 글 불러오기";
    document.querySelector("#forums").appendChild(loadMoreButton); // 버튼 누르면 불러오면서 화면에 증가

    loadMoreButton.addEventListener('click', () => {
        const newPost = document.createElement('li');
        newPost.innerHTML = `<a href="#">새로운 글</a>`;
        document.querySelector('.forum-category ul').appendChild(newPost);
    });
});
