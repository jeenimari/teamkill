// 게시물 상세 표시
showArticleDetail();

function showArticleDetail() { 
    let articleId = new URL(location.href).searchParams.get('articleId');
    let article = getArticleById(articleId);

    if (!article) {
        alert("게시물을 찾을 수 없습니다.");
        location.href = "baseball.html";
        return;
    }

    article.views = parseInt(article.views) + 1;
    updateArticleData(articleId, article.password, {views: article.views});

    document.querySelector('.article-heading').innerHTML = article.title;
    document.querySelector('.article-text').innerHTML = article.content;
    document.querySelector('.article-date').innerHTML = article.date;
    document.querySelector('.article-views').innerHTML = article.views;
    document.querySelector('.article-actions').innerHTML = `
        <button onclick="removeArticle(${article.articleId})" type="button">삭제</button> 
        <button onclick="modifyArticle(${article.articleId})" type="button">수정</button>`;
} 

function removeArticle(articleId) {
    let inputPassword = prompt("게시물 비밀번호를 입력하세요:");
    const result = deleteArticle(articleId, inputPassword);
    
    if (result.success) {
        alert(result.message);
        location.href = "baseball.html";
    } else {
        alert(result.message);
    }
}

function modifyArticle(articleId) {
    let inputPassword = prompt("게시물 비밀번호를 입력하세요:");
    let article = getArticleById(articleId);

    if (article.password !== inputPassword) {
        alert("비밀번호가 일치하지 않습니다.");
        return;
    }

    let newTitle = prompt("새 제목을 입력하세요:", article.title);
    let newContent = prompt("새 내용을 입력하세요:", article.content);

    let updatedData = {
        title: newTitle,
        content: newContent
    };

    const result = updateArticleData(articleId, inputPassword, updatedData);
    if (result.success) {
        alert(result.message);
        location.reload();
    } else {
        alert(result.message);
    }
}