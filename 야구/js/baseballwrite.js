function createArticle() {
    let title = document.querySelector('.article-title').value;     
    let content = document.querySelector('.article-content').value;   
    let password = document.querySelector('.article-password').value;  

    let nowDate = new Date();
    let formattedDate = `${nowDate.getFullYear()}-${nowDate.getMonth() + 1}-${nowDate.getDate()}`;
    
    let articleList = getArticleList();
    let articleId = articleList.length > 0 ? 
        articleList[articleList.length - 1].articleId + 1 : 1;
    
    let article = {
        articleId: articleId,
        title: title,
        content: content,
        password: password,
        date: formattedDate,
        views: 0
    };

    articleList.push(article);
    setArticleList(articleList);
    
    alert('게시물이 등록되었습니다.');      
    location.href = "baseball.html";
}