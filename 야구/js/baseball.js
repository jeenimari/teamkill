showArticleList();

function showArticleList() {
    let articleList = getArticleList();
    let tbody = document.querySelector('table > tbody');
    let html = '';

    for(let i = 0; i < articleList.length; i++) {
        let article = articleList[i];
        html += `<tr>
                    <td>${article.date}</td>
                    <td>
                        <a href="baseballview.html?articleId=${article.articleId}">
                            ${article.title}
                        </a>
                    </td>
                    <td>${article.views}</td>
                </tr>`;
    }
    tbody.innerHTML = html;
}