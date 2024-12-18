// script.js

// Example: Dynamically load more posts (simplified)
document.addEventListener('DOMContentLoaded', () => {
    const loadMoreButton = document.createElement('button');
    loadMoreButton.textContent = "Load More Posts";
    document.querySelector("#forums").appendChild(loadMoreButton);

    loadMoreButton.addEventListener('click', () => {
        const newPost = document.createElement('li');
        newPost.innerHTML = `<a href="#">New Post Title</a>`;
        document.querySelector('.forum-category ul').appendChild(newPost);
    });
});
