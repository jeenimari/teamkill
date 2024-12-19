displayPosts();

function displayPosts() {
    let postList = getPostList();
    let tbody = document.querySelector('table > tbody');
    let html = '';

    for(let index = 0; index < postList.length; index++) {
        let post = postList[index];
        html += `<tr>
                    <td>${post.date}</td>
                    <td>
                        <a href="basketballview.html?postId=${post.postId}">
                            ${post.content}
                        </a>
                    </td>
                    <td>${post.view}</td>
                </tr>`;
    }
    tbody.innerHTML = html;
}